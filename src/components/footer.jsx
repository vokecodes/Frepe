import React, { Component } from 'react';

class Footer extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <div className='ft-bg'>
                    <div className="cop-cont">
                        <div className="icon">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-dribbble"></i>
                            <i class="fab fa-instagram"></i>
                        </div>
                        <p>2019 &copy; Copyright <span style={{ color: '#ff9010' }}>Qoni</span>. All Rights Reserved.
                            Created by <span style={{ color: '#ff9010' }}>Voke</span>.
                            Credit <span style={{ color: '#ff9010' }}>Rometheme</span>.
                        </p>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Footer;