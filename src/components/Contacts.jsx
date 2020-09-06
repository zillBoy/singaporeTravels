import React from "react"

const Contacts = () => {
    
    let contactInfo = [{
        desc: "285 Lexington Ave, New York",
        icon: "location.svg"
    }, {
        desc: "+123 345 5678",
        icon: "phone.svg"
    }, {
        desc: "info@travel.com",
        icon: "mail.svg"
    }];
    
    return(
        <div>
            <div className="overlay-black-transparent footer-image">
                <img className="w-100 black-transparent" src={require("../images/footer.jpg")} alt=""/>
            </div>

            <div className="contacts-div">
                <div className="container">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-5">
                            <h2 className="contacts-heading">WE ARE EXPECING YOU</h2>
                            {
                                contactInfo.map((value, index) => {
                                    return (
                                        <div id={index} className="contact-icon-div">
                                        <img className="contact-icon" src={require(`../images/${value.icon}`)} alt=""/>
                                        <p>{value.desc}</p>
                                    </div>
                                );
                                })
                            }
                            
                        </div>
                        <div className="col-1"></div>
                        <div className="col-5">
                            <div>
                                <input placeholder="Name" className="contact-input" type="text"/>
                            </div>

                            <div>
                                <input placeholder="Email" className="contact-input" type="text"/>
                            </div>
                            
                            <div>
                                <input placeholder="Message" className="contact-input" type="text"/>
                            </div>

                            <div>
                                <button className="contact-btn">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts