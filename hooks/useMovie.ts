import fetcher from "@/libs/fetcher";
import useSWR from "swr";

export default function useMovie(id?: string) {
  const { data, error, isLoading } = useSWR(
    id ? `/api/movies/${id}` : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnReconnect: false,
      revalidateOnFocus: false,
    }
  );

  return {
    data,
    error,
    isLoading,
  };
}
