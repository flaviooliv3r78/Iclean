export type RootStackParamList = {
  Splash: undefined;
  Tabs: undefined;
  SignIn: { role?: "client" | "pro" } | undefined;
  Booking: undefined;
  Professionals: undefined;
  ProProfile: { proId: "sonia" | "ana" | "maria" };
  CleanerDashboard: undefined;
};