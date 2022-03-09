import useSSRData from "hooks/useSSRData";

function Headline() {

  const data = useSSRData();

  return (
    <div className="Headline">This is My TITLE: <strong>{data.title}</strong></div>
  )
}

export default Headline;
