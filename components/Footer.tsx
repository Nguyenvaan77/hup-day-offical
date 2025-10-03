export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Brand */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-herb-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg sm:text-xl">🍵</span>
            </div>
            <span className="text-lg sm:text-xl font-bold">Trà Dược Liệu</span>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm max-w-md mx-auto px-4">
            Chia sẻ kiến thức Y học cổ truyền qua những sản phẩm thiên nhiên
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto mb-6 sm:mb-8">
          {/* Contact */}
          <div className="text-center">
            <h4 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3 text-herb-green-400">Liên hệ</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <a
                  href="mailto:contact@example.com"
                  className="text-gray-400 hover:text-herb-green-400 transition-colors text-xs sm:text-sm"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="tel:+84123456789"
                  className="text-gray-400 hover:text-herb-green-400 transition-colors text-xs sm:text-sm"
                >
                  Hotline
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-herb-green-400 transition-colors text-xs sm:text-sm">
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Policy */}
          <div className="text-center">
            <h4 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3 text-herb-green-400">Chính sách</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-herb-green-400 transition-colors text-xs sm:text-sm">
                  Điều khoản sử dụng
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-herb-green-400 transition-colors text-xs sm:text-sm">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-herb-green-400 transition-colors text-xs sm:text-sm">
                  Chính sách đổi trả
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <p className="text-center text-gray-400 text-xs sm:text-sm px-4">
            &copy; 2025 Trà Dược Liệu. Sản phẩm dành cho Tân Sinh viên Dược Hà Nội.
          </p>
        </div>
      </div>
    </footer>
  )
}
