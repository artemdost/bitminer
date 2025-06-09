import Header from "./components/Header";
import ProductCarousel from "./components/ProductCarousel";
import ProfitCalculator from "./components/ProfitCalculator";
import "./globals.css";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="relative w-full min-h-screen flex flex-col">
        {/* Фон: изображение + затемнение */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/background.jpg"
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
          <div className="absolute inset-0 bg-blue1 opacity-85" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue1/95" />
        </div>

        {/* Контент поверх фона */}
        <div className="relative z-10">
          <Header />

          <div id="miners" className="max-w-screen-xl mx-auto px-4 mt-24">
            <h2 className="text-white text-3xl font-bold mb-6 text-center">
              Майнеры
            </h2>
            <ProductCarousel />
          </div>

          <div id="calculator" className="max-w-screen-xl mx-auto px-4 mt-24">
            <h2 className="text-white text-3xl font-bold mb-6 text-center">
              Калькулятор доходности
            </h2>
            <ProfitCalculator />
          </div>
        </div>
        {/* Футер */}
        <footer
          id="contacts"
          className="mt-20 py-8 text-center text-white text-sm opacity-75"
        >
          © {new Date().getFullYear()} BitMiner. Все права защищены.
        </footer>
      </section>
    </div>
  );
}
