import React from 'react'

const TravelSection = ({image, heading}) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <img alt="" className="w-100 travelSection-img" src={require(`../images/${image}`)} alt=""/>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-7 travelSection-nature">
                        <h3 className="thingsToDo-heading">{heading}</h3>
                        <p className="thingsToDo-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Pellentesque a pulvinar tortor. Nunc interdum congue laoreet. Nulla 
                            pulvinar ipsum non tincidunt cursus. Vestibulum vel nibh est. 
                            Integer eget pharetra nisl, a gravida erat. Vestibulum sit amet mattis 
                            ante. Nulla facilisi. Nulla sed tempus leo, mattis vehicula lorem. Sed 
                            aliquam eros non erat cursus, ut vehicula sapien commodo. In ac 
                            imperdiet nibh, vel malesuada justo. Mauris eu auctor nibh.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TravelSection