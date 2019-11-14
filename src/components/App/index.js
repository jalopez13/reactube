import React, { Component } from 'react';
import { Grid, Container } from '@material-ui/core';
import youtube from '../../api/youtube';
import { SearchBar, VideoDetail, VideoList } from '../../components';
import './styles.scss'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onSelectVideo = this.onSelectVideo.bind(this);
  }

  componentDidMount() {
    this.handleSubmit('reactjs');
  }

  handleSubmit(q) {
    const response = youtube.get('search', { 
      params: {
        q,
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyDnHVW7EALRChpO_dMihkOnrD596Qan9PQ' // TODO: move into .env
      }
    });
    response.then(response => this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] }));
    response.catch(error => console.log(error));

  }

  onSelectVideo(video) {
    this.setState({ selectedVideo: video });
  }


  render() {
    const { selectedVideo, videos } = this.state;

    return (
      <Container maxWidth="lg">
        <h1>Reactube</h1>
        <p>Simple youtube clone react application using youtube api v3.</p>
        <Grid justify="center" container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit}/>
            </Grid>

            <Grid item xs={8}>
              <VideoDetail video={selectedVideo}/>
            </Grid>

            <Grid item xs={4}>
            <VideoList videos={videos} onSelectVideo={this.onSelectVideo}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
    );
  }
}

export default App;