import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './Card.css';

const Card = (props) => {
    return (
        <div className='cardfont'>
            <div className='cardborder'>
                <div className='pricestyle'><span className='pricestyle2'>Title: {props.title} </span></div>
                <div className='pricestyle'><span className='pricestyle2'>Author: {props.author} </span></div>
                <div className='descriptionstyle'><span className='pricestyle2'>Content: {props.content}</span></div>
                 
            </div>
        </div>
    );
};

const MapsCard = ({ article,IsSearched,found2}) => {
    const MapCard = article.map((article, index) => (
        <Card
            key={index}
            title={article.title}
            author={article.author}
            content={article.content}
        />
    ));

    return (
        <div>
             {IsSearched ==="true" ? (
                    <p className='pricestyle3' >{found2} posts were found</p>
                ) : (
                    <p className='showmorestyle'></p>
                )}
            {MapCard}
            
        </div>
    );
};

export default MapsCard;
