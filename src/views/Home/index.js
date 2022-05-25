import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import str from 'i18n';
import styles from './styles.module.scss';

function Home() {
  return (
    <>
      <Helmet>
        <title>{str.home}</title>
      </Helmet>

      <div className={styles.Home}>
        <h1>{str.welcome}</h1>
        <Link to="/todos">{str.todos}</Link>
      </div>
    </>
  )
}

export default Home;
