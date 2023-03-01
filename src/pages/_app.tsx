import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../lib/auth";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <div style={{ margin: "20px" }}>
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  );
}
