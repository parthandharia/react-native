import React, {Component} from 'react';
import { View } from 'react-native';
import axios from  'axios';
import AlbumDetail from './AlbumDetail'; 


class AlbumList extends Component {

    state={album: [] };

    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(Response => this.setState({album: Response.data}));
    }

    renderAlbum(){
        return this.state.album.map(album => <AlbumDetail key = {album.title} album={album} />);
    }
   render() {
       console.log(this.state);
    return(
        <View >
            {this.renderAlbum()}
        </View>
    );}
}

 export default AlbumList;