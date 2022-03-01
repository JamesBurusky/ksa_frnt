import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  
 useEffect(() => {
      fetch(`/${url}`, {
        method: "get"
      })
        .then((res) => {
          console.log(res);
          if (!res.ok) {
            throw Error("Could not fetch data!!!");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
