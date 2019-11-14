import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

const VideoItem = ({ video, onVideoSelect }) => {

  return (
    <Grid item xs={10}>
      <Paper style={{  alignItems: 'center', cursor: 'pointer', padding: '14px' }} onClick={() => onVideoSelect(video)}>
        <img src={video.snippet.thumbnails.medium.url} style={{ marginRight: '20px' }} alt=""thumbnail/>
        <Typography variant="subtitle1"> {video.snippet.title} </Typography>
      </Paper>
    </Grid>
  );
};


export default VideoItem;