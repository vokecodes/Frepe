import React, { Component } from 'react';
import one from '../images/1.jpg'
import two from '../images/2.jpg'
import three from '../images/3.jpg'
import four from '../images/4.jpg'
import five from '../images/5.jpg'
import six from '../images/6.jpg'


class Work extends Component {

    handleHover(){

    }

    render() { 
        return ( 
            <React.Fragment>
                <div className="container work">
                    <h1>Latest <span className='spn-col'>Work.</span></h1>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="wrk-wrp" >
                                        <img src={one} alt="" />
                                    </div>
                                    <div className="wrk-txt" style={{display: 'none'}}>
                                        <h2>02 Plure #</h2>
                                        <span className="spn-col">Design</span>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="wrk-wrp">
                                        <img src={four} alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="wrk-wrp">
                                        <img src={five} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="wrk-wrp">
                                        <img src={two} alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="wrk-wrp">
                                        <img src={three} alt="" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="wrk-wrp">
                                        <img src={six} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Work;