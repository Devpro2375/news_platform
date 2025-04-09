"use client";

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { NewsArticle } from '@/types/news';

interface AudioPlayerProps {
  article: NewsArticle | null;
  onClose: () => void;
}

export function AudioPlayer({ article, onClose }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Control visibility transition

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (article) {
      // Trigger the visibility transition when article is selected (Listen button click)
      setIsVisible(true);

      const audio = new Audio(article.audioUrl);
      audioRef.current = audio;

      audio.addEventListener('loadedmetadata', () => {
        setDuration(audio.duration);
      });

      audio.addEventListener('timeupdate', () => {
        setCurrentTime(audio.currentTime);
      });

      audio.addEventListener('ended', () => {
        setIsPlaying(false);
        setCurrentTime(0);
      });

      return () => {
        audio.pause();
        audio.src = '';
        audio.removeEventListener('loadedmetadata', () => {});
        audio.removeEventListener('timeupdate', () => {});
        audio.removeEventListener('ended', () => {});
      };
    }
  }, [article]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeChange = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleClose = () => {
    setIsVisible(false); // Start closing animation
    setTimeout(onClose, 300); // Close after the animation duration
  };

  if (!article) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-blue-500 text-white border-t p-6 rounded-t-2xl shadow-lg flex flex-col sm:max-w-md sm:mx-auto transition-all duration-500 ease-in-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm font-medium text-primary truncate max-w-[70%]">
          {article.title}
        </div>
        <Button variant="ghost" size="sm" onClick={handleClose}>
          Close
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={togglePlayPause}
          className="h-10 w-10 p-2 rounded-full hover:bg-muted transition-all duration-200"
        >
          {isPlaying ? (
            <Pause className="h-5 w-5" />
          ) : (
            <Play className="h-5 w-5" />
          )}
        </Button>

        <div className="text-xs w-20 text-muted-foreground">
          {formatTime(currentTime)}
        </div>

        <div className="flex-1">
          <Slider
            value={[currentTime]}
            max={duration}
            step={0.1}
            onValueChange={handleTimeChange}
            className="slider"
          />
        </div>

        <div className="text-xs w-20 text-muted-foreground text-right">
          {formatTime(duration)}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMute}
          className="h-10 w-10 p-2 rounded-full hover:bg-muted transition-all duration-200"
        >
          {isMuted ? (
            <VolumeX className="h-5 w-5" />
          ) : (
            <Volume2 className="h-5 w-5" />
          )}
        </Button>
      </div>
    </div>
  );
}
