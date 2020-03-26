import React, { useState } from 'react';
import '../css/SearchList.css';
import bookImg from '../img/bookImg.png'

function SearchList({data}){

  

    const bookItem =data.map((obj)=>
        <li className="listItem" key={obj.id}>
        <a href={obj.volumeInfo.previewLink} className="bookTitle" target="blank">{obj.volumeInfo.title}</a>
        <div className="infoFlex">
            <div className="bookImg">{ obj.volumeInfo.imageLinks && <img src={obj.volumeInfo.imageLinks.smallThumbnail} alt="" /> }</div>  
            <div className="text">
                <div><span className="info">Author:</span> <span className="infoText">{obj.volumeInfo.authors}</span></div>
                <div><span className="info">Publisher:</span> <span className="infoText">{obj.volumeInfo.publisher} </span></div>
                <div><span className="info">Published:</span> <span className="infoText">{obj.volumeInfo.publishedDate}</span></div>
            </div>
        </div>
    </li>
        )

    return(
        <div className="searchList">
            <ul className="listFlex">
                {/* <li className="listItem">
                    <div className="bookTitle">왕은 즐긴다</div>
                    <div className="infoFlex">
                        <img src ={bookImg} />
                        <div className="text">
                            <div><span className="info">Author:</span> <span className="infoText">{data[0].volumeInfo.authors[0]}</span></div>
                            <div><span className="info">Publisher:</span> <span className="infoText">{data[0].volumeInfo.publisher} </span></div>
                            <div><span className="info">Published:</span> <span className="infoText">{data[0].volumeInfo.publishedDate}</span></div>
                        </div>
                    </div>
                </li> */}
                {bookItem}
            </ul>
        </div>
    )
}

export default SearchList;