import React , {Component} from 'react';
import { storage } from '../firebase';

class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            image: null,
            url: '' ,
            progress: 0
         }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }
        handleChange = e => {
            if(e.target.files[0]) {
                const image = e.target.files[0];
                this.setState(() => ({image}));
            }
        }
        handleUpload = () => {
            const {image} = this.state;
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on('state_changed', 
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                this.setState({progress});
            } ,
            
            (error) => {
                console.log(error);
            }, 

            () => {
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    console.log(url);
                    this.setState({url});
                })
            });
        }
    render() {
        const style = {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }
        return (
            <div style={style}>
            <progress value={this.state.progress} max="100"/>
            <br />
                <input type="file" onChange={this.handleChange}/>
                <button onClick={this.handleUpload}>Upload</button>
                <br />
                <img src={this.state.url }/>
                <button>Transform</button>
            </div>
        )
    }
}

export default Upload