import React from 'react'
import Image from 'next/image';
import Link from "next/link"
import styles from "../styles/Card.module.scss"

const MovieCard = ({title, poster, rating, id}) => {
  return (
    <div className={styles.card} key={id}>
      <Image
        width={200}
        height={200}
        src={`https://image.tmdb.org/t/p/original${poster}`}
        alt={title}
      />
      <h3 className={styles.movie__title}>{title}</h3>
      <p className={styles.movie__rating}>Rating: {rating}</p>
      <Link href={`/${id}`}>see more</Link>
    </div>
  );
}

export default MovieCard