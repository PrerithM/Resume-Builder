import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Alert,
  Platform,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/AppNavigator";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useForm } from "react-hook-form";
import { ResumeFormData } from "../types/resume";
import { Colors, FontFamily, FontSize, Spacing } from "../constants/theme";
import { PhotoPicker } from "../components/form/PhotoPicker";
import { HeaderSection } from "../components/form/HeaderSection";
import { PersonalDataSection } from "../components/form/PersonalDataSection";
import { StaticEducationSection } from "../components/form/StaticEducationSection";
import { ExperienceSection } from "../components/form/ExperienceSection";
import { CertificationSection } from "../components/form/CertificationSection";
import { AppButton } from "../components/ui/AppButton";

const DEFAULT_VALUES: ResumeFormData = {
  photoUri: "",
  name: "",
  address: "",
  mobileNo: "",
  email: "",
  applyFor: "",
  nationality: "",
  gender: "",
  maritalStatus: "",
  dob: "",
  elementary: "",
  elementaryYear: "",
  highSchool: "",
  highSchoolYear: "",
  college: "",
  course: "",
  specialSkills: "",
  experience: "",
  certificationDate: "",
};

export const BuilderScreen: React.FC = () => {
  const [photoUri, setPhotoUri] = useState<string>("");
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ResumeFormData>({
    defaultValues: DEFAULT_VALUES,
    mode: "onBlur",
  });

  const onGenerate = (data: ResumeFormData) => {
    navigation.navigate("Preview", { data: { ...data, photoUri } });
  };

  return (
    <View style={[styles.safeArea, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      {/* ── Sticky Header ── */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile Builder</Text>
        <Text style={styles.headerSubtitle}>Create your CV offline</Text>
      </View>

      {/* ── Scrollable Form ── */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <PhotoPicker uri={photoUri} onPick={setPhotoUri} />

        <HeaderSection control={control} errors={errors} />
        <PersonalDataSection control={control} errors={errors} />
        <StaticEducationSection control={control} errors={errors} />
        <ExperienceSection control={control} errors={errors as any} />
        <CertificationSection control={control} errors={errors} />

        {/* Bottom spacer for footer */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* ── Sticky Footer ── */}
      <View style={styles.footer}>
        <AppButton
          label="Preview & Share"
          onPress={handleSubmit(onGenerate)}
          style={styles.generateButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.lg,
    paddingBottom: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    backgroundColor: Colors.background,
  },
  headerTitle: {
    fontFamily: FontFamily.bold,
    fontSize: FontSize["2xl"],
    color: Colors.accent,
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    fontFamily: FontFamily.regular,
    fontSize: FontSize.sm,
    color: Colors.textMuted,
    marginTop: 2,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.xl,
    paddingBottom: Spacing.lg,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    paddingBottom: Platform.OS === "ios" ? 28 : Spacing.lg,
    backgroundColor: Colors.surface,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  generateButton: {
    width: "100%",
  },
});
