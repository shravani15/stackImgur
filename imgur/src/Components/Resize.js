import React, {Component } from 'react';
import { storage } from '../firebase';
class Resize extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleTransform = this.handleTransform.bind(this);
    }

        handleChange = e => {
            if(e.target.files[0]) {
                const image = e.target.files[0];
                this.setState(() => ({image}));
            }
        }

        handleTransform = () => {
            const {image} = this.state;
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on('state_changed',
            (snapshot) => {

            },

            (error) => {
                console.log(error);
            },
            
            () => {
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    console.log(url);
                    this.setState({url});
                })
            })
        }

    render() {
        const transform = {
            height : '150',
            width: '150',
            crop :'fill',
            effect: 'sepia',
            radius: '20',

        }

        return (
            <div transform={transform}>
            <br />
                <input type="file" onChange={this.handleChange} />
                <button onClick={this.handleTransform}>Transform</button>
                <br />
                <img src={this.state.url || 'https://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400"/>
            </div>
        )
    }
}

export default Resize;