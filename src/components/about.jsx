import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../App.css'
import bulb from '../images/bulb.png'
import diamond from '../images/diamond.png'
import monitor from '../images/monitor.png'
import support from '../images/support.png'

class About extends Component {
    render() { 
        return ( 
            <div className='about container text-center'>
                <h1>About <span style={{color: '#ff9010'}}>Me</span></h1> 
                <h4>My Name Qoni Balqonie And And I'm The Fastest Man Alive From Pekanbaru.</h4>
                <p className='ab-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque massa dui, 
                    convallis sit amet lacus eu, iaculis volutpat mauris. Cras sit amet turpis eu dui 
                    mollis luctus vitae laoreet nunc. Nulla mi massa, vulputate a blandit a, mollis vel leo. 
                    Nam ex, auctor non faucibus sed, euismod quis dolor. Praesent pellentesque mi rutrum, 
                    mattis urna in, gravida arcu. Donec sed auctor justo, quis viverra est. Etiam quis mattis 
                    erat. Quisque euismod, tellus eu rutrum cursus, nunc arcu aliquam augue, a cursus quam urna 
                    nec magna. Cras sit amet turpis eu dui mollis luctus vitae laoreet nunc. Nulla mi massa, 
                    vulputate a blandit a, convallis sit amet lacus eu, iaculis volutpat mauris gravida arcu. 
                    Phasellus at risus in turpis gravida cursus eget ac lorem.
                </p>
                <p className='ab-p' style={{ marginTop: '40px' }}>Want to know more about me? You can find my full resume on
                <span style={{ color: '#ff9010', fontWeight:'700' }}> Linkedin </span>
                    or
                <span style={{ color: '#ff9010', fontWeight:'700' }}> Dribbble</span>,
                </p>
                <div className="container mx-auto" style={{width:'650px'}}>
                    <div className="row">
                        <div className="col-md-3">
                            <img src={bulb} alt="" />
                            <br />
                            <p style={{marginTop:'15px', fontSize:'15px'}}>Creative Director</p>
                        </div>
                        <div className="col-md-3">
                            <img src={diamond} alt=""/>
                            <br/>
                            <p style={{marginTop:'15px', fontSize:'15px'}}>Graphic Designer</p>
                        </div>
                        <div className="col-md-3">
                            <img src={monitor} alt=""/>
                            <br/>
                            <p style={{marginTop:'23px', fontSize:'15px'}}>UI/UX Development</p>
                        </div>
                        <div className="col-md-3">
                            <img src={support} alt=""/>
                            <br/>
                            <p style={{marginTop:'15px', fontSize:'15px'}}>Support</p>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default About;