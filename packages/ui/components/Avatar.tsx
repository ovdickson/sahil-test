import { generateInitials } from "@sahil/lib/strings";
import { twMerge } from "tailwind-merge";

type AvatarProps = {
  alt?: string;
  className?: any;
  src?: string | null;
};
export const Avatar = ({ alt, src, className }: AvatarProps) => {
  const merged = twMerge("w-12 rounded-full shadow", className);
  return (
    <>
      {src ? (
        <div className="avatar">
          <div className={merged}>
            <img src={src} alt={alt} />
          </div>
        </div>
      ) : (
        <div className="avatar placeholder">
          <div className="bg-neutral text-neutral-content rounded-full w-12">
            <span>{generateInitials(alt as string)}</span>
          </div>
        </div>
      )}
    </>
  );
};
