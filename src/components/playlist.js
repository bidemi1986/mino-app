import React, { Component } from 'react'
import '../css/materialize.css';
import '../css/style.css'; 
import icon from '../image-icon.png';

class Playlists extends Component {
    state = {
        playlists: [
            'Favourites',
            'Naija Top Hits',
            'Ghana Top Hits',
            'Fresh Out Naija',
            'Yoruba Hip-Hop',
            'Love Classics',
            'Prime Afrobeats',
            'Afro pop Hits (11\' - \'15)',
            'Alternative (Urban)'
        ],
        icon: icon
    }

    render() {
        return (
            <div style={{width:'100%'}}>
                <p style={{marginLeft:'8px', color:'grey', fontSize:12, marginTop:'40px'}}>P L A Y L I S T S</p>
                <ul style={{ marginRight: '10px' }}>
                    {this.state.playlists.map((playlist, i) =>
                        <li key={i} >
                            <div style={{float: 'left',justifyContent:'center', alignItems:'center', marginBottom:'-10px', position: 'relative', }}>
                                <div style={{ float: 'left', width: '5%' }}>
                                    <img src={this.state.icon} style={{ height: '20px',  marginRight: '20px', marginTop:'16px' }} ></img>
                                </div>
                                <div style={{ float: 'right', width: '95%', paddingLeft:'20px' }}>
                                    <p style={{color:'grey', fontSize:14}}><b>{playlist || 'mino playlist'}</b></p>
                                </div>
                            </div>
                        </li>)}
                </ul>
            </div>
        );
    }
}

export default Playlists;

