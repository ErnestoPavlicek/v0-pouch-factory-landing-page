"use client"

import { useState } from "react"
import { AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AgeVerificationModalProps {
  onVerify: (verified: boolean) => void
}

export function AgeVerificationModal({ onVerify }: AgeVerificationModalProps) {
  const [declined, setDeclined] = useState(false)

  if (declined) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
        <div className="mx-4 w-full max-w-md rounded-lg bg-white p-8 text-center shadow-2xl">
          <AlertTriangle className="mx-auto mb-4 h-16 w-16 text-red-500" />
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Access Denied</h2>
          <p className="text-gray-600">You must be 21 years or older to access this website.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="mx-4 w-full max-w-md rounded-lg bg-white p-8 shadow-2xl">
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#005293]/10">
            <span className="text-3xl font-bold text-[#005293]">21+</span>
          </div>
        </div>

        <h2 className="mb-2 text-center text-2xl font-bold text-gray-900">Age Verification Required</h2>

        <p className="mb-6 text-center text-gray-600">
          This website contains information about nicotine products. You must be 21 years of age or older to enter.
        </p>

        <div className="mb-4 rounded-lg bg-amber-50 p-4">
          <p className="text-center text-sm font-medium text-amber-800">WARNING: Nicotine is an addictive chemical.</p>
        </div>

        <p className="mb-6 text-center text-sm text-gray-500">
          By entering this site, you certify that you are of legal age to purchase nicotine products in your
          jurisdiction.
        </p>

        <div className="flex gap-4">
          <Button
            onClick={() => setDeclined(true)}
            variant="outline"
            className="flex-1 border-gray-300 text-gray-600 hover:bg-gray-50"
          >
            I am under 21
          </Button>
          <Button onClick={() => onVerify(true)} className="flex-1 bg-[#005293] text-white hover:bg-[#004075]">
            I am 21 or older
          </Button>
        </div>
      </div>
    </div>
  )
}
