import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";

const SplashScreen = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeInOut" } }}
            className="fixed inset-0 z-[120] flex items-center justify-center overflow-hidden bg-background"
        >
            <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-aurora-slow" />
            <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-accent/20 blur-3xl animate-aurora-slow-delayed" />
            <div className="absolute inset-0 bg-grid-soft opacity-[0.07]" />

            <motion.div
                initial={{ y: 18, opacity: 0, scale: 0.94 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-[min(92vw,30rem)] rounded-3xl border border-white/15 bg-card/60 p-8 text-center backdrop-blur-2xl"
            >
                <motion.div
                    initial={{ scale: 0.78, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
                    className="mx-auto mb-5 h-28 w-28 overflow-hidden rounded-full border-2 border-primary/45 shadow-[0_0_40px_hsl(var(--primary)/0.35)]"
                >
                    <img src={profileImg} alt="Anand Dangi" className="h-full w-full object-cover" />
                </motion.div>

                <motion.h1
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.32, duration: 0.45 }}
                    className="text-3xl font-bold tracking-tight text-foreground"
                >
                    Anand Dangi
                </motion.h1>

                <motion.p
                    initial={{ y: 8, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.42, duration: 0.45 }}
                    className="mt-2 text-sm text-muted-foreground"
                >
                    Welcome to My Portfolio website
                </motion.p>

                <div className="mx-auto mt-7 h-1.5 w-44 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "0%" }}
                        transition={{ delay: 0.5, duration: 1.9, ease: "easeInOut" }}
                        className="h-full bg-gradient-to-r from-primary to-accent"
                    />
                </div>
            </motion.div>
        </motion.div>
    );
};

export default SplashScreen;
