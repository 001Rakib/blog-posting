import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import "../globals.css";
import TopBar from "@/components/shared/TopBar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RIghtSidebar from "@/components/shared/RIghtSidebar";
import BottomBar from "@/components/shared/BottomBar";

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
          <TopBar />

          <main>
            <LeftSidebar />
            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
            <RIghtSidebar />
          </main>

          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  );
};

export default layout;
