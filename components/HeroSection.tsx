import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative py-8 sm:py-12 lg:py-16 overflow-hidden bg-gradient-to-br from-herb-green-50 via-herb-green-100 to-herb-green-200">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/img/memcab/background.png" alt="Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-herb-green-50/10 via-herb-green-100/10 to-herb-green-200/10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Badge - Centered */}
        <div className="text-center mb-6 sm:mb-8 animate-fade-in visible">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-herb-green-100 to-herb-green-200 text-herb-green-800 rounded-full text-sm sm:text-base font-medium shadow-lg">
            <span className="mr-2 text-lg sm:text-xl">🎉</span>
            <span className="font-semibold">Chào Tân Sinh viên Dược Hà Nội</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in-left visible text-center lg:text-left">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-herb-green-900 leading-tight">
                Một tách trà nhỏ
                <span className="block text-herb-green-600 mt-2">Gửi lời chúc sức khỏe</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-herb-green-800 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Chúc bạn mạnh khỏe, tự tin và vững bước trong hành trình mới. Mỗi ngày học tập sẽ như{" "}
                <strong className="text-herb-green-700">một tách trà ấm</strong>, cho bạn thêm sự bình an và năng lượng.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button className="group bg-gradient-to-r from-herb-green-500 to-herb-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:from-herb-green-600 hover:to-herb-green-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                <span>🌿 Khám phá ngay</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in-right visible mt-6 lg:mt-0">
            <div className="relative z-10">
              <Image
                src="/img/memcab/nenhup.jpg"
                alt="Trà dược liệu"
                width={600}
                height={700}
                className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-2xl"
                priority
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-48 h-48 sm:w-72 sm:h-72 bg-herb-green-300/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 -left-4 w-48 h-48 sm:w-72 sm:h-72 bg-herb-green-400/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
