import { useState } from "react";
import { MapPin, Star, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const mockMakers = [
  {
    id: 1,
    name: "Sarah Chen",
    location: "San Francisco, CA",
    specialty: "Denim Upcycling",
    rating: 4.9,
    projects: 127,
  },
  {
    id: 2,
    name: "Marcus Johnson",
    location: "Brooklyn, NY",
    specialty: "Vintage Restoration",
    rating: 4.8,
    projects: 89,
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    location: "Austin, TX",
    specialty: "Embroidery & Patches",
    rating: 5.0,
    projects: 156,
  },
  {
    id: 4,
    name: "David Kim",
    location: "Seattle, WA",
    specialty: "Streetwear Customization",
    rating: 4.7,
    projects: 93,
  },
  {
    id: 5,
    name: "Lisa Patel",
    location: "Los Angeles, CA",
    specialty: "Sustainable Redesign",
    rating: 4.9,
    projects: 142,
  },
];

export function Explore() {
  const [selectedMaker, setSelectedMaker] = useState<number | null>(null);

  const maker = mockMakers.find((m) => m.id === selectedMaker);

  return (
    <div className="min-h-full bg-white pb-24">
      {/* Header */}
      <div className="px-6 pt-16 pb-6">
        <h1 className="text-3xl mb-2">Explore Makers</h1>
        <p className="text-gray-500">Connect with skilled upcycling experts</p>
      </div>

      {/* Makers List */}
      <div className="px-6 space-y-4">
        {mockMakers.map((maker) => (
          <div
            key={maker.id}
            onClick={() => setSelectedMaker(maker.id)}
            className="bg-white border border-gray-100 rounded-2xl p-4 cursor-pointer hover:border-[#5EACA0] transition-all shadow-sm hover:shadow-md"
          >
            <div className="flex gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-[#5EACA0] to-[#4A9D94] rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 text-white">
                {maker.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="truncate">{maker.name}</h3>
                  <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                </div>
                <p className="text-sm text-gray-600 mb-2">{maker.specialty}</p>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span className="truncate">{maker.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-[#5EACA0] text-[#5EACA0]" />
                    <span>{maker.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Maker Profile Dialog */}
      <Dialog open={selectedMaker !== null} onOpenChange={() => setSelectedMaker(null)}>
        <DialogContent className="rounded-3xl max-w-md max-h-[90vh] overflow-y-auto">
          {maker && (
            <div>
              <DialogHeader>
                <DialogTitle>Maker Profile</DialogTitle>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Profile Header */}
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#5EACA0] to-[#4A9D94] rounded-full flex items-center justify-center text-4xl mx-auto mb-4 text-white">
                    {maker.name.charAt(0)}
                  </div>
                  <h3 className="text-xl mb-1">{maker.name}</h3>
                  <p className="text-gray-600">{maker.specialty}</p>
                  <div className="flex items-center justify-center gap-4 mt-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{maker.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-[#5EACA0] text-[#5EACA0]" />
                      <span>{maker.rating} ({maker.projects} projects)</span>
                    </div>
                  </div>
                </div>

                {/* Portfolio */}
                <div>
                  <h4 className="mb-3">Portfolio</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div
                        key={i}
                        className="aspect-square bg-gray-100 rounded-xl overflow-hidden"
                      >
                        <ImageWithFallback
                          src={`https://images.unsplash.com/photo-${1500000000000 + (maker.id * 10 + i) * 100000000}?w=400&h=400&fit=crop`}
                          alt={`Portfolio ${i}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* About */}
                <div>
                  <h4 className="mb-2">About</h4>
                  <p className="text-sm text-gray-600">
                    Passionate about sustainable fashion and creative upcycling.
                    Specializing in transforming old garments into unique,
                    wearable art. Let's work together to give your clothes a
                    second life!
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <Button className="w-full bg-[#5EACA0] hover:bg-[#4A9D94] text-white rounded-xl">
                    Send Request
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full rounded-xl"
                    onClick={() => setSelectedMaker(null)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
