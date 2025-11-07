import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function ProfileSetup({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete();
  };

  const handleSkip = () => {
    onComplete();
  };

  return (
    <div className="h-full bg-white flex items-center justify-center px-6 overflow-y-auto">
      <div className="w-full py-8 max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl mb-2">Complete Your Profile</h1>
          <p className="text-gray-500">Help us personalize your experience</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="fullname">Full Name</Label>
              <Input
                id="fullname"
                type="text"
                placeholder="John Doe"
                className="rounded-xl h-12"
                required
              />
            </div>

            {/* Age */}
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                placeholder="25"
                className="rounded-xl h-12"
                required
                min="13"
                max="120"
              />
            </div>

            {/* Gender */}
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Select required>
                <SelectTrigger className="rounded-xl h-12">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="non-binary">Non-binary</SelectItem>
                  <SelectItem value="prefer-not-to-say">
                    Prefer not to say
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Style Preference */}
            <div className="space-y-2">
              <Label htmlFor="style">Style Preference</Label>
              <Select required>
                <SelectTrigger className="rounded-xl h-12">
                  <SelectValue placeholder="Select your style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="casual">Casual</SelectItem>
                  <SelectItem value="formal">Formal</SelectItem>
                  <SelectItem value="streetwear">Streetwear</SelectItem>
                  <SelectItem value="bohemian">Bohemian</SelectItem>
                  <SelectItem value="minimalist">Minimalist</SelectItem>
                  <SelectItem value="vintage">Vintage</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Optional Section */}
            <div className="pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-4">
                Optional (for better recommendations)
              </p>

              <div className="grid grid-cols-2 gap-4">
                {/* Height */}
                <div className="space-y-2">
                  <Label htmlFor="height" className="text-sm">
                    Height (cm)
                  </Label>
                  <Input
                    id="height"
                    type="number"
                    placeholder="170"
                    className="rounded-xl h-12"
                    min="100"
                    max="250"
                  />
                </div>

                {/* Weight */}
                <div className="space-y-2">
                  <Label htmlFor="weight" className="text-sm">
                    Weight (kg)
                  </Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="70"
                    className="rounded-xl h-12"
                    min="30"
                    max="300"
                  />
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="ghost"
                onClick={handleSkip}
                className="flex-1 rounded-xl h-12"
              >
                Skip
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-[#5EACA0] hover:bg-[#4A9D94] text-white rounded-xl h-12"
              >
                Continue
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
