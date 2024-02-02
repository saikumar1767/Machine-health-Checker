import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { createContext, useContext, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './login/_layout';
import { AuthProvider, useAuth } from './AuthProvider';
import TabLayout from './(tabs)/_layout';
import ModalScreen from './modal';
import React from 'react';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <NavigationContainer independent={true}>
    <AuthProvider>
      <RouterNav />
    </AuthProvider>
  </NavigationContainer>
}

function RouterNav() {
  const { authData } = useAuth();
  const colorScheme = useColorScheme();
  // authData ? console.log("Auth Data value: ",authData) : console.log("Not Authenticated");

  return authData ? <RootLayoutNav /> : <LoginLayoutNav />
}

function RootLayoutNav() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} component={TabLayout} />
        <Stack.Screen name="modal" options={{ headerShown: false }} component={ModalScreen} />
    </Stack.Navigator>
  );
}

function LoginLayoutNav() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" options={{ headerShown: false }} component={LoginScreen} />
    </Stack.Navigator>
  );
}