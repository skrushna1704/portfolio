import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import "../styles/globals.css";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
