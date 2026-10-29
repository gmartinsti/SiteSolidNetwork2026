
import { useEffect, useRef, useState } from "react";
import { Play, Volume2, X } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogTitle } from "./ui/dialog";

interface SiteOverviewVideoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LOCAL_VIDEO_SRC = "/videos/SolidFlow-Institucional.mp4";

const SiteOverviewVideoDialog = ({ open, onOpenChange }: SiteOverviewVideoDialogProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [needsUnmute, setNeedsUnmute] = useState(false);
  const [needsPlay, setNeedsPlay] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!open) {
      video.pause();
      setNeedsUnmute(false);
      setNeedsPlay(false);
      return;
    }

    let cancelled = false;
    let started = false;

    const startPlayback = async () => {
      if (cancelled || started) return;
      started = true;

      try {
        if (video.currentTime > 0.15) {
          video.currentTime = 0;
        }
      } catch {
        // currentTime can throw before the media is seekable
      }

      const finish = (playing: boolean) => {
        if (cancelled) return;
        setNeedsPlay(!playing);
        setNeedsUnmute(playing && video.muted);
      };

      video.muted = false;
      try {
        await video.play();
        finish(!video.paused);
        if (!video.muted) return;
      } catch {
        // Autoplay with sound is blocked until the visitor interacts.
      }

      video.muted = true;
      try {
        await video.play();
        finish(!video.paused);
      } catch {
        started = false;
        finish(false);
      }
    };

    if (video.readyState >= 2) {
      void startPlayback();
    }

    video.addEventListener("canplay", startPlayback);
    video.addEventListener("loadeddata", startPlayback);

    return () => {
      cancelled = true;
      video.removeEventListener("canplay", startPlayback);
      video.removeEventListener("loadeddata", startPlayback);
    };
  }, [open]);

  const startWithSound = async () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    try {
      await video.play();
      setNeedsUnmute(false);
      setNeedsPlay(false);
    } catch {
      setNeedsPlay(true);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl w-[min(96vw,64rem)] border-0 bg-black p-0 text-white overflow-hidden rounded-xl shadow-2xl [&>button]:hidden">
        <div className="flex items-center justify-between gap-3 px-4 py-3">
          <DialogTitle className="text-sm font-medium text-white">SolidFlow Institucional</DialogTitle>
          <DialogClose asChild>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full text-white/80 hover:bg-white/10 hover:text-white"
              aria-label="Fechar vídeo"
            >
              <X className="h-5 w-5" />
            </button>
          </DialogClose>
        </div>
        <div className="relative aspect-video w-full bg-black">
          <video
            ref={videoRef}
            className="h-full w-full object-contain"
            src={LOCAL_VIDEO_SRC}
            controls
            playsInline
            autoPlay
            muted
            preload="auto"
          />
          {(needsPlay || needsUnmute) && (
            <button
              type="button"
              onClick={() => void startWithSound()}
              className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-black/45 text-white"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2EE6A6] text-[#120C2E] shadow-[0_0_24px_rgba(46,230,166,0.45)]">
                {needsPlay ? <Play className="ml-1 h-7 w-7 fill-current" /> : <Volume2 className="h-7 w-7" />}
              </span>
              <span className="text-sm font-semibold">
                {needsPlay ? "Assistir vídeo" : "Ativar som"}
              </span>
            </button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SiteOverviewVideoDialog;
