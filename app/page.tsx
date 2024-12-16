import Image from "next/image";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
    {/* Header */}
    <Header />

    {/* Main Content */}
    <main className="flex-grow">
      <HomePage />
    </main>

    {/* Footer */}
    <Footer />
  </div>
  );
}
