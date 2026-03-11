import "./global.css";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useAppFonts } from "./src/hooks/useAppFonts";
import { AppNavigator } from "./src/navigation/AppNavigator";

export default function App() {
  const fontsLoaded = useAppFonts();

  if (!fontsLoaded) {
    return null; // SplashScreen stays visible while fonts load
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="#000000" />
      <AppNavigator />
    </>
  );
}
