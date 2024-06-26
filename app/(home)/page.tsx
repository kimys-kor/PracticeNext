import Link from "next/link";
import { API_URL } from "../constants";

export const metadata = {
  title: "Home",
};

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();

  return (
    <div>
      <h1>Home</h1>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link prefetch href={`/movies/${movie.id}`}>
            {movie.title}
          </Link>
        </li>
      ))}
    </div>
  );
}
