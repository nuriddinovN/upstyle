import { useState, useEffect } from "react";
import { SplashScreen } from "./components/splash-screen";
import { LoginSignup } from "./components/login-signup";
import { ProfileSetup } from "./components/profile-setup";
import { Onboarding } from "./components/onboarding";
import { Home } from "./components/home";
import { Closet } from "./components/closet";
import { ItemDetail } from "./components/item-detail";
import { AddItem } from "./components/add-item";
import { Explore } from "./components/explore";
import { More } from "./components/more";
import { BottomNav } from "./components/bottom-nav";

type AppState =
  | "splash"
  | "auth"
  | "profile-setup"
  | "onboarding"
  | "main";

type MainSection = "home" | "closet" | "add" | "explore" | "more";

export default function App() {
  const [appState, setAppState] = useState<AppState>("splash");
  const [activeSection, setActiveSection] = useState<MainSection>("home");
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [isSignup, setIsSignup] = useState(false);

  // Listen for custom event from Home component for item selection
  useEffect(() => {
    const handleViewItemDetail = (event: any) => {
      setSelectedItemId(event.detail);
    };

    window.addEventListener('viewItemDetail', handleViewItemDetail);
    return () => window.removeEventListener('viewItemDetail', handleViewItemDetail);
  }, []);

  const renderContent = () => {
    if (selectedItemId) {
      return (
        <ItemDetail
          itemId={selectedItemId}
          onBack={() => setSelectedItemId(null)}
        />
      );
    }

    switch (activeSection) {
      case "home":
        return (
          <Home
            onNavigateToCloset={(category) => {
              setActiveSection("closet");
            }}
          />
        );
      case "closet":
        return <Closet onSelectItem={setSelectedItemId} />;
      case "add":
        return <AddItem onClose={() => setActiveSection("home")} />;
      case "explore":
        return <Explore />;
      case "more":
        return <More />;
      default:
        return <Home onNavigateToCloset={() => setActiveSection("closet")} />;
    }
  };

  // Mobile app container wrapper
  const MobileContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-[430px] h-[932px] max-h-screen bg-white rounded-[3rem] shadow-2xl overflow-hidden relative">
        {/* Mobile notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-50" />
        {/* Content */}
        <div className="h-full overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );

  if (appState === "splash") {
    return (
      <MobileContainer>
        <SplashScreen onComplete={() => setAppState("auth")} />
      </MobileContainer>
    );
  }

  if (appState === "auth") {
    return (
      <MobileContainer>
        <LoginSignup
          onComplete={(signup) => {
            setIsSignup(signup);
            setAppState(signup ? "profile-setup" : "onboarding");
          }}
        />
      </MobileContainer>
    );
  }

  if (appState === "profile-setup") {
    return (
      <MobileContainer>
        <ProfileSetup onComplete={() => setAppState("onboarding")} />
      </MobileContainer>
    );
  }

  if (appState === "onboarding") {
    return (
      <MobileContainer>
        <Onboarding onComplete={() => setAppState("main")} />
      </MobileContainer>
    );
  }

  return (
    <MobileContainer>
      <div className="relative h-full bg-white flex flex-col">
        <div className="flex-1 overflow-y-auto">
          {renderContent()}
        </div>
        {!selectedItemId && (
          <BottomNav active={activeSection} onNavigate={setActiveSection} />
        )}
      </div>
    </MobileContainer>
  );
}