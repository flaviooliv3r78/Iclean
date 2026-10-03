import { NavigationContainer, type Theme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CalendarDays, House, UserRound } from "lucide-react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  AccountScreen,
  BookingScreen,
  CleanerDashboardScreen,
  HomeScreen,
  ProProfileScreen,
  ProfessionalsScreen,
  RequestsScreen,
  SignInScreen,
  SplashScreen,
} from "./screens";
import { colors } from "./theme";
import type { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tabs = createBottomTabNavigator();

const navigationTheme: Theme = {
  dark: false,
  colors: {
    primary: colors.blue,
    background: colors.canvas,
    card: colors.surface,
    text: colors.ink,
    border: colors.line,
    notification: colors.green,
  },
  fonts: {
    regular: { fontFamily: "System", fontWeight: "400" },
    medium: { fontFamily: "System", fontWeight: "500" },
    bold: { fontFamily: "System", fontWeight: "700" },
    heavy: { fontFamily: "System", fontWeight: "800" },
  },
};

function MainTabs() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.blue,
        tabBarInactiveTintColor: colors.muted,
        tabBarLabelStyle: { fontSize: 11, fontWeight: "600", paddingBottom: 3 },
        tabBarStyle: {
          height: 62,
          paddingTop: 7,
          borderTopColor: colors.line,
          backgroundColor: colors.surface,
        },
        tabBarIcon: ({ color, size }) => {
          const Icon = route.name === "Início" ? House : route.name === "Limpezas" ? CalendarDays : UserRound;
          return <Icon color={color} size={size} strokeWidth={2} />;
        },
      })}
    >
      <Tabs.Screen name="Início" component={HomeScreen} />
      <Tabs.Screen name="Limpezas" component={RequestsScreen} />
      <Tabs.Screen name="Conta" component={AccountScreen} />
    </Tabs.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navigationTheme}>
        <StatusBar style="dark" />
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false, animation: "slide_from_right" }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Tabs" component={MainTabs} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="Booking" component={BookingScreen} />
          <Stack.Screen name="Professionals" component={ProfessionalsScreen} />
          <Stack.Screen name="ProProfile" component={ProProfileScreen} />
          <Stack.Screen name="CleanerDashboard" component={CleanerDashboardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
