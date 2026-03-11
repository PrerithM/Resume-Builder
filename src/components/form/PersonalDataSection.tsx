import React from "react";
import { Controller, Control } from "react-hook-form";
import { AppInput } from "../ui/AppInput";
import { SectionCard, SectionHeader } from "../ui/SectionCard";
import { ResumeFormData } from "../../types/resume";
import { View } from "react-native";

interface Props {
  control: Control<ResumeFormData>;
  errors: Partial<Record<keyof ResumeFormData, { message?: string }>>;
}

export const PersonalDataSection: React.FC<Props> = ({ control, errors }) => {
  return (
    <SectionCard>
      <SectionHeader title="Personal Data" subtitle="Demographics" />
      <View style={{ flexDirection: "row", gap: 12 }}>
        <View style={{ flex: 1 }}>
          <Controller
            control={control}
            name="nationality"
            render={({ field: { onChange, onBlur, value } }) => (
              <AppInput
                label="Nationality"
                placeholder="American"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            )}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Controller
            control={control}
            name="gender"
            render={({ field: { onChange, onBlur, value } }) => (
              <AppInput
                label="Gender"
                placeholder="Male/Female"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            )}
          />
        </View>
      </View>
      <Controller
        control={control}
        name="maritalStatus"
        render={({ field: { onChange, onBlur, value } }) => (
          <AppInput
            label="Marital Status"
            placeholder="Single/Married"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      <Controller
        control={control}
        name="dob"
        render={({ field: { onChange, onBlur, value } }) => (
          <AppInput
            label="Date of Birth"
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
