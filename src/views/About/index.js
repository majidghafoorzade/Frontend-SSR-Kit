import str from "i18n";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <Helmet>
        <title>{str.about}</title>
      </Helmet>

      <h1>{str.about}</h1>
      <Link to="/">{str.home}</Link>
    </>
  );
}

export default About;
