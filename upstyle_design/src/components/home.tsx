import { Avatar, AvatarFallback } from "./ui/avatar";
import { ChevronRight, TrendingUp, Shirt, Watch, Package, Plus, ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

const mockCategories = [
  { 
    id: "clothing", 
    name: "Clothing", 
    count: 24,
    items: [
      "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1714143136372-ddaf8b606da7?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=200&h=200&fit=crop"
    ]
  },
  { 
    id: "accessories", 
    name: "Accessories", 
    count: 12,
    items: [
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=200&h=200&fit=crop"
    ]
  },
  { 
    id: "items", 
    name: "Items", 
    count: 8,
    items: [
      "https://images.unsplash.com/photo-1656944227480-98180d2a5155?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=200&h=200&fit=crop"
    ]
  },
];

// Mock items data for category detail view
const allCategoryItems = [
  { id: 1, name: "White T-Shirt", category: "clothing", image: "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?w=400&h=400&fit=crop" },
  { id: 2, name: "Blue Jeans", category: "clothing", image: "https://images.unsplash.com/photo-1714143136372-ddaf8b606da7?w=400&h=400&fit=crop" },
  { id: 3, name: "Leather Jacket", category: "clothing", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop" },
  { id: 4, name: "Summer Dress", category: "clothing", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop" },
  { id: 5, name: "Green Sweater", category: "clothing", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop" },
  { id: 6, name: "Beige Pants", category: "clothing", image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop" },
  { id: 7, name: "Denim Jacket", category: "clothing", image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=400&fit=crop" },
  { id: 8, name: "Black Shirt", category: "clothing", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop" },
  { id: 9, name: "Sunglasses", category: "accessories", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop" },
  { id: 10, name: "Scarf", category: "accessories", image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop" },
  { id: 11, name: "Watch", category: "accessories", image: "https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?w=400&h=400&fit=crop" },
  { id: 12, name: "Handbag", category: "accessories", image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop" },
  { id: 13, name: "Sneakers", category: "items", image: "https://images.unsplash.com/photo-1656944227480-98180d2a5155?w=400&h=400&fit=crop" },
  { id: 14, name: "Boots", category: "items", image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=400&h=400&fit=crop" },
  { id: 15, name: "Running Shoes", category: "items", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop" },
];

const fashionNews = {
  title: "Fall 2024 Trends",
  subtitle: "Sustainable Fashion Takes Center Stage",
  image: "https://images.unsplash.com/photo-1681554437813-efc656499bc6?w=600&h=400&fit=crop",
  url: "https://www.vogue.com"
};

export function Home({
  onNavigateToCloset,
}: {
  onNavigateToCloset: (category?: string) => void;
}) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const currentHour = new Date().getHours();
  const greeting =
    currentHour < 12
      ? "Good morning"
      : currentHour < 18
      ? "Good afternoon"
      : "Good evening";

  const handleFashionNewsClick = () => {
    window.open(fashionNews.url, "_blank");
  };

  // If a category is selected, show category detail view
  if (selectedCategory && selectedCategory !== "create-category") {
    const category = mockCategories.find((cat) => cat.id === selectedCategory);
    const categoryItems = allCategoryItems.filter((item) => item.category === selectedCategory);

    return (
      <div className="min-h-full bg-white pb-6">
        {/* Header */}
        <div className="px-6 pt-16 pb-6">
          <button
            onClick={() => setSelectedCategory(null)}
            className="flex items-center gap-2 text-gray-600 hover:text-[#5EACA0] mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
          <h1 className="text-3xl mb-2">{category?.name}</h1>
          <p className="text-gray-500">{categoryItems.length} items</p>
        </div>

        {/* Items Grid */}
        <div className="px-6">
          <div className="grid grid-cols-3 gap-3">
            {categoryItems.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  // Navigate to item detail - we'll need to add this prop
                  window.dispatchEvent(new CustomEvent('viewItemDetail', { detail: item.id }));
                }}
                className="aspect-square bg-gray-100 rounded-2xl cursor-pointer hover:ring-2 hover:ring-[#5EACA0] transition-all overflow-hidden shadow-sm hover:shadow-md"
              >
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-white pb-6">
      {/* Header */}
      <div className="px-6 pt-16 pb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl">{greeting}</h1>
          <p className="text-gray-500">Ready to style today?</p>
        </div>
        <Avatar className="w-12 h-12 border-2 border-[#5EACA0]">
          <AvatarFallback className="bg-[#5EACA0] text-white">JD</AvatarFallback>
        </Avatar>
      </div>

      {/* Dashboards */}
      <div className="px-6 mb-6 space-y-4">
        {/* Closet Statistics - Compact Version */}
        <div className="bg-gradient-to-br from-[#5EACA0] to-[#4A9D94] rounded-3xl overflow-hidden shadow-lg shadow-[#5EACA0]/20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1558769132-cb1aea8bc7dd?w=600&h=400&fit=crop"
            alt="Closet Background"
            className="w-full h-40 object-cover opacity-20 absolute"
          />
          <div className="p-4 bg-white/50 backdrop-blur-sm relative">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h2 className="text-sm">Closet Statistics</h2>
                <p className="text-xs text-gray-600">Your wardrobe insights</p>
              </div>
            </div>
            
            {/* Compact Statistics */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex-1 bg-white/60 backdrop-blur-sm rounded-lg p-2 text-center">
                <div className="text-lg">59</div>
                <div className="text-xs text-gray-600">Total</div>
              </div>
              <div className="flex-1 bg-white/60 backdrop-blur-sm rounded-lg p-2 text-center">
                <div className="text-lg">24</div>
                <div className="text-xs text-gray-600">Clothing</div>
              </div>
              <div className="flex-1 bg-white/60 backdrop-blur-sm rounded-lg p-2 text-center">
                <div className="text-lg">18</div>
                <div className="text-xs text-gray-600">Upstyled</div>
              </div>
              <div className="flex-1 bg-white/60 backdrop-blur-sm rounded-lg p-2 text-center">
                <div className="text-lg">85%</div>
                <div className="text-xs text-gray-600">Active</div>
              </div>
            </div>
          </div>
        </div>

        {/* Fashion Explore */}
        <div
          className="bg-gradient-to-br from-[#5EACA0]/10 to-[#4A9D94]/10 border border-[#5EACA0]/20 rounded-3xl overflow-hidden cursor-pointer hover:border-[#5EACA0] hover:shadow-lg hover:shadow-[#5EACA0]/10 transition-all"
          onClick={handleFashionNewsClick}
        >
          <ImageWithFallback
            src={fashionNews.image}
            alt={fashionNews.title}
            className="w-full h-40 object-cover"
          />
          <div className="p-4 bg-white/50 backdrop-blur-sm">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-sm mb-1">{fashionNews.title}</h3>
                <p className="text-xs text-gray-600">{fashionNews.subtitle}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-[#5EACA0] flex-shrink-0 ml-2" />
            </div>
          </div>
        </div>
      </div>

      {/* My Wardrobe */}
      <div className="px-6">
        <h3 className="mb-4">My Wardrobe</h3>
        <div className="grid grid-cols-2 gap-3">
          {mockCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className="bg-white border border-gray-100 rounded-2xl p-3 cursor-pointer hover:border-[#5EACA0] hover:shadow-md shadow-sm transition-all"
            >
              {/* Item Preview Grid */}
              <div className="grid grid-cols-2 gap-1 mb-3">
                {category.items.slice(0, 4).map((item, idx) => (
                  <div key={idx} className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src={item}
                      alt={`${category.name} item`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <h4 className="text-sm">{category.name}</h4>
              <p className="text-gray-500 text-xs">{category.count} items</p>
            </div>
          ))}
          
          {/* Add Category Card */}
          <div
            onClick={() => setSelectedCategory("create-category")}
            className="bg-white border-2 border-dashed border-gray-200 rounded-2xl p-3 cursor-pointer hover:border-[#5EACA0] hover:shadow-md shadow-sm transition-all flex flex-col items-center justify-center aspect-square"
          >
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">
              <Plus className="w-6 h-6 text-gray-400" />
            </div>
            <h4 className="text-sm text-gray-600">Add Category</h4>
          </div>
        </div>
      </div>
    </div>
  );
}