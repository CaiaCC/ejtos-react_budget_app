
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (value) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value,
        });
    }

    return (
        <div className='alert alert-secondary' style={{backgroundColor: '#92e499'}}>
            <label style={{ backgroundColor: '#92e499', color: 'white' }} >Currency
                <select className="selecpicker" onChange={(event) => changeCurrency(event.target.value)} style={{ marginLeft: '1rem', backgroundColor: '#92e499', color: 'white' }}>
                    <option style={{ backgroundColor: '#92e499', color: 'black' }} value="£">£ Pound</option>
                    <option style={{ backgroundColor: '#92e499', color: 'black' }} value="$">$ Dollar</option>
                    <option style={{ backgroundColor: '#92e499', color: 'black' }} value="€">€ Euro</option>
                    <option style={{ backgroundColor: '#92e499', color: 'black' }} value="₹">₹ Rupee</option>
                </select>
            </label>

        </div>
    )
}

export default CurrencyDropdown;