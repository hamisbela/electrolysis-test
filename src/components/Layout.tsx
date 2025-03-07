import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Info, Mail, FileText, PlusCircle } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-teal-600 text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">
              ElectrolysisHairRemovalNearMe.com
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/about" className="hover:underline">About</Link>
              <Link to="/blog" className="hover:underline">Blog</Link>
              <Link to="/contact" className="hover:underline">Contact</Link>
              <Link to="/add-listing" className="hover:underline">Add Listing</Link>
            </nav>
          </div>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">ElectrolysisHairRemovalNearMe.com</h3>
              <p>Find the best electrolysis hair removal services near you.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:underline flex items-center"><MapPin size={16} className="mr-2" /> Find Providers</Link></li>
                <li><Link to="/about" className="hover:underline flex items-center"><Info size={16} className="mr-2" /> About</Link></li>
                <li><Link to="/contact" className="hover:underline flex items-center"><Mail size={16} className="mr-2" /> Contact</Link></li>
                <li><Link to="/blog" className="hover:underline flex items-center"><FileText size={16} className="mr-2" /> Blog</Link></li>
                <li><Link to="/add-listing" className="hover:underline flex items-center"><PlusCircle size={16} className="mr-2" /> Add Your Business</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Popular States</h3>
              <ul className="space-y-2">
                <li><Link to="/state/california" className="hover:underline">California</Link></li>
                <li><Link to="/state/texas" className="hover:underline">Texas</Link></li>
                <li><Link to="/state/new-york" className="hover:underline">New York</Link></li>
                <li><Link to="/state/florida" className="hover:underline">Florida</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Popular Cities</h3>
              <ul className="space-y-2">
                <li><Link to="/city/los-angeles-ca" className="hover:underline">Los Angeles, CA</Link></li>
                <li><Link to="/city/new-york-ny" className="hover:underline">New York, NY</Link></li>
                <li><Link to="/city/chicago-il" className="hover:underline">Chicago, IL</Link></li>
                <li><Link to="/city/houston-tx" className="hover:underline">Houston, TX</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; {new Date().getFullYear()} ElectrolysisHairRemovalNearMe.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;