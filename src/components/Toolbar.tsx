import React, {FC,InputHTMLAttributes} from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './utility/Dropdown';
import { Option } from './utility/Dropdown';



interface ToolbarProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    onTreatmentChange: (value: string) => void;
    onMaxPriceChange: (value: number) => void;
    onCityChange: (value: string) => void;
    salonName: string;
    onSalonNameChange: (salonName: string) => void;
  }

const cityOptions: Option[] = [
    {label:'All Cities',value:'All Cities'},
    { label: 'Gothenburg', value: 'Gothenburg' },
    { label: 'Stockholm', value: 'Stockholm' },
    // Add more city options as needed
];

const treatmentOptions: Option[] = [
    {label:'All Treatments',value:'All Treatments'},
    { label: 'Haircut', value: 'Haircut' },
    { label: 'Coloring', value: 'Coloring' },
    { label: 'Styling', value: 'Styling' },
    // Add more city options as needed
];
const maxPrice: Option[] = [
    {label:'No Max Price',value: 0},
    { label: '500 SEK', value: 500 },
    { label: '1000 SEK', value: 1000 },
    { label: '1500 SEK', value: 1500 },
    // Add more city options as needed
];

const Toolbar: React.FC<ToolbarProps> = ({salonName, onTreatmentChange, onMaxPriceChange, onCityChange, onSalonNameChange}) => {

    const handleTreatmentChange = (option: Option) => {
        onTreatmentChange(String(option.value));
      };
    
      const handleMaxPriceChange = (option: Option) => {
        onMaxPriceChange(Number(option.value));
      };
    
      const handleCityChange = (option: Option) => {
        onCityChange(String(option.value));
      };
      const handleSalonNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSalonNameChange(e.target.value);
      };
      
    
    

    return(
        <div className='tools-wrapper'>
        <div className='input-wrapper'>
             <input  placeholder="Search by salon" className="input" value={salonName} onChange={handleSalonNameChange}></input>
        </div>
        <div>
            <Dropdown options={treatmentOptions} onChange={handleTreatmentChange}/>
            <Dropdown options={maxPrice} onChange={handleMaxPriceChange}/>
            <Dropdown options={cityOptions} onChange={handleCityChange}/>
            
        </div>
        </div>
    )
};

export default Toolbar;

