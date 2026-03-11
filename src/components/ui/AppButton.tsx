import React from "react";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { Colors, FontFamily, FontSize, Radius, Spacing } from "../../constants/theme";

type Variant = "primary" | "ghost" | "danger";

interface AppButtonProps {
  label: string;
  onPress: () => void;
  variant?: Variant;
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
}

export const AppButton: React.FC<AppButtonProps> = ({
  label,
  onPress,
  variant = "primary",
  loading = false,
  disabled = false,
  style,
}) => {
  const containerStyle: ViewStyle[] = [styles.base];
  const textStyle: TextStyle[] = [styles.label];

  if (variant === "primary") {
    containerStyle.push(styles.primary);
    textStyle.push(styles.primaryText);
  } else if (variant === "ghost") {
    containerStyle.push(styles.ghost);
    textStyle.push(styles.ghostText);
  } else if (variant === "danger") {
    containerStyle.push(styles.danger);
    textStyle.push(styles.dangerText);
  }

  if (disabled || loading) {
    containerStyle.push(styles.disabled);
  }

  if (style) {
    containerStyle.push(style);
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
      style={containerStyle}
    >
      {loading ? (
        <ActivityIndicator color={variant === "primary" ? Colors.white : Colors.accent} />
      ) : (
        <Text style={textStyle}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: Radius.md,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.xl,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 52,
  },
  primary: {
    backgroundColor: Colors.accent,
  },
  ghost: {
    backgroundColor: "transparent",
    borderWidth: 1.5,
    borderColor: Colors.accent,
  },
  danger: {
    backgroundColor: "transparent",
    borderWidth: 1.5,
    borderColor: Colors.danger,
  },
  disabled: {
    opacity: 0.5,
  },
  label: {
    fontFamily: FontFamily.bold,
    fontSize: FontSize.md,
    letterSpacing: 0.3,
  },
  primaryText: {
    color: Colors.white,
  },
  ghostText: {
    color: Colors.accent,
  },
  dangerText: {
    color: Colors.danger,
  },
});
