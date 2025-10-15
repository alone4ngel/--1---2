"use client"

import { IOSSettingsLayout, SettingsCard, SettingsItem, SettingsSection } from "./ios-settings-layout"
import { User, Eye, Maximize2, Type, PlayCircle, MessageSquare, Volume2, Hand, Scan } from "lucide-react"

interface AccessibilityPageProps {
  onBack?: () => void
}

export function AccessibilityPage({ onBack }: AccessibilityPageProps) {
  return (
    <IOSSettingsLayout title="Accessibility" onBack={onBack}>
      {/* Hero Card */}
      <SettingsCard className="mb-8">
        <div className="flex flex-col items-center text-center py-8 px-6">
          <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-4">
            <User className="w-9 h-9 text-white" strokeWidth={2.5} />
          </div>
          <h2 className="text-[22px] font-semibold mb-3">Accessibility</h2>
          <p className="text-[15px] text-gray-400 leading-relaxed">
            Personalize iPhone in ways that work best for you with accessibility features for vision, mobility, hearing, speech, and cognition.{" "}
            <span className="text-blue-500">Learn more...</span>
          </p>
        </div>
      </SettingsCard>

      {/* Vision Section */}
      <SettingsSection title="VISION" className="mb-8">
        <SettingsItem
          icon={<Volume2 className="w-6 h-6 text-white" />}
          label="VoiceOver"
          status="off"
        />
        <div className="h-px bg-white/10 ml-14" />
        <SettingsItem
          icon={<Maximize2 className="w-6 h-6 text-white" />}
          label="Zoom"
          status="off"
        />
        <div className="h-px bg-white/10 ml-14" />
        <SettingsItem
          icon={
            <div className="w-7 h-7 bg-blue-500 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">AA</span>
            </div>
          }
          label="Display & Text Size"
        />
        <div className="h-px bg-white/10 ml-14" />
        <SettingsItem
          icon={
            <div className="w-7 h-7 bg-green-500 rounded-md flex items-center justify-center">
              <PlayCircle className="w-5 h-5 text-white" />
            </div>
          }
          label="Motion"
        />
        <div className="h-px bg-white/10 ml-14" />
        <SettingsItem
          icon={<MessageSquare className="w-6 h-6 text-white" />}
          label="Spoken Content"
        />
        <div className="h-px bg-white/10 ml-14" />
        <SettingsItem
          icon={
            <div className="w-7 h-7 bg-blue-500 rounded-md flex items-center justify-center">
              <Volume2 className="w-5 h-5 text-white" />
            </div>
          }
          label="Audio Descriptions"
          status="off"
        />
      </SettingsSection>

      {/* Physical and Motor Section */}
      <SettingsSection title="PHYSICAL AND MOTOR" className="mb-8">
        <SettingsItem
          icon={
            <div className="w-7 h-7 bg-blue-500 rounded-md flex items-center justify-center">
              <Hand className="w-5 h-5 text-white" />
            </div>
          }
          label="Touch"
        />
        <div className="h-px bg-white/10 ml-14" />
        <SettingsItem
          icon={
            <div className="w-7 h-7 bg-green-500 rounded-md flex items-center justify-center">
              <Scan className="w-5 h-5 text-white" />
            </div>
          }
          label="Face ID & Attention"
        />
      </SettingsSection>
    </IOSSettingsLayout>
  )
}