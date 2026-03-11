import React from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";
import { Colors, FontFamily, FontSize, Radius, Spacing } from "../../constants/theme";

interface SectionCardProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export const SectionCard: React.FC<SectionCardProps> = ({ children, style }) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.accentBar} />
      <View style={styles.headerText}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    borderRadius: Radius.lg,
    padding: Spacing.lg,
    marginBottom: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Spacing.lg,
    paddingBottom: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  accentBar: {
    width: 4,
    height: 22,
    backgroundColor: Colors.accent,
    borderRadius: 2,
    marginRight: Spacing.sm,
  },
  headerText: {
    flex: 1,
  },
  title: {
    fontFamily: FontFamily.bold,
    fontSize: FontSize.lg,
    color: Colors.textPrimary,
    letterSpacing: 0.2,
  },
  subtitle: {
    fontFamily: FontFamily.regular,
    fontSize: FontSize.sm,
    color: Colors.textMuted,
    marginTop: 2,
  },
});
