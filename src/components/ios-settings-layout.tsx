"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface IOSSettingsLayoutProps {
  title: string
  children: ReactNode
  onBack?: () => void
}

export function IOSSettingsLayout({ children, title, onBack }: IOSSettingsLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      {title && (
        <div className="bg-card border-b border-border/50 sticky top-0 z-10 backdrop-blur-lg bg-opacity-90">
          <div className="max-w-2xl mx-auto px-4 h-14 flex items-center">
            {onBack && (
              <button
                onClick={onBack}
                className="flex items-center text-blue-500 hover:text-blue-600 transition-colors -ml-2"
              >
                <ChevronLeft className="w-6 h-6" />
                <span className="text-[17px]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}>Back</span>
              </button>
            )}
            <h1 className="text-[17px] font-semibold absolute left-1/2 -translate-x-1/2" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}>{title}</h1>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="max-w-2xl mx-auto p-4 pb-8">
        {children}
      </div>
    </div>
  )
}

interface SettingsCardProps {
  children: ReactNode
  className?: string
}

export function SettingsCard({ children, className }: SettingsCardProps) {
  return (
    <div className={cn("bg-card border border-border/50 rounded-xl overflow-hidden shadow-sm", className)}>
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
}

export function SettingsItem({
  icon,
  label,
  value,
  status,
  onClick
}: SettingsItemProps) {
  const isCompromised = status === "compromised"
  
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-4 px-4 py-3.5 transition-colors",
        isCompromised 
          ? "bg-red-950/30 hover:bg-red-950/40" 
          : "hover:bg-secondary/50",
        onClick && "cursor-pointer"
      )}
    >
      {icon && <div className="flex-shrink-0">{icon}</div>}
      <div className="flex-1 text-left">
        <div className={cn(
          "text-[17px]",
          isCompromised && "text-red-400"
        )} style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}>
          {label}
        </div>
      </div>
      {value && (
        <div className={cn(
          "text-[17px]",
          isCompromised ? "text-red-400" : "text-muted-foreground"
        )} style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}>
          {value}
        </div>
      )}
      {onClick && <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />}
    </button>
  )
}

interface SettingsSectionProps {
  title?: string
  children: ReactNode
  className?: string
}

export function SettingsSection({ children, className }: SettingsSectionProps) {
  return (
    <div className={cn("bg-card border border-border/50 rounded-xl overflow-hidden shadow-sm", className)}>
      {children}
    </div>
  )
}