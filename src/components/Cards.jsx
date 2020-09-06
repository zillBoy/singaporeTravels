import React from 'react'
import { Component } from 'react';

class Cards extends Component {
    state = {
        images: ["card1.jpg", "card2.jpg", "card3.jpg"]
    }
    
    render() {
        const { images } = this.state
        return(
            <div className="">
                <CardImages className="" images={images} />
            </div>
        );
    }
}

const CardImages = ({images}) => {
    return <div className="cardImg-div">
        { images.map((value, index) => <img className="cardImg " alt="cards" src={require(`../images/${value}`)} />) }
    </div>
}

export default Cards