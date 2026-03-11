import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { Colors, FontFamily, FontSize, Radius, Spacing } from "../../constants/theme";

interface AppTextAreaProps {
  label?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  error?: string;
  containerStyle?: ViewStyle;
  numberOfLines?: number;
}

export const AppTextArea: React.FC<AppTextAreaProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  error,
  containerStyle,
  numberOfLines = 5,
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <View style={[styles.container, containerStyle]}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={Colors.textMuted}
        multiline
        textAlignVertical="top"
        numberOfLines={numberOfLines}
        style={[
          styles.input,
          { minHeight: numberOfLines * 24 },
          focused && styles.inputFocused,
          error ? styles.inputError : null,
        ]}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
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
