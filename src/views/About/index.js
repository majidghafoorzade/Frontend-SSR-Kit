import Helmet from "react-helmet";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <Helmet>
        <title>About Page</title>
      </Helmet>
      <div>About Page</div>
      <Link to="/">Home</Link>
    </>
  );
}

export default About;
