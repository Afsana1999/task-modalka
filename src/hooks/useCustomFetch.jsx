import React from "react";
import { useState, useEffect } from "react";

function useCustomFetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://northwind.vercel.app/api/orders?authuser=2"
      );
      try {
        if (!response.ok) {
          throw new Error(
            `serverde xeta bas verdi ${response.status} ${response.statusText}`
          );
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        return setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}

export default useCustomFetch;
