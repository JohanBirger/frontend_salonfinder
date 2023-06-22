import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Toolbar from './Toolbar';
import SearchCard from './SearchCard';
import SearchResults from './SearchResults';
import salonsData from '../data/salons.json';
import Salon from './Salon';
import { Option } from './utility/Dropdown';
import DescModal from './DescModal';

function Home() {
  const [treatment, setTreatment] = useState('');
  const [maxPrice, setMaxPrice] = useState(0);
  const [city, setCity] = useState('');
  const [salons, setSalons] = useState<Salon[]>([]);
  const [salonName, setSalonName] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setSalons(salonsData.hairSalons);
  }, []);

  const handleOpenModal = (name: string) => {
    setSalonName(name);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  

  return (
    <div>
       <div className='home-wrapper'>
      {/* Toolbar component for search inputs */}
      <Toolbar
        name="Search"
        onTreatmentChange={setTreatment}
        onMaxPriceChange={setMaxPrice}
        onCityChange={setCity}
        salonName={salonName}
        onSalonNameChange={setSalonName}
      />
      {/* SearchResults component to display search results */}
      <SearchResults
        salons={salons}
        treatment={treatment}
        maxPrice={maxPrice}
        city={city}
        salonName={salonName}
        onClick={handleOpenModal}
      />
      </div>
      {/* DescModal component to display salon details */}
      <DescModal isOpen={isOpen} onClose={() => handleCloseModal()} children={salons} salonName={salonName} />
      </div>
  );
}

export default Home;