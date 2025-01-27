import React, { useRef } from "react";

const CustomVideoPlayer = () => {
  const playerRef = useRef(null);
  const handlePauseVideo = () => {
    playerRef.current.pause();
  };
  const handlePlayVideo = () => {
    playerRef.current.play();
  };
  return (
    <div>
      <h1>Custom Video Player</h1>
      <video
        height="300px"
        ref={playerRef}
        controls={false}
        src="https://tinyurl.com/d5bedbx9"
        type="video/mp4"
      ></video>
      <div>
        <button onClick={handlePlayVideo}>Play Video</button>
        <button onClick={handlePauseVideo}>Pause Video</button>
      </div>
    </div>
  );
};

export default CustomVideoPlayer;
