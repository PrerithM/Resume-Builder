import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  Platform,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Colors, FontFamily, FontSize, Spacing } from "../../constants/theme";

interface PhotoPickerProps {
  uri: string | null;
  onPick: (uri: string) => void;
}

export const PhotoPicker: React.FC<PhotoPickerProps> = ({ uri, onPick }) => {
  const handlePick = async () => {
    if (Platform.OS !== "web") {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Gallery permission is required to select a profile photo.");
        return;
      }
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
      base64: true,
    });
    if (!result.canceled && result.assets?.length > 0) {
      const asset = result.assets[0];
      const mimeType = asset.mimeType || "image/jpeg";
      if (asset.base64) {
        onPick(`data:${mimeType};base64,${asset.base64}`);
      } else {
        onPick(asset.uri);
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handlePick}
        activeOpacity={0.8}
        style={styles.avatarWrapper}
      >
        {uri ? (
          <Image source={{ uri }} style={styles.avatar} />
        ) : (
          <View style={styles.placeholder}>
            <Text style={styles.icon}>📷</Text>
            <Text style={styles.placeholderText}>Add Photo</Text>
          </View>
        )}
        <View style={styles.editBadge}>
          <Text style={styles.editIcon}>✎</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.hint}>Tap to select profile photo</Text>
    </View>
  );
};

const AVATAR_SIZE = 120;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: Spacing["2xl"],
  },
  avatarWrapper: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    position: "relative",
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    borderWidth: 3,
    borderColor: Colors.accent,
  },
  placeholder: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    backgroundColor: Colors.card,
    borderWidth: 2,
    borderColor: Colors.border,
    borderStyle: "dashed",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  icon: {
    fontSize: 28,
  },
  placeholderText: {
    fontFamily: FontFamily.regular,
    fontSize: FontSize.xs,
    color: Colors.textMuted,
  },
  editBadge: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.accent,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: Colors.background,
  },
  editIcon: {
    color: Colors.white,
    fontSize: 13,
  },
  hint: {
    marginTop: Spacing.sm,
    fontFamily: FontFamily.regular,
    fontSize: FontSize.xs,
    color: Colors.textMuted,
  },
});
