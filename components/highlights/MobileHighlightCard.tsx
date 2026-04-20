import GalleryFrame from "./GalleryFrame";
import { HighlightCardProps } from "./highlights.types";
import { getHighlightVariant, getMobileImages } from "./highlights.utils";
export default function MobileHighlightCard({
  block,
  index,
}: HighlightCardProps) {
  const variant = getHighlightVariant(index);
  const images = getMobileImages(block);

  if (variant === 2) {
    return (
      <div className="flex h-[392px] gap-2">
        {images.slice(0, 3).map((img, i) => (
          <div key={i} className="h-full flex-1">
            <GalleryFrame src={img} alt="" />
          </div>
        ))}
      </div>
    );
  }

  if (variant === 1 || variant === 4) {
    return (
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          {images[1] && (
            <div className="h-[120px]">
              <GalleryFrame src={images[1]} alt="" />
            </div>
          )}
          {images[2] && (
            <div className="h-[120px]">
              <GalleryFrame src={images[2]} alt="" />
            </div>
          )}
        </div>

        <div className="h-[260px]">
          <GalleryFrame src={images[0]} alt="" />
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-3 ${variant === 0 ? "pl-4" : ""}`}>
      <div className="h-[260px]">
        <GalleryFrame src={images[0]} alt="" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        {images[1] && (
          <div className="h-[120px]">
            <GalleryFrame src={images[1]} alt="" />
          </div>
        )}
        {images[2] && (
          <div className="h-[120px]">
            <GalleryFrame src={images[2]} alt="" />
          </div>
        )}
      </div>
    </div>
  );
}
