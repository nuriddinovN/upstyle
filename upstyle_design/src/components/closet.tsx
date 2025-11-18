import { useState } from "react";
import { Filter, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const mockItems = [
  { id: 1, name: "White T-Shirt", category: "clothing", type: "t-shirt", season: "spring", color: "white", occasion: "casual", upstyled: true, image: "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?w=400&h=400&fit=crop" },
  { id: 2, name: "Blue Jeans", category: "clothing", type: "pants", season: "all", color: "blue", occasion: "casual", upstyled: false, image: "https://images.unsplash.com/photo-1714143136372-ddaf8b606da7?w=400&h=400&fit=crop" },
  { id: 3, name: "Leather Jacket", category: "clothing", type: "jacket", season: "winter", color: "black", occasion: "casual", upstyled: true, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop" },
  { id: 4, name: "Summer Dress", category: "clothing", type: "dress", season: "summer", color: "yellow", occasion: "party", upstyled: false, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop" },
  { id: 5, name: "Wool Coat", category: "clothing", type: "coat", season: "winter", color: "gray", occasion: "formal", upstyled: true, image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=400&fit=crop" },
  { id: 6, name: "Sneakers", category: "items", type: "shoes", season: "all", color: "white", occasion: "casual", upstyled: false, image: "https://images.unsplash.com/photo-1656944227480-98180d2a5155?w=400&h=400&fit=crop" },
  { id: 7, name: "Sunglasses", category: "accessories", type: "sunglasses", season: "summer", color: "black", occasion: "casual", upstyled: true, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop" },
  { id: 8, name: "Scarf", category: "accessories", type: "scarf", season: "winter", color: "red", occasion: "casual", upstyled: false, image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop" },
  { id: 9, name: "Green Sweater", category: "clothing", type: "sweater", season: "fall", color: "green", occasion: "casual", upstyled: true, image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop" },
  { id: 10, name: "Beige Pants", category: "clothing", type: "pants", season: "spring", color: "beige", occasion: "formal", upstyled: false, image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop" },
  { id: 11, name: "Black Boots", category: "items", type: "shoes", season: "winter", color: "black", occasion: "formal", upstyled: true, image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=400&h=400&fit=crop" },
  { id: 12, name: "Denim Jacket", category: "clothing", type: "jacket", season: "fall", color: "blue", occasion: "casual", upstyled: false, image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=400&fit=crop" },
  { id: 13, name: "Watch", category: "accessories", type: "watch", season: "all", color: "silver", occasion: "formal", upstyled: true, image: "https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?w=400&h=400&fit=crop" },
  { id: 14, name: "Black Shirt", category: "clothing", type: "shirt", season: "all", color: "black", occasion: "formal", upstyled: false, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop" },
  { id: 15, name: "Red Dress", category: "clothing", type: "dress", season: "summer", color: "red", occasion: "party", upstyled: true, image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=400&fit=crop" },
];

type SortBy = "all" | "season" | "color" | "type" | "occasion" | "style";

const ItemCard = ({ item, onClick }: { item: typeof mockItems[0]; onClick: () => void }) => (
  <div
    onClick={onClick}
    className="aspect-square bg-gray-100 rounded-2xl cursor-pointer hover:ring-2 hover:ring-[#5EACA0] transition-all overflow-hidden shadow-sm hover:shadow-md relative"
  >
    <ImageWithFallback
      src={item.image}
      alt={item.name}
      className="w-full h-full object-cover"
    />
    {item.upstyled && (
      <div className="absolute top-2 right-2 w-6 h-6 bg-[#5EACA0] rounded-full flex items-center justify-center shadow-lg">
        <Sparkles className="w-3 h-3 text-white" />
      </div>
    )}
  </div>
);

export function Closet({ onSelectItem }: { onSelectItem: (id: number) => void }) {
  const [sortBy, setSortBy] = useState<SortBy>("all");
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [showUpstyledOnly, setShowUpstyledOnly] = useState(false);

  let filteredItems = selectedFilter
    ? mockItems.filter(
        (item) =>
          item.season === selectedFilter ||
          item.color === selectedFilter ||
          item.category === selectedFilter ||
          item.type === selectedFilter ||
          item.occasion === selectedFilter
      )
    : mockItems;
  
  // Apply upstyled filter
  if (showUpstyledOnly) {
    filteredItems = filteredItems.filter((item) => item.upstyled);
  }

  const renderBySort = () => {
    if (sortBy === "all") {
      return (
        <div className="grid grid-cols-3 gap-3">
          {filteredItems.map((item) => (
            <ItemCard key={item.id} item={item} onClick={() => onSelectItem(item.id)} />
          ))}
        </div>
      );
    }

    if (sortBy === "season") {
      const seasons = ["spring", "summer", "fall", "winter", "all"];
      return (
        <div className="space-y-6">
          {seasons.map((season) => {
            const items = filteredItems.filter((item) => item.season === season);
            if (items.length === 0) return null;
            return (
              <div key={season}>
                <h4 className="mb-3 capitalize">{season === "all" ? "All Seasons" : season}</h4>
                <div className="grid grid-cols-3 gap-3">
                  {items.map((item) => (
                    <ItemCard key={item.id} item={item} onClick={() => onSelectItem(item.id)} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    if (sortBy === "color") {
      const colors = [
        { name: "white", hex: "#FFFFFF" },
        { name: "black", hex: "#000000" },
        { name: "blue", hex: "#3B82F6" },
        { name: "red", hex: "#EF4444" },
        { name: "yellow", hex: "#FACC15" },
        { name: "green", hex: "#10B981" },
        { name: "gray", hex: "#6B7280" },
        { name: "beige", hex: "#D4C5B0" },
        { name: "silver", hex: "#C0C0C0" },
      ];
      return (
        <div className="space-y-6">
          {colors.map((color) => {
            const items = filteredItems.filter((item) => item.color === color.name);
            if (items.length === 0) return null;
            return (
              <div key={color.name}>
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-6 h-6 rounded-full border border-gray-300"
                    style={{ backgroundColor: color.hex }}
                  />
                  <h4 className="capitalize">{color.name}</h4>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {items.map((item) => (
                    <ItemCard key={item.id} item={item} onClick={() => onSelectItem(item.id)} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    if (sortBy === "type") {
      const types = ["t-shirt", "pants", "jacket", "dress", "coat", "shoes", "sweater", "shirt", "sunglasses", "scarf", "watch"];
      return (
        <div className="space-y-6">
          {types.map((type) => {
            const items = filteredItems.filter((item) => item.type === type);
            if (items.length === 0) return null;
            return (
              <div key={type}>
                <h4 className="mb-3 capitalize">{type}</h4>
                <div className="grid grid-cols-3 gap-3">
                  {items.map((item) => (
                    <ItemCard key={item.id} item={item} onClick={() => onSelectItem(item.id)} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    if (sortBy === "occasion") {
      const occasions = ["casual", "formal", "party"];
      return (
        <div className="space-y-6">
          {occasions.map((occasion) => {
            const items = filteredItems.filter((item) => item.occasion === occasion);
            if (items.length === 0) return null;
            return (
              <div key={occasion}>
                <h4 className="mb-3 capitalize">{occasion}</h4>
                <div className="grid grid-cols-3 gap-3">
                  {items.map((item) => (
                    <ItemCard key={item.id} item={item} onClick={() => onSelectItem(item.id)} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    if (sortBy === "style") {
      const styles = ["upstyled", "not upstyled"];
      return (
        <div className="space-y-6">
          {styles.map((style) => {
            const items = filteredItems.filter((item) => item.upstyled === (style === "upstyled"));
            if (items.length === 0) return null;
            return (
              <div key={style}>
                <h4 className="mb-3 capitalize">{style}</h4>
                <div className="grid grid-cols-3 gap-3">
                  {items.map((item) => (
                    <ItemCard key={item.id} item={item} onClick={() => onSelectItem(item.id)} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  };

  return (
    <div className="min-h-full bg-white pb-6">
      {/* Header */}
      <div className="px-6 pt-16 pb-6">
        <h1 className="text-3xl mb-2">My Items</h1>
        <p className="text-gray-500">{filteredItems.length} items</p>
      </div>

      {/* Filters */}
      <div className="px-6 mb-6 flex gap-3 overflow-x-auto pb-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="rounded-full border-gray-200 hover:border-[#5EACA0] flex-shrink-0 shadow-sm"
            >
              <Filter className="w-4 h-4 mr-2" />
              Sort
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="rounded-xl">
            <DropdownMenuItem onClick={() => setSortBy("all")}>
              All Items
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSortBy("color")}>
              By Color
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSortBy("season")}>
              By Season
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSortBy("type")}>
              By Type
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSortBy("occasion")}>
              By Occasion
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSortBy("style")}>
              By Style
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button
          variant={showUpstyledOnly ? "default" : "outline"}
          onClick={() => setShowUpstyledOnly(!showUpstyledOnly)}
          className={`rounded-full flex-shrink-0 shadow-sm ${
            showUpstyledOnly
              ? "bg-[#5EACA0] hover:bg-[#4A9D94] text-white"
              : "border-gray-200 hover:border-[#5EACA0]"
          }`}
        >
          <Sparkles className="w-4 h-4 mr-2" />
          Upstyled
        </Button>
      </div>

      {/* Items Grid */}
      <div className="px-6">{renderBySort()}</div>
    </div>
  );
}