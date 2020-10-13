import * as React from "react";
import { Story } from "../Story.types";
import {
  getImageSource,
  getStoryColor,
  getStoryType,
  StoryTypes,
} from "../Story.utils";
import {
  GradientBorder,
  ImageStoryWrapper,
  TextStoryWrapper,
} from "./StoryIcon.styled";

export interface StoryIconProps {
  isViewed: boolean;
  story: string | Story;
  onClick: () => void;
}

const StoryIcon: React.FC<StoryIconProps> = (props: StoryIconProps) => {
  const storyType = getStoryType(props.story);
  return (
    <GradientBorder isViewed={props.isViewed} onClick={props.onClick}>
      {storyType === StoryTypes.TEXT && (
        <TextStoryWrapper {...getStoryColor(props.story as Story)}>
          {(props.story as Story).text}
        </TextStoryWrapper>
      )}
      {storyType === StoryTypes.IMAGE && (
        <ImageStoryWrapper>
          <img src={getImageSource(props.story)} alt={""} />
        </ImageStoryWrapper>
      )}
    </GradientBorder>
  );
};

export default StoryIcon;
