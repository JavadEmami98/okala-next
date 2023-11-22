import "../style/globals.css";
import "../style/font.css";
import Header from "@/component/customlayout/header";
import Footer from "@/component/customlayout/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <Header />
      <main className="min-h-[100vh]">{children}</main>
      <Footer />
    </html>
  );
}
