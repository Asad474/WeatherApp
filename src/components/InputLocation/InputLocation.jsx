import React, {useState} from 'react';
import './InputLocation.css';
import { FaSistrix } from "react-icons/fa";

const InputLocation = props => {
    const [city, setCity] = useState('');

    const formSubmit = (event) => {
        event.preventDefault();
        props.getLocation(city);
    };

    return (
        <form action="" className='input-city' onSubmit={formSubmit}>
            <input 
                type="text" 
                name={city} 
                onChange={event => setCity(event.target.value)} 
                id="city" 
                placeholder='Enter City' 
            />
            <FaSistrix className="search-city"/>
        </form>
    );
};

export default InputLocation;