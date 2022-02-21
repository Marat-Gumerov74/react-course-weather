import React, { useEffect } from 'react';
import '../App.css';

import { Card } from '../Card'

export const CardList = ({ citiesList }) => {
    useEffect(() => {
        const resized = () => {
            console.log('resize');
        }
        console.log('mount', citiesList);
        window.addEventListener('resize', resized);
        return () => {
            console.log('unmount')
            window.removeEventListener('resize', resized)
        }
    },[]);
    console.log('render')
    return (
        <div className="CardList">
            {
                citiesList.map(city => <Card key={city} city={city} />)
            }
        </div>
    )
}
