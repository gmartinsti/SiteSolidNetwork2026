
import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogTitle } from "./ui/dialog";

interface SiteOverviewVideoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LOCAL_VIDEO_SRC = "/videos/SolidFlow-Institucional.mp4";

const SiteOverviewVideoDialog = ({ open, onOpenChange }: SiteOverviewVideoDialogProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (open) {
      video.currentTime = 0;
      const playPromise = video.play();
      if (playPromise) {
        playPromise.catch(() => {
          // Autoplay with sound can be blocked; the user can press play.
        });
      }
    } else {
      video.pause();
    }
  }, [open]);

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
        <div className="aspect-video w-full bg-black">
          <video
            ref={videoRef}
            className="h-full w-full object-contain"
            src={LOCAL_VIDEO_SRC}
            controls
            playsInline
            autoPlay
            preload="metadata"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SiteOverviewVideoDialog;
