import axios from 'axios';
import Article from 'components/Article';
import styles from './styles.module.scss';

function Home() {
  return (
    <div className={styles.Home}>
      <Article />
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
