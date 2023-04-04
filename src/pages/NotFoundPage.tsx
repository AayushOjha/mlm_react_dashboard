import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to={process.env.REACT_APP_404_PAGE_REDIRECTION_URL || "/"}>
        Go to Home Page
      </Link>
    </div>
  );
}

export { NotFound };
