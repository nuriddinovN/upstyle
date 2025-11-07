import { Home, ShoppingBag, Plus, Users, Menu } from "lucide-react";

type NavSection = "home" | "closet" | "add" | "explore" | "more";

export function BottomNav({
  active,
  onNavigate,
}: {
  active: NavSection;
  onNavigate: (section: NavSection) => void;
}) {
  const navItems: { id: NavSection; icon: any; label: string }[] = [
    { id: "home", icon: Home, label: "Home" },
    { id: "closet", icon: ShoppingBag, label: "Closet" },
    { id: "add", icon: Plus, label: "Add" },
    { id: "explore", icon: Users, label: "Makers" },
    { id: "more", icon: Menu, label: "More" },
  ];

  return (
    <div className="flex-shrink-0 bg-white border-t border-gray-100 px-4 pb-6 z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          const isAdd = item.id === "add";

          if (isAdd) {
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="flex flex-col items-center justify-center -mt-6"
              >
                <div className="w-14 h-14 bg-[#5EACA0] rounded-full flex items-center justify-center shadow-lg">
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </button>
            );
          }

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="flex flex-col items-center justify-center gap-1 min-w-[60px]"
            >
              <Icon
                className={`w-6 h-6 ${
                  isActive ? "text-[#5EACA0]" : "text-gray-400"
                }`}
              />
              <span
                className={`text-xs ${
                  isActive ? "text-[#5EACA0]" : "text-gray-400"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}