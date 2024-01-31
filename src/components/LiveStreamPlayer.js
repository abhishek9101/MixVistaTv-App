import React, { useRef, useEffect } from 'react';

const LiveStreamPlayer = () => {
  const playerRef = useRef(null);

  const playVideo = () => {
    if (playerRef.current) {
      playerRef.current.play();
    }
  };

  return (
    <div>
      <h1>React Video Player Example</h1>
      <video ref={playerRef} controls width="800px" height="450px">
        <source
          src="http://195.26.87.217/live?channelId=26034&deviceMac=00:1A:79:33:E9:41"
          type=""
        />
        Your browser does not support the video tag.
      </video>
      <button onClick={playVideo}>Play Video</button>
    </div>
  );
};
export default LiveStreamPlayer;