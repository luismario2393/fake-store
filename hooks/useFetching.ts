import { useEffect, useState } from "react";
import { IProduct } from "../interfaces";

export const useFetching = (url: string) => {
  const [state, setState] = useState<IProduct[]>([]);
  const [detail, setDetail] = useState<IProduct>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setState(data);
      } catch (error) {
        setState([]);
      }
    };
    fetchData();
  }, [url]);

  return state;
};
