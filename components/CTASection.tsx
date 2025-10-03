"use client"

import { Globe, Facebook, Mail, Phone } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export default function CTASection() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section
      ref={elementRef}
      className={`py-10 sm:py-12 lg:py-16 bg-gradient-to-br from-herb-green-600 to-herb-green-800 relative overflow-hidden scroll-animate ${isVisible ? "visible" : ""}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-6"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main CTA */}
          <div className="mb-6 sm:mb-8 lg:mb-12 space-y-3 sm:space-y-4 lg:space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white px-4">🚀 KẾT NỐI CÙNG CHÚNG MÌNH</h2>
            <p className="text-sm sm:text-base lg:text-lg text-herb-green-100 max-w-2xl mx-auto leading-relaxed px-4">
              Xem thêm kiến thức thú vị về YHCT và hoạt động của dự án. Cùng nhau khám phá và chia sẻ!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8 lg:mb-10">
            {/* Website Card */}
            <a
              href="#"
              className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl p-4 sm:p-6 border-2 border-white/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex items-center justify-center sm:justify-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-white font-semibold text-base sm:text-lg">Website</h3>
                  <p className="text-herb-green-100 text-xs sm:text-sm">Khám phá thêm kiến thức</p>
                </div>
              </div>
            </a>

            {/* Facebook Card */}
            <a
              href="#"
              className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl p-4 sm:p-6 border-2 border-white/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex items-center justify-center sm:justify-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-white font-semibold text-base sm:text-lg">Fanpage</h3>
                  <p className="text-herb-green-100 text-xs sm:text-sm">Hoạt động mới nhất</p>
                </div>
              </div>
            </a>
          </div>

          {/* Additional Contact Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">📞 Liên hệ trực tiếp</h3>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-center justify-center space-x-2 sm:space-x-3 text-white text-sm sm:text-base">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="truncate">contact@example.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2 sm:space-x-3 text-white text-sm sm:text-base">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span>+84 123 456 789</span>
              </div>
            </div>
          </div>

          {/* Call to Action Button */}
          <div>
            <button className="w-full sm:w-auto bg-white text-herb-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
              🌿 Tìm hiểu thêm ngay
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
