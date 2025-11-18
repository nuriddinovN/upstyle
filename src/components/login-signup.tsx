import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function LoginSignup({ onComplete }: { onComplete: (isSignup: boolean) => void }) {
  const [userType, setUserType] = useState<"user" | "maker">("user");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(!isLogin);
  };

  return (
    <div className="h-full bg-white flex items-center justify-center px-6 overflow-y-auto">
      <div className="w-full py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl mb-2">UpStyle</h1>
          <p className="text-gray-600">Reimagine your wardrobe</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-8">
          {/* User Type Toggle */}
          <div className="mb-6">
            <div className="flex gap-2 p-1 bg-gray-100 rounded-full">
              <button
                onClick={() => setUserType("user")}
                className={`flex-1 py-2 px-4 rounded-full transition-all ${
                  userType === "user"
                    ? "bg-[#5EACA0] text-white"
                    : "bg-transparent text-gray-600"
                }`}
              >
                User
              </button>
              <button
                onClick={() => setUserType("maker")}
                className={`flex-1 py-2 px-4 rounded-full transition-all ${
                  userType === "maker"
                    ? "bg-[#5EACA0] text-white"
                    : "bg-transparent text-gray-600"
                }`}
              >
                Maker
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3 text-center px-2">
              {userType === "user"
                ? "Manage your wardrobe, get styling tips, and discover upcycling ideas"
                : "Connect with users to transform their clothes through sustainable upcycling"}
            </p>
          </div>

          {/* Login/Signup Tabs */}
          <Tabs value={isLogin ? "login" : "signup"} className="mb-6">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger
                value="login"
                onClick={() => setIsLogin(true)}
                className="data-[state=active]:bg-[#5EACA0] data-[state=active]:text-white"
              >
                Login
              </TabsTrigger>
              <TabsTrigger
                value="signup"
                onClick={() => setIsLogin(false)}
                className="data-[state=active]:bg-[#5EACA0] data-[state=active]:text-white"
              >
                Sign Up
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="rounded-xl h-12"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="rounded-xl h-12"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#5EACA0] hover:bg-[#4A9D94] text-white rounded-xl h-12 mt-6"
                >
                  Login
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="rounded-xl h-12"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="your@email.com"
                    className="rounded-xl h-12"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="••••••••"
                    className="rounded-xl h-12"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#5EACA0] hover:bg-[#4A9D94] text-white rounded-xl h-12 mt-6"
                >
                  Sign Up
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          {/* Social Login */}
          <div className="space-y-3">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full rounded-xl"
              onClick={onComplete}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </Button>

            <Button
              type="button"
              variant="outline"
              className="w-full rounded-xl"
              onClick={onComplete}
            >
              Huawei ID
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
