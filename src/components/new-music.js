import React, { Component } from 'react';
import firebase from '../config/firebase';


class newMusic extends Component {
    state = {
        songs: []

    }
   
   /*  musicUpload = () => {
        var songs = [
            {
              "name": "Biddy",
              "title": "I am a pro",
              "imgURL": "https://i.ibb.co/5j43ZHm/image-icon.png"
            },
            {
                "name": "Biddy",
                "title": "false",
                "imgURL": "https://i.ibb.co/5j43ZHm/image-icon.png"
              },
              {
               
                "name": "Biddy",
                "title": "I am a pro",
                "imgURL": "https://i.ibb.co/5j43ZHm/image-icon.png"
              },
              {
                 
                  "name": "Biddy",
                  "title": "Legend",
                  "imgURL": "https://i.ibb.co/5j43ZHm/image-icon.png"
                },
                {
                
                  "name": "Biddy",
                  "title": "love",
                  "imgURL": "https://i.ibb.co/5j43ZHm/image-icon.png"
                },
                {
                 
                  "name": "Biddy",
                  "title": "lovely",
                  "imgURL": "https://i.ibb.co/5j43ZHm/image-icon.png"
                },
                {
                   
                    "name": "Biddy",
                    "title": "Legend",
                    "imgURL": "https://i.ibb.co/5j43ZHm/image-icon.png"
                  }
    
    
          ]
        this.setState({songs})
    } */


    fetchMusic = async (querySnapshot) => {
        const songs = [{
            "name": "Biddy",
            "title": "I am a pro",
            "imgURL": "https://i.ibb.co/5j43ZHm/image-icon.png"
          },
          {
              "name": "Biddy",
              "title": "false",
              "imgURL": "https://i.ibb.co/5j43ZHm/image-icon.png"
            },
            {
             
              "name": "Biddy",
              "title": "I am a pro",
              "imgURL": "https://i.ibb.co/5j43ZHm/image-icon.png"
            },
            {
               
                "name": "Biddy",
                "title": "Legend",
                "imgURL": "https://i.ibb.co/5j43ZHm/image-icon.png"
              },
              {
              
                "name": "Biddy",
                "title": "love",
                "imgURL": "https://i.ibb.co/5j43ZHm/image-icon.png"
              },
              {
               
                "name": "Biddy",
                "title": "lovely",
                "imgURL": "https://i.ibb.co/5j43ZHm/image-icon.png"
              },
              {
                 
                  "name": "Biddy",
                  "title": "Legend",
                  "imgURL": "https://i.ibb.co/5j43ZHm/image-icon.png"
                }
  ];
        
  try {
            console.log('attempting to get songs from firebase...')
            querySnapshot.forEach((doc) => {
                const { title, name, imgURL } = doc.data();
                songs.push({
                    key: doc.id,
                    doc, // DocumentSnapshot
                    title,
                    name,
                    imgURL,
                });
            });
            console.log('data successfully obatined from firebase...', this.state.songs)
        } catch (err) {
            console.log('couldn\'nt fetch songs', err)
        }

        this.setState({songs});
    }

    componentDidMount = () => {
        this.ref = firebase.firestore().collection('songs');
        console.log(this.ref)
        this.unsubscribe = null;
        this.unsubscribe = this.ref.onSnapshot(this.fetchMusic);
    }


    render() {
        console.log(this.state.songs)
        //this.musicUpload();
        return (
            <div style={{width:'100%', height:'300px'}}>
            <h6 style={{ fontStyle: 'bold', borderBottom: '1px solid #cccccc', paddingBottom:'10px' }}><b>New Music</b></h6>
            <div style={{width:'100%', marginTop:'30px'}}></div>
                {this.state.songs.map((song,i) =>
                    <ul key={i} style={{height:'120px', width:'100px', marginRight:'10px', float:'left'}}>
                       <li>
                        <img src={song.imgURL || "https://i.ibb.co/5j43ZHm/image-icon.png"} style={{height:'100px', backgroundColor:'black'}}></img>
                        <p style={{marginTop:-3, height:'20px'}}><b>{song.title || 'title'}</b></p>
                        <p style={{marginTop:-15, color:'grey', width:'100px'}}><b>{song.name || 'artist'}</b></p>
                       </li> 
                    </ul>)}
            </div>
        );
    }
}


export default newMusic;