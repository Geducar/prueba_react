import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({ data: "", loading: true, error: true });

  useEffect(() => {
    setState((state) => ({ data: state.data, loading: true }));
    fetch(url)
      .then((x) => x.json())
      .then((y) => {
        setState({ data: y, loading: false, error: false });
        console.log(y);
      })
      .catch((error) => {
        console.error("Error:", error);
        setState({ error: true });
      });
  }, [url, setState]);

  return state;
};
