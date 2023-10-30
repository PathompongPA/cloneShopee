import "./BackButton.css";
import { Link, useNavigate } from "react-router-dom";

export default function BackButtonComponent() {
  const navigate = useNavigate();
  return (
    <div id="boxBackButton">
      <Link
        id="back"
        onClick={() => {
          navigate(-1);
        }}
      >
        back
      </Link>
    </div>
  );
}
