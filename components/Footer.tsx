import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-400">
          <div>
            <h3 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">PRODUCT</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  API
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">RESOURCES</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">USE CASES</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Ecommerce
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Storytelling
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Creative and Tech
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">PLANS</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Free Trial
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Enterprise
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Custom
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500 rounded-full"></div>
            <span className="text-white text-lg font-light">Git-Docify</span>
          </div>
          <p className="text-gray-500 text-sm">© 2025 Git-Docify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
