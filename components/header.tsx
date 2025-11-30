"use client"

import { useState, useEffect } from "react"
import { Menu, X, Square } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Process", href: "#factory" },
    { label: "FAQ", href: "#contact" },
  ]

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-30 transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-sm backdrop-blur-md" : "bg-white"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Square className="h-8 w-8 rounded text-[#005293]" strokeWidth={3} />
          <span className="text-xl font-bold tracking-tight text-gray-900">POUCH FACTORY</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-[#005293]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button asChild className="bg-[#005293] px-6 text-white hover:bg-[#004075]">
            <a href="#contact">Start Your Project</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden">
          {isMobileMenuOpen ? <X className="h-6 w-6 text-gray-900" /> : <Menu className="h-6 w-6 text-gray-900" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t bg-white px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-gray-600"
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="mt-2 w-full bg-[#005293] text-white hover:bg-[#004075]">
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Start Your Project
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
