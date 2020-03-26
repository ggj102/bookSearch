import React, { useState, useEffect } from 'react';
import Logo from '../img/Logo.png';
import '../css/MainSearch.css';
import { NavLink } from 'react-router-dom';
import SearchList from './SearchList';
import Axios from 'axios';
import reset from '../img/reset.png'

function MainSearch(){
    const [bookData, setBookData] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [loading, setLoading] = useState(false);

    const onSearch = ()=>{
        setLoading(true);
       Axios.get("https://www.googleapis.com/books/v1/volumes?q="+inputValue).then((response)=>{
        console.log(response.data);
                setBookData(response.data.items)
            }).then(()=>{setLoading(false)});
        
    }

    const onChange = (e)=>{
        setInputValue(e.target.value);
    }

    const onReset = () =>{
        setInputValue("");
        setBookData([]);
    }

    return(
        <div className="main">
            <div>
                <img className='logo' src={Logo}/>
            </div>
            <div className="inputPos">
                <a href="#" onClick={onReset} style={{display: inputValue === '' ? 'none' : 'block'}}><img className="resetBtn" src={reset} alt=""/></a>
                <input 
                placeholder='Type author, book name, subject...' 
                className='searchInput'
                onChange={onChange}
                value={inputValue}
                />
                <a href="#" className="searchBtn" onClick={onSearch}>SEARCH</a>
            </div>
            { loading && <div>loading...</div> }
            { !loading && <div className="result">{bookData.length === 0 ?'Nothing to show...' : <SearchList data={bookData} />}</div> }
            <div className="footer">Made by <span className="deylEnergyLink">Deyl Energy</span> </div>

        </div>
    )
}


export default MainSearch;