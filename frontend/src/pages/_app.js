import "@/styles/globals.css";
import { useRouter } from "next/router";
import { ContextProvider } from "../components/utils/Context";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}
