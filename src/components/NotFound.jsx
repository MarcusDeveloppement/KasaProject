import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>Oups! la page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'acceuil</Link>
    </div>
  );
}
