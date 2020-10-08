import styled from "styled-components";

export const StoryViewerWrapper = styled.div<{ visible?: boolean }>`
  display: ${(props) => (props.visible ? "block" : "none")};
  background-color: rgba(48, 49, 48, 0.42);
  height: 100%;
  position: fixed;
  transition: ease-in-out 3s;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
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

export const StoryContainer = styled.div`
  width: 50vw;
  height: 100vh;
  background: #2f2f2f;
  margin: auto;
`;
