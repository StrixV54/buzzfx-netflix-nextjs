import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/router";
import { IoArrowBackOutline } from "react-icons/io5";

export default function Watch() {
  const router = useRouter();
  const { movieId } = router.query;
  const { data } = useMovie(movieId as string);

  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
        <IoArrowBackOutline
          onClick={() => router.push("/")}
          className="text-white cursor-pointer"
          size={30}
        />
        <p className="text-white text-1xl md:text-2xl font-bold">
          <span className="font-light">Watching : </span>
          {data?.title}
        </p>
      </nav>
      <video
        className="h-full w-full"
        autoPlay
        controls
        src={data?.videoUrl}
      ></video>
    </div>
  );
}
