import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import { AuthProvider } from "../hooks/useAuth";
import AuthRouteGuard from "../hooks/authRouteGuard";

function MyApp({ Component, pageProps }) {
  // const { user, authenticated, error, isAdmin } = useAuth();
  // const router = useRouter();
  const publicRoutes = [
    "/",
    "/login",
    "/depasBaja",
    "/depasMaza",
    "/apartment",
  ];
  const privateRoutes = ["/user", "/booking"];
  const adminRoutes = ["/admin"];

  return (
    <AuthProvider>
      <AuthRouteGuard
        publicRoutes={publicRoutes}
        privateRoutes={privateRoutes}
        adminRoutes={adminRoutes}
      >
        <Component {...pageProps} />
      </AuthRouteGuard>
    </AuthProvider>
  );
}

export default MyApp;
