import { Link } from "react-router-dom";

export default function ErrorComponent() {
  return (
    <div id="boxError">
      <h1>no page .</h1>
      <br></br>
      <Link to="/">back to page ...</Link>
    </div>
  );
}
