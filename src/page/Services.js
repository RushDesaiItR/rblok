import React, { Component } from 'react';

export default class Services extends Component {
    render() {
        return (
            <div className="services">
                <h3 style={{ color: "white", textAlign: "center", fontWeight:"bold" }}>Services We Provide</h3>
                <div className="services-row">
                    <div className="services-card">
                        <div className="services-card-logo-container" >
                            <div className="services-card-logo-incontainer" style={{background:"#DE3C2A"}}>
                                <i class="fa fa-pencil services-card-logo" aria-hidden="true"></i>

                            </div>
                        </div>
                        <h3 style={{color:"#DE3C2A"}}>

                        Frontend UI
Development

                        </h3>
                        <p>

                        We are ready to help you create outstanding Frontend UI solutions using modern frontend technology.
                        </p>
                    </div>
                    <div className="services-card ">
                        <div className="services-card-logo-container">
                            <div className="services-card-logo-incontainer" style={{background:"#35B36C"}}>
                            <i class="fa fa-diamond services-card-logo" aria-hidden="true"></i>
                            </div>
                        </div>

                        <h3 style={{color:"#35B36C"}}>

                        Smart Contract Development
                        </h3>
                        <p>

                        We are ready to help you for develop Smart Contract on Private and Public Blockchain Networks
                        </p>
                    </div>
                    <div className="services-card ">
                        <div className="services-card-logo-container">
                            <div className="services-card-logo-incontainer" style={{background:"#FFA53C"}}>
                                <i class="fa fa-mobile services-card-logo" aria-hidden="true"></i>

                            </div>
                        </div>

                        <h3 style={{color:"#FFA53C"}}>

                            Mobile App
                            Development
                        </h3>
                        <p>

                            We create native mobile apps of the highest quality. Some of them are better than any apps on the market.
                            If your company values reduced costs and time-to-market above all else, cross platform app development fits the bill.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
