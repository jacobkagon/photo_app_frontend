import Card from 'components/content/blog/Card/Card';
import NavBar from 'components/content/NavBar/NavBar';

import './home.scss';

// import Card from '../blog/card/Card';
// import NavBar from '../navBar/NavBar';

function Home() {
  const photoIds = [
    'docs',
    'sample',
    'sample1',
    'v35lstx123xkthlj2pv3',
    'hb8kv0odidgfg2mr7d7k',
    'dg2rlkuapo1w7lcjfajp',
  ].reverse();
  return (
    <div>
      <NavBar />
      <div className='row'>
        {photoIds.map((photo_id, index) => (
          <Card photo_id={photo_id} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Home;
