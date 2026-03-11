import React from "react";
import { Controller, Control } from "react-hook-form";
import { AppInput } from "../ui/AppInput";
import { SectionCard, SectionHeader } from "../ui/SectionCard";
import { ResumeFormData } from "../../types/resume";

interface Props {
  control: Control<ResumeFormData>;
  errors: Partial<Record<keyof ResumeFormData, { message?: string }>>;
}

export const HeaderSection: React.FC<Props> = ({ control, errors }) => {
  return (
    <SectionCard>
      <SectionHeader title="Header Details" subtitle="Main contact info" />
      <Controller
        control={control}
        name="name"
        rules={{ required: "Name is required" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <AppInput
            label="Name"
            placeholder="John Doe"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            error={errors.name?.message}
            autoCapitalize="words"
          />
        )}
      />
      <Controller
        control={control}
        name="address"
        rules={{ required: "Address is required" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <AppInput
            label="Address"
            placeholder="123 Main St, City"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            error={errors.address?.message}
            autoCapitalize="words"
          />
        )}
      />
      <Controller
        control={control}
        name="mobileNo"
        rules={{ required: "Mobile No is required" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <AppInput
            label="Mobile No."
            placeholder="+1 234 567 8900"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            error={errors.mobileNo?.message}
            keyboardType="phone-pad"
          />
        )}
      />
      <Controller
        control={control}
        name="email"
        rules={{ 
          required: "Email is required",
          pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" }
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <AppInput
            label="Email"
            placeholder="john@example.com"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            error={errors.email?.message}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        )}
      />
      <Controller
        control={control}
        name="applyFor"
        rules={{ required: "Job title expected" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <AppInput
            label="Apply for"
            placeholder="Software Engineer"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            error={errors.applyFor?.message}
            autoCapitalize="words"
            containerStyle={{ marginBottom: 0 }}
          />
        )}
      />
    </SectionCard>
  );
};
