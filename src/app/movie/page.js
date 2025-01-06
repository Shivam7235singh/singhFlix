import Link from "next/link";
import MovieCard from "@/app/Components/MovieCard";
import styles from "@/app/styles/common.module.css";

const Movie = async () => {

  // API details
  const url = process.env.RAPID_API;
  const options = {
    method: "GET",
    headers: {
      "X-RapidApi-Key": process.env.RAPID_API_KEY,
      "X-RapidApi-Host": "netflix54.p.rapidapi.com",
    },
  };

  // Fetch data from the API
  const response = await fetch(url, options);

  if (!response.ok) {
    console.error("Failed to fetch data");
    return <p>Error fetching movies.</p>;
  }

  const data = await response.json();

  // Assuming the API returns an array of movies/shows
  const movies = data;

  return (
    <section className={styles.movieSection}>
      <div className={styles.container}>
        <h1>Series & Movies</h1>
        <div className={styles.card_section}>
          {movies.map((curElem) => (
            <MovieCard key={curElem.id} {...curElem} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Movie;
