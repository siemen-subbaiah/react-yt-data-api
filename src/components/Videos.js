import React from 'react';
import VideoList from './VideoList';

const Videos = ({ videos, loading }) => {
  return (
    <>
      {loading ? (
        <h3 className='load'>FETCHING RESULTS FROM YOUTUBE API...</h3>
      ) : (
        <div className='videos'>
          {videos.map((video) => (
            <VideoList video={video} key={video.etag} />
          ))}
        </div>
      )}
    </>
  );
};

export default Videos;
