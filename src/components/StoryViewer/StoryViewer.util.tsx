import * as React from "react";
import { Story } from "../Story.types";
import { getImageSource, getStoryColor } from "../Story.utils";
import {
  ImageWrapper,
  TextContainer,
  ImageContainer,
} from "./StoryViewer.styled";

export const getImageStory = (story: string | Story): React.ReactElement => {
  const imageSrc = getImageSource(story);
  return (
    <>
      <ImageWrapper>
        <img
          src={imageSrc}
          alt={imageSrc}
          style={{ width: "60vw", height: "100%" }}
        />
      </ImageWrapper>
      <ImageContainer src={imageSrc} alt={imageSrc} />
    </>
  );
};

export const getTextStory = (story: Story): React.ReactElement => {
  const { background, color } = getStoryColor(story);
  return (
    <>
      <ImageWrapper>
        <div style={{ background, width: "60vw", height: "100%" }} />
      </ImageWrapper>
      <TextContainer background={background} color={color}>
        {story.text}
      </TextContainer>
    </>
  );
};
