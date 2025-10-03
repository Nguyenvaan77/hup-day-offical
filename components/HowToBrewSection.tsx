"use client"

import { Coffee, Clock, Droplet, AlertCircle } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const steps = [
  {
    icon: Coffee,
    title: "Chuẩn bị",
    description: "2–3 quả lê gai + 1 nhúm nụ hòe + 2–3 lát táo đỏ",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    icon: Droplet,
    title: "Thêm nước",
    description: "250–300ml nước sôi",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Clock,
    title: "Hãm 5–7 phút",
    description: "Đợi ngấm đều dưỡng chất",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Coffee,
    title: "Thưởng thức",
    description: "Nóng hoặc thêm đá",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
]

export default function HowToBrewSection() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section
      ref={elementRef}
      className={`py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-herb-green-50/70 via-herb-green-100/50 to-herb-green-200/60 scroll-animate ${isVisible ? "visible" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-10">
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-herb-green-100 to-herb-green-200 text-herb-green-800 rounded-full text-xs sm:text-sm font-medium mb-2 sm:mb-3">
            <Coffee className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            Hướng dẫn pha chế
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 mb-2 sm:mb-3">☕ CÁCH PHA NHANH</h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-3xl mx-auto px-4">
            4 bước đơn giản cho tách trà hoàn hảo
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-10">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection Line - Hidden on mobile */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-herb-green-200 to-transparent z-0"></div>
              )}

              <div className="relative bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                {/* Step Number */}
                <div className="absolute -top-2 sm:-top-3 left-3 sm:left-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-herb-green-500 to-herb-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xs sm:text-sm">{index + 1}</span>
                  </div>
                </div>

                <div className="pt-3 sm:pt-4 space-y-2 sm:space-y-3">
                  {/* Icon */}
                  <div className={`inline-flex p-2 sm:p-2.5 lg:p-3 ${step.bgColor} rounded-lg`}>
                    <step.icon className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ${step.color}`} />
                  </div>

                  {/* Content */}
                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-tight">{step.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Warning Box */}
        <div className="max-w-4xl mx-auto bg-yellow-50 border-2 border-yellow-200 rounded-lg sm:rounded-xl p-4 sm:p-6">
          <div className="flex items-start space-x-3 sm:space-x-4">
            <div className="flex-shrink-0">
              <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-yellow-800 mb-1 sm:mb-2">⚠️ Lưu ý quan trọng</h3>
              <p className="text-xs sm:text-sm text-yellow-700 leading-relaxed">
                <strong>Không dùng cho:</strong> Phụ nữ mang thai/cho con bú, người huyết áp thấp, trẻ nhỏ dưới 5 tuổi.
                <span className="hidden sm:inline">
                  <br />
                  Nếu có vấn đề sức khỏe, vui lòng tham khảo ý kiến bác sĩ trước khi sử dụng.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
