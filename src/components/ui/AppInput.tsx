import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
  ViewStyle,
} from "react-native";
import { Colors, FontFamily, FontSize, Radius, Spacing } from "../../constants/theme";

interface AppInputProps extends TextInputProps {
  label?: string;
  error?: string;
  containerStyle?: ViewStyle;
}

export const AppInput: React.FC<AppInputProps> = ({
  label,
  error,
  containerStyle,
  ...inputProps
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <View style={[styles.container, containerStyle]}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        {...inputProps}
        style={[
          styles.input,
          focused && styles.inputFocused,
          error ? styles.inputError : null,
          inputProps.style,
        ]}
        placeholderTextColor={Colors.textMuted}
        onFocus={(e) => {
          setFocused(true);
          inputProps.onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          inputProps.onBlur?.(e);
        }}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.md,
  },
  label: {
    fontFamily: FontFamily.regular,
    fontSize: FontSize.sm,
    color: Colors.textMuted,
    marginBottom: Spacing.xs,
    letterSpacing: 0.3,
  },
  input: {
    backgroundColor: Colors.card,
    borderWidth: 1.5,
    borderColor: Colors.border,
    borderRadius: Radius.sm,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm + 2,
    color: Colors.textPrimary,
    fontFamily: FontFamily.regular,
    fontSize: FontSize.md,
    minHeight: 50,
  },
  inputFocused: {
    borderColor: Colors.accentLight,
  },
  inputError: {
    borderColor: Colors.danger,
  },
  error: {
    color: Colors.danger,
    fontSize: FontSize.xs,
    fontFamily: FontFamily.regular,
    marginTop: Spacing.xs,
  },
});
