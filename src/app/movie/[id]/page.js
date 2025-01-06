import Image from "next/image";
import React from "react";
import styles from "@/app/styles/common.module.css"; // Ensure the correct path to styles is used

const page = async ({ params }) => {
 

  const id = await params?.id;

  if (!id) {
    return (
      <div className={styles.container}>
        <h2>Error: No movie ID provided</h2>
      </div>
    );
  }

  const url = `https://netflix54.p.rapidapi.com/title/similars/?ids=${id}&lang=en`;
  console.log(`Fetching URL: ${url}`);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidApi-Key': '7d73c3bb8emsh3befa653c14f843p1476b0jsnac278b625e44',
      'X-RapidApi-Host': 'netflix54.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);

   
    const data = await response.json();
    console.log(data);

    const main_data = data[0]?.similars || data?.similars;  
    console.log(main_data);
    if (!main_data) {
      throw new Error("No movie details found.");
    }

    return (
      <div className={styles.container}>
        <h2 className={styles.movie_title}>
          Netflix\<span>{main_data.summary?.type || "Unknown"}</span>
        </h2>
        <div className={styles.card_section}>
          <div>
            <Image
              src={main_data.itemSummary?.boxArt?.url || "/placeholder-image.png"}
              alt={main_data.title || "Movie Poster"}
              width={600}
              height={350}
              placeholder="blur"
              blurDataURL="/loading-spinner.png"
            />
          </div>
          <div >
            <h2>{main_data.title || "No Title Available"}</h2>
            <p>{main_data.contextualSynopsis?.text || "No description available."}</p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching movie data:", error);

    return (
      <div className={styles.container}>
        <h2>Error</h2>
        <p>{error.message}</p>
      </div>
    );
  }
};

export default page;
