

import { useState } from 'react';
import { Search, SlidersHorizontal, MapPin, Star, Calendar, Users, Send, X, Check, Sparkles, ChevronLeft, ChevronRight, Shield, TrendingUp, Clock } from 'lucide-react';
export default function App() {
const [currentScreen, setCurrentScreen] = useState<'search' | 'results'>('search');
const [showFilterModal, setShowFilterModal] = useState(false);
const [showDatePicker, setShowDatePicker] = useState(false);
const [showGuestPicker, setShowGuestPicker] = useState(false);
const [showCityPicker, setShowCityPicker] = useState(false);
const [selectedHotelRisk, setSelectedHotelRisk] = useState<number | null>(null);

const [destination, setDestination] = useState('Dubai');
const [checkIn, setCheckIn] = useState('Aug 13');
const [checkOut, setCheckOut] = useState('Aug 17');
const [guests, setGuests] = useState(1);
const [rooms, setRooms] = useState(1);

const [selectedFilters, setSelectedFilters] = useState({
fullyRefundable: false,
});
const [selectedStarRating, setSelectedStarRating] = useState<number | null>(null);

const cities = ['Dubai', 'Riyadh', 'Jeddah', 'Mecca', 'Medina', 'Abu Dhabi', 'Cairo'];

const hotelsByCity: Record<string, any[]> = {
'Dubai': [
{
id: 1,
name: 'The Palm Hotel',
location: 'Palm Jumeirah, Dubai',
rating: 4.5,
reviews: 352,
price: 352,
image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
refundType: 'partial',
refundPercent: 60,
cancelDeadline: '12 August',
refundConfidence: 75,
refundSpeed: 'within 5-7 days',
aiInsight: 'Partial refund policy. 60% cash back if cancelled before deadline. Remaining 40% non-refundable.'
},
{
id: 2,
name: 'Burj Al Arab',
location: 'Jumeirah Beach, Dubai',
rating: 5.0,
reviews: 1243,
price: 890,
image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop',
refundType: 'non-refundable',
refundPercent: 0,
cancelDeadline: null,
refundConfidence: 0,
refundSpeed: 'N/A',
aiInsight: 'Non-refundable booking. Lower price in exchange for no cancellation option.'
},
{
id: 3,
name: 'Towers Rotana',
location: 'Trade Area, Dubai',
rating: 4.3,
reviews: 524,
price: 245,
image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop',
refundType: 'fully-refundable',
refundPercent: 100,
cancelDeadline: '12 August',
refundConfidence: 92,
refundSpeed: 'within 2-3 days',
aiInsight: 'Reliable refund process. Average processing time is 2 days based on 524 reviews.'
},
{
id: 4,
name: 'Atlantis The Palm',
location: 'Palm Jumeirah, Dubai',
rating: 4.7,
reviews: 892,
price: 520,
image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=300&fit=crop',
refundType: 'fully-refundable',
refundPercent: 100,
cancelDeadline: '12 August',
refundConfidence: 96,
refundSpeed: 'within 24 hours',
aiInsight: 'Excellent refund track record. 96% of cancellations processed within 24 hours.'
},
{
id: 5,
name: 'Jumeirah Beach Hotel',
location: 'Jumeirah Beach, Dubai',
rating: 4.6,
reviews: 654,
price: 410,
image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop',
refundType: 'partial',
refundPercent: 75,
cancelDeadline: '10 August',
refundConfidence: 82,
refundSpeed: 'within 3-5 days',
aiInsight: '75% refund available. Early cancellation recommended for maximum refund.'
},
{
id: 6,
name: 'Address Downtown',
location: 'Downtown Dubai',
rating: 4.8,
reviews: 1102,
price: 380,
image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=300&fit=crop',
refundType: 'fully-refundable',
refundPercent: 100,
cancelDeadline: '12 August',
refundConfidence: 98,
refundSpeed: 'within 12 hours',
aiInsight: 'Premium service with immediate refunds. Known for hassle-free cancellations.'
},
{
id: 7,
name: 'Rove Downtown',
location: 'Trade Centre, Dubai',
rating: 4.2,
reviews: 433,
price: 180,
image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop',
refundType: 'non-refundable',
refundPercent: 0,
cancelDeadline: null,
refundConfidence: 0,
refundSpeed: 'N/A',
aiInsight: 'Budget-friendly non-refundable rate. Best for confirmed travel plans.'
},
{
id: 8,
name: 'Sofitel Dubai',
location: 'Jumeirah Beach, Dubai',
rating: 4.5,
reviews: 567,
price: 340,
image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
refundType: 'partial',
refundPercent: 50,
cancelDeadline: '11 August',
refundConfidence: 68,
refundSpeed: 'within 7-10 days',
aiInsight: '50% refund policy. Later cancellations may receive lower refund percentage.'
},
{
id: 9,
name: 'Vida Downtown',
location: 'Downtown Dubai',
rating: 4.4,
reviews: 789,
price: 295,
image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop',
refundType: 'fully-refundable',
refundPercent: 100,
cancelDeadline: '12 August',
refundConfidence: 94,
refundSpeed: 'within 48 hours',
aiInsight: 'Strong refund reliability. Automated system ensures quick processing.'
}
],
'Riyadh': [
{
id: 10,
name: 'Four Seasons Riyadh',
location: 'Kingdom Center, Riyadh',
rating: 4.8,
reviews: 892,
price: 420,
image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=300&fit=crop',
refundType: 'fully-refundable',
refundPercent: 100,
cancelDeadline: '12 August',
refundConfidence: 97,
refundSpeed: 'within 24 hours',
aiInsight: 'Excellent track record. 892 verified refunds processed smoothly.'
},
{
id: 11,
name: 'Ritz-Carlton Riyadh',
location: 'Al Hada, Riyadh',
rating: 4.7,
reviews: 654,
price: 380,
image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=400&h=300&fit=crop',
refundType: 'fully-refundable',
refundPercent: 100,
cancelDeadline: '12 August',
refundConfidence: 96,
refundSpeed: 'within 24 hours',
aiInsight: 'Fast refund processing. No cancellation disputes reported in past year.'
}
],
'Jeddah': [
{
id: 12,
name: 'Park Hyatt Jeddah',
location: 'Corniche, Jeddah',
rating: 4.6,
reviews: 743,
price: 310,
image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop',
refundType: 'fully-refundable',
refundPercent: 100,
cancelDeadline: '12 August',
refundConfidence: 94,
refundSpeed: 'within 48 hours',
aiInsight: 'Strong refund reliability. Automated system ensures quick processing.'
}
]
};

const allHotels = hotelsByCity[destination] || [];

// Filter hotels based on "Fully Refundable" filter and star rating
let hotels = allHotels;

// Apply refund filter
if (selectedFilters.fullyRefundable) {
hotels = hotels.filter(hotel => hotel.refundType === 'fully-refundable');
}

// Apply star rating filter
if (selectedStarRating !== null) {
hotels = hotels.filter(hotel => hotel.rating >= selectedStarRating);
}

const getConfidenceColor = (confidence: number) => {
if (confidence >= 95) return 'bg-indigo-600';
if (confidence >= 90) return 'bg-indigo-500';
if (confidence >= 70) return 'bg-indigo-400';
return 'bg-gray-400';
};

const getConfidenceLabel = (confidence: number) => {
if (confidence >= 95) return 'Excellent';
if (confidence >= 90) return 'Very Good';
return 'Good';
};

const HotelCard = ({ hotel }: { hotel: any }) => (
<div
className="bg-white rounded-2xl shadow-sm overflow-hidden mb-3 active:scale-[0.98] transition-transform"
onClick={() => setSelectedHotelRisk(selectedHotelRisk === hotel.id ? null : hotel.id)}
>



    {/* Refund Badge - Different colors based on type */}
    {hotel.refundType === 'fully-refundable' && (
      <div className="absolute top-2 left-2 bg-green-600 text-white px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
        <Check className="w-3 h-3" />
        100% Cash Refund
      </div>
    )}
    {hotel.refundType === 'partial' && (
      <div className="absolute top-2 left-2 bg-orange-500 text-white px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
        {hotel.refundPercent}% Refund
      </div>
    )}
    {hotel.refundType === 'non-refundable' && (
      <div className="absolute top-2 left-2 bg-red-600 text-white px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
        <X className="w-3 h-3" />
        Non-Refundable
      </div>
    )}

    {/* AI Refund Risk Score Badge - Lighter indigo color */}
    {hotel.refundConfidence > 0 && (
      <div className={`absolute top-2 right-2 ${getConfidenceColor(hotel.refundConfidence)} text-white px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg`}>
        <Shield className="w-3 h-3" />
        {hotel.refundConfidence}%
      </div>
    )}
  </div>
  <div className="p-3">
    <div className="flex justify-between items-start mb-1">
      <div className="flex-1">
        <h3 className="font-semibold text-base">{hotel.name}</h3>
        <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
          <MapPin className="w-3 h-3" />
          <span>{hotel.location}</span>
        </div>
      </div>
      <div className="text-right ml-2">
        <div className="text-lg font-bold text-blue-700">SAR {hotel.price}</div>
        <div className="text-[10px] text-gray-500">per night</div>
      </div>
    </div>
    <div className="flex items-center gap-1 mt-2">
      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
      <span className="font-semibold text-xs">{hotel.rating}</span>
      <span className="text-xs text-gray-500">({hotel.reviews})</span>
    </div>

    {/* Refund Policy Line - Clear and Prominent */}
    <div className="mt-2.5 pb-2.5 border-b border-gray-100">
      {hotel.refundType === 'fully-refundable' && (
        <div className="text-xs text-green-700 font-medium">
          ✓ Cancel before {hotel.cancelDeadline} and get 100% cash refund
        </div>
      )}
      {hotel.refundType === 'partial' && (
        <div className="text-xs text-orange-700 font-medium">
          ⚠ Cancel before {hotel.cancelDeadline} and get {hotel.refundPercent}% cash refund
        </div>
      )}
      {hotel.refundType === 'non-refundable' && (
        <div className="text-xs text-red-700 font-medium">
          ✗ No refund available after booking
        </div>
      )}
    </div>

    {/* AI Insight - Always Visible - Using lighter indigo for distinction */}
    <div className="mt-2.5 bg-indigo-50 rounded-xl p-2.5 border border-indigo-100">
      <div className="flex items-start gap-2">
        <Sparkles className="w-3.5 h-3.5 text-indigo-600 mt-0.5 flex-shrink-0" />
        <div>
          <div className="text-[10px] font-semibold text-indigo-700 mb-0.5 flex items-center gap-1">
            AI Refund Analysis
          </div>
          <div className="text-[11px] text-indigo-900 leading-relaxed">
            {hotel.refundType === 'non-refundable' ? (
              <>Non-refundable rate. {hotel.aiInsight}</>
            ) : (
              <>
                <strong>{hotel.refundConfidence}% Confidence</strong> - {hotel.aiInsight}
              </>
            )}
          </div>
        </div>
      </div>
    </div>

    {/* Expanded Details */}
    {selectedHotelRisk === hotel.id && hotel.refundType !== 'non-refundable' && (
      <div className="mt-2 pt-2 border-t border-gray-100 space-y-2">
        <div className="flex items-center gap-2 text-xs">
          <Clock className="w-3.5 h-3.5 text-indigo-600" />
          <span className="text-gray-700">Average refund time: <strong>{hotel.refundSpeed}</strong></span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <TrendingUp className="w-3.5 h-3.5 text-indigo-600" />
          <span className="text-gray-700">Based on {hotel.reviews} verified bookings</span>
        </div>
      </div>
    )}
  </div>
</div>
);
return (

{/* iOS Status Bar */}


  {/* Search Screen */}
  {currentScreen === 'search' && (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-700 pb-20">
      <div className="px-5 pt-4">
        <h1 className="text-white text-3xl font-bold mb-2">Find Hotels</h1>
        <p className="text-blue-100 text-sm">Search for perfect stays</p>
      </div>

      <div className="px-5 mt-8">
        {/* Destination */}
        <button
          onClick={() => setShowCityPicker(true)}
          className="w-full bg-white rounded-2xl p-4 mb-3 text-left shadow-sm active:scale-[0.98] transition-transform"
        >
          <div className="text-xs text-gray-500 mb-1">Destination</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-lg">{destination}</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </button>

        {/* Check-in & Check-out */}
        <button
          onClick={() => setShowDatePicker(true)}
          className="w-full bg-white rounded-2xl p-4 mb-3 shadow-sm active:scale-[0.98] transition-transform"
        >
          <div className="text-xs text-gray-500 mb-2">Dates</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div>
                <div className="text-xs text-gray-500">Check-in</div>
                <div className="font-semibold">{checkIn}</div>
              </div>
              <div className="text-gray-400">→</div>
              <div>
                <div className="text-xs text-gray-500">Check-out</div>
                <div className="font-semibold">{checkOut}</div>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </button>

        {/* Guests & Rooms */}
        <button
          onClick={() => setShowGuestPicker(true)}
          className="w-full bg-white rounded-2xl p-4 mb-6 shadow-sm active:scale-[0.98] transition-transform"
        >
          <div className="text-xs text-gray-500 mb-1">Guests & Rooms</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="font-semibold">{guests} {guests === 1 ? 'Guest' : 'Guests'}, {rooms} {rooms === 1 ? 'Room' : 'Rooms'}</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </button>

        {/* Search Button */}
        <button
          onClick={() => setCurrentScreen('results')}
          className="w-full bg-white text-blue-700 font-bold py-4 rounded-2xl shadow-lg active:scale-[0.98] transition-transform text-lg"
        >
          Search Hotels
        </button>
      </div>
    </div>
  )}

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
  {currentScreen === 'results' && (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white px-5 py-4 shadow-sm sticky top-12 z-10">
        <div className="flex items-center gap-3 mb-3">
          <button onClick={() => setCurrentScreen('search')} className="active:scale-95 transition-transform">
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <div className="flex-1">
            <h2 className="font-bold text-lg">Hotels in {destination}</h2>
            <p className="text-xs text-gray-500">{checkIn} - {checkOut}</p>
          </div>
          <button
            onClick={() => setShowFilterModal(true)}
            className="bg-blue-600 text-white p-2.5 rounded-xl active:scale-95 transition-transform"
          >
            <SlidersHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Hotels List */}
      <div className="px-4 py-4">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>

    </div>
  )}

  {/* City Picker Modal */}
  {showCityPicker && (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end" onClick={() => setShowCityPicker(false)}>
      <div className="bg-white w-full rounded-t-3xl max-h-[70vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="p-5 border-b border-gray-200">
          <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>
          <h3 className="font-bold text-xl">Select Destination</h3>
        </div>
        <div className="overflow-y-auto max-h-[50vh] p-4">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => {
                setDestination(city);
                setShowCityPicker(false);
              }}
              className={`w-full text-left p-4 rounded-xl mb-2 transition-all ${
                destination === city ? 'bg-blue-50 border-2 border-blue-600' : 'bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold">{city}</span>
                </div>
                {destination === city && <Check className="w-5 h-5 text-blue-600" />}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )}

  {/* Date Picker Modal */}
  {showDatePicker && (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end" onClick={() => setShowDatePicker(false)}>
      <div className="bg-white w-full rounded-t-3xl p-5" onClick={(e) => e.stopPropagation()}>
        <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>
        <h3 className="font-bold text-xl mb-4">Select Dates</h3>
        <div className="space-y-3 mb-6">
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="text-sm text-gray-600 mb-2">Check-in</div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              <input type="text" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="bg-transparent font-semibold outline-none" />
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="text-sm text-gray-600 mb-2">Check-out</div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              <input type="text" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="bg-transparent font-semibold outline-none" />
            </div>
          </div>
        </div>
        <button onClick={() => setShowDatePicker(false)} className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold">
          Done
        </button>
      </div>
    </div>
  )}

  {/* Guest Picker Modal */}
  {showGuestPicker && (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end" onClick={() => setShowGuestPicker(false)}>
      <div className="bg-white w-full rounded-t-3xl p-5" onClick={(e) => e.stopPropagation()}>
        <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>
        <h3 className="font-bold text-xl mb-6">Guests & Rooms</h3>
        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-between bg-gray-50 rounded-xl p-4">
            <span className="font-semibold">Guests</span>
            <div className="flex items-center gap-4">
              <button onClick={() => setGuests(Math.max(1, guests - 1))} className="w-10 h-10 bg-white rounded-full shadow-sm active:scale-95">-</button>
              <span className="font-bold text-lg w-8 text-center">{guests}</span>
              <button onClick={() => setGuests(guests + 1)} className="w-10 h-10 bg-blue-600 text-white rounded-full shadow-sm active:scale-95">+</button>
            </div>
          </div>
          <div className="flex items-center justify-between bg-gray-50 rounded-xl p-4">
            <span className="font-semibold">Rooms</span>
            <div className="flex items-center gap-4">
              <button onClick={() => setRooms(Math.max(1, rooms - 1))} className="w-10 h-10 bg-white rounded-full shadow-sm active:scale-95">-</button>
              <span className="font-bold text-lg w-8 text-center">{rooms}</span>
              <button onClick={() => setRooms(rooms + 1)} className="w-10 h-10 bg-blue-600 text-white rounded-full shadow-sm active:scale-95">+</button>
            </div>
          </div>
        </div>
        <button onClick={() => setShowGuestPicker(false)} className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold">
          Done
        </button>
      </div>
    </div>
  )}

  {/* Filter Modal */}
  {showFilterModal && (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      <div className="p-5">
        <div className="flex items-center justify-between mb-6 mt-8">
          <button onClick={() => setShowFilterModal(false)} className="active:scale-95 transition-transform">
            <X className="w-6 h-6" />
          </button>
          <h2 className="text-xl font-bold">Filters</h2>
          <button
            onClick={() => {
              setSelectedFilters({ fullyRefundable: false });
              setSelectedStarRating(null);
            }}
            className="text-blue-600 font-medium text-sm"
          >
            Clear
          </button>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-base mb-3">Refund Policy</h3>
          <div className="space-y-2">
            <label className={`flex items-center justify-between p-3.5 rounded-xl cursor-pointer transition-all ${
              selectedFilters.fullyRefundable ? 'bg-blue-50 border-2 border-blue-600' : 'bg-gray-50 border-2 border-transparent'
            }`}>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={selectedFilters.fullyRefundable}
                  onChange={(e) => setSelectedFilters({ ...selectedFilters, fullyRefundable: e.target.checked })}
                  className="w-5 h-5 accent-blue-600"
                />
                <div>
                  <div className="font-semibold text-sm">Fully Refundable</div>
                  <div className="text-xs text-gray-600">100% cash refund guaranteed</div>
                </div>
              </div>
              {selectedFilters.fullyRefundable && <Check className="w-5 h-5 text-blue-600" />}
            </label>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-base mb-3">Minimum Star Rating</h3>
          <div className="flex gap-2">
            {[3, 4, 5].map((stars) => (
              <button
                key={stars}
                onClick={() => setSelectedStarRating(selectedStarRating === stars ? null : stars)}
                className={`flex-1 items-center justify-center py-3 rounded-xl transition-all ${
                  selectedStarRating === stars
                    ? 'bg-blue-600 text-white border-2 border-blue-600'
                    : 'bg-gray-50 text-gray-900 border-2 border-transparent'
                }`}
              >
                <div className="flex items-center justify-center gap-1">
                  <Star className={`w-4 h-4 ${selectedStarRating === stars ? 'fill-white text-white' : 'fill-yellow-400 text-yellow-400'}`} />
                  <span className="text-sm font-semibold">{stars}+</span>
                </div>
              </button>
            ))}
          </div>
          {selectedStarRating && (
            <p className="text-xs text-gray-500 mt-2">Showing hotels rated {selectedStarRating} stars and above</p>
          )}
        </div>

        <button onClick={() => setShowFilterModal(false)} className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-semibold mt-4">
          Show {hotels.length} {hotels.length === 1 ? 'Hotel' : 'Hotels'}
        </button>
      </div>
    </div>
  )}

</div>
);
}

