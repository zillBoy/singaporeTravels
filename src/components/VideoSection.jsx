import React from 'react'

const VideoSection = () => {
    return (
        <div>
            <div className="videoSection-div">
                <iframe title="aquarium21" width="80%" height="400" src="https://www.youtube.com/embed/v5MOoRVhtF4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="cardbox">
                <h4 className="cardbox-heading">AQUARIUM</h4>
                <p className="cardbox-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a pulvinar tortor.</p>
            </div>
        </div>
    );
}

export default VideoSection