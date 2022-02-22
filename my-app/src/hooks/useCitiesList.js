import { useEffect, useReducer } from 'react';

const initialStare = {
    citiesList: JSON.parse(localStorage.getItem('citiesList')) || [],
}

const reduser = (state, action) => {
    switch (action.type) {
        case 'ADD_CITY': {
            const newState = {...state, citiesList: [...state.citiesList, action.payload]};
            return newState;
        }
        default: return initialStare;
    }
}

export const useCitiesList = () => {
    const [state, dispatch] = useReducer(reduser, initialStare);
    const { citiesList } = state;
    useEffect(() => {
        localStorage.setItem('citiesList', JSON.stringify(citiesList));
    }, [citiesList]);
    return [citiesList, dispatch];
}