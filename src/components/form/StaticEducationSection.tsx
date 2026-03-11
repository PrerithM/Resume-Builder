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

export const StaticEducationSection: React.FC<Props> = ({ control, errors }) => {
  return (
    <SectionCard>
      <SectionHeader title="Education" subtitle="Academic background" />
      
      <View style={{ flexDirection: "row", gap: 12 }}>
        <View style={{ flex: 2 }}>
          <Controller
            control={control}
            name="elementary"
            render={({ field: { onChange, onBlur, value } }) => (
              <AppInput
                label="Elementary"
                placeholder="School Name"
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
            name="elementaryYear"
            render={({ field: { onChange, onBlur, value } }) => (
              <AppInput
                label="Year Graduated"
                placeholder="2010"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                keyboardType="number-pad"
                maxLength={4}
              />
            )}
          />
        </View>
      </View>

      <View style={{ flexDirection: "row", gap: 12 }}>
        <View style={{ flex: 2 }}>
          <Controller
            control={control}
            name="highSchool"
            render={({ field: { onChange, onBlur, value } }) => (
              <AppInput
                label="High School"
                placeholder="School Name"
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
            name="highSchoolYear"
            render={({ field: { onChange, onBlur, value } }) => (
              <AppInput
                label="Year Graduated"
                placeholder="2014"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                keyboardType="number-pad"
                maxLength={4}
              />
            )}
          />
        </View>
      </View>

      <Controller
        control={control}
        name="college"
        render={({ field: { onChange, onBlur, value } }) => (
          <AppInput
            label="College"
            placeholder="University Name"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />

      <Controller
        control={control}
        name="course"
        render={({ field: { onChange, onBlur, value } }) => (
          <AppInput
            label="Course"
            placeholder="B.Sc. Computer Science"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />

      <Controller
        control={control}
        name="specialSkills"
        render={({ field: { onChange, onBlur, value } }) => (
          <AppInput
            label="Special Skills"
            placeholder="Programming, Design, etc."
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            containerStyle={{ marginBottom: 0 }}
          />
        )}
      />
    </SectionCard>
  );
};
