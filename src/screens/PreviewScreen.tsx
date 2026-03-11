import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Alert,
  ScrollView,
  Dimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as Sharing from "expo-sharing";
import { RootStackParamList } from "../navigation/AppNavigator";
import { Colors, Spacing } from "../constants/theme";
import { AppButton } from "../components/ui/AppButton";
import { generateResumeHTML, exportPDF } from "../services/pdfService";
import { ResumeFormData } from "../types/resume";

type Props = NativeStackScreenProps<RootStackParamList, "Preview">;

// A4 dimensions in CSS pixels at 96dpi
const A4_W = 794;
const A4_H = 1123;

export const PreviewScreen: React.FC<Props> = ({ route, navigation }) => {
  const { data } = route.params;
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [sharing, setSharing] = useState(false);

  // Scale the A4 sheet to fit the device screen width with some margin
  const screenWidth = Dimensions.get("window").width;
  const margin = 16;
  const insets = useSafeAreaInsets();
  const scale = (screenWidth - margin * 2) / A4_W;
  const scaledHeight = A4_H * scale;

  useEffect(() => {
    const html = generateResumeHTML(data);
    setHtmlContent(html);
  }, [data]);

  const handleShare = async () => {
    setSharing(true);
    try {
      const uri = await exportPDF(data);
      const isAvailable = await Sharing.isAvailableAsync();
      if (!isAvailable) {
        Alert.alert("Sharing not available", "Sharing is not supported on this device.");
        return;
      }
      await Sharing.shareAsync(uri, {
        mimeType: "application/pdf",
        dialogTitle: "Share your Resume",
        UTI: "com.adobe.pdf",
      });
    } catch (e: any) {
      Alert.alert("Share Error", e?.message || "Failed to share PDF.");
    } finally {
      setSharing(false);
    }
  };

  return (
    <View style={[styles.safeArea, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      {/* ── Scrollable paper preview ── */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {htmlContent ? (
          /* Paper shadow frame */
          <View
            style={[
              styles.paperFrame,
              {
                width: A4_W * scale,
                height: scaledHeight,
              },
            ]}
          >
            {/* WebView is always A4 size, then we scale-transform it */}
            <View
              style={{
                width: A4_W,
                height: A4_H,
                transform: [{ scale }],
                transformOrigin: "top left",
              }}
            >
              <WebView
                originWhitelist={["*"]}
                source={{ html: htmlContent }}
                style={{ width: A4_W, height: A4_H }}
                scalesPageToFit={false}
                showsVerticalScrollIndicator={false}
                scrollEnabled={false}
              />
            </View>
          </View>
        ) : (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={Colors.accent} />
          </View>
        )}
      </ScrollView>

      {/* ── Footer buttons ── */}
      <View style={styles.footer}>
        <AppButton
          label="Edit"
          variant="ghost"
          onPress={() => navigation.goBack()}
          style={styles.editButton}
        />
        <AppButton
          label={sharing ? "Exporting..." : "Share PDF"}
          onPress={handleShare}
          loading={sharing}
          disabled={sharing || !htmlContent}
          style={styles.shareButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#dde3ea", // dark gray paper background
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    alignItems: "center",
    paddingBottom: 24,
  },
  paperFrame: {
    backgroundColor: "#fff",
    borderRadius: 4,
    overflow: "hidden",
    // Paper drop-shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 8,
  },
  loadingContainer: {
    flex: 1,
    minHeight: 400,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flexDirection: "row",
    gap: Spacing.md,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.lg,
    backgroundColor: Colors.surface,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  editButton: {
    flex: 1,
  },
  shareButton: {
    flex: 2,
  },
});
