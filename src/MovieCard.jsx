import styles from "./MovieCard.module.css";

export function MovieCard({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className={styles.MovieCard}>
      <a href="http://youtube.com/">
        <img
          width={230}
          height={345}
          className={styles.MovieImg}
          src={imageUrl}
          alt={Image.title}
        />
      </a>
      <div>{movie.title}</div>
    </li>
  );
}
