import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

const capabilities = [
  "Multi-line custom pouch production (Nicotine, Hemp, Functional)",
  "European designed labeling and packaging automation",
  "Cleanroom blending and controlled moisture environment",
  "Partnership with leading industry suppliers",
]

export function FactorySection() {
  return (
    <section id="factory" className="bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/images/img-1970.jpeg"
              alt="Pouch Factory production line with automated conveyor belt system"
              width={600}
              height={500}
              className="h-auto w-full object-cover"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10" />
          </div>

          {/* Content */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#005293]">Our Facility</p>
            <h2 className="mb-6 text-balance text-3xl font-bold text-gray-900 sm:text-4xl">Built for Consistency</h2>
            <p className="mb-8 text-pretty text-lg leading-relaxed text-gray-600">
              Our state-of-the-art Tennessee facility is engineered for precision and scalability. With multiple pouch
              machines, automated labeling systems, and rigorous in-house QA, we deliver consistent quality from pilot
              batches to full production runs.
            </p>

            <ul className="space-y-4">
              {capabilities.map((capability, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#005293]" />
                  <span className="text-gray-700">{capability}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
