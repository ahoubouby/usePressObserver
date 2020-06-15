import { useEffect, useState } from "react";

export const useFetch = ({ url, initParams = {} }) => {
  const [dynamicUrl, setUrl] = useState(url);
  const [dynamicParams, setParams] = useState(initParams);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${dynamicUrl}${dynamicParams}`);
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
  }, [dynamicUrl, dynamicParams]);
  return [data, isLoading, hasError, errorMessage, setUrl, setParams];
};
