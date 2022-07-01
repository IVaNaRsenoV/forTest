import React from 'react';
import { useAppSelector } from '../../redux/hooks';

export const Quantity: React.FC = () => {
    const count = useAppSelector(state => state.getReducer.count);
    return (
        <h1>Quantity: {count}</h1>
    )
}