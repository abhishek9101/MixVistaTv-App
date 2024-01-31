import React, { useState, useMemo, useRef, useEffect } from 'react';
import Hls from 'hls.js';
import './VideoPlayer.css'; 

const Documentry = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const videoRef = useRef("");

  const data = useMemo(
    () => [
      {
        id: 'a1',
        title: 'Sports 1',
        thumbnail: './thumbnail/cric.jpg',
        name: 'https://prod-sports-north-gm.jiocinema.com/bpk-tv/Sports18_1_HD_voot_MOB/Fallback/index.m3u8',
        duration: 'Go Live',
      },
      {
        id: 'a2',
        title: 'Sports 2',
        thumbnail: './thumbnail/cric.jpg',
        name: 'http://195.26.87.217/live?channelId=26034&deviceMac=00:1A:79:33:E9:41',
        duration: 'Go Live',
      },
      {
        id: 'a3',
        title: 'Sports 3',
        thumbnail: './thumbnail/cric.jpg',
        name: 'https://edgesports-sportstribal.amagi.tv/playlist.m3u8',
        duration: 'Go Live',
      },
      {
        id: 'a4',
        title: 'Sports 4',
        thumbnail: './thumbnail/cric.jpg',
        name: 'https://cdn-apse1-prod.tsv2.amagi.tv/linear/amg01448-samsungin-eurosportin-samsungin/playlist.m3u8',
        duration: 'Go Live',
      },
    ],
    []
  );

  const handleVideoClick = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (showModal) {
      const matchVideo = data[currentIndex];

      if (Hls.isSupported() && matchVideo.name.endsWith('.m3u8')) {
        // If the link ends with '.m3u8' and Hls is supported, use Hls.js
        const hls = new Hls();
        hls.loadSource(matchVideo.name);
        hls.attachMedia(videoRef.current);
      } else {
        // Otherwise, use the regular video tag
        videoRef.current.src = matchVideo.name;
       
      }

      videoRef.current.load();
      videoRef.current.play();
    }
  }, [showModal, currentIndex, data]);


  return (
    <div>
      <div className="video-gallery">
        <h2>🕵🏻‍♂️ Discovery</h2>
        <div className="videos">
          {data.map((video, index) => (
             <div key={video.id} className={`video-item`} onClick={() => handleVideoClick(index)}>
             <img src={video.thumbnail} alt={video.title} />
             <div className="overlay">▶️ Play</div>
             <p>{index + 1 > 9 ? index + 1 : '0' + (index + 1)}</p>
             <h3 className="title">{video.title}</h3>
             <p className="time">{video.duration}</p>
              </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <div className="video-container">
              <video ref={videoRef} controls autoPlay muted >
                Your browser does not support the video tag. Download Chrome (Best Option) Don't feel sad. 🤗
              </video>
            </div>
            <h3 className="title">{data[currentIndex].title}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Documentry;
