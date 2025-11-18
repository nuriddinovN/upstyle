import { ChevronRight, User, Settings, History, HelpCircle, LogOut } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Separator } from "./ui/separator";

export function More() {
  const menuItems = [
    { icon: User, label: "Edit Profile", action: () => {} },
    { icon: Settings, label: "Preferences", action: () => {} },
    { icon: History, label: "AI Recommendations History", action: () => {} },
    { icon: HelpCircle, label: "Help & Support", action: () => {} },
  ];

  return (
    <div className="min-h-full bg-white pb-24">
      {/* Header */}
      <div className="px-6 pt-16 pb-6">
        <h1 className="text-3xl mb-6">More</h1>

        {/* Profile Section */}
        <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#5EACA0] to-[#4A9D94] rounded-2xl shadow-lg shadow-[#5EACA0]/20">
          <Avatar className="w-16 h-16 border-2 border-white">
            <AvatarFallback className="bg-white text-[#5EACA0] text-xl">
              JD
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="text-white">John Doe</h3>
            <p className="text-white/80 text-sm">john.doe@email.com</p>
          </div>
          <ChevronRight className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-6">
        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
          {menuItems.map((item, index) => (
            <div key={item.label}>
              <button
                onClick={item.action}
                className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors"
              >
                <item.icon className="w-5 h-5 text-gray-600" />
                <span className="flex-1 text-left">{item.label}</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
              {index < menuItems.length - 1 && (
                <Separator className="ml-14 mr-4" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* App Info */}
      <div className="px-6 mt-6">
        <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600">Version</span>
            <span>1.0.0</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Build</span>
            <span>2025.11.03</span>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <div className="px-6 mt-6">
        <button className="w-full flex items-center justify-center gap-2 p-4 bg-red-50 text-red-600 rounded-2xl hover:bg-red-100 transition-colors shadow-sm">
          <LogOut className="w-5 h-5" />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
}
