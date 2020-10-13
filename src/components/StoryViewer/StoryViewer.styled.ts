import styled, { css } from "styled-components";

export const StoryViewerWrapper = styled.aside<{ visible?: boolean }>`
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  background: ${(props) =>
    props.visible ? "rgba(48, 49, 48, 0.8)" : "tranparent"};
  opacity: ${(props) => (props.visible ? "1" : "0")};
  /* transition: visibility 0.5s, background 1s ease-in-out; */
  width: 100%;
  height: 100%;
  transition: all 1.3s;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  transform: translateZ(0);
`;

export const CloseIcon = styled.span`
  color: #2d2d2d;
  float: right;
  font-size: 1.875rem;
  font-weight: bold;
  padding: 0.5rem 1rem;

  :hover {
    cursor: pointer;
  }
`;

export const StoryContainer = styled.div<{ visible?: boolean }>`
  width: 60%;
  height: 100%;
  margin: auto;
`;

export const ImageWrapper = styled.div`
  box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
  filter: blur(20px);
  background: inherit;
  width: 60vw;
  height: 100%;
`;

export const Container = css`
  position: fixed;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  min-width: 45vw;
  max-width: 80vw;
`;

export const ImageContainer = styled.img`
  ${Container}
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.5);
`;

export const TextContainer = styled.div<{
  background: string;
  color: string;
}>`
  ${Container}
  height: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 0 2rem;
  font-size: 1.5rem;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  box-shadow: 0px 0px 5px 0px rgb(255 255 255 / 50%);
`;
