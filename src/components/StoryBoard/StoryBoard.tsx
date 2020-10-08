import * as React from "react";
import { Story } from "../Story.types";
import StoryIcon from "../StoryIcon/StoryIcon";
import StoryViewer from "../StoryViewer/StoryViewer";
import { StoryBoardWrapper } from "./StoryBoard.styled";

export interface StoryBoardProps {
  stories: (string | Story)[];
  visible?: boolean;
  onClose?: () => void;
}

const StoryBoard: React.FC<StoryBoardProps> = (props: StoryBoardProps) => {
  const [isViewerVisible, setIsViewerVisible] = React.useState(false);
  const [currentDisplayIndex, setCurrentDisplayIndex] = React.useState<
    number
  >();
  const clicOnViewkHandler = (index: number) => {
    setIsViewerVisible(true);
    setCurrentDisplayIndex(index);
  };
  const clicOnClosekHandler = () => {
    setCurrentDisplayIndex(undefined);
    setIsViewerVisible(false);
  };
  return (
    <>
      <StoryBoardWrapper>
        {props.visible &&
          props.stories.map((story, index) => (
            <StoryIcon
              key={`storyIcon-${index}`}
              story={story}
              isViewed={false}
              onClick={() => clicOnViewkHandler(index)}
            />
          ))}
      </StoryBoardWrapper>
      <StoryViewer
        stories={props.stories}
        startIndex={currentDisplayIndex}
        visible={isViewerVisible}
        onClose={clicOnClosekHandler}
      />
    </>
  );
};

export default StoryBoard;
