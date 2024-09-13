
import { youtubeUrl } from "../utils/constants";
import { useSelector } from "react-redux";
import useFetchTrailer from "../customHooks/useFetchTrailer";

const VideoBackground = (props) => {
  const { movieId } = props;
  useFetchTrailer(movieId);

  const trailerId = useSelector(store => store.movies?.trailerVideo);

  return (
    <div className="w-screen absolute">
      <iframe 
      className="w-screen aspect-video"
        src={youtubeUrl+trailerId+"?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
