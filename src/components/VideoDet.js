import { useEffect, useState } from 'react';
import ThumbDown from '@material-ui/icons/ThumbDown';
import { useParams } from 'react-router';
import millify from 'millify';

const VideoDet = () => {
  const { id } = useParams();
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?key=${process.env.REACT_APP_KEY}&part=statistics&id=${id}`
        );
        const data = await res.json();
        setInfo(data.items);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [id]);

  const dislike =
    info[0]?.statistics?.dislikeCount === undefined
      ? ''
      : millify(parseInt(info[0]?.statistics?.dislikeCount));

  return (
    <div className='videos'>
      {loading ? (
        <h3 className='text-center'>Loading...</h3>
      ) : (
        <>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '15%',
              justifyContent: 'space-around',
            }}
          >
            <ThumbDown className='icon' style={{ fontSize: '3rem' }} />
            <p
              style={{ position: 'relative', top: '0.15rem', fontSize: '3rem' }}
            >
              {dislike}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default VideoDet;
