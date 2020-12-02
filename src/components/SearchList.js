import React from 'react';
import '../css/SearchList.css';

function SearchList({data}){

    // 받아온 data를 map을 거쳐 list를 구성함
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
                {bookItem}
            </ul>
        </div>
    )
}

export default SearchList;