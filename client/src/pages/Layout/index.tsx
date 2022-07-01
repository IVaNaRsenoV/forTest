import React from 'react';
import { Link } from 'react-router-dom';

export const Layout: React.FC = () => {
    return (
        <>
            <Link to='/products'>Products</Link>
            <Link to='/basket'>Basket</Link>
            <Link to='/quantity'>Quantity</Link>
        </>
    )
}