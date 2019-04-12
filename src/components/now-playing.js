import React, { Component } from 'react'
import '../css/materialize.css';
import '../css/style.css'; 
import icon from '../image-icon.png';

class NowPlaying extends Component {
    state = {
        tracks: [
             {
                 artist:'Adekunle Gold',
                 songtitle:'Before You Wake Up!',
                 artwork:icon
             },
             {
                artist:'Adekunle Gold',
                songtitle:'Before You Wake Up!',
                artwork:icon
            },
            {
                artist:'Adekunle Gold',
                songtitle:'Before You Wake Up!',
                artwork:icon
            },
            {
                artist:'Adekunle Gold',
                songtitle:'Before You Wake Up!',
                artwork:icon
            },
            {
                artist:'Adekunle Gold',
                songtitle:'Before You Wake Up!',
                artwork:icon
            },
            {
                artist:'Adekunle Gold',
                songtitle:'Before You Wake Up!',
                artwork:icon
            },
             
        ]
        
    }

    render() {
        return (
            <div>
                <ul style={{ marginRight: '10px', marginTop:'-10px', width:'100%' }}>
                    {this.state.tracks.map((track, i) =>
                        <li key={i} >
                            <div style={{float: 'left',marginBottom:'10px', marginTop:'-5px', position: 'relative',borderBottom: '1px solid #eeeeee', width:'100%' }}>
                                <div style={{ float: 'left', width: '30px' }}>
                                    <img src={track.artwork} style={{ height: '30px',  marginRight: '20px', marginTop:'16px' }} ></img>
                                </div>
                                <div style={{ float: 'right', width: '95%', paddingLeft:'20px', marginTop:'-50px', marginLeft:'10px' }}>
                                    <p style={{color:'black', fontSize:13, marginBottom:'-10px'}}><b>{track.songtitle || 'mino playlist'}</b></p>
                                    <p style={{color:'grey', fontSize:11}}><b>{track.artist || 'mino playlist'}</b></p>
                                </div>
                            </div>
                        </li>)}
                </ul>
            </div>
        );
    }
}

export default NowPlaying;

