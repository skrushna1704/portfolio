import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={router.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default Layout;
