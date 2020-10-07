import * as React from "react";
import { Story } from "../Story.types";
import {
  getImageSource,
  getStoryColor,
  getStoryType,
  StoryTypes,
} from "../Story.utils";
import { StoryIconWrapper } from "./StoryIcon.styled";

export interface StoryIconProps {
  story: string | Story;
}

const StoryIcon: React.FC<StoryIconProps> = (props: StoryIconProps) => {
  const storyType = getStoryType(props.story);
  return (
    <StoryIconWrapper {...getStoryColor(props.story)}>
      {storyType === StoryTypes.TEXT && (
        <span>{(props.story as Story).text}</span>
      )}
      {storyType === StoryTypes.IMAGE && (
        <img src={getImageSource(props.story)} alt={""} />
      )}
    </StoryIconWrapper>
  );
};

export default StoryIcon;
