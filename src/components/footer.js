import React, { Component } from 'react';
import '../css/materialize.css';
import '../css/style.css';
import logo from '../mino-black-logo.png'

const Footer = () => (
   
       <div>
           <footer>
        {/* <hr style={{width:'70%', float:'left', position:'absolute', marginLeft:'230px'}}></hr> */}
        {/* <div class="container" style={{borderTop: '1px solid grey', paddingTop:'30px'}}>  */}
            <div style={{paddingTop:'30px', borderTop: '1px solid #cccccc', borderBottom: '1px solid #cccccc'}}>
                <div class="row">
                    <div class="col l4 s12">
                        <img src={logo} style={{height:'40px', paddingTop:'10px'}}/>
                        


                    </div>
                    <div class="col l2 s12">
                        <p class="black-text" style={{fontSize:12}}><b>Mino</b></p>
                        <ul>
                            <li><a class="black-text" href="#!">Link 1</a></li>
                            <li><a class="black-text" href="#!">Link 2</a></li>
                            <li><a class="black-text" href="#!">Link 3</a></li>
                            <li><a class="black-text" href="#!">Link 4</a></li>
                        </ul>
                    </div>
                    <div class="col l2 s12">
                        <p class="black-text" style={{fontSize:12}}><b>Partners</b></p>
                        <ul>
                            <li><a class="black-text" href="#!">Link 1</a></li>
                            <li><a class="black-text" href="#!">Link 2</a></li>
                            <li><a class="black-text" href="#!">Link 3</a></li>
                            <li><a class="black-text" href="#!">Link 4</a></li>
                        </ul>
                    </div>
                    <div class="col l2 s12" >
                        <p class="black-text" style={{fontSize:12}}><b>Connect</b></p>
                        <ul>
                            <li><a class="black-text" href="#!">Link 1</a></li>
                            <li><a class="black-text" href="#!">Link 2</a></li>
                            <li><a class="black-text" href="#!">Link 3</a></li>
                            <li><a class="black-text" href="#!">Link 4</a></li>
                        </ul>
                    </div>
                    <div class="col l2 s12">
                        <p class="black-text" style={{fontSize:12}}><b>Join Us</b></p>
                        <ul>
                            <li><a class="black-text" href="#!">Link 1</a></li>
                            <li><a class="black-text" href="#!">Link 2</a></li>
                            <li><a class="black-text" href="#!">Link 3</a></li>
                            <li><a class="black-text" href="#!">Link 4</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="black-text" style={{fontSize:11}}>
                    <p>Copyright © 2019 Notjustok Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
       </div>
        
 
)
export default Footer;