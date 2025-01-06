import React from "react";
import Image from "next/image";
import styles from "@/app/styles/common.module.css";
import Link from "next/link";

const MovieCard = (curElem) => {
  const { summary, title, contextualSynopsis, itemSummary } = curElem.details;
  console.log(curElem.details);
  
  // Fallback for missing synopsis or image
  const synopsisText =
    contextualSynopsis?.text || "No synopsis available at the moment.";
  const boxArtUrl = itemSummary.boxArt.url || "/placeholder-image.png";
  const id = summary.id;

   console.log(id);

  return (
    <div className={styles.card}>
      <div className={styles.card_image}>
        <Image
          src={boxArtUrl}
          alt={title}
          width={260}
          height={200}
          placeholder="blur"
          blurDataURL="/loading-spinner.png" // Placeholder while loading
        />
      </div>
      <div className={styles.card_data}>
        <h2>{title.substring(0, 18)}...</h2>
        <p>{synopsisText.substring(0, 66)} ...</p>
        <Link href={`/movie/${id}`}>
          <button>View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
