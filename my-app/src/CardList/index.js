import React from 'react';
import '../App.css';

import { Card } from '../Card'

export class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orderBy: 'asc',
        }
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(e){
        this.setState({
            orderBy: e.target.value,
        })
    };

    render() {
        console.log(this.props);
        const {orderBy} = this.state;
        const {citiesList} = this.props;
        const sortedCitiesList = citiesList.sort();
        if (orderBy === 'desc') {
            sortedCitiesList.reverse();
        }
        return (
            <>
                <select className='Select' value={orderBy} onChange={this.handleOnChange}>
                    <option value="desc">By name desc</option>
                    <option value="asc">By name asc</option>
                </select>
                <div className="CardList">
                    {
                        citiesList.map(city => <Card key={city} city={city} />)
                    }
                </div>
            </>
        )
    }
};