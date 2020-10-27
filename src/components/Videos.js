import React from 'react';
import VideoList from './VideoList';

const Videos = ({ videos }) => {
  return (
    <div className="videos">
      {videos.map((video) => (
        <VideoList video={video} key={video.etag} />
      ))}
    </div>
  );
};

export default Videos;
