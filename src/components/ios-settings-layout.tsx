"use client"

import { ChevronLeft } from "lucide-react"
import { ReactNode } from "react"

interface IOSSettingsLayoutProps {
  title: string
  children: ReactNode
  onBack?: () => void
}

export function IOSSettingsLayout({ title, children, onBack }: IOSSettingsLayoutProps) {
  return (
    <div className="h-screen bg-black text-white overflow-hidden flex flex-col">
      <div className="max-w-md mx-auto w-full flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center gap-2 p-4 bg-black z-10 flex-shrink-0">
          <button 
            onClick={onBack}
            className="flex items-center gap-1 text-blue-500 hover:text-blue-400 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-[17px]">Settings</span>
          </button>
          <h1 className="text-[17px] font-semibold ml-auto">{title}</h1>
        </div>

        {/* Content */}
        <div className="px-4 pb-8 overflow-y-auto flex-1">
          {children}
        </div>
      </div>
    </div>
  )
}

interface SettingsCardProps {
  children: ReactNode
  className?: string
}

export function SettingsCard({ children, className = "" }: SettingsCardProps) {
  return (
    <div className={`bg-[#1c1c1e] rounded-xl overflow-hidden ${className}`}>
      {children}
    </div>
  )
}

interface SettingsItemProps {
  icon?: ReactNode
  label: string
  value?: string
  status?: "off" | "compromised"
  onClick?: () => void
  showChevron?: boolean
}

export function SettingsItem({ icon, label, value, status, onClick, showChevron = true }: SettingsItemProps) {
  const isCompromised = status === "compromised"
  
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${
        isCompromised 
          ? "bg-red-900/30 hover:bg-red-900/40" 
          : "hover:bg-white/5"
      }`}
    >
      {icon && (
        <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center">
          {icon}
        </div>
      )}
      
      <span className="flex-1 text-left text-[17px]">{label}</span>
      
      {value && (
        <span className={`text-[17px] ${
          isCompromised ? "text-red-500" : "text-gray-500"
        }`}>
          {value}
        </span>
      )}
      
      {status === "off" && (
        <span className="text-[17px] text-gray-500">Off</span>
      )}
      
      {showChevron && (
        <ChevronLeft className="w-5 h-5 text-gray-500 rotate-180 flex-shrink-0" />
      )}
    </button>
  )
}

interface SettingsSectionProps {
  title?: string
  children: ReactNode
  className?: string
}

export function SettingsSection({ title, children, className = "" }: SettingsSectionProps) {
  return (
    <div className={className}>
      {title && (
        <h2 className="text-[13px] text-gray-500 uppercase font-medium px-4 mb-2 tracking-wide">
          {title}
        </h2>
      )}
      <SettingsCard>
        {children}
      </SettingsCard>
    </div>
  )
}