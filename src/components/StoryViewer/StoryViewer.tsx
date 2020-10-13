import * as React from "react";
import ReactDOM from "react-dom";
import { Story } from "../Story.types";
import { getStoryType, StoryTypes } from "../Story.utils";
import {
  CloseIcon,
  StoryContainer,
  StoryViewerWrapper,
  ImageWrapper,
} from "./StoryViewer.styled";
import { getImageStory, getTextStory } from "./StoryViewer.util";

export interface StoryViewerProps {
  stories: (string | Story)[];
  startIndex?: number;
  visible?: boolean;
  onClose?: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
}

const StoryViewer: React.FC<StoryViewerProps> = (props: StoryViewerProps) => {
  const bodyRef = document.body;
  React.useEffect(() => {
    if (props.visible) {
      bodyRef.style.overflow = "hidden";
    } else {
      bodyRef.style.overflow = "";
    }
  }, [props.visible, bodyRef]);

  const [currentStoryIndex, setCurrentStoryIndex] = React.useState();
  const [currentStoryType, setCurrentStoryType] = React.useState("");
  React.useEffect(() => {
    setCurrentStoryIndex(props.startIndex);
    props.startIndex !== undefined &&
      setCurrentStoryType(getStoryType(props.stories[props.startIndex]));

    return () => {
      setCurrentStoryIndex(undefined);
      setCurrentStoryType("");
    };
  }, [props.startIndex]);

  return ReactDOM.createPortal(
    <>
      <StoryViewerWrapper visible={props.visible} onClick={props.onClose}>
        <CloseIcon onClick={props.onClose}>&times;</CloseIcon>
        <StoryContainer>
          {currentStoryType === StoryTypes.IMAGE &&
            getImageStory(props.stories[currentStoryIndex])}
          {currentStoryType === StoryTypes.TEXT &&
            getTextStory(props.stories[currentStoryIndex] as Story)}
        </StoryContainer>
      </StoryViewerWrapper>
    </>,
    bodyRef
  );
};

export default StoryViewer;
