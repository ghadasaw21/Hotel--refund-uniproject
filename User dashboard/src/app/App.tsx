import { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  MapPin,
  Star,
  Calendar,
  Users,
  Send,
  X,
  Check,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Shield,
  TrendingUp,
  Clock,
} from "lucide-react";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<
    "search" | "results"
  >("search");
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showGuestPicker, setShowGuestPicker] = useState(false);
  const [showCityPicker, setShowCityPicker] = useState(false);
  const [selectedHotelRisk, setSelectedHotelRisk] = useState<
    number | null
  >(null);

  const [destination, setDestination] = useState("Dubai");
  const [checkIn, setCheckIn] = useState("Aug 13");
  const [checkOut, setCheckOut] = useState("Aug 17");
  const [guests, setGuests] = useState(1);
  const [rooms, setRooms] = useState(1);

  const [selectedFilters, setSelectedFilters] = useState({
    fullyRefundable: false,
  });
  const [selectedStarRating, setSelectedStarRating] = useState<
    number | null
  >(null);

  const cities = [
    "Dubai",
    "Riyadh",
    "Jeddah",
    "Mecca",
    "Medina",
    "Abu Dhabi",
    "Cairo",
  ];

  const hotelsByCity: Record<string, any[]> = {
    Dubai: [
      {
        id: 1,
        name: "The Palm Hotel",
        location: "Palm Jumeirah, Dubai",
        rating: 4.5,
        reviews: 352,
        price: 352,
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
        refundType: "partial",
        refundPercent: 60,
        cancelDeadline: "12 August",
        refundConfidence: 75,
        refundSpeed: "within 5-7 days",
        aiInsight:
          "Partial refund policy. 60% cash back if cancelled before deadline. Remaining 40% non-refundable.",
      },
      {
        id: 2,
        name: "Burj Al Arab",
        location: "Jumeirah Beach, Dubai",
        rating: 5.0,
        reviews: 1243,
        price: 890,
        image:
          "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop",
        refundType: "non-refundable",
        refundPercent: 0,
        cancelDeadline: null,
        refundConfidence: 0,
        refundSpeed: "N/A",
        aiInsight:
          "Non-refundable booking. Lower price in exchange for no cancellation option.",
      },
      {
        id: 3,
        name: "Towers Rotana",
        location: "Trade Area, Dubai",
        rating: 4.3,
        reviews: 524,
        price: 245,
        image:
          "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop",
        refundType: "fully-refundable",
        refundPercent: 100,
        cancelDeadline: "12 August",
        refundConfidence: 92,
        refundSpeed: "within 2-3 days",
        aiInsight:
          "Reliable refund process. Average processing time is 2 days based on 524 reviews.",
      },
      {
        id: 4,
        name: "Atlantis The Palm",
        location: "Palm Jumeirah, Dubai",
        rating: 4.7,
        reviews: 892,
        price: 520,
        image:
          "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=300&fit=crop",
        refundType: "fully-refundable",
        refundPercent: 100,
        cancelDeadline: "12 August",
        refundConfidence: 96,
        refundSpeed: "within 24 hours",
        aiInsight:
          "Excellent refund track record. 96% of cancellations processed within 24 hours.",
      },
      {
        id: 5,
        name: "Jumeirah Beach Hotel",
        location: "Jumeirah Beach, Dubai",
        rating: 4.6,
        reviews: 654,
        price: 410,
        image:
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
        refundType: "partial",
        refundPercent: 75,
        cancelDeadline: "10 August",
        refundConfidence: 82,
        refundSpeed: "within 3-5 days",
        aiInsight:
          "75% refund available. Early cancellation recommended for maximum refund.",
      },
      {
        id: 6,
        name: "Address Downtown",
        location: "Downtown Dubai",
        rating: 4.8,
        reviews: 1102,
        price: 380,
        image:
          "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=300&fit=crop",
        refundType: "fully-refundable",
        refundPercent: 100,
        cancelDeadline: "12 August",
        refundConfidence: 98,
        refundSpeed: "within 12 hours",
        aiInsight:
          "Premium service with immediate refunds. Known for hassle-free cancellations.",
      },
      {
        id: 7,
        name: "Rove Downtown",
        location: "Trade Centre, Dubai",
        rating: 4.2,
        reviews: 433,
        price: 180,
        image:
          "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
        refundType: "non-refundable",
        refundPercent: 0,
        cancelDeadline: null,
        refundConfidence: 0,
        refundSpeed: "N/A",
        aiInsight:
          "Budget-friendly non-refundable rate. Best for confirmed travel plans.",
      },
      {
        id: 8,
        name: "Sofitel Dubai",
        location: "Jumeirah Beach, Dubai",
        rating: 4.5,
        reviews: 567,
        price: 340,
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
        refundType: "partial",
        refundPercent: 50,
        cancelDeadline: "11 August",
        refundConfidence: 68,
        refundSpeed: "within 7-10 days",
        aiInsight:
          "50% refund policy. Later cancellations may receive lower refund percentage.",
      },
      {
        id: 9,
        name: "Vida Downtown",
        location: "Downtown Dubai",
        rating: 4.4,
        reviews: 789,
        price: 295,
        image:
          "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop",
        refundType: "fully-refundable",
        refundPercent: 100,
        cancelDeadline: "12 August",
        refundConfidence: 94,
        refundSpeed: "within 48 hours",
        aiInsight:
          "Strong refund reliability. Automated system ensures quick processing.",
      },
    ],
    Riyadh: [
      {
        id: 10,
        name: "Four Seasons Riyadh",
        location: "Kingdom Center, Riyadh",
        rating: 4.8,
        reviews: 892,
        price: 420,
        image:
          "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=300&fit=crop",
        refundType: "fully-refundable",
        refundPercent: 100,
        cancelDeadline: "12 August",
        refundConfidence: 97,
        refundSpeed: "within 24 hours",
        aiInsight:
          "Excellent track record. 892 verified refunds processed smoothly.",
      },
      {
        id: 11,
        name: "Ritz-Carlton Riyadh",
        location: "Al Hada, Riyadh",
        rating: 4.7,
        reviews: 654,
        price: 380,
        image:
          "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=400&h=300&fit=crop",
        refundType: "fully-refundable",
        refundPercent: 100,
        cancelDeadline: "12 August",
        refundConfidence: 96,
        refundSpeed: "within 24 hours",
        aiInsight:
          "Fast refund processing. No cancellation disputes reported in past year.",
      },
    ],
    Jeddah: [
      {
        id: 12,
        name: "Park Hyatt Jeddah",
        location: "Corniche, Jeddah",
        rating: 4.6,
        reviews: 743,
        price: 310,
        image:
          "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
        refundType: "fully-refundable",
        refundPercent: 100,
        cancelDeadline: "12 August",
        refundConfidence: 94,
        refundSpeed: "within 48 hours",
        aiInsight:
          "Strong refund reliability. Automated system ensures quick processing.",
      },
    ],
  };

  const allHotels = hotelsByCity[destination] || [];

  // Filter hotels based on "Fully Refundable" filter and star rating
  let hotels = allHotels;

  // Apply refund filter
  if (selectedFilters.fullyRefundable) {
    hotels = hotels.filter(
      (hotel) => hotel.refundType === "fully-refundable",
    );
  }

  // Apply star rating filter
  if (selectedStarRating !== null) {
    hotels = hotels.filter(
      (hotel) => hotel.rating >= selectedStarRating,
    );
  }

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 95) return "bg-indigo-600";
    if (confidence >= 90) return "bg-indigo-500";
    if (confidence >= 70) return "bg-indigo-400";
    return "bg-gray-400";
  };

  const getConfidenceLabel = (confidence: number) => {
    if (confidence >= 95) return "Excellent";
    if (confidence >= 90) return "Very Good";
    return "Good";
  };

  const HotelCard = ({ hotel }: { hotel: any }) => (
    <div
      className="bg-white rounded-xl shadow-sm overflow-hidden mb-2.5 active:scale-[0.98] transition-transform"
      onClick={() =>
        setSelectedHotelRisk(
          selectedHotelRisk === hotel.id ? null : hotel.id,
        )
      }
    >
      <div className="relative">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-32 object-cover"
        />

        {/* Refund Badge - Different colors based on type */}
        {hotel.refundType === "fully-refundable" && (
          <div className="absolute top-1.5 left-1.5 bg-green-600 text-white px-2 py-0.5 rounded-full text-[10px] font-semibold flex items-center gap-0.5 shadow-lg">
            <Check className="w-2.5 h-2.5" />
            100% Cash Refund
          </div>
        )}
        {hotel.refundType === "partial" && (
          <div className="absolute top-1.5 left-1.5 bg-orange-500 text-white px-2 py-0.5 rounded-full text-[10px] font-semibold flex items-center gap-0.5 shadow-lg">
            {hotel.refundPercent}% Refund
          </div>
        )}
        {hotel.refundType === "non-refundable" && (
          <div className="absolute top-1.5 left-1.5 bg-red-600 text-white px-2 py-0.5 rounded-full text-[10px] font-semibold flex items-center gap-0.5 shadow-lg">
            <X className="w-2.5 h-2.5" />
            Non-Refundable
          </div>
        )}

        {/* AI Refund Risk Score Badge - Lighter indigo color */}
        {hotel.refundConfidence > 0 && (
          <div
            className={`absolute top-1.5 right-1.5 ${getConfidenceColor(hotel.refundConfidence)} text-white px-2 py-0.5 rounded-full text-[10px] font-semibold flex items-center gap-0.5 shadow-lg`}
          >
            <Shield className="w-2.5 h-2.5" />
            {hotel.refundConfidence}%
          </div>
        )}
      </div>
      <div className="p-2.5">
        <div className="flex justify-between items-start mb-1">
          <div className="flex-1">
            <h3 className="font-semibold text-sm">
              {hotel.name}
            </h3>
            <div className="flex items-center gap-0.5 text-[10px] text-gray-500 mt-0.5">
              <MapPin className="w-2.5 h-2.5" />
              <span>{hotel.location}</span>
            </div>
          </div>
          <div className="text-right ml-2">
            <div className="text-base font-bold text-blue-700">
              SAR {hotel.price}
            </div>
            <div className="text-[9px] text-gray-500">
              per night
            </div>
          </div>
        </div>
        <div className="flex items-center gap-0.5 mt-1.5">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span className="font-semibold text-[10px]">
            {hotel.rating}
          </span>
          <span className="text-[10px] text-gray-500">
            ({hotel.reviews})
          </span>
        </div>

        {/* Refund Policy Line - Clear and Prominent */}
        <div className="mt-2 pb-2 border-b border-gray-100">
          {hotel.refundType === "fully-refundable" && (
            <div className="text-[10px] text-green-700 font-medium leading-snug">
              ✓ Cancel before {hotel.cancelDeadline} and get
              100% cash refund
            </div>
          )}
          {hotel.refundType === "partial" && (
            <div className="text-[10px] text-orange-700 font-medium leading-snug">
              ⚠ Cancel before {hotel.cancelDeadline} and get{" "}
              {hotel.refundPercent}% cash refund
            </div>
          )}
          {hotel.refundType === "non-refundable" && (
            <div className="text-[10px] text-red-700 font-medium leading-snug">
              ✗ No refund available after booking
            </div>
          )}
        </div>

        {/* AI Insight - Always Visible - Using lighter indigo for distinction */}
        <div className="mt-2 bg-indigo-50 rounded-lg p-2 border border-indigo-100">
          <div className="flex items-start gap-1.5">
            <Sparkles className="w-3 h-3 text-indigo-600 mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-[9px] font-semibold text-indigo-700 mb-0.5">
                AI Refund Analysis
              </div>
              <div className="text-[10px] text-indigo-900 leading-snug">
                {hotel.refundType === "non-refundable" ? (
                  <>Non-refundable rate. {hotel.aiInsight}</>
                ) : (
                  <>
                    <strong>
                      {hotel.refundConfidence}% Confidence
                    </strong>{" "}
                    - {hotel.aiInsight}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Expanded Details */}
        {selectedHotelRisk === hotel.id &&
          hotel.refundType !== "non-refundable" && (
            <div className="mt-2 pt-2 border-t border-gray-100 space-y-1.5">
              <div className="flex items-center gap-1.5 text-[10px]">
                <Clock className="w-3 h-3 text-indigo-600" />
                <span className="text-gray-700">
                  Average refund time:{" "}
                  <strong>{hotel.refundSpeed}</strong>
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px]">
                <TrendingUp className="w-3 h-3 text-indigo-600" />
                <span className="text-gray-700">
                  Based on {hotel.reviews} verified bookings
                </span>
              </div>
            </div>
          )}
      </div>
    </div>
  );

  return (
<div className="min-h-screen bg-gray-50 w-[420px] mx-auto relative">
  {/* iOS Status Bar */}
<div className="h-10 bg-white"></div>

      {/* Search Screen */}
      {currentScreen === "search" && (
<div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-700 pb-12 flex flex-col">
  <div className="flex-1">
            <div className="px-4 pt-3">
              <h1 className="text-white text-2xl font-bold mb-1">
                Find Hotels
              </h1>
              <p className="text-blue-100 text-xs">
                Search for perfect stays
              </p>
            </div>

            <div className="px-4 mt-6">
              {/* Destination */}
              <button
                onClick={() => setShowCityPicker(true)}
                className="w-full bg-white rounded-xl p-3 mb-2.5 text-left shadow-sm active:scale-[0.98] transition-transform"
              >
                <div className="text-[10px] text-gray-500 mb-0.5">
                  Destination
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span className="font-semibold text-base">
                      {destination}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              </button>

              {/* Check-in & Check-out */}
              <button
                onClick={() => setShowDatePicker(true)}
                className="w-full bg-white rounded-xl p-3 mb-2.5 shadow-sm active:scale-[0.98] transition-transform"
              >
                <div className="text-[10px] text-gray-500 mb-1">
                  Dates
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div>
                      <div className="text-[9px] text-gray-500">
                        Check-in
                      </div>
                      <div className="font-semibold text-sm">
                        {checkIn}
                      </div>
                    </div>
                    <div className="text-gray-400 text-sm">
                      →
                    </div>
                    <div>
                      <div className="text-[9px] text-gray-500">
                        Check-out
                      </div>
                      <div className="font-semibold text-sm">
                        {checkOut}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              </button>

              {/* Guests & Rooms */}
              <button
                onClick={() => setShowGuestPicker(true)}
                className="w-full bg-white rounded-xl p-3 mb-4 shadow-sm active:scale-[0.98] transition-transform"
              >
                <div className="text-[10px] text-gray-500 mb-0.5">
                  Guests & Rooms
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span className="font-semibold text-sm">
                      {guests}{" "}
                      {guests === 1 ? "Guest" : "Guests"},{" "}
                      {rooms} {rooms === 1 ? "Room" : "Rooms"}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              </button>

              {/* Search Button */}
              <button
                onClick={() => setCurrentScreen("results")}
                className="w-full bg-white text-blue-700 font-bold py-3 rounded-xl shadow-lg active:scale-[0.98] transition-transform text-base"
              >
                Search Hotels
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="px-4 pb-4 mt-auto">
            <p className="text-center text-gray-300 text-[10px]">
              Developed by Ghada
              <br />
              Course IS1474 2026
            </p>
          </div>
        </div>
      )}

      {/* Results Screen */}
      {currentScreen === "results" && (
        <div className="min-h-screen bg-gray-50 pb-16">
          {/* Header */}
          <div className="bg-white px-4 py-3 shadow-sm sticky top-10 z-10">
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => setCurrentScreen("search")}
                className="active:scale-95 transition-transform"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <div className="flex-1">
                <h2 className="font-bold text-base">
                  Hotels in {destination}
                </h2>
                <p className="text-[10px] text-gray-500">
                  {checkIn} - {checkOut}
                </p>
              </div>
              <button
                onClick={() => setShowFilterModal(true)}
                className="bg-blue-600 text-white p-2 rounded-lg active:scale-95 transition-transform"
              >
                <SlidersHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Hotels List */}
          <div className="px-3 py-3">
            {hotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </div>
      )}

      {/* City Picker Modal */}
      {showCityPicker && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-end"
          onClick={() => setShowCityPicker(false)}
        >
          <div
            className="bg-white w-full rounded-t-2xl max-h-[70vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-gray-200">
              <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-3"></div>
              <h3 className="font-bold text-lg">
                Select Destination
              </h3>
            </div>
            <div className="overflow-y-auto max-h-[50vh] p-3">
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => {
                    setDestination(city);
                    setShowCityPicker(false);
                  }}
                  className={`w-full text-left p-3 rounded-lg mb-1.5 transition-all ${
                    destination === city
                      ? "bg-blue-50 border-2 border-blue-600"
                      : "bg-gray-50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span className="font-semibold text-sm">
                        {city}
                      </span>
                    </div>
                    {destination === city && (
                      <Check className="w-4 h-4 text-blue-600" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Date Picker Modal */}
      {showDatePicker && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-end"
          onClick={() => setShowDatePicker(false)}
        >
          <div
            className="bg-white w-full rounded-t-2xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-3"></div>
            <h3 className="font-bold text-lg mb-3">
              Select Dates
            </h3>
            <div className="space-y-2.5 mb-4">
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-xs text-gray-600 mb-1.5">
                  Check-in
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <input
                    type="text"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="bg-transparent font-semibold outline-none text-sm"
                  />
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-xs text-gray-600 mb-1.5">
                  Check-out
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <input
                    type="text"
                    value={checkOut}
                    onChange={(e) =>
                      setCheckOut(e.target.value)
                    }
                    className="bg-transparent font-semibold outline-none text-sm"
                  />
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowDatePicker(false)}
              className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold text-sm"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* Guest Picker Modal */}
      {showGuestPicker && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-end"
          onClick={() => setShowGuestPicker(false)}
        >
          <div
            className="bg-white w-full rounded-t-2xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-3"></div>
            <h3 className="font-bold text-lg mb-4">
              Guests & Rooms
            </h3>
            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                <span className="font-semibold text-sm">
                  Guests
                </span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      setGuests(Math.max(1, guests - 1))
                    }
                    className="w-8 h-8 bg-white rounded-full shadow-sm active:scale-95 text-sm"
                  >
                    -
                  </button>
                  <span className="font-bold text-base w-6 text-center">
                    {guests}
                  </span>
                  <button
                    onClick={() => setGuests(guests + 1)}
                    className="w-8 h-8 bg-blue-600 text-white rounded-full shadow-sm active:scale-95 text-sm"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                <span className="font-semibold text-sm">
                  Rooms
                </span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      setRooms(Math.max(1, rooms - 1))
                    }
                    className="w-8 h-8 bg-white rounded-full shadow-sm active:scale-95 text-sm"
                  >
                    -
                  </button>
                  <span className="font-bold text-base w-6 text-center">
                    {rooms}
                  </span>
                  <button
                    onClick={() => setRooms(rooms + 1)}
                    className="w-8 h-8 bg-blue-600 text-white rounded-full shadow-sm active:scale-95 text-sm"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowGuestPicker(false)}
              className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold text-sm"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* Filter Modal */}
      {showFilterModal && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4 mt-6">
              <button
                onClick={() => setShowFilterModal(false)}
                className="active:scale-95 transition-transform"
              >
                <X className="w-5 h-5" />
              </button>
              <h2 className="text-lg font-bold">Filters</h2>
              <button
                onClick={() => {
                  setSelectedFilters({
                    fullyRefundable: false,
                  });
                  setSelectedStarRating(null);
                }}
                className="text-blue-600 font-medium text-xs"
              >
                Clear
              </button>
            </div>

            <div className="mb-5">
              <h3 className="font-semibold text-sm mb-2.5">
                Refund Policy
              </h3>
              <div className="space-y-2">
                <label
                  className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all ${
                    selectedFilters.fullyRefundable
                      ? "bg-blue-50 border-2 border-blue-600"
                      : "bg-gray-50 border-2 border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={selectedFilters.fullyRefundable}
                      onChange={(e) =>
                        setSelectedFilters({
                          ...selectedFilters,
                          fullyRefundable: e.target.checked,
                        })
                      }
                      className="w-4 h-4 accent-blue-600"
                    />
                    <div>
                      <div className="font-semibold text-xs">
                        Fully Refundable
                      </div>
                      <div className="text-[10px] text-gray-600">
                        100% cash refund guaranteed
                      </div>
                    </div>
                  </div>
                  {selectedFilters.fullyRefundable && (
                    <Check className="w-4 h-4 text-blue-600" />
                  )}
                </label>
              </div>
            </div>

            <div className="mb-5">
              <h3 className="font-semibold text-sm mb-2.5">
                Minimum Star Rating
              </h3>
              <div className="flex gap-2">
                {[3, 4, 5].map((stars) => (
                  <button
                    key={stars}
                    onClick={() =>
                      setSelectedStarRating(
                        selectedStarRating === stars
                          ? null
                          : stars,
                      )
                    }
                    className={`flex-1 items-center justify-center py-2.5 rounded-lg transition-all ${
                      selectedStarRating === stars
                        ? "bg-blue-600 text-white border-2 border-blue-600"
                        : "bg-gray-50 text-gray-900 border-2 border-transparent"
                    }`}
                  >
                    <div className="flex items-center justify-center gap-1">
                      <Star
                        className={`w-3.5 h-3.5 ${selectedStarRating === stars ? "fill-white text-white" : "fill-yellow-400 text-yellow-400"}`}
                      />
                      <span className="text-xs font-semibold">
                        {stars}+
                      </span>
                    </div>
                  </button>
                ))}
              </div>
              {selectedStarRating && (
                <p className="text-[10px] text-gray-500 mt-2">
                  Showing hotels rated {selectedStarRating}{" "}
                  stars and above
                </p>
              )}
            </div>

            <button
              onClick={() => setShowFilterModal(false)}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-sm mt-3"
            >
              Show {hotels.length}{" "}
              {hotels.length === 1 ? "Hotel" : "Hotels"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
