import React from 'react';
import Salon from './Salon';
import SearchCard from './SearchCard';

interface SearchResultsProps {
  salons: Salon[];
  treatment: string;
  maxPrice: number;
  city: string;
  salonName: string; // Add salonName property
  onClick: (name: string) => void; 
}

const SearchResults: React.FC<SearchResultsProps> = ({ salons, treatment, maxPrice, city, salonName, onClick}) => {
  const filteredSalons = salons.filter((salon) => {
    const treatmentExists =
      treatment === 'All Treatments' || salon.prices.hasOwnProperty(treatment.toLowerCase());
    const priceCondition =
      maxPrice === 0 || salon.prices[treatment.toLowerCase() as keyof Salon['prices']] <= maxPrice;
    const cityCondition =
      city === 'All Cities' || salon.city.toLowerCase().includes(city.toLowerCase());
    const nameCondition =
      salonName === '' || salon.name.toLowerCase().includes(salonName.toLowerCase());

    return treatmentExists && priceCondition && cityCondition && nameCondition;
  }).sort((salonA, salonB) => {
    const priceA = salonA.prices[treatment.toLowerCase() as keyof Salon['prices']];
    const priceB = salonB.prices[treatment.toLowerCase() as keyof Salon['prices']];
    return priceA - priceB;
  });

  return (
    <div>
      {filteredSalons.map((salon, index) => (
        <SearchCard
          key={index}
          name={salon.name}
          label={salon.city}
          price={salon.prices[treatment.toLowerCase() as keyof Salon['prices']]}
          treatment={treatment}
          onClick={() => onClick(salon.name)} // Pass salon name to onClick event handler
        />
      ))}
    </div>
  );
};

export default SearchResults;