import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import { useEffect } from "react";
import { useRouter } from "next/router";
import useAuth from "../hooks/useAuth";
import { AuthProvider } from "../hooks/useAuth";
import AuthRouteGuard from "../hooks/authRouteGuard";

function MyApp({ Component, pageProps }) {
  // const { user, authenticated, error, isAdmin } = useAuth();
  // const router = useRouter();
  const publicRoutes = [
    "/",
    "/depasBaja",
    "/depasMaza",
    "/login",
    "/apartment",
  ];
  const privateRoutes = ["/user"];
  const adminRoutes = ["/admin"];

  return (
    <AuthProvider>
      <AuthRouteGuard publicRoutes={publicRoutes} privateRoutes={privateRoutes} adminRoutes={adminRoutes}>
        <Component {...pageProps} />
      </AuthRouteGuard>
    </AuthProvider>
  );
}

export default MyApp;
