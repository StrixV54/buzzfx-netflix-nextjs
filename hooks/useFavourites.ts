import fetcher from "@/libs/fetcher";
import React from "react";
import useSWR from "swr";

export default function useFavourites() {
  const { data, error, isLoading, mutate } = useSWR(
    "/api/favourites",
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
}
