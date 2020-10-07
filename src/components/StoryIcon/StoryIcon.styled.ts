import styled from "styled-components";

export const StoryIconWrapper = styled.div<{
  background?: string;
  color?: string;
}>`
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  max-width: 4rem;
  max-height: 4rem;
  height: ${(props) => (props.background && props.color ? "4rem" : undefined)};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    min-height: 4rem;
  }
  span {
    font-size: 0.3rem;
    width: 3rem;
    margin: auto;
  }
`;
