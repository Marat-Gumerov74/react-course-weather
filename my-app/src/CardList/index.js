import React, { useEffect } from 'react';
import '../App.css';

import { Card } from '../Card'

export const CardList = ({ citiesList }) => {
    useEffect(() => {
        console.log('citiesList', citiesList);
        return () => {
            console.log('unmount');
        }
    }, []);

    return (
        <div className="CardList">
            {
                citiesList.map(city => <Card key={city} city={city} />)
            }
        </div>
    )
}
