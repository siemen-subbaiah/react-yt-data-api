import { useState } from 'react';
import youtube from './youtube';
const { default: Videos } = require('./components/Videos');
const { default: Navbar } = require('./components/Navbar');

function App() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const getVideos = (query) => {
    setLoading(true);
    youtube
      .get('/search', {
        params: {
          q: query,
        },
      })
      .then((res) => {
        setVideos(res.data.items);
        setLoading(false);
      });
  };

  return (
    <div className="App">
      <Navbar getVideos={getVideos} />
      {loading ? (
        <h3 className="load">FETCHING RESULTS FROM YOUTUBE API...</h3>
      ) : (
        <Videos videos={videos} />
      )}
    </div>
  );
}

export default App;
