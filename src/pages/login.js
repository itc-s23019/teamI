import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import app from "../../firebase-config";
import styles from "../styles/login.module.css"; // ✅ 修正

const Login = () => {
    const [user, setUser] = useState(null);
    const router = useRouter();
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                router.push("/");
            }
        });

        return () => unsubscribe(); // ✅ クリーンアップ処理
    }, [auth, router]);

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
            router.push("/");
        } catch (error) {
            console.error("ログイン失敗:", error);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h1 className={styles.title}>とりあえずログインしてください</h1>
                {user ? (
                    <p>ログイン成功: {user.displayName}</p>
                ) : (
                    <button
                        onClick={handleGoogleLogin}
                        className={styles.loginButton}
                        aria-label="Googleでログイン"
                    >
                        🔴 危険！Googleでログイン 🔴
                    </button>
                )}
            </div>
        </div>
    );
};

export default Login;
