import { Story } from "./Story.types";
export enum StoryTypes {
  "IMAGE" = "IMAGE",
  "TEXT" = "TEXT",
}

export const getStoryColor = (story: Story) => {
  return {
    background: (story as Story).background || "#363636",
    color: (story as Story).color || "#fff",
  };
};

export const getImageSource = (story: string | Story) => {
  if (getStoryType(story) === StoryTypes.TEXT) {
    return undefined;
  }

  return typeof story === "string" ? story : (story as Story).link || "";
};

export const getStoryType = (story: string | Story) => {
  if (typeof story === "object") {
    if (story.text) {
      return StoryTypes.TEXT;
    }
  }
  return StoryTypes.IMAGE;
};
