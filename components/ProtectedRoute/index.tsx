import { Routes } from "@/constants/routes";
import { useAuth } from "@/context/auth.context";
import { Redirect } from "expo-router";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect href={Routes.Login} />;
  }

  return <>{children}</>;
}
