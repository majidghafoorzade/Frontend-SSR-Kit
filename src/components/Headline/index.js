import { useContext } from "react";
import SSRDataContext from "server/utils/SSRDataContext";

function Headline() {

  const data = useContext(SSRDataContext);

  return (
    <div className="Headline">This is My TITLE: <strong>{data.title}</strong></div>
  )
}

export default Headline;
