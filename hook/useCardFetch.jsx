import { useState, useEffect } from "react";
import axios from "axios";
import cardDataJSON from "../data/carCard.json";
const useCardFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [cardData, setCardData] = useState(cardDataJSON);
  // useEffect(() => {
  //   // Replace 'path-to-your-json-file.json' with the local path or remote URL
  //   const url = "../data/carCard";

  //   fetch(url)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setCardData(data);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Failed to fetch card data:", error);
  //       setError(error);
  //       setIsLoading(false);
  //     });
  // }, []);
  return { cardData, isLoading, error };
};

export default useCardFetch;
