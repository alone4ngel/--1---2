"use client";

import { IOSSettingsLayout, SettingsCard, SettingsItem, SettingsSection } from "./ios-settings-layout";
import { Smartphone } from "lucide-react";

interface AppleCarePageProps {
  onBack?: () => void;
}

export function AppleCarePage({ onBack }: AppleCarePageProps) {
  return (
    <IOSSettingsLayout title="" onBack={onBack}>
      {/* AppleCare Logo Card */}
      <SettingsCard className="mb-8">
        <div className="flex flex-col items-center py-8 px-6 !w-[99.5%] !h-[290px]">
          <div className="w-32 h-32 rounded-2xl flex items-center justify-center mb-4 relative overflow-hidden">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/rounded-in-photoretrica-2-1760545274220.png"
              alt="Apple Logo"
              className="w-full h-full object-contain" />

          </div>
          <h2 className="text-[32px] font-semibold mb-2 tracking-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}>AppleCare+</h2>
          <p className="text-[17px] text-gray-500" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}>Protection System</p>
        </div>
      </SettingsCard>

      {/* Account Settings */}
      <SettingsSection className="mb-8">
        <SettingsItem
          label="Name, Phone Numbers, Email" />

        <div className="h-px bg-white/10" />
        <SettingsItem
          label="Password & Security" />

        <div className="h-px bg-white/10" />
        <SettingsItem
          label="Payment & Shipping"
          value="Mastercard" />

        <div className="h-px bg-white/10" />
        <SettingsItem
          label="Subscriptions" />

      </SettingsSection>

      {/* Compromised Services */}
      <SettingsSection className="mb-8">
        <SettingsItem
          icon={
          <div className="w-8 h-8 flex items-center justify-center">
              <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/icloud-1760615999088.svg"
              alt="iCloud"
              className="w-8 h-8" />

            </div>
          }
          label="iCloud"
          value="Compromised"
          status="compromised" />

        <div className="h-px bg-red-900/50" />
        <SettingsItem
          icon={
          <div className="w-8 h-8 flex items-center justify-center">
              <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/appstore-1760616001843.svg"
              alt="App Store"
              className="w-8 h-8" />

            </div>
          }
          label="Media & Purchases"
          value="Compromised"
          status="compromised" />

        <div className="h-px bg-red-900/50" />
        <SettingsItem
          icon={
          <div className="w-8 h-8 flex items-center justify-center">
              <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/locator-1760616003709.svg"
              alt="Find My"
              className="w-8 h-8" />

            </div>
          }
          label="Find My"
          value="Compromised"
          status="compromised" />

      </SettingsSection>

      {/* iPhone Section */}
      <SettingsSection className="mb-8">
        <SettingsItem
          icon={
          <div className="w-8 h-8 rounded-md flex items-center justify-center">
              <Smartphone className="w-7 h-7 text-gray-400" />
            </div>
          }
          label="iPhone"
          value="This iPhone" />

      </SettingsSection>

      {/* Repair Button */}
      <button className="w-full bg-red-500 hover:bg-red-600 transition-colors text-white text-[19px] font-semibold py-4 rounded-xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}>
        Repair now
      </button>
    </IOSSettingsLayout>);

}