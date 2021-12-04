import React from 'react';
import { Link } from 'react-router-dom';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const VideoList = ({ video }) => {
  return (
    <div className='video'>
      <Link to={`/video/${video.id.videoId}`}>
        <div className='yt-videos'>
          <img
            src={video.snippet.thumbnails.high.url}
            alt={video.snippet.title}
          />
        </div>
        <div className='yt-info'>
          <h3>{video.snippet.title}</h3>
          <p>{new Date(video.snippet.publishTime).toLocaleDateString()}</p>
          <p>
            {' '}
            <FiberManualRecordIcon className='icon' />{' '}
            {video.snippet.channelTitle}
          </p>
          <p className='desc'>{video.snippet.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default VideoList;

//   width = '400';
//   height = '240';
