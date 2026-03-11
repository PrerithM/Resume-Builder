import React from "react";
import { Controller, Control } from "react-hook-form";
import { AppTextArea } from "../ui/AppTextArea";
import { SectionCard, SectionHeader } from "../ui/SectionCard";
import { ResumeFormData } from "../../types/resume";

interface ExperienceSectionProps {
  control: Control<ResumeFormData>;
  errors: Partial<Record<keyof ResumeFormData, { message?: string }>>;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  control,
  errors,
}) => {
  return (
    <SectionCard>
      <SectionHeader
        title="Work Experience"
        subtitle="Describe your professional history"
      />
      <Controller
        control={control}
        name="experience"
        render={({ field: { onChange, value } }) => (
          <AppTextArea
            label="Experience Details"
            value={value}
            onChangeText={onChange}
            placeholder="e.g. Junior Software Developer at ABC Corp (2022-2024). Worked on building REST APIs using Node.js and React dashboards for client portals."
            numberOfLines={6}
            containerStyle={{ marginBottom: 0 }}
            error={errors.experience?.message}
          />
        )}
      />
    </SectionCard>
  );
};
