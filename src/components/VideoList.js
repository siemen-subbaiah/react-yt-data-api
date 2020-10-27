import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
const VideoList = ({ video }) => {
  return (
    <div className="video">
      <div className="yt-videos">
        <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>
          <img
            src={video.snippet.thumbnails.high.url}
            alt={video.snippet.title}
          />
        </a>
      </div>
      <div className="yt-info">
        <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>
          <h3>{video.snippet.title}</h3>
          <p>{new Date(video.snippet.publishTime).toLocaleDateString()}</p>
          <p>
            {' '}
            <FiberManualRecordIcon className="icon" />{' '}
            {video.snippet.channelTitle}
          </p>
          <p className="desc">{video.snippet.description}</p>
        </a>
      </div>
    </div>
  );
};

export default VideoList;

//   width = '400';
//   height = '240';
