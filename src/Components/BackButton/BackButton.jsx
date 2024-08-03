import "./BackButton.css";
import { Link, useNavigate } from "react-router-dom";

export default function BackButtonComponent() {
  const navigate = useNavigate();
  function handleBtnBack() {
    return navigate(-1)
  }
  return (
    <Link
      id="btn-back"
      className="btn-back"
      onClick={handleBtnBack}
    >
      back
    </Link>
  );
}
