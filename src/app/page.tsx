"use client"

import { useState } from "react"
import { AccessibilityPage } from "@/components/accessibility-page"
import { AppleCarePage } from "@/components/applecare-page"
import { User } from "lucide-react"

type Page = "home" | "accessibility" | "applecare"

export default function Home() {
  const [currentPage, setCurrentPage] = useState<Page>("home")

  if (currentPage === "accessibility") {
    return <AccessibilityPage onBack={() => setCurrentPage("home")} />
  }

  if (currentPage === "applecare") {
    return <AppleCarePage onBack={() => setCurrentPage("home")} />
  }

  return (
    <div className="h-screen bg-black text-white overflow-hidden flex items-center justify-center">
      <div className="max-w-md w-full px-4">
        <h1 className="text-[34px] font-bold mb-6">Settings</h1>
        
        <div className="space-y-4">
          {/* Accessibility Card */}
          <button
            onClick={() => setCurrentPage("accessibility")}
            className="w-full bg-[#1c1c1e] rounded-xl p-6 hover:bg-[#2c2c2e] transition-colors text-left"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <User className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex-1">
                <h2 className="text-[20px] font-semibold mb-1">Accessibility</h2>
                <p className="text-[15px] text-gray-400">
                  Vision, mobility, hearing & more
                </p>
              </div>
            </div>
          </button>

          {/* AppleCare Card */}
          <button
            onClick={() => setCurrentPage("applecare")}
            className="w-full bg-[#1c1c1e] rounded-xl p-6 hover:bg-[#2c2c2e] transition-colors text-left"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/rounded-in-photoretrica-2-1760545274220.png"
                  alt="Apple Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-[20px] font-semibold mb-1">AppleCare+</h2>
                <p className="text-[15px] text-gray-400">
                  Protection & device support
                </p>
              </div>
            </div>
          </button>
        </div>

        <p className="text-center text-gray-500 text-[13px] mt-8">
          Click on any card to view the settings interface
        </p>
      </div>
    </div>
  )
}