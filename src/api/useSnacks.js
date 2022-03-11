import React, { useEffect, useState } from "react";
import axios from "axios";

const authToken = '33b55673-57c7-413f-83ed-5b4ae8d18827';

export const useFetchSnacks = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3001/snacks", {
        headers: {"Authorization" : `Bearer ${authToken}`}
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {data, loading, error};
};
