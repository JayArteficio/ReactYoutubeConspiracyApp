import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// 'hey, use the React library and name it 'React'
// 'use the ReactDOM library to manipulate the DOM and name it 'ReactDom'
// { Component } same as const Component = React.Component;
//ie use React.Component and name it Component;

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//use these components and here is where you find them

const API_KEY = 'AIzaSyAVzzrm2SeuDkFpuLGidiRNiRktltdUZYw';

//get this api key from google developers console
//remeber to install the package >npm install --save youtube-api-search

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch('conspiracy theory');
  };

  // this is the initial search

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      });
    });
  }

  // note ES6 {videos: videos}  is same as {videos}

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term); }, 1000);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={ this.state.selectedVideo } />
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
          videos={ this.state.videos } />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
