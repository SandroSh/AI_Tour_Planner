import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "GPTGENIUS",
  description:
    "GPTGENIUS: Your AI language companion, powered by AI, it enhances your conversations, content createion, and more!",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" >
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
