import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

// Wrap in try-catch — on Android this can throw if called after the
// splash screen has already been automatically hidden.
try {
  SplashScreen.preventAutoHideAsync();
} catch (_) {}

export function useAppFonts() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadFonts() {
      try {
        await Font.loadAsync({
          "GoogleSans-Regular": require("../../assets/fonts/GoogleSans-Regular.ttf"),
          "GoogleSans-Bold": require("../../assets/fonts/GoogleSans-Bold.ttf"),
        });
      } catch (e) {
        console.warn("Font loading failed, using system fonts:", e);
      } finally {
        if (!cancelled) {
          setFontsLoaded(true);
          try {
            await SplashScreen.hideAsync();
          } catch (_) {}
        }
      }
    }

    // Safety: if font loading takes > 4s for any reason, unblock the app
    const safetyTimer = setTimeout(() => {
      if (!cancelled) {
        setFontsLoaded(true);
        SplashScreen.hideAsync().catch(() => {});
      }
    }, 4000);

    loadFonts().finally(() => clearTimeout(safetyTimer));

    return () => {
      cancelled = true;
      clearTimeout(safetyTimer);
    };
  }, []);

  return fontsLoaded;
}

