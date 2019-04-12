import React, { Component } from 'react';
import Footer from './components/footer.js';
import Regions from './components/regions.js';
import Slider from './components/slider.js';
import NewMusic from './components/new-music.js'
import Playlists from './components/playlist.js';
import CreatePlaylist from './components/createplaylist.js'
import NowPlaying from './components/now-playing.js'
import './css/materialize.css';
import './css/style.css';

const ScreenHeight =window.innerHeight
const Wheight = ScreenHeight+'px'

class App extends Component {
  render() {
    console.log('The Screen height is: ',Wheight);
    return (
      <div  style={{ overflowY: 'hidden'}}>
        <div style={{ float: 'left', width: '20%' }}>

          <div class='playlist' style={{ marginLeft: '15px', height: '250px', overflowY: 'scroll', overflowX: 'hidden', overflow: 'auto' }}>
            <Playlists ></Playlists>
          </div>
          <div style={{minWidth:'100%'}}>  
            <CreatePlaylist style={{ width: '100%' }}></CreatePlaylist>
          </div>
          <div style={{height:'100px', borderBottom: '1px solid #eeeeee', backgroundColor:'white'}}>
            <div style={{marginTop:'30px'}}>
              <p style={{ paddingTop: '50px', paddingLeft: '15px' }}><b>Now Playing</b></p>
              <p style={{ fontSize: 10, color: '#FE4604', paddingLeft: '15px', marginTop:'-12px' }}>HOT TRACKS</p>
            </div>

          </div>
          <div style={{ marginLeft: '15px',width:'100%',height: '250px', overflowY: 'scroll', overflowX: 'hidden', overflow: 'auto', marginTop:'-5px' }}>
            <NowPlaying></NowPlaying>
          </div>
        </div>
        <div class='main-content' style={{ float: 'left', width: '79%', paddingLeft: '10px', background: 'linear-gradient(to right, #F9F9F9 0%, #ffffff 50%)', overflowY:'auto' }}>
          <div style={{ borderBottom: '1px solid #cccccc', paddingRight: '10px' }}>
            <Regions></Regions>
          </div>
          <div>
            <p>BROWSE</p>
            <h3 style={{ fontStyle: 'bold' }}><b> Essentials </b></h3>
          </div>
          <div style={{ width: '100%', marginBottom: '20px', position: 'relative' }}>
            <Slider></Slider>
          </div>
          <div style={{ width: '70%', float: 'left', marginBottom: '20px', position: 'relative' }}>
            <NewMusic></NewMusic>
          </div>
          <div style={{ width: '100%', position: 'relative', width: '70%', float: 'left', marginTop: '20px' }}>
            <Footer style={{ height: 300 }}> </Footer>
          </div>

        </div>


      </div>
    );
  }
}

export default App;
