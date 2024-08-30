import { FunctionComponent } from "react";
import styled from "styled-components";

export type BackgroundType = {
  className?: string;
};

const BackgroundChild = styled.div`
  height: 2.594rem;
  width: 21.25rem;
  position: relative;
  border-radius: 13.27px;
  border: 0.8px solid var(--color-silver);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
`;
const Economics = styled.input`
  width: 3.875rem;
  border: none;
  outline: none;
  font-family: var(--font-poppins);
  font-size: var(--font-size-xs-6);
  background-color: transparent;
  height: 0.75rem;
  position: relative;
  letter-spacing: -0.02em;
  line-height: 100%;
  color: var(--color-silver);
  text-align: left;
  display: inline-block;
  padding: 0;
  z-index: 1;
`;
const BackgroundRoot = styled.div`
  align-self: stretch;
  border-radius: 13.27px;
  border: 0.8px solid var(--color-silver);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-smi) var(--padding-lgi) var(--padding-sm);
  max-width: 100%;
`;

const Background: FunctionComponent<BackgroundType> = ({ className = "" }) => {
  return (
    <BackgroundRoot className={className}>
      <BackgroundChild />
      <Economics placeholder="Economics" type="text" />
    </BackgroundRoot>
  );
};

export default Background;
