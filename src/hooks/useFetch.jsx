import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (baseURL, query, method, data) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    if (method === "POST") {
      axios
        .post("/user", data)
        .then((response) => {
          setResponse(response);
          setIsLoading(false);
          setError(false);
        })
        .catch((error) => {
          setError(error);
        });
    } else {
      axios
        .get(baseURL)
        .then((response) => {
          setResponse(response.data);
          setIsLoading(false);
          setError(false);
        })
        .catch((error) => {
          setError(error);
        });
    }
  }, [query]);

  return { response, isLoading, error };
};

export default useFetch;
