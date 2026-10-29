
import { Play } from "lucide-react";
import { useVideoModal } from "@/context/VideoModalContext";

interface HeaderVideoButtonProps {
  variant?: "header" | "menu";
  onActivate?: () => void;
}

const HeaderVideoButton = ({ variant = "header", onActivate }: HeaderVideoButtonProps) => {
  const { openVideo } = useVideoModal();

  const handleClick = () => {
    openVideo();
    onActivate?.();
  };

  if (variant === "menu") {
    return (
      <button
        type="button"
        onClick={handleClick}
        className="mt-1 inline-flex w-full items-center gap-3 rounded-md border border-[#E6E1F2] bg-white px-4 py-3 text-left text-sm font-semibold text-[#120C2E]"
      >
        <span className="sn-video-trigger sn-video-trigger-sm" aria-hidden="true">
          <span className="sn-video-ring" />
          <span className="sn-video-ring sn-video-ring-delay" />
          <span className="sn-video-core">
            <Play className="h-3.5 w-3.5 fill-current" />
          </span>
        </span>
        Assistir vídeo institucional
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Assistir vídeo institucional"
      title="Assistir vídeo institucional"
      className="group relative mr-1 inline-flex items-center gap-2 rounded-full py-1 pl-1 pr-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2EE6A6] focus-visible:ring-offset-2 md:pr-3"
    >
      <span className="sn-video-trigger" aria-hidden="true">
        <span className="sn-video-ring" />
        <span className="sn-video-ring sn-video-ring-delay" />
        <span className="sn-video-core">
          <span className="sn-video-shine" />
          <Play className="sn-video-play h-4 w-4 fill-current" />
        </span>
      </span>
      <span className="hidden flex-col items-start leading-none md:flex">
        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#2EE6A6]">Vídeo</span>
        <span className="text-[12px] font-semibold text-[#120C2E] transition-colors group-hover:text-solidPurple-700">
          Assistir
        </span>
      </span>
    </button>
  );
};

export default HeaderVideoButton;
