import React from 'react';
import { Search, MapPin } from 'lucide-react';
import { BusinessListing, CityPageData, StatePageData } from '../types';
import CityList from '../components/CityList';
import StateList from '../components/StateList';

interface HomePageProps {
  businessListings?: BusinessListing[];
  cityPages?: CityPageData[];
  statePages?: StatePageData[];
}

const HomePage: React.FC<HomePageProps> = ({ 
  businessListings = [], 
  cityPages = [], 
  statePages = [] 
}) => {
  // Prepare data for city and state lists
  const cityListings = cityPages.map(city => ({
    id: Math.random(), // Temporary ID for rendering
    name: city.cityName,
    slug: city.slug,
    state: city.stateName,
    stateCode: city.stateName.substring(0, 2).toUpperCase(),
    businessCount: city.businesses.length
  }));

  const stateListings = statePages.map(state => ({
    id: Math.random(), // Temporary ID for rendering
    name: state.stateName,
    slug: state.slug,
    businessCount: state.businessCount,
    cities: []
  }));

  return (
    <div>
      <div className="bg-teal-50 p-8 rounded-lg mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-teal-800 mb-4">
          Find Electrolysis Hair Removal Services Near You
        </h1>
        <p className="text-lg mb-6">
          Discover the best permanent hair removal professionals in your area.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <MapPin className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Enter your city or state"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg flex items-center justify-center">
            <Search className="mr-2" />
            Search
          </button>
        </div>
      </div>

      <section className="mb-12">
        <CityList 
          cities={cityListings} 
          title="Top Cities for Electrolysis Hair Removal" 
          limit={12}
        />
      </section>

      <section className="mb-12">
        <StateList 
          states={stateListings} 
          title="Browse by State" 
          limit={16}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">About Electrolysis Hair Removal</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="mb-4">
            Electrolysis is the only FDA-approved method for permanent hair removal. Unlike other hair removal methods that provide temporary results, electrolysis uses shortwave radio frequencies to destroy the hair growth center, preventing future hair growth.
          </p>
          <p>
            Finding a qualified electrologist in your area is essential for safe and effective treatment. Our directory helps you locate certified professionals near you who specialize in permanent hair removal through electrolysis.
          </p>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Why Choose Electrolysis?</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Permanent Results</h3>
              <p>Unlike laser hair removal or waxing, electrolysis provides truly permanent hair removal by destroying the hair follicle completely.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Works on All Skin Types</h3>
              <p>Electrolysis is effective for all skin tones and types, making it universally accessible regardless of your complexion.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">FDA-Approved</h3>
              <p>Electrolysis is the only hair removal method approved by the FDA for permanent removal of unwanted hair.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Works on All Hair Colors</h3>
              <p>Unlike laser hair removal, electrolysis works on all hair colors including blonde, red, and gray hair.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;