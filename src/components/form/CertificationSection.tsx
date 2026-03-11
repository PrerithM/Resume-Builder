import React from "react";
import { Controller, Control } from "react-hook-form";
import { AppInput } from "../ui/AppInput";
import { SectionCard, SectionHeader } from "../ui/SectionCard";
import { ResumeFormData } from "../../types/resume";
import { Text, StyleSheet } from "react-native";
import { Colors, FontFamily, FontSize, Spacing } from "../../constants/theme";

interface Props {
  control: Control<ResumeFormData>;
  errors: Partial<Record<keyof ResumeFormData, { message?: string }>>;
}

export const CertificationSection: React.FC<Props> = ({ control, errors }) => {
  return (
    <SectionCard>
      <SectionHeader title="Applicant Certification" subtitle="Sign off" />
      <Text style={styles.declaration}>
        I hereby certify that the above information is true and correct to the best of my knowledge and belief. I also understand that any misinterpretation will be considered sufficient reason for withdrawal of an offer or subsequent dismissal if employed.
      </Text>
      
      <Controller
        control={control}
        name="certificationDate"
        render={({ field: { onChange, onBlur, value } }) => (
          <AppInput
            label="Date"
            placeholder="DD/MM/YYYY"
            value={value}
            onChangeText={(text) => {
              let val = text.replace(/\D/g, "");
              if (val.length > 2 && val.length <= 4) {
                val = `${val.slice(0, 2)}/${val.slice(2)}`;
              } else if (val.length > 4) {
                val = `${val.slice(0, 2)}/${val.slice(2, 4)}/${val.slice(4, 8)}`;
              }
              onChange(val);
            }}
            onBlur={onBlur}
            keyboardType="number-pad"
            maxLength={10}
            containerStyle={{ marginBottom: 0 }}
          />
        )}
      />
    </SectionCard>
  );
};

const styles = StyleSheet.create({
  declaration: {
    fontFamily: FontFamily.regular,
    fontSize: FontSize.sm,
    color: Colors.textMuted,
    lineHeight: 20,
    marginBottom: Spacing.lg,
  },
});
