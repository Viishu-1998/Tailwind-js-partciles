import React from 'react'
import PropTypes from 'prop-types'

export default function navbar(props) {
    return (
        <div className=''>
            <div className="nav text-white flex px-10 py-5">
                <div className='logo'>
                     <h1>{props.title}</h1>
                </div>
                <ul className="flex ml-auto">
                    <li className='mx-2'> <a href=""> Home</a></li>
                    <li className='mx-2'> <a href=""> About Us</a></li>
                    <li className='mx-2'> <a href=""> Contact Us</a></li>
                    <li className='mx-2'> <a href=""> Services</a></li>
                </ul>
            </div>

        </div>
    )
}

navbar.defaultProps = {
    title: "Your Title Here"
}

navbar.propTypes = {
    title: PropTypes.string
}