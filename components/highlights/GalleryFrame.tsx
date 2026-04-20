import Image from "next/image";
import { GalleryFrameProps } from "./highlights.types";

export default function GalleryFrame({ src, alt }: GalleryFrameProps) {
  return (
    <div className="group relative h-full w-full overflow-hidden bg-[#ddd7cd] shadow-md transition-all duration-500 md:hover:-translate-y-2 md:hover:shadow-2xl">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 82vw, 50vw"
        className="object-cover transition-transform duration-700 md:group-hover:scale-105"
      />
    </div>
  );
}