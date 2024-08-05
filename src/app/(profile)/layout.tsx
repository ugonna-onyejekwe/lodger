import { ProfileSideBar } from "@/components/profile-sidebar/sidebar";
import type { Metadata } from "next";
// import "../globals.scss";

const user = {
  name: "ugonna o",
};
export const metadata: Metadata = {
  title: user.name,
  description: `Agent ${user.name} is a verified agent at lodger`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      style={{
        display: "flex",
      }}
    >
      <ProfileSideBar />
      {/* side bar */}
      <div
        style={{
          padding: "0 30px",
          flex: 1,
        }}
      >
        {children}
      </div>
    </main>
  );
}
