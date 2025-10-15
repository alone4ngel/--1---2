"use client"

import { IOSSettingsLayout, SettingsCard, SettingsItem, SettingsSection } from "./ios-settings-layout"
import { Cloud, ShoppingBag, MapPin, Smartphone } from "lucide-react"

interface AppleCarePageProps {
  onBack?: () => void
}

export function AppleCarePage({ onBack }: AppleCarePageProps) {
  return (
    <IOSSettingsLayout title="" onBack={onBack}>
      {/* AppleCare Logo Card */}
      <SettingsCard className="mb-6">
        <div className="flex flex-col items-center py-6 px-6">
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-3 relative overflow-hidden">
            <img 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/rounded-in-photoretrica-2-1760545274220.png"
              alt="Apple Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-[20px] font-semibold mb-1">AppleCare+</h2>
          <p className="text-[13px] text-gray-500">Protection System</p>
        </div>
      </SettingsCard>

      {/* Account Settings */}
      <SettingsSection className="mb-6">
        <SettingsItem
          label="Name, Phone Numbers, Email"
        />
        <div className="h-px bg-white/10" />
        <SettingsItem
          label="Password & Security"
        />
        <div className="h-px bg-white/10" />
        <SettingsItem
          label="Payment & Shipping"
          value="Mastercard"
        />
        <div className="h-px bg-white/10" />
        <SettingsItem
          label="Subscriptions"
        />
      </SettingsSection>

      {/* Compromised Services */}
      <SettingsSection className="mb-6">
        <SettingsItem
          icon={
            <div className="w-7 h-7 rounded-md flex items-center justify-center">
              <Cloud className="w-6 h-6 text-blue-500" />
            </div>
          }
          label="iCloud"
          value="Compromised"
          status="compromised"
        />
        <div className="h-px bg-red-900/50" />
        <SettingsItem
          icon={
            <div className="w-7 h-7 rounded-md flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-blue-500" />
            </div>
          }
          label="Media & Purchases"
          value="Compromised"
          status="compromised"
        />
        <div className="h-px bg-red-900/50" />
        <SettingsItem
          icon={
            <div className="w-7 h-7 rounded-md flex items-center justify-center">
              <MapPin className="w-6 h-6 text-green-500" />
            </div>
          }
          label="Find My"
          value="Compromised"
          status="compromised"
        />
      </SettingsSection>

      {/* iPhone Section */}
      <SettingsSection className="mb-6">
        <SettingsItem
          icon={
            <div className="w-7 h-7 rounded-md flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-gray-400" />
            </div>
          }
          label="iPhone"
          value="This iPhone"
        />
      </SettingsSection>

      {/* Repair Button */}
      <button className="w-full bg-red-500 hover:bg-red-600 transition-colors text-white text-[17px] font-semibold py-3.5 rounded-xl">
        Repair now
      </button>
    </IOSSettingsLayout>
  )
}