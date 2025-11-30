import { Square } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white pb-20">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Logo & Tagline */}
          <div>
            <a href="#" className="flex items-center gap-2">
              <Square className="h-6 w-6 rounded text-[#005293]" strokeWidth={3} />
              <span className="text-lg font-bold tracking-tight text-gray-900">POUCH FACTORY</span>
            </a>
            <p className="mt-3 text-sm text-gray-500">Born in Sweden. Made in America.</p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="mb-4 text-sm font-semibold text-gray-900">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-sm text-gray-500 hover:text-[#005293]">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-sm text-gray-500 hover:text-[#005293]">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#factory" className="text-sm text-gray-500 hover:text-[#005293]">
                    Our Factory
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold text-gray-900">Products</h4>
              <ul className="space-y-2">
                <li>
                  <span className="text-sm text-gray-500">Nicotine Pouches</span>
                </li>
                <li>
                  <span className="text-sm text-gray-500">Hemp Pouches</span>
                </li>
                <li>
                  <span className="text-sm text-gray-500">Functional Pouches</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-gray-900">Contact</h4>
            <p className="text-sm text-gray-500">Tennessee, USA</p>
            <p className="mt-1 text-sm text-gray-500">contact@pouchfactory.com</p>
          </div>
        </div>

        {/* FDA Disclaimer */}
        <div className="mt-12 rounded-lg bg-[#F8FAFC] p-6">
          <p className="text-xs leading-relaxed text-gray-500">
            <span className="font-semibold">FDA Disclaimer:</span> These statements have not been evaluated by the Food
            and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
            Products containing nicotine are intended for adult consumers only. Nicotine is an addictive chemical. Keep
            out of reach of children.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-100 pt-8">
          <p className="text-center text-xs text-gray-400">© 2025 Pouch Factory Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
