import styles from '../styles/Movie.module.scss';
import { useRouter } from 'next/router';
import useMovie from '../hooks/useMovie';
import useVideos from '../hooks/useVideos';

export default function Movie() {
  const router = useRouter();
  const id = router.query.id;
  const movie = useMovie(id);
  const video = useVideos(id);

  return (
    <div className={styles.movie__container}>
      <div className={styles.video__container}>
        {video.data && (
          <iframe
            className="iframe"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video.data.results[0].key}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
      {movie.data && (
        <>
          <h1 className={styles.movie__title}>{movie.data.original_title}</h1>
          <p className={styles.movie__description}>{movie.data.overview}</p>
          <p className={styles.movie__rating}>
            Rating: {movie.data.vote_average}
          </p>
        </>
      )}
    </div>
  );
}
