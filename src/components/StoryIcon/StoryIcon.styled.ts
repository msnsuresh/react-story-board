import styled from "styled-components";

export const GradientBorder = styled.div<{ isViewed: boolean }>`
  background: ${(props) =>
    !props.isViewed &&
    "linear-gradient(to right, #845EC2, #D65DB1, #FF6F91, #FF9671, #FFC75F, #F9F871)"};
  width: 4.25rem;
  height: 4.25rem;
  position: relative;
  padding: 3px;
  border-radius: 50%;
  display: inline-block;
  margin: 0.25rem;
  cursor: pointer;
`;

export const StoryWrapper = styled.div`
  max-width: 4rem;
  max-height: 4rem;
  border-radius: 50%;
  overflow: hidden;
  display: inline-block;
  border: 2px solid #fff;
`;

export const TextStoryWrapper = styled(StoryWrapper)<{
  background?: string;
  color?: string;
}>`
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  font-size: 0.3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-overflow: ellipsis;
  width: 4rem;
  height: 4rem;
  position: absolute;
`;

export const ImageStoryWrapper = styled(StoryWrapper)`
  position: absolute;
  img {
    width: 100%;
    height: auto;
    min-height: 4rem;
  }
`;
