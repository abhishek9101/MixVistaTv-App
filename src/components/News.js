import React, { useState, useMemo, useRef, useEffect } from 'react';
import Hls from 'hls.js';
import './VideoPlayer.css'; // Replace with the correct path to your CSS file

const News = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const videoRef = useRef(null);

  const data = useMemo(
    () => [
      {
        id: 'a1',
        title: 'Hindi News',
        thumbnail: './thumbnail/News.png',
        name: 'https://feeds.intoday.in/aajtak/api/aajtakhd/master.m3u8',
        duration: 'Go Live',
      },
      {
        id: 'a2',
        title: 'English News',
        thumbnail: './thumbnail/News.png',
        name: 'https://indiatodaylive.akamaized.net/hls/live/2014320/indiatoday/indiatodaylive/playlist.m3u8 ',
        duration: 'Go Live',
      },
      {
        id: 'a3',
        title: 'English News',
        thumbnail: './thumbnail/NewsEnglish.png',
        name: 'https://ndtv24x7elemarchana.akamaized.net/hls/live/2003678/ndtv24x7/master.m3u8',
        duration: 'Go Live', 
      },
      {
        id: 'a4',
        title: 'English News',
        thumbnail: './thumbnail/NewsEnglish.png',
        name: 'https://d7x8z4yuq42qn.cloudfront.net/index_7.m3u8',
        duration: 'Go Live',
      },
      // ... (add thumbnails to other video entries)
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

      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(matchVideo.name);
        hls.attachMedia(videoRef.current);
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = matchVideo.name;
      }

      videoRef.current.load();
      videoRef.current.play();
    }
  }, [showModal, currentIndex, data]);

  return (
    <div>
      <div className="video-gallery">
        <h2>📢 News</h2>
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
              <video ref={videoRef} controls autoPlay muted>
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

export default News;
