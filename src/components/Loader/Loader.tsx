import React, { useState, useEffect } from 'react';
import { Spin, Space } from 'antd';
import { LoaderContainer, LoadingMessage, ProgressBar } from './Loade.styled';

const MOVIE_LOADING_PHRASES = [
  "Directing background chickens",
  "Polishing Oscar statues",
  "Brewing actor coffee",
  "Framing superhero cameos",
  "Rehearsing dramatic pauses",
  "Calming method actors",
  "Fixing continuity errors",
  "Hiding film crew snacks",
  "Cueing ominous soundtrack",
  "Training CGI dragons",
];

const Loader: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % MOVIE_LOADING_PHRASES.length);
    }, 3000);

    const progressInterval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + Math.random() * 10));
    }, 500);

    return () => {
      clearInterval(messageInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <LoaderContainer>
      <Space direction="vertical" align="center">
        <Spin 
          indicator={getIndicator()}
        />

        <LoadingMessage>
          {MOVIE_LOADING_PHRASES[currentMessage]}
        </LoadingMessage>

        <ProgressBar progress={Math.min(progress, 100)} />
      </Space>
      {children}
    </LoaderContainer>
  );

  function getIndicator() {
    return (
      <span role="img" aria-label="Film reel" style={{ fontSize: 40 }}>
        🎞️
      </span>
    );
  }
};

export default Loader;