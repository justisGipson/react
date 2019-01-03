import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail'

const API_KEY = 'AIzaSyD5WIR66P9c8bwLz1vk8qPPBO6lyRp3u_s';

class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideos: null
        };

        this.videoSearch('React Tutorials');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            console.log(videos);
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 1800);
        return (
            <div className='main'>
                <div className='mainDiv'>
                    <h1 className='section-title'>YouTube Video Search</h1>
                    <h3>Basic Video Search</h3>
                    <SearchBar onSearchTermChange={videoSearch} />
                    <VideoDetail video={this.state.selectedVideo} />
                </div>
            </div>
        )

    }
}

export default Video;