import React, { Fragment } from 'react';
import { Paper, Typography } from '@material-ui/core';

const VideoDetail = ({ video }) => {
  if(!video) {
    return <div>Loading...</div>
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(video);

  return (
    <Fragment>
    <Paper elevation={2} style={{ height: '30%' }}>
      <iframe 
        frameBorder="0" 
        width="100%" 
        height="100%" 
        title="Video Player" 
        src={videoSrc}
        allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"/>
    </Paper>

    <Paper elevation={2} style={{ padding: '20px' }}>
      <Typography variant="h4"> {video.snippet.title} - {video.snippet.channelTitle}</Typography>
      <Typography variant="subtitle1"> {video.snippet.channelTitle} </Typography>
      <Typography variant="subtitle2"> {video.snippet.description} </Typography>
    </Paper>
  </Fragment>
  )
};


export default VideoDetail;