import { useState } from "react";
import { Upload, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AddItem({ onClose }: { onClose: () => void }) {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [season, setSeason] = useState("");
  const [color, setColor] = useState("");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    // In a real app, this would save to backend
    alert("Item saved to your closet!");
    onClose();
  };

  return (
    <div className="min-h-full bg-white pb-24 overflow-y-auto">
      {/* Header */}
      <div className="px-6 pt-16 pb-6 flex items-center justify-between sticky top-0 bg-white z-10">
        <h1 className="text-3xl">Add New Item</h1>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="px-6 space-y-6">
        {/* Image Upload */}
        <div>
          <Label>Item Photo</Label>
          <div className="mt-2">
            {!uploadedImage ? (
              <label className="block aspect-square bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 hover:border-[#5EACA0] cursor-pointer transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <div className="h-full flex flex-col items-center justify-center text-gray-400">
                  <Upload className="w-12 h-12 mb-2" />
                  <span>Upload a photo</span>
                </div>
              </label>
            ) : (
              <div className="relative aspect-square rounded-3xl overflow-hidden">
                <img
                  src={uploadedImage}
                  alt="Uploaded item"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setUploadedImage(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Item Name */}
        <div>
          <Label htmlFor="name">Item Name</Label>
          <Input
            id="name"
            placeholder="e.g., Blue Denim Jacket"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className="rounded-xl mt-1"
          />
        </div>

        {/* Description */}
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Add details about this item..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="rounded-xl mt-1"
            rows={3}
          />
        </div>

        {/* Category */}
        <div>
          <Label>Category</Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="rounded-xl mt-1">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="clothing">Clothing</SelectItem>
              <SelectItem value="shoes">Shoes</SelectItem>
              <SelectItem value="accessories">Accessories</SelectItem>
              <SelectItem value="home">Home Items</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Season */}
        <div>
          <Label>Season</Label>
          <Select value={season} onValueChange={setSeason}>
            <SelectTrigger className="rounded-xl mt-1">
              <SelectValue placeholder="Select season" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="spring">Spring</SelectItem>
              <SelectItem value="summer">Summer</SelectItem>
              <SelectItem value="fall">Fall</SelectItem>
              <SelectItem value="winter">Winter</SelectItem>
              <SelectItem value="all">All Seasons</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Color */}
        <div>
          <Label>Primary Color</Label>
          <Select value={color} onValueChange={setColor}>
            <SelectTrigger className="rounded-xl mt-1">
              <SelectValue placeholder="Select color" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="white">White</SelectItem>
              <SelectItem value="black">Black</SelectItem>
              <SelectItem value="blue">Blue</SelectItem>
              <SelectItem value="red">Red</SelectItem>
              <SelectItem value="yellow">Yellow</SelectItem>
              <SelectItem value="green">Green</SelectItem>
              <SelectItem value="gray">Gray</SelectItem>
              <SelectItem value="beige">Beige</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Save Button */}
        <Button
          onClick={handleSave}
          className="w-full bg-[#5EACA0] hover:bg-[#4A9D94] text-white rounded-xl h-12 shadow-lg shadow-[#5EACA0]/20"
          disabled={!uploadedImage || !itemName}
        >
          Save to Closet
        </Button>
      </div>
    </div>
  );
}
