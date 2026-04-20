export type HighlightBlock = {
    main: string;
    secondary: string[];
  };
  
  export type HighlightCardProps = {
    block: HighlightBlock;
    index: number;
  };
  
  export type GalleryFrameProps = {
    src: string;
    alt: string;
  };