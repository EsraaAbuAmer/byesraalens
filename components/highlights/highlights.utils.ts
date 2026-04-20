import { HighlightBlock } from "./highlights.types";

export function getMobileImages(block: HighlightBlock): string[] {
  return [block.main, block.secondary[0], block.secondary[1]].filter(
    Boolean
  ) as string[];
}

export function getDesktopImages(block: HighlightBlock): string[] {
  return [
    block.main,
    block.secondary[0],
    block.secondary[1],
    block.secondary[2],
  ].filter(Boolean) as string[];
}

export function getHighlightVariant(index: number) {
  return index % 5;
}
