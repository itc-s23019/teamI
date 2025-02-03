import { useEffect } from "react";
import { useRouter } from "next/router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../../firebase-config";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const auth = getAuth(app);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user && router.pathname !== "/login") {
        // ユーザーが未ログインで、現在のページが "/login" でない場合、ログインページへリダイレクト
        router.push("/login");
      }
    });
  }, [auth, router]);

  return <Component {...pageProps} />;
}

export default MyApp;
