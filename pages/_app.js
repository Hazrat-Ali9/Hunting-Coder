import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";
import "@/styles/globals.css";
import { Router } from "next/router";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
// Optional: customize speed or show spinner
NProgress.configure({ showSpinner: false, speed: 1000 });

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});
Router.events.on('routeChangeError', () => {
  NProgress.done();
});

export default function App({ Component, pageProps }) {
  return <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  <Navbar />
  <Component {...pageProps} />
  </ThemeProvider>;
}
