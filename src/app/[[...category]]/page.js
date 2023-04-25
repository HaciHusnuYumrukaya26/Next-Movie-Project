import React from "react";
import { HomeContainer } from "@/containers/home";



async function HomePage({ params }) {


  if (!!params.category?.length) {
    pagePromises.push(fetchMoviesByGenre(params.category[0]));
  }

 

  return (
    <HomeContainer
      categories={genres}
      popularMovies={popularMovies}
      topRatedMovies={topRatedMovies}
      selectedCategory={{
      

      }}
    />
  );
}

export default HomePage;