import axios from 'axios';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import str from 'i18n';
import Card from 'components/Card';

function Home() {
  return (
    <>
      <Helmet>
        <title>{str.home}</title>
      </Helmet>

      <Card />
      <Link to="/about">{str.about}</Link>
    </>
  )
}

Home.getInitialData = async function () {
  let res = await axios
    .get("https://www.namava.ir/mag/wp-json/wp/v2/posts/74365");
  return {
    title: res.data.title.rendered,
  };
}

export default Home;
