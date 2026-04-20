export type BeforeAfterItem = {
    id: number;
    title: string;
    category: string;
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
  };
  
  export const beforeAfterItems: BeforeAfterItem[] = [
    {
      id: 1,
      title: "Flamingo Garden Scene",
      category: "Color Grading",
      beforeImage: "/images/before-after/before-1.JPG",
      afterImage: "/images/before-after/after-1.jpg",
      beforeLabel: "Before",
      afterLabel: "After",
    },
    {
      id: 2,
      title: "Cathedral Window Edit",
      category: "Architecture Color Grade",
      beforeImage: "/images/before-after/before-2.jpg",
      afterImage: "/images/before-after/after-2.JPG",
      beforeLabel: "Before",
      afterLabel: "After",
    },
    {
      id: 3,
      title: "Autumn Park Tones",
      category: "Landscape Enhancement",
      beforeImage: "/images/before-after/before-3.JPG",
      afterImage: "/images/before-after/after-3.jpg",
      beforeLabel: "Before",
      afterLabel: "After",
    },
  ];