import React from 'react'

export default function navbar() {
    return (
        <div className=''>
            <div className="nav bg-gray-200 flex px-10 py-5">
                <div className='logo'>
                     <h1>LOGO</h1>
                </div>
                <ul className="flex ml-auto">
                    <li className='mx-2'> <a href=""> Home</a></li>
                    <li className='mx-2'> <a href=""> About Us</a></li>
                    <li className='mx-2'> <a href=""> Contact Us</a></li>
                    <li className='mx-2'> <a href=""> etc</a></li>
                </ul>
            </div>

        </div>
    )
}
