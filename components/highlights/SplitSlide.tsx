import GalleryFrame from "./GalleryFrame";
import { HighlightCardProps } from "./highlights.types";
import { getDesktopImages, getHighlightVariant } from "./highlights.utils";

const HEIGHT = "h-[420px] md:h-[620px]";

export default function SplitSlide({ block, index }: HighlightCardProps) {
  const variant = getHighlightVariant(index);
  const images = getDesktopImages(block);

  if (variant === 0) {
    return (
      <div className={`grid gap-4 pl-4 md:grid-cols-12 ${HEIGHT}`}>
        <div className="h-full md:col-span-7">
          <GalleryFrame src={images[0]} alt="" />
        </div>

        <div className="flex h-full flex-col gap-4 md:col-span-5">
          <div className="flex-1">
            <GalleryFrame src={images[1]} alt="" />
          </div>
          <div className="flex-1">
            <GalleryFrame src={images[2]} alt="" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === 1) {
    return (
      <div className={`grid gap-4 md:grid-cols-12 ${HEIGHT}`}>
        <div className="flex h-full flex-col gap-4 md:col-span-5">
          <div className="flex-[2]">
            <GalleryFrame src={block.secondary[0]} alt="" />
          </div>
          <div className="flex-[1]">
            <GalleryFrame src={block.secondary[1]} alt="" />
          </div>
        </div>

        <div className="h-full md:col-span-7">
          <GalleryFrame src={block.main} alt="" />
        </div>
      </div>
    );
  }

  if (variant === 2) {
    return (
      <div className={`grid grid-cols-3 gap-4 ${HEIGHT}`}>
        {images.slice(0, 3).map((img, i) => (
          <GalleryFrame key={i} src={img} alt="" />
        ))}
      </div>
    );
  }

  if (variant === 3) {
    return (
      <div className={`grid grid-cols-2 grid-rows-2 gap-4 ${HEIGHT}`}>
        {images.slice(0, 4).map((img, i) => (
          <GalleryFrame key={i} src={img} alt="" />
        ))}
      </div>
    );
  }

  return (
    <div className={`grid gap-4 md:grid-cols-12 ${HEIGHT}`}>
      <div className="h-full md:col-span-7">
        <GalleryFrame src={images[0]} alt="" />
      </div>

      <div className="flex h-full flex-col gap-4 md:col-span-5">
        <div className="flex-1">
          <GalleryFrame src={images[1]} alt="" />
        </div>
        <div className="flex-1">
          <GalleryFrame src={images[2]} alt="" />
        </div>
      </div>
    </div>
  );
}