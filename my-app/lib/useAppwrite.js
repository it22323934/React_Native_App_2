import { useEffect, useState } from "react";
import { getPosts } from "./appwrite";
import { Alert } from "react-native";

const useAppwrite = (fn) => {
  const [data, setDate] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fn();
      setDate(response);
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => fetchData();

  return { data, isloading, refetch };
};

export default useAppwrite;
