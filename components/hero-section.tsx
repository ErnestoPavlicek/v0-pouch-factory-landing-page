import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-white pt-32 pb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23005293' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Your Trusted Partner for Premium Pouch Manufacturing
          </h1>

          <p className="mb-6 text-2xl font-semibold text-[#005293] sm:text-3xl">Born in Sweden. Made in America.</p>

          <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg text-gray-600">
            FDA-graded. GMP-compliant. Built for speed and quality. We help brands produce world-class nicotine, hemp,
            and functional pouches—all under one roof in our Tennessee facility.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-[#005293] px-8 text-base text-white hover:bg-[#004075]">
              <a href="#contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-gray-300 px-8 text-base text-gray-700 hover:bg-gray-50 bg-transparent"
            >
              <a href="#services">Our Services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
