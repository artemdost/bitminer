import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      {/* Контент: логотип, навигация, описание, видео */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-16">
        {/* Хедер */}
        <div className="flex items-center justify-between">
          {/* Логотип + название */}
          <div className="flex items-center space-x-3">
            <Image src="/logo.png" alt="Bitminer Logo" width={32} height={32} />
            <h1 className="font font-bold text-2xl sm:text-3xl text-white">
              BITMINER
            </h1>
          </div>

          {/* Навигация */}
          <nav className="hidden lg:flex justify-center space-x-16 text-white text-xl font-montserrat font-light">
            <a href="#miners" className="hover:text-blue-300 transition">
              Майнеры
            </a>
            <a
              href="https://t.me/bitminerNN"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition"
            >
              Телеграм
            </a>
            <a href="#calculator" className="hover:text-blue-300 transition">
              Калькулятор доходности
            </a>
          </nav>

          {/* Контакты */}
          <div className="hidden md:block text-right text-sm text-white font-montserrat font-medium">
            <p>Тел: +7 (999) 123-45-67</p>
            <p>Email: info@company.ru</p>
          </div>
        </div>

        {/* Основной контент */}
        <div className="flex mt-10 flex-col-reverse md:flex-row items-center justify-between gap-12 mx-24">
          <div className="flex flex-col items-start gap-6 text-white font-montserrat font-light leading-relaxed max-w-xl text-2xl sm:text-xl md:text-2xl lg:text-[27px]">
            <h2 className="text-white text-4xl sm:text-4xl font-bold font-montserrat mb-6">
              Индустриальный майнинг
              <br /> нового поколения
            </h2>

            <p>
              <span className="font-bold">BitMiner</span> – компания,
              занимающаяся майнингом биткойнов, поддерживающая блокчейн биткойна
              посредством расширяющегося крупномасштабного майнинга в России.
            </p>

            <div className="flex items-center gap-4 mt-10">
              {/* Иконка Telegram */}
              <a
                href="https://t.me/an_sokolov_nn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full shadow hover:bg-gray-100 transition mr-1"
              >
                <Image
                  src="/telegram.webp"
                  alt="Telegram"
                  width={48}
                  height={48}
                />
              </a>

              {/* Кнопка */}
              <a
                href="https://t.me/an_sokolov_nn"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue1 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition-all duration-200 text-base sm:text-lg"
              >
                Свяжитесь с нами
              </a>
            </div>
          </div>

          {/* Видео */}
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-xl overflow-hidden shadow-lg bg-black">
            <video
              src="/video.MOV"
              controls
              autoPlay
              muted
              playsInline
              loop
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
