import React, { useEffect, useRef } from 'react';


const VideoPlayer = () => {
  const videoRef = useRef(null);
  const hlsUrl = 'https://dai.google.com/linear/hls/event/x7rXWd2ERZ2tvyQWPmO1HA/master.m3u8';

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // Native HLS support (Safari)
        video.src = hlsUrl;
      } else if (window.Hls) {
        // Use hls.js for other browsers
        const hls = new window.Hls();
        hls.loadSource(hlsUrl);
        hls.attachMedia(video);
      } else {
        console.error('HLS is not supported on this browser.');
      }
    }
  }, [hlsUrl]);
  

  return (
    <div>
      <video ref={videoRef} controls autoPlay>
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
