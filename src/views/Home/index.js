import axios from 'axios';
import Headline from 'components/Headline';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

function Home() {
  return (
    <div className="Home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <div>Home Page</div>
      <div>
        <Headline />
      </div>
      <Link to="/about">About</Link>
    </div>
  )
}

Home.getInitialData = async function () {
  let res = await axios.get("https://www.namava.ir/mag/wp-json/wp/v2/posts/74365");
  return {
    title: res.data.title.rendered,
  };
}

export default Home;
