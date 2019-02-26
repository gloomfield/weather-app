import React, { Component } from 'react';
import styles from './weather.css';

// my weather-component
export default class Weather extends Component {

    
    // render-method returns JSX (babel needed!)
    // babel convert JSX into JS code for browser
    // only one parent (div) to return possible
    render() {
        
        // OUTPUT
        // the conditions make sure, that text just appears when user searches for something
        return (
            <div>

            </div>  
        )
    }
    
}

/* OTHER PROPS: {JSON.stringify(this.props.forecast)}
                { this.props.humidity && <p>Humidity: { this.props.humidity }</p>}
                { this.props.error && <p>{ this.props.error }</p>}
*/

// NOTE:
// As a stateless component it would look like this (instead of class...)
/* 
const Weather = (props) =>{
    return (
        <div>
            { props.city && props.country && <p>Location: { props.city }, { props.country }</p>}
            { props.temperature && <p>Temperature: { props.temperature }</p>}
            { props.humidity && <p>Humidity: { props.humidity }</p>}
            { props.description && <p>Description: { props.description }</p>}
            { props.error && <p>{ props.error }</p>}
        </div>  
    )
}
*/

// NOTE:
// V2: As another stateless component it would look like this (instead of class...)
// this would be much easier to read
/*
const Weather = props => (
    <div>
        { props.city && props.country && <p>Location: { props.city }, { props.country }</p>}
        { props.temperature && <p>Temperature: { props.temperature }</p>}
        { props.humidity && <p>Humidity: { props.humidity }</p>}
        { props.description && <p>Description: { props.description }</p>}
        { props.error && <p>{ props.error }</p>}
    </div>  
);
*/
