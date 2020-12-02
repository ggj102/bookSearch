import React, { useState } from 'react';
import Logo from '../img/Logo.png';
import '../css/MainSearch.css';
import SearchList from './SearchList';
import Axios from 'axios';
import reset from '../img/reset.png'

function MainSearch(){
    const [bookData, setBookData] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [loading, setLoading] = useState(false);

    // input에서 set이 된 inputValue값으로 데이터를 가져옴
    const onSearch = ()=>{
        setLoading(true);
       Axios.get("https://www.googleapis.com/books/v1/volumes?q="+inputValue).then((response)=>{
        console.log(response.data);
                setBookData(response.data.items)
            }).then(()=>{setLoading(false)});
        
    }

    // input에 입력한 값을 setInput에 set함
    const onChange = (e)=>{
        setInputValue(e.target.value);
    }

    // input에 모든 문자를 지움
    const onReset = () =>{
        setInputValue("");
        setBookData([]);
    }

    return(
        <div className="main">
            <div>
                <img className='logo' src={Logo} alt="img"/>
            </div>
            <div className="inputPos">
                <a href="#title" onClick={onReset} style={{display: inputValue === '' ? 'none' : 'block'}}><img className="resetBtn" src={reset} alt="img"/></a>
                <input 
                placeholder='Type author, book name, subject...' 
                className='searchInput'
                onChange={onChange}
                value={inputValue}
                />
                <a href="#title" className="searchBtn" onClick={onSearch}>SEARCH</a>
            </div>
            { loading && <div>loading...</div> }
            { !loading && <div className="result">{bookData.length === 0 ?'Nothing to show...' : <SearchList data={bookData} />}</div> }
            <div className="footer">Made by <span className="deylEnergyLink">Deyl Energy</span> </div>

        </div>
    )
}


export default MainSearch;