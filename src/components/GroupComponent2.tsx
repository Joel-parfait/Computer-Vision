import { FunctionComponent, type CSSProperties } from "react";
import styled from "styled-components";

export type GroupComponent2Type = {
  className?: string;
  rectangle63?: string;
  camera3?: string;
  prop?: string;
  prop1?: string;

  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
};

const FrameChild = styled.img`
  align-self: stretch;
  height: 11.969rem;
  position: relative;
  border-radius: 7.69px;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  display: none;
`;
const FrameItem = styled.div`
  height: 1.3rem;
  width: 6.631rem;
  position: relative;
  backdrop-filter: blur(3.08px);
  background-color: var(--color-dodgerblue-200);
  display: none;
`;
const Camera = styled.div`
  position: relative;
  line-height: 1.188rem;
  font-weight: 800;
  display: inline-block;
  min-width: 4.313rem;
  z-index: 2;
`;
const RectangleGroup = styled.div`
  width: 6.631rem;
  backdrop-filter: blur(3.08px);
  background-color: var(--color-dodgerblue-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-mid) var(--padding-11xs-8);
  box-sizing: border-box;
  white-space: nowrap;
  z-index: 1;
`;
const FrameInner = styled.div`
  height: 1.3rem;
  width: 7.256rem;
  position: relative;
  backdrop-filter: blur(3.08px);
  background-color: var(--color-dodgerblue-200);
  display: none;
`;
const Date1 = styled.div`
  position: relative;
  line-height: 1.188rem;
  font-weight: 500;
  display: inline-block;
  min-width: 6.063rem;
  z-index: 2;
`;
const RectangleContainer = styled.div`
  backdrop-filter: blur(3.08px);
  background-color: var(--color-dodgerblue-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs-5) var(--padding-4xs) var(--padding-12xs-3);
  white-space: nowrap;
  z-index: 1;
  font-size: var(--font-size-5xs-7);
`;
const RectangleParent = styled.div<{
  propBackgroundImage?: CSSProperties["backgroundImage"];
}>`
  align-self: stretch;
  border-radius: 7.69px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs-3) var(--padding-11xs);
  gap: var(--gap-126xl-3);
  background-image: url("/rectangle-633@2x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  background-image: ${(p) => p.propBackgroundImage};
`;
const FrameWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0rem 0rem var(--padding-10xs-5);
  box-sizing: border-box;
  min-width: 13.313rem;
  max-width: 100%;
`;
const VectorIcon = styled.img`
  width: 2.763rem;
  height: 1.675rem;
  position: relative;
`;
const Div = styled.div`
  position: relative;
  line-height: 1.438rem;
  display: inline-block;
  min-width: 1.188rem;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0rem var(--padding-xs) 0rem var(--padding-smi);
`;
const VectorIcon1 = styled.img`
  height: 1.675rem;
  width: 1.675rem;
  position: relative;
`;
const VectorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0rem var(--padding-5xs) 0rem var(--padding-4xs);
`;
const VectorIcon2 = styled.img`
  position: absolute;
  top: 0rem;
  left: 0.031rem;
  width: 2.106rem;
  height: 2.106rem;
`;
const Div1 = styled.div`
  position: absolute;
  top: 2.106rem;
  left: 0.544rem;
  line-height: 1.438rem;
  display: inline-block;
  min-width: 1.188rem;
`;
const VectorGroup = styled.div`
  height: 3.544rem;
  flex: 1;
  position: relative;
`;
const FrameContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0rem var(--padding-9xs) 0rem var(--padding-7xs);
`;
const VectorParent = styled.div`
  width: 2.763rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-4xs-3);
  text-align: center;
  font-size: var(--font-size-mini);
  font-family: var(--font-poppins);
`;
const FrameParentRoot = styled.div`
  width: 24.625rem;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0rem 0rem var(--padding-12xs-1);
  box-sizing: border-box;
  gap: var(--gap-2xl-9);
  max-width: 100%;
  text-align: right;
  font-size: var(--font-size-smi-3);
  color: var(--color-white);
  font-family: var(--font-manrope);
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;

const GroupComponent2: FunctionComponent<GroupComponent2Type> = ({
  className = "",
  propBackgroundImage,
  rectangle63,
  camera3,
  prop,
  prop1,
}) => {
  return (
    <FrameParentRoot className={className}>
      <FrameWrapper>
        <RectangleParent propBackgroundImage={propBackgroundImage}>
          <FrameChild alt="" src={rectangle63} />
          <RectangleGroup>
            <FrameItem />
            <Camera>{camera3}</Camera>
          </RectangleGroup>
          <RectangleContainer>
            <FrameInner />
            <Date1>{`Date : 12/06/2025 14:55:50 `}</Date1>
          </RectangleContainer>
        </RectangleParent>
      </FrameWrapper>
      <VectorParent>
        <VectorIcon loading="lazy" alt="" src="/vector-12.svg" />
        <Wrapper>
          <Div>{prop}</Div>
        </Wrapper>
        <VectorWrapper>
          <VectorIcon1 loading="lazy" alt="" src="/vector-22.svg" />
        </VectorWrapper>
        <Wrapper>
          <Div>00</Div>
        </Wrapper>
        <FrameContainer>
          <VectorGroup>
            <VectorIcon2 loading="lazy" alt="" src="/vector-31.svg" />
            <Div1>{prop1}</Div1>
          </VectorGroup>
        </FrameContainer>
      </VectorParent>
    </FrameParentRoot>
  );
};

export default GroupComponent2;
