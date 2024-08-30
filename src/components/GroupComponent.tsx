import { FunctionComponent, type CSSProperties } from "react";
import styled from "styled-components";

export type GroupComponentType = {
  className?: string;
  vector?: string;
  reactive?: string;
  realtimeAnormalieDetectio?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propHeight1?: CSSProperties["height"];
  propDisplay?: CSSProperties["display"];
  frameDivPadding?: CSSProperties["padding"];
};

const FrameChild = styled.div`
  height: 3.5rem;
  width: 3.875rem;
  position: relative;
  border-radius: var(--br-5xs);
  border: 1px solid var(--color-white);
  box-sizing: border-box;
  display: none;
`;
const VectorIcon = styled.img<{ propHeight?: CSSProperties["height"] }>`
  height: 1.75rem;
  width: 1.75rem;
  position: relative;
  z-index: 1;
  height: ${(p) => p.propHeight};
`;
const RectangleParent = styled.div<{
  frameDivPadding?: CSSProperties["padding"];
}>`
  align-self: stretch;
  border-radius: var(--br-5xs);
  border: 1px solid var(--color-white);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs) var(--padding-base);
  padding: ${(p) => p.frameDivPadding};
`;
const FrameWrapper = styled.div`
  width: 3.875rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs) 0rem 0rem;
  box-sizing: border-box;
`;
const Reactive = styled.b``;
const Reactive1 = styled.p`
  margin: 0;
`;
const RealtimeAnormalieDetection = styled.p`
  margin: 0;
  font-size: var(--font-size-sm);
`;
const ReactiveRealtimeAnormalieContainer = styled.div<{
  propHeight1?: CSSProperties["height"];
  propDisplay?: CSSProperties["display"];
}>`flex: 1;
  position: relative;
  letter-spacing: -0.02em;
  line-height: 148%;
  height: ${(p) => p.propHeight1}
  display: ${(p) => p.propDisplay}
`;
const FrameParentRoot = styled.div`
  width: 18.313rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-12xl);
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-white);
  font-family: var(--font-manrope);
  @media screen and (max-width: 450px) {
    gap: var(--gap-mini);
  }
`;

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
  vector,
  propHeight,
  propHeight1,
  propDisplay,
  reactive,
  realtimeAnormalieDetectio,
  frameDivPadding,
}) => {
  return (
    <FrameParentRoot className={className}>
      <FrameWrapper>
        <RectangleParent frameDivPadding={frameDivPadding}>
          <FrameChild />
          <VectorIcon
            loading="lazy"
            alt=""
            src={vector}
            propHeight={propHeight}
          />
        </RectangleParent>
      </FrameWrapper>
      <ReactiveRealtimeAnormalieContainer
        propHeight1={propHeight1}
        propDisplay={propDisplay}
      >
        <Reactive1>
          <Reactive>{reactive}</Reactive>
        </Reactive1>
        <RealtimeAnormalieDetection>
          {realtimeAnormalieDetectio}
        </RealtimeAnormalieDetection>
      </ReactiveRealtimeAnormalieContainer>
    </FrameParentRoot>
  );
};

export default GroupComponent;
