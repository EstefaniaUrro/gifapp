import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';
import gif from '../gif.png';
// import Navbar from './Navbar';
const GifApp = props => {
    const [categories, setCategories] = useState([]);
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark ">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">GIF APP</span>
                    <form className="d-flex">
                       <img className="navbar-logo" src={gif} alt='Gif App'/>
                    </form>
                </div>
            </nav>
            <div className='container'>
                <AddCategory setCategories={setCategories} />
                <div>
                    {
                       
                        categories.map((category) => {
                            return (
                                <GifGrid
                                    key={category}
                                    category={category}/>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

GifApp.propTypes = {

}

export default GifApp;
