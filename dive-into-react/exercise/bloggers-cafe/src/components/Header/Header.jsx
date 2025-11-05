import React from 'react';
import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <>
            <nav className="p-2 border-b-2 border-gray-200 bg-white  mb-4">
                <div className=" mx-auto flex justify-between items-center">
                    <h1 className="text-gray-800 text-2xl font-bold">Bloggers Cafe</h1>
                    <img src={profile} alt="" />
                </div>
            </nav>
        </>
    );
};

export default Header;