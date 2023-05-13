import React from 'react';
import axios from 'axios';
import SearchInput from './SearchInput';
import ImageList from './ImageList';

class App extends React.Component {

    state = {images:[]};

     onSearchSubmit = async (entry) => {
        console.log(entry);
      const response =   await axios.get(`https://pixabay.com/api/?key=36353678-0381ead74b2b66aaef2991033&q=${entry}&image_type=photo&pretty=true`);
      this.setState({images:response.data.hits});
    }

    render(){
    return (
        <div className='ui container' style={{marginTop:'30px'}}>
            <SearchInput onSearchSubmit={this.onSearchSubmit}></SearchInput>
            <ImageList images={this.state.images}></ImageList>
            We have {this.state.images.length } images
        </div>
    )
}
}

export default App;