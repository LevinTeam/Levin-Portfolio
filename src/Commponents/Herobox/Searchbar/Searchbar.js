import React from 'react';
import './Searchbar.css'

function App() {
    return (
<div className='main-hero'>
        <img src="Images/BN/outline 1.png" className='hero-image' />

        <div className="App">
            <form className="search-box">
                <input type="text" placeholder=" " />
                <button type="reset"></button>
            </form>
        </div>
</div>
    );
}

export default App;
