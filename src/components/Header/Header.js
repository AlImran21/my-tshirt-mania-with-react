import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1 className='text-5xl'>Welcome to TShirt mania</h1>
            <div className='flex justify-center gap-4 text-xl font-bold mt-6 mb-12'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/orderreview'>OrderReview</CustomLink>
                <CustomLink to='/grandpa'>GrandPa</CustomLink>
            </div>

        </div>
    );
};

export default Header;