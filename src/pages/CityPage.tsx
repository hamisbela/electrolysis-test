import React from 'react';
import { useParams } from 'react-router-dom';
import { CityPageData } from '../types';
import BusinessList from '../components/BusinessList';

interface CityPageProps {
  cityData?: CityPageData;
}

const CityPage: React.FC<CityPageProps> = ({ cityData }) => {
  const { cityState } = useParams<{ cityState: string }>();
  
  // If we have pre-generated data, use it
  // Otherwise, parse from URL parameter
  const cityName = cityData?.cityName || cityState?.split('-').slice(0, -1).join(' ');
  const stateName = cityData?.stateName || cityState?.split('-').pop();
  const businesses = cityData?.businesses || [];
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Electrolysis Hair Removal in {cityName}, {stateName}
      </h1>
      
      <p className="mb-8 text-lg">
        Find the best electrolysis hair removal providers in {cityName}, {stateName}. Below is a list of top-rated permanent hair removal specialists in your area.
      </p>
      
      <BusinessList businesses={businesses} title="Electrolysis Providers in Your Area" />
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">About Electrolysis in {cityName}</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="mb-4">
            Electrolysis is the gold standard for permanent hair removal in {cityName}, {stateName}. Unlike temporary methods like waxing or shaving, electrolysis offers a permanent solution by destroying the hair follicle completely.
          </p>
          <p>
            When choosing an electrologist in {cityName}, look for proper certification, experience, and positive reviews. Many providers listed in our directory offer free consultations to discuss your specific needs and develop a treatment plan.
          </p>
        </div>
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">How much does electrolysis cost in {cityName}?</h3>
            <p>
              Prices in {cityName} typically range from $60-$120 per hour, depending on the provider's experience and location. Many offer package deals for multiple sessions.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">How many electrolysis sessions will I need?</h3>
            <p>
              The number of sessions varies based on the treatment area, hair density, and individual factors. Most clients require multiple sessions over several months for complete results.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">Is electrolysis painful?</h3>
            <p>
              Most people experience mild discomfort during electrolysis, often described as a momentary pinch or heat sensation. Many providers offer numbing options to increase comfort.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityPage;