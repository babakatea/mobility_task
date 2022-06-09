import React, { useEffect, useState } from "react";
import axios from "axios";
import { MainLayout } from "./MainLayout";
import { Data, RequestError } from "./types";
import { ErrorBoundary } from "./ErrorBoundary";

export const StoreContext = React.createContext<Data[]>([]);

const Index: React.FC = () => {
  const [state, setState] = useState<Data[]>([]);
  const [error, setError] = useState<RequestError>({ isError: false });

  const getData = async () => {
    try {
      const { data } = await axios.get(
        "https://raw.githubusercontent.com/cartrawler/mobility-react-native-assessment/master/assets/availability.json"
      );
      return data;
    } catch (e: any) {
      setError({ isError: true, error: e.response.data, errorInfo: e.message });
    }
  };

  useEffect(() => {
    if (!state?.length) {
      getData().then((response) => {
        response.sort((a: Data, b: Data) => a.eta - b.eta); // sort by ETA
        setState(response);
      });
    }
  }, [state?.length, error.isError]);

  return error.isError ? (
    <ErrorBoundary error={error} />
  ) : (
    <StoreContext.Provider value={state}>
      <MainLayout />
    </StoreContext.Provider>
  );
};

export { Index };
