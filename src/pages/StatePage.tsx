import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { StatePageData, CityListing } from '../types';

interface StatePageProps {
  stateData?: StatePageData;
}

const StatePage: React.FC<StatePageProps> = ({ stateData }) => {
  const { state } = useParams<{ state: string }>();
  
  // If we have pre-generated data, use it
  // Otherwise, parse from URL parameter
  const stateName = stateData?.stateName || (state ? state.charAt(0).toUpperCase() + state.slice(1).replace(/-/g, ' ') : '');
  const cities = stateData?.cities || [];
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Electrolysis Hair Removal in {stateName}
      </h1>
      
      <p className="mb-8 text-lg">
        Find electrolysis hair removal providers across {stateName}. Choose your city below to see local specialists.
      </p>
      
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Cities in {stateName}</h2>
        {cities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cities.map((city) => (
              <div key={city.id} className="border rounded-lg p-4 hover:bg-teal-50">
                <Link 
                  to={`/city/${city.slug}`}
                  className="flex items-center text-teal-700 hover:text-teal-900"
                >
                  <MapPin size={18} className="mr-2" />
                  {city.name}, {city.stateCode}
                  {city.businessCount > 0 && (
                    <span className="ml-auto text-xs text-gray-500">
                      ({city.businessCount})
                    </span>
                  )}
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No cities with electrolysis providers found in {stateName}.</p>
        )}
      </div>
      
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">About Electrolysis in {stateName}</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="mb-4">
            Electrolysis has become increasingly popular in {stateName} as more people seek permanent solutions for unwanted hair. With numerous certified practitioners across the state, residents have access to quality electrolysis services.
          </p>
          <p>
            {stateName} requires proper licensing and certification for electrologists to ensure safe and effective treatments. When choosing a provider, look for proper credentials and positive client reviews.
          </p>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-bold text-lg mb-2">How much does electrolysis cost in {stateName}?</h3>
            <p>
              Electrolysis costs in {stateName} typically range from $60 to $150 per hour, depending on the practitioner's experience and location. Many providers offer package deals for multiple sessions.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-bold text-lg mb-2">Is electrolysis regulated in {stateName}?</h3>
            <p>
              Yes, electrolysis is regulated in {stateName}. Practitioners must complete specific training and obtain proper licensing before offering services.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-bold text-lg mb-2">How many sessions will I need?</h3>
            <p>
              The number of sessions varies depending on the area being treated, hair type, and individual factors. Most people require multiple sessions over several months for complete permanent hair removal.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatePage;