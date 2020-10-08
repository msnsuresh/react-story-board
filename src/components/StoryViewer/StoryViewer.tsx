import * as React from "react";
import ReactDOM from "react-dom";
import { Story } from "../Story.types";
import {
  CloseIcon,
  StoryContainer,
  StoryViewerWrapper,
} from "./StoryViewer.styled";

export interface StoryViewerProps {
  stories: (string | Story)[];
  startIndex?: number;
  visible?: boolean;
  onClose?: () => void;
}

const StoryViewer: React.FC<StoryViewerProps> = (props: StoryViewerProps) => {
  const bodyRef = document.getElementsByTagName("body")[0];
  React.useEffect(() => {
    if (props.visible) {
      bodyRef.style.overflow = "hidden";
    } else {
      bodyRef.style.overflow = "";
    }
  }, [props.visible, bodyRef]);
  return ReactDOM.createPortal(
    <>
      <StoryViewerWrapper visible={props.visible}>
        <CloseIcon onClick={props.onClose}>&times;</CloseIcon>
        <StoryContainer>Test content</StoryContainer>
      </StoryViewerWrapper>
    </>,
    bodyRef
  );
};

export default StoryViewer;
