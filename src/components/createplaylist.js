import React from 'react'
import '../css/materialize.css';
const styles = {
    container: {
        float: 'left',
        background: 'linear-gradient(to Bottom, #Ffffff 0%, #eeeeee 80%)',
        alignItems: 'center',
        paddingRight: '20%',
        borderBottom: '1px solid #eeeeee',
        borderTop: '1px solid #eeeeee',
        width: '100%',
        paddingLeft: '15px',
        height: '70px',
        width:'100%'


    },
    circle: {
        borderRadius: '50%',
        height: '40px',
        width: '40px',
        float: 'left',
        marginRight: '10px',
        marginTop: '15px',
        border: '1px solid #FE4604',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: '15px',
        paddingTop: '-25px'
    },
    plus: {
        fontSize: 30,
        color: '#FE4604',
        margin: '-6px'
    },
    text: {
        color: '#FE4604',
        fontSize: 12,
        float: 'left',
        marginTop: '27px',

    }
}

const CreatePlaylist = () => (
    <div style={styles.container}>
        <a href="#">
            <div style={styles.circle}>
                <p style={styles.plus}>+</p>
            </div>
        </a>
        <p style={styles.text}><b>CREATE</b>  <span style={{ paddingRight: '2px' }} /> <b> PLAYLIST</b> </p>
    </div>
)


export default CreatePlaylist;