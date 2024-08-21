'use client'
import { ThemeProvider } from "config/material-tailwind-theme-provider";
import ReactQueryClientProvider from "config/ReactQueryClientProvider";
import RecoilProvider from "config/RecoilProvider";
import MainLayout from "./components/layouts/main-layout";
import Auth from "./components/auth";

export default function RootLayout({ children }) {
  const loggedIn = true;
  return (
    <RecoilProvider>
      <ReactQueryClientProvider>
        <ThemeProvider>
            {/* @ts-ignore */}
            <html lang="en">
              <head>
                <link
                  rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
                  integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
                  crossOrigin="anonymous"
                  referrerPolicy="no-referrer"
                  />
              </head>
              <body>
                {loggedIn ? <MainLayout>{children}</MainLayout> : <Auth />}
              </body>
            </html>
          </ThemeProvider>
      </ReactQueryClientProvider>
    </RecoilProvider>
  );
}
