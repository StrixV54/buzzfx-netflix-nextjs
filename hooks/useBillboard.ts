import useSWR from "swr";
import fetcher from "@/libs/fetcher";

export default function useBillboard() {
  const { data, error, isLoading } = useSWR("/api/random", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    data,
    error,
    isLoading,
  };
}
