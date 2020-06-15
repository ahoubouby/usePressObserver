import { useEffect, useState } from "react";

export const useFetch = ({ url }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const result = await response.json();
        if (response.ok) {
          setData(result);
        } else {
          setHasError(true);
          setErrorMessage(result);
        }
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setHasError(true);
        setErrorMessage(err);
      }
    };
    fetchData();
  });
  return [data, isLoading, hasError, errorMessage];
};
