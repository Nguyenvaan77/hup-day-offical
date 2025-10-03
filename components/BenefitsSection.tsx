"use client"

import { Shield, Heart, Sparkles, Moon } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const benefits = [
  {
    icon: Shield,
    title: "Tăng đề kháng",
    subtitle: "Chống oxy hóa",
    description: "Bảo vệ cơ thể khỏi gốc tự do",
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Heart,
    title: "Bảo vệ tim mạch",
    subtitle: "Ổn định huyết áp",
    description: "Hỗ trợ tuần hoàn máu tốt",
    gradient: "from-red-500 to-pink-500",
    bgColor: "bg-red-50",
  },
  {
    icon: Sparkles,
    title: "Thanh nhiệt",
    subtitle: "Mát gan, giải độc",
    description: "Làm mát cơ thể tự nhiên",
    gradient: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
  },
  {
    icon: Moon,
    title: "Ngủ ngon",
    subtitle: "Giảm căng thẳng",
    description: "Cải thiện giấc ngủ, sáng da",
    gradient: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50",
  },
]

export default function BenefitsSection() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section
      ref={elementRef}
      className={`py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-white to-slate-50 scroll-animate ${isVisible ? "visible" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-10">
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-herb-green-100 to-herb-green-200 text-herb-green-800 rounded-full text-xs sm:text-sm font-medium mb-2 sm:mb-3">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            Công dụng nổi bật
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 mb-2 sm:mb-3">
            ✨ CÔNG DỤNG TUYỆT VỜI
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-3xl mx-auto px-4">
            Bộ ba dược liệu mang đến lợi ích toàn diện
          </p>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-blue-400 via-red-400 to-purple-400 mx-auto mt-2 sm:mt-3"></div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-white p-3 sm:p-4 lg:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 rounded-xl card-hover-effect"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`}
              ></div>

              <div className="relative text-center space-y-2 sm:space-y-3 lg:space-y-4">
                <div
                  className={`inline-flex p-2 sm:p-2.5 lg:p-3 bg-gradient-to-br ${benefit.gradient} shadow-lg rounded-xl`}
                >
                  <benefit.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                </div>

                <div className="space-y-1 sm:space-y-1.5 lg:space-y-2">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-slate-800 leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-slate-600">{benefit.subtitle}</p>
                  <p className="text-xs text-slate-500 leading-relaxed hidden sm:block">{benefit.description}</p>
                </div>

                <div className="flex justify-center">
                  <div
                    className={`w-5 h-5 sm:w-6 sm:h-6 ${benefit.bgColor} flex items-center justify-center rounded-full`}
                  >
                    <span className="text-green-600 font-bold text-xs sm:text-sm">✓</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
