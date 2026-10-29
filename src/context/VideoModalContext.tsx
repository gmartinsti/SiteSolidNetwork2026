
import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import SiteOverviewVideoDialog from "@/components/SiteOverviewVideoDialog";

type VideoModalContextType = {
  isVideoOpen: boolean;
  openVideo: () => void;
  closeVideo: () => void;
};

const VideoModalContext = createContext<VideoModalContextType | undefined>(undefined);

export const VideoModalProvider = ({ children }: { children: ReactNode }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = useCallback(() => setIsVideoOpen(true), []);
  const closeVideo = useCallback(() => setIsVideoOpen(false), []);

  return (
    <VideoModalContext.Provider value={{ isVideoOpen, openVideo, closeVideo }}>
      {children}
      <SiteOverviewVideoDialog open={isVideoOpen} onOpenChange={setIsVideoOpen} />
    </VideoModalContext.Provider>
  );
};

export const useVideoModal = () => {
  const context = useContext(VideoModalContext);
  if (context === undefined) {
    throw new Error("useVideoModal must be used within a VideoModalProvider");
  }
  return context;
};
