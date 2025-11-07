import { useState } from "react";
import { ArrowLeft, Sparkles, Recycle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const mockItem = {
  id: 1,
  name: "White T-Shirt",
  description: "Classic white cotton t-shirt, perfect for casual wear",
  category: "clothing",
  season: "spring",
  color: "white",
  brand: "StyleCo",
  size: "M",
  condition: "Excellent",
  purchaseDate: "Jan 2024",
  timesWorn: 12,
  image: "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?w=600&h=600&fit=crop",
};

export function ItemDetail({
  itemId,
  onBack,
}: {
  itemId: number;
  onBack: () => void;
}) {
  const [showStyleDialog, setShowStyleDialog] = useState(false);
  const [showUpcycleDialog, setShowUpcycleDialog] = useState(false);
  const [styleOccasion, setStyleOccasion] = useState("");
  const [upcycleGoal, setUpcycleGoal] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleStyle = () => {
    setShowResults(true);
  };

  const handleUpcycle = () => {
    setShowResults(true);
  };

  return (
    <div className="min-h-full bg-white pb-6">
      {/* Header */}
      <div className="px-6 pt-16 pb-6 flex items-center gap-4">
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-2xl">Item Details</h1>
      </div>

      {/* Item Image */}
      <div className="px-6 mb-6">
        <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden">
          <ImageWithFallback
            src={mockItem.image}
            alt={mockItem.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Item Info */}
      <div className="px-6 mb-6">
        <h2 className="text-2xl mb-2">{mockItem.name}</h2>
        <p className="text-gray-600 mb-4">{mockItem.description}</p>

        <div className="flex gap-2 flex-wrap">
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
            {mockItem.category}
          </span>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm capitalize">
            {mockItem.season}
          </span>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm capitalize">
            {mockItem.color}
          </span>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm capitalize">
            {mockItem.brand}
          </span>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm capitalize">
            {mockItem.size}
          </span>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm capitalize">
            {mockItem.condition}
          </span>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm capitalize">
            {mockItem.purchaseDate}
          </span>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm capitalize">
            {mockItem.timesWorn} times worn
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-6 flex gap-3">
        <Button
          onClick={() => setShowStyleDialog(true)}
          className="flex-1 bg-[#5EACA0] hover:bg-[#4A9D94] text-white rounded-xl h-14 shadow-lg shadow-[#5EACA0]/20"
        >
          <Sparkles className="w-5 h-5 mr-2" />
          Style This
        </Button>

        <Button
          onClick={() => setShowUpcycleDialog(true)}
          variant="outline"
          className="flex-1 border-[#5EACA0] text-black rounded-xl h-14 hover:bg-[#5EACA0]/10 shadow-sm"
        >
          <Recycle className="w-5 h-5 mr-2" />
          Upcycle
        </Button>
      </div>

      {/* Style Dialog */}
      <Dialog open={showStyleDialog} onOpenChange={setShowStyleDialog}>
        <DialogContent className="rounded-3xl max-w-md">
          <DialogHeader>
            <DialogTitle>Style This Item</DialogTitle>
          </DialogHeader>

          {!showResults ? (
            <div className="space-y-4">
              <div>
                <Label>Occasion or Style</Label>
                <Input
                  placeholder="e.g., casual, formal, summer party"
                  value={styleOccasion}
                  onChange={(e) => setStyleOccasion(e.target.value)}
                  className="rounded-xl mt-1"
                />
              </div>
              <Button
                onClick={handleStyle}
                className="w-full bg-[#5EACA0] hover:bg-[#4A9D94] text-white rounded-xl"
              >
                Generate Outfit
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                AI-generated outfit combinations based on your wardrobe:
              </p>
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gray-100 rounded-xl"
                  />
                ))}
              </div>
              <div className="p-4 bg-[#5EACA0]/10 rounded-xl">
                <p className="text-sm">
                  <strong>Outfit Suggestion:</strong> Pair this white t-shirt with
                  your blue jeans and sneakers for a casual {styleOccasion || "look"}.
                </p>
              </div>
              <Button
                onClick={() => {
                  setShowResults(false);
                  setShowStyleDialog(false);
                  setStyleOccasion("");
                }}
                className="w-full rounded-xl"
                variant="outline"
              >
                Close
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Upcycle Dialog */}
      <Dialog open={showUpcycleDialog} onOpenChange={setShowUpcycleDialog}>
        <DialogContent className="rounded-3xl max-w-md">
          <DialogHeader>
            <DialogTitle>Upcycle Ideas</DialogTitle>
          </DialogHeader>

          {!showResults ? (
            <div className="space-y-4">
              <div>
                <Label>What would you like to create?</Label>
                <Textarea
                  placeholder="e.g., tote bag, crop top, cushion cover"
                  value={upcycleGoal}
                  onChange={(e) => setUpcycleGoal(e.target.value)}
                  className="rounded-xl mt-1"
                  rows={3}
                />
              </div>
              <Button
                onClick={handleUpcycle}
                className="w-full bg-[#5EACA0] hover:bg-[#4A9D94] text-white rounded-xl"
              >
                Get AI Ideas
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                AI-powered upcycling suggestions:
              </p>
              <div className="space-y-3">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h4 className="mb-1">Idea 1: Tote Bag</h4>
                  <p className="text-sm text-gray-600">
                    Cut and sew the t-shirt into a reusable shopping bag. Difficulty: Easy
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h4 className="mb-1">Idea 2: Crop Top</h4>
                  <p className="text-sm text-gray-600">
                    Trim and hem for a trendy cropped style. Difficulty: Easy
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h4 className="mb-1">Idea 3: Cushion Cover</h4>
                  <p className="text-sm text-gray-600">
                    Transform into decorative pillow covers. Difficulty: Medium
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full rounded-xl border-[#5EACA0] hover:bg-[#5EACA0]/10"
              >
                Connect to Maker
              </Button>
              <Button
                onClick={() => {
                  setShowResults(false);
                  setShowUpcycleDialog(false);
                  setUpcycleGoal("");
                }}
                className="w-full rounded-xl"
                variant="ghost"
              >
                Close
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}