import React from 'react';
import { Link } from 'react-router-dom';
import { BusinessListing } from '../types';
import { MapPin, Phone, Star } from 'lucide-react';

interface BusinessCardProps {
  business: BusinessListing;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ business }) => {
  // Create star rating display
  const renderStars = () => {
    const rating = business.rating || 0;
    const stars = [];
    
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        // Full star
        stars.push(
          <Star key={i} size={16} className="text-yellow-500 fill-current" />
        );
      } else if (i - 0.5 <= rating) {
        // Half star (we'll use a full star for simplicity)
        stars.push(
          <Star key={i} size={16} className="text-yellow-500 fill-current" />
        );
      } else {
        // Empty star
        stars.push(
          <Star key={i} size={16} className="text-yellow-500" />
        );
      }
    }
    
    return stars;
  };

  return (
    <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
      <h2 className="text-xl font-bold mb-2">{business.name}</h2>
      
      {business.rating > 0 && (
        <div className="flex items-center text-yellow-500 mb-3">
          {renderStars()}
          <span className="ml-2 text-gray-700">
            {business.rating.toFixed(1)} ({business.reviews} reviews)
          </span>
        </div>
      )}
      
      <div className="flex items-start mb-2">
        <MapPin size={18} className="mr-2 text-gray-500 mt-1 flex-shrink-0" />
        <p>{business.address}, {business.city}, {business.state} {business.zipCode}</p>
      </div>
      
      <div className="flex items-center mb-4">
        <Phone size={18} className="mr-2 text-gray-500" />
        <p>{business.phone}</p>
      </div>
      
      <p className="mb-4 text-gray-600">
        {business.description || (
          `Professional electrolysis hair removal services offered by ${business.name}. 
          ${business.services.length > 0 ? `Specializing in ${business.services.join(', ')}.` : ''}`
        )}
      </p>
      
      <Link 
        to={`/business/${business.slug}`} 
        className="text-teal-600 hover:text-teal-800 font-medium"
      >
        View Details →
      </Link>
    </div>
  );
};

export default BusinessCard;