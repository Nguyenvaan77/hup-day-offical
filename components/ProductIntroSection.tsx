"use client"

import { Leaf, Heart, Sparkles } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export default function ProductIntroSection() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section
      ref={elementRef}
      className={`py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-herb-green-50 to-white scroll-animate ${isVisible ? "visible" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-10">
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-herb-green-100 to-herb-green-200 text-herb-green-800 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <Leaf className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            Sản phẩm đặc biệt
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-herb-green-900 mb-3 sm:mb-4 px-2">
            🌿 Bộ 3 vị Lê gai – Nụ hòe – Táo đỏ
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-herb-green-800 max-w-3xl mx-auto leading-relaxed px-4">
            Không chỉ là đồ uống thanh mát mà còn là <strong>kiến thức YHCT</strong> mà chúng mình muốn chia sẻ.
          </p>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-herb-green-400 via-herb-green-500 to-herb-green-600 mx-auto mt-3 sm:mt-4"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          <div className="group relative p-4 sm:p-6 bg-gradient-to-br from-red-50 to-red-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-red-200 rounded-xl sm:rounded-2xl card-hover-effect">
            <div className="text-center space-y-2 sm:space-y-3">
              <div className="inline-flex p-2 sm:p-3 bg-red-100 border-2 border-red-200 rounded-full">
                <Sparkles className="w-5 h-5 sm:w-7 sm:h-7 text-red-600" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-red-700">🍐 Lê gai</h3>
              <p className="text-red-800 leading-relaxed text-xs sm:text-sm">
                Thanh nhiệt, tăng sức đề kháng, chống lão hoá, đẹp da
              </p>
            </div>
            <div className="absolute top-0 right-0 w-10 h-10 sm:w-12 sm:h-12 bg-red-100 opacity-30 rounded-tl-none rounded-tr-xl sm:rounded-tr-2xl rounded-bl-xl sm:rounded-bl-2xl rounded-br-none"></div>
          </div>

          <div className="group relative p-4 sm:p-6 bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-purple-200 rounded-xl sm:rounded-2xl card-hover-effect">
            <div className="text-center space-y-2 sm:space-y-3">
              <div className="inline-flex p-2 sm:p-3 bg-purple-100 border-2 border-purple-200 rounded-full">
                <Heart className="w-5 h-5 sm:w-7 sm:h-7 text-purple-600" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-purple-700">🌸 Nụ hòe</h3>
              <p className="text-purple-800 leading-relaxed text-xs sm:text-sm">
                Làm bền thành mạch, hỗ trợ tim mạch, ổn định huyết áp, giúp ngủ ngon
              </p>
            </div>
            <div className="absolute top-0 right-0 w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 opacity-30 rounded-xl sm:rounded-2xl"></div>
          </div>

          <div className="group relative p-4 sm:p-6 bg-gradient-to-br from-amber-50 to-amber-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-amber-200 rounded-xl sm:rounded-2xl card-hover-effect sm:col-span-2 lg:col-span-1">
            <div className="text-center space-y-2 sm:space-y-3">
              <div className="inline-flex p-2 sm:p-3 bg-amber-100 border-2 border-amber-200 rounded-full">
                <Leaf className="w-5 h-5 sm:w-7 sm:h-7 text-amber-600" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-amber-700">🍯 Táo đỏ</h3>
              <p className="text-amber-800 leading-relaxed text-xs sm:text-sm">
                Bổ khí huyết, tăng năng lượng, an thần, giảm căng thẳng
              </p>
            </div>
            <div className="absolute top-0 right-0 w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 opacity-30 rounded-none"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
