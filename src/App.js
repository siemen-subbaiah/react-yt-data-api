import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import youtube from './youtube';
import VideoDet from './components/VideoDet';
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
    <Router>
      <Navbar getVideos={getVideos} />
      <Switch>
        <Route path='/' exact>
          <Videos loading={loading} videos={videos} />
        </Route>
        <Route path='/video/:id'>
          <VideoDet />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
