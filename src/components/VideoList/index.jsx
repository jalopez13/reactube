import React from 'react';
import { Grid } from '@material-ui/core';
import { VideoItem } from '../../components';

const VideoList = ({ videos, onSelectVideo }) => {
  const videoSet = videos.map((video, id) => <VideoItem key={id} video={video} onVideoSelect={onSelectVideo}/>);
  return (
    <Grid container spacing={2}>
      {videoSet}
    </Grid>
  );
};

export default VideoList;