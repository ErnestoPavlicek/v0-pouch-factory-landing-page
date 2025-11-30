import { Shield, Award, MapPin, ClipboardCheck } from "lucide-react"

const indicators = [
  {
    icon: Shield,
    title: "FDA-Graded Facility",
    description: "Registered and compliant",
  },
  {
    icon: Award,
    title: "GMP Compliant",
    description: "Certified processes",
  },
  {
    icon: MapPin,
    title: "Made in Tennessee, USA",
    description: "Domestic manufacturing",
  },
  {
    icon: ClipboardCheck,
    title: "Full In-House QA",
    description: "End-to-end quality control",
  },
]

export function TrustIndicators() {
  return (
    <section className="border-y border-gray-100 bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {indicators.map((indicator, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#F8FAFC]">
                <indicator.icon className="h-6 w-6 text-[#005293]" />
              </div>
              <h3 className="mb-1 text-sm font-semibold text-gray-900">{indicator.title}</h3>
              <p className="text-xs text-gray-500">{indicator.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
