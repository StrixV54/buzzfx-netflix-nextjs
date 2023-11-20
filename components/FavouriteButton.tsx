import useCurrentUser from "@/hooks/useCurrentUser";
import useFavourites from "@/hooks/useFavourites";
import axios from "axios";
import { useCallback, useMemo } from "react";
import { FaPlus, FaCheck } from "react-icons/fa6";

type Props = {
  movieId: string;
};

export default function FavouriteButton({ movieId }: Props) {
  const { mutate: mutateFavourites } = useFavourites();
  const { data: currentUser, mutate } = useCurrentUser();

  const isFavourite = useMemo(() => {
    const list = currentUser?.favouriteIds || [];

    return list.includes(movieId);
  }, [currentUser, movieId]);

  const toggleFavourites = useCallback(async () => {
    let response;
    if (isFavourite) {
      response = await axios.delete("/api/register", { data: { movieId } });
    } else {
      response = await axios.post("/api/favourite", { movieId });
    }

    const updatedFavouriteIds = response?.data?.favouriteIds;

    mutate({
      ...currentUser,
      favouriteIds: updatedFavouriteIds,
    });
    mutateFavourites();
  }, [movieId, isFavourite, currentUser, mutate, mutateFavourites]);

  const Icon = isFavourite ? FaCheck : FaPlus;
  return (
    <div
      onClick={toggleFavourites}
      className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
    >
      <Icon className="text-white" size={15} />
    </div>
  );
}
