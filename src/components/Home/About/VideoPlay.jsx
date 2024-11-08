import { UseGlobalContext } from "../../context/Context";

const VideoPlay = () => {
  const {setPlay} = UseGlobalContext();
  return (
    <div className="bg-black/70 min-h-screen w-full z-[9999] fixed inset-0 grid place-items-center"
    onClick={()=>setPlay(false)}
    >
     <iframe
  width="1024"
  height="600"
  className="w-full md:w-[1024px]"
  src="https://www.youtube.com/embed/qemqQHaeCYo?si=VuvxcHkWW8QC3X9M&autoplay=1"
  title="YouTube video player"
  allow="autoplay"
  allowFullScreen
></iframe>

    </div>
  );
};

export default VideoPlay;
