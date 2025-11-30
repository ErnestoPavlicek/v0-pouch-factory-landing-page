import { Package, Beaker, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Package,
    title: "Co-Packaging",
    subtitle: "PMTA-Compliant Brands",
    description:
      "For established brands with FDA-approved formulas looking for a dependable U.S. production partner. We handle your batches, packaging, and compliance documentation—seamlessly.",
    features: ["Batch production", "Packaging services", "Compliance documentation"],
  },
  {
    icon: Beaker,
    title: "OEM / Private Label",
    subtitle: "Full-Service Manufacturing",
    description:
      "From concept to finished can. Ready-to-use base formulas, R&D support, and full-service production for Nicotine, Hemp, or Functional pouches.",
    features: ["R&D support", "Base formulas", "Full production"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#005293]">Our Services</p>
          <h2 className="mb-4 text-balance text-3xl font-bold text-gray-900 sm:text-4xl">
            Flexible Manufacturing Solutions
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-gray-600">
            From pilot batches to full-scale production, we offer solutions for every stage of your brand.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:border-[#005293]/20 hover:shadow-lg"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#005293]/10">
                <service.icon className="h-7 w-7 text-[#005293]" />
              </div>

              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#005293]">{service.subtitle}</p>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">{service.title}</h3>
              <p className="mb-6 leading-relaxed text-gray-600">{service.description}</p>

              <ul className="mb-6 space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-sm text-gray-600">
                    <div className="mr-3 h-1.5 w-1.5 rounded-full bg-[#005293]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant="ghost"
                className="group/btn -ml-4 text-[#005293] hover:bg-[#005293]/5 hover:text-[#005293]"
              >
                <a href="#contact">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
