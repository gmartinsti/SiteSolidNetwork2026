
import { Dialog, DialogContent } from "./ui/dialog";

interface SiteOverviewVideoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const YOUTUBE_VIDEO_URL = "https://www.youtube.com/embed/EgYqC5r0jw4";

const SiteOverviewVideoDialog = ({ open, onOpenChange }: SiteOverviewVideoDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl w-full p-0 bg-black rounded-xl overflow-hidden">
        <div className="aspect-video w-full h-full bg-black">
          <iframe
            className="w-full h-full aspect-video"
            src={`${YOUTUBE_VIDEO_URL}?autoplay=1&rel=0`}
            title="Apresentação Solid Network"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SiteOverviewVideoDialog;
