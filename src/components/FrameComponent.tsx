import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export type FrameComponentType = {
  className?: string;
};

const SmartDsVisionInner = styled.img`
  height: 4.938rem;
  width: 5.625rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const SmartDsVisionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-12xl) 0rem var(--padding-11xl);
`;
const Smartdsvision = styled.div`
  position: relative;
  line-height: 2.125rem;
  font-weight: 600;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
    line-height: 1.688rem;
  }
`;
const FrameChild = styled.div`
  width: 6.444rem;
  height: 3.125rem;
  display: none;
`;
const SmartDsVisionContainerParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8xl);
  cursor: pointer;
`;
const SidebarInnerRoot = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-xl) var(--padding-base-4) 0rem;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-white);
  font-family: var(--font-poppins);
`;

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <SidebarInnerRoot className={className}>
      <SmartDsVisionContainerParent onClick={onGroupContainerClick}>
        <SmartDsVisionContainer>
          <SmartDsVisionInner loading="lazy" alt="" src="/frame@2x.png" />
        </SmartDsVisionContainer>
        <Smartdsvision>SmartDsVision</Smartdsvision>
        <FrameChild />
      </SmartDsVisionContainerParent>
    </SidebarInnerRoot>
  );
};

export default FrameComponent;
