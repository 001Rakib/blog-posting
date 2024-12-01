import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import "../globals.css";

export const metadata = {
  title: "Threads",
  description: "A next.js 15 meta threads application",
};

const inter = Inter({
  subsets: ["latin"],
});

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>

          {children}
        </body>
      </html>
    </ClerkProvider>
  );
};

export default layout;
