import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: { session, ...pageProps }, }: AppProps) {
  return (
    <>
      {/* <Head>
        <title>Authentification - MOHAMED HAJJI</title>
      </Head> */}
      <SessionProvider session={session}>
        {/* <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        /> */}
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}