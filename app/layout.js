import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Providers from "./providers";

export const metadata = {
  title: "GPTGENIUS",
  description:
    "GPTGENIUS: Your AI language companion, powered by AI, it enhances your conversations, content createion, and more!",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
