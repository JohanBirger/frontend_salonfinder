import React,{useState,useEffect} from 'react';
import '../style/Modal.css';
import Salon from './Salon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  salonName: string;
  children: Salon[];
}

const containerStyle = {
    width: '80%',
    height: '200px',
  };

const DescModal: React.FC<ModalProps> = ({ isOpen, onClose, children=[], salonName }) => {
    if (!isOpen || !salonName) {
      return null;
    }
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string;

    
    
    const targetSalon = children.find((salon) => salon.name == salonName);
   
    if (!targetSalon) {
      return null;
    }

    const mapOptions = {
        zoom: 20,
        center: { lat: targetSalon.lat, lng: targetSalon.lon }, // Provide the initial coordinates for the map
      };
    
  
    return (
      <div className="modal-container">
        <button className="modal-close" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <span className='modal-title'>{targetSalon.name}</span>

        <div className='modal-card-wrapper'>
        </div>
        <div className="modal-content">
          <div>
           
            <br></br>
            <span>{targetSalon.address}</span>
            <br></br>
            <a href={targetSalon.url} target="_blank" rel="noopener noreferrer">
                <button >Visit Website</button> 
            </a>
            <div style={containerStyle}>
          <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap mapContainerStyle={containerStyle} options={mapOptions}>
              <Marker position={{ lat: targetSalon.lat, lng: targetSalon.lon }} /> {/* Add a marker at the desired position */}
            </GoogleMap>
          </LoadScript>
        </div>
           
          </div>

          

          
        </div>
      </div>
    );
  };

  export default DescModal;