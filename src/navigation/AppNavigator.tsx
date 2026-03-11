import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BuilderScreen } from "../screens/BuilderScreen";
import { PreviewScreen } from "../screens/PreviewScreen";
import { ResumeFormData } from "../types/resume";

export type RootStackParamList = {
  Builder: undefined;
  Preview: { data: ResumeFormData };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#000000" },
          animation: "fade",
        }}
      >
        <Stack.Screen name="Builder" component={BuilderScreen} />
        <Stack.Screen name="Preview" component={PreviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
