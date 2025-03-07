import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Phone, Clock, Mail, Globe, Star } from 'lucide-react';
import { BusinessPageData } from '../types';
import BusinessList from '../components/BusinessList';

interface BusinessPageProps {
  businessData?: BusinessPageData;
}

const BusinessPage: React.FC<BusinessPageProps> = ({ businessData }) => {
  const { businessId } = useParams<{ businessId: string }>();
  
  // If we have pre-generated data, use it
  // Otherwise, use a placeholder or fetch data
  const business = businessData?.business;
  const nearbyBusinesses = businessData?.nearbyBusinesses || [];
  
  // If we don't have business data, show a placeholder or error
  if (!business) {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-6">Business Information</h1>
        <p>Business details could not be found. Please check the URL or try another business.</p>
      </div>
    );
  }
  
  // Create star rating display
  const renderStars = () => {
    const rating = business.rating || 0;
    const stars = [];
    
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        // Full star
        stars.push(
          <Star key={i} size={20} className="text-yellow-500 fill-current" />
        );
      } else if (i - 0.5 <= rating) {
        // Half star (using full star for simplicity)
        stars.push(
          <Star key={i} size={20} className="text-yellow-500 fill-current" />
        );
      } else {
        // Empty star
        stars.push(
          <Star key={i} size={20} className="text-yellow-500" />
        );
      }
    }
    
    return stars;
  };
  
  // Parse opening hours if available
  const formatOpeningHours = () => {
    if (!business.hours) return <p>Hours not available</p>;
    
    // Simple format for now, this could be enhanced
    return (
      <div>
        {business.hours.split('","').map((hours, index) => (
          <p key={index}>{hours.replace(/"/g, '')}</p>
        ))}
      </div>
    );
  };
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{business.name}</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            {business.rating > 0 && (
              <div className="flex items-center text-yellow-500 mb-4">
                {renderStars()}
                <span className="ml-2 text-gray-700">
                  {business.rating.toFixed(1)} ({business.reviews} reviews)
                </span>
              </div>
            )}
            
            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <MapPin size={20} className="mr-2 text-gray-500 mt-1 flex-shrink-0" />
                <p>{business.address}, {business.city}, {business.state} {business.zipCode}</p>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="mr-2 text-gray-500" />
                <p>{business.phone}</p>
              </div>
              {business.email && (
                <div className="flex items-center">
                  <Mail size={20} className="mr-2 text-gray-500" />
                  <p>{business.email}</p>
                </div>
              )}
              {business.website && (
                <div className="flex items-center">
                  <Globe size={20} className="mr-2 text-gray-500" />
                  <a href={business.website} className="text-teal-600 hover:underline">{business.website}</a>
                </div>
              )}
              {business.hours && (
                <div className="flex items-start">
                  <Clock size={20} className="mr-2 text-gray-500 mt-1 flex-shrink-0" />
                  {formatOpeningHours()}
                </div>
              )}
            </div>
            
            <div>
              <h2 className="text-xl font-bold mb-3">About {business.name}</h2>
              <p className="mb-4">
                {business.description || `${business.name} provides professional electrolysis hair removal services. Contact them directly for more information about their services and pricing.`}
              </p>
              {business.services.length > 0 && (
                <div className="mt-4">
                  <h3 className="font-semibold mb-2">Services:</h3>
                  <p>{business.services.join(', ')}</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold mb-4">Services Offered</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-teal-500 mt-2 mr-3"></div>
                <div>
                  <h3 className="font-medium">Electrolysis Hair Removal</h3>
                  <p className="text-gray-600">Permanent hair removal services for all skin types and hair colors.</p>
                </div>
              </li>
              {business.services.map((service, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-teal-500 mt-2 mr-3"></div>
                  <div>
                    <h3 className="font-medium">{service}</h3>
                    <p className="text-gray-600">Professional service provided by trained specialists.</p>
                  </div>
                </li>
              ))}
              {business.services.length === 0 && (
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-teal-500 mt-2 mr-3"></div>
                  <div>
                    <h3 className="font-medium">Consultation</h3>
                    <p className="text-gray-600">Initial assessment to determine your specific needs and create a personalized treatment plan.</p>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-teal-50 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Contact {business.name}</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold mb-4">Location</h2>
            {business.latitude && business.longitude ? (
              <div className="bg-gray-200 w-full h-48 rounded-lg mb-4 flex items-center justify-center">
                <p className="text-gray-500">Map will be displayed here</p>
              </div>
            ) : (
              <div className="bg-gray-200 w-full h-48 rounded-lg mb-4 flex items-center justify-center">
                <p className="text-gray-500">Map not available</p>
              </div>
            )}
            <p className="text-sm text-gray-600">
              Located in {business.city}, {business.state}. Please contact for specific directions.
            </p>
          </div>
          
          {business.paymentMethods && business.paymentMethods.length > 0 && (
            <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
              <h2 className="text-xl font-bold mb-4">Payment Methods</h2>
              <div className="flex flex-wrap gap-2">
                {business.paymentMethods.map((method, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                    {method}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {business.amenities && business.amenities.length > 0 && (
            <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
              <h2 className="text-xl font-bold mb-4">Amenities</h2>
              <ul className="space-y-2">
                {business.amenities.map((amenity, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-teal-500 mr-2"></div>
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      
      {nearbyBusinesses.length > 0 && (
        <div className="mt-12">
          <BusinessList 
            businesses={nearbyBusinesses} 
            title={`More Electrolysis Providers Near ${business.city}`}
            limit={3}
          />
        </div>
      )}
    </div>
  );
};

export default BusinessPage;