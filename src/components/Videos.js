import React from 'react';
import VideoList from './VideoList';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Videos = ({ videos, loading }) => {
  return (
    <>
      <h3 className='text-center'>
        Use the search bar above to search videos and click on the videos to get
        the dislike count
      </h3>
      <p className='text-center'>
        Please use this wisely 🙏 as there is less quota from Youtube API{' '}
        <YouTubeIcon
          style={{
            color: 'red',
            position: 'relative',
            top: '0.3rem',
          }}
        />
      </p>
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
