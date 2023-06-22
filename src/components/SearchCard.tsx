import React, {FC,InputHTMLAttributes} from 'react';


interface CardProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string,
    label?: string,
    placeholder?: string,
    price: number,
    treatment:string,
    onClick: () => void; 
}

const SearchCard: FC<CardProps> = ({name,price,treatment, onClick}) => {

    return(
        <div className='card-wrapper' onClick={onClick}>
            <div>
                <div className='card-left-top'><span>{name}</span></div>
                <div className='card-left-bot'><span>{treatment} {price} SEK</span></div>
            </div>
            <div className='card-right'>
                <div><button>Check Availability</button></div>
            </div>
            
        </div>
    )
};

export default SearchCard;