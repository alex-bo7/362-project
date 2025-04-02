import { useEffect, useState } from "react";

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T | string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const responce = await fetch(url);
        if (!responce.ok) throw new Error(responce.statusText);

        const result = await responce.json();
        setData(result);
        setLoading(false);
        setError("");
      } catch (error) {
        setError(error instanceof Error ? error.message : "An error occured");
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { data, loading, error };
}
