import useSSRData from "hooks/useSSRData";

function Card() {

  const data = useSSRData();

  return (
    <div className="Card">
      <h1>{data.title}</h1>
    </div>
  )
}

export default Card;
