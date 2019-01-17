import React, { Component } from 'react';

class Conatct extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <div className="container contact">
                    <h1>Let's <span className='spn-col'>Talk.</span> </h1>
                    <div className="row">
                        <div className="col-md-6">
                            <input type="text" name="fname" id="" placeholder='Full Name*'/>
                        </div>
                        <div className="col-md-6">
                            <input type="text" name="email" id="" placeholder='Email Address*' />
                        </div>
                        <div className="col-md-6">
                            <input type="text" name="" id="" placeholder='Subject' />
                        </div>
                        <div className="col-md-6">
                            <input type="text" name="" id="" placeholder='Phone Number' />
                        </div>
                        <div className="col-md-12">
                            <textarea name="" id="" cols="30" rows="5" placeholder='Your message'></textarea>
                        </div>
                        <button className='btn mx-auto'>Send Message</button>
                    </div>
                    <div className="support">
                        <h2>Hello@Qonibalqonie.Com</h2>
                        <p>+62 800 9000 123</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Conatct;