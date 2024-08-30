import { FunctionComponent, type CSSProperties } from "react";
import styled from "styled-components";

export type GroupComponent3Type = {
  className?: string;
  rectangle63?: string;
  camera5?: string;
  prop?: string;
  prop1?: string;
  prop2?: string;

  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
  frameDivPadding?: CSSProperties["padding"];
  frameDivPadding1?: CSSProperties["padding"];
  frameDivPadding2?: CSSProperties["padding"];
  divMinWidth?: CSSProperties["minWidth"];
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
const CameraFeedPlaceholderChild = styled.div`
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
const CameraFeedPlaceholder = styled.div`
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
const CameraFeedPlaceholderItem = styled.div`
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
const CameraFeedPlaceholder1 = styled.div`
  backdrop-filter: blur(3.08px);
  background-color: var(--color-dodgerblue-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs-6) var(--padding-4xs) var(--padding-12xs-2);
  white-space: nowrap;
  z-index: 1;
  font-size: var(--font-size-5xs-7);
`;
const RectangleParent = styled.div<{
  propBackgroundImage?: CSSProperties["backgroundImage"];
}>`
  flex: 1;
  border-radius: 7.69px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs-3) var(--padding-11xs);
  box-sizing: border-box;
  gap: var(--gap-126xl-3);
  background-image: url("/rectangle-635@2x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  min-width: 13.313rem;
  max-width: 100%;
  background-image: ${(p) => p.propBackgroundImage};
`;
const VectorIcon = styled.img`
  width: 2.763rem;
  height: 1.675rem;
  position: relative;
`;
const Div = styled.div<{ propMinWidth?: CSSProperties["minWidth"] }>`
  position: relative;
  line-height: 1.438rem;
  display: inline-block;
  min-width: 1.188rem;
  min-width: ${(p) => p.propMinWidth};
`;
const Wrapper = styled.div<{ frameDivPadding?: CSSProperties["padding"] }>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0rem var(--padding-xs) 0rem var(--padding-smi);
  padding: ${(p) => p.frameDivPadding};
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
const Div1 = styled.div<{ propMinWidth1?: CSSProperties["minWidth"] }>`
  position: relative;
  line-height: 1.438rem;
  display: inline-block;
  min-width: 0.938rem;
  min-width: ${(p) => p.propMinWidth1};
`;
const Container = styled.div<{ frameDivPadding1?: CSSProperties["padding"] }>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0rem var(--padding-sm) 0rem var(--padding-mini);
  padding: ${(p) => p.frameDivPadding1};
`;
const VectorIcon2 = styled.img`
  width: 2.106rem;
  height: 2.106rem;
  position: relative;
`;
const Div2 = styled.div<{ divMinWidth?: CSSProperties["minWidth"] }>`
  position: relative;
  line-height: 1.438rem;
  display: inline-block;
  min-width: 0.938rem;
  min-width: ${(p) => p.divMinWidth};
`;
const Frame = styled.div<{ frameDivPadding2?: CSSProperties["padding"] }>`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0rem var(--padding-5xs) 0rem var(--padding-3xs);
  padding: ${(p) => p.frameDivPadding2};
`;
const VectorGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
`;
const FrameWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0rem var(--padding-9xs) 0rem var(--padding-7xs);
`;
const VectorParent = styled.div`
  margin-bottom: -0.163rem;
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
  padding: 0rem 0rem var(--padding-10xs-6);
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

const GroupComponent3: FunctionComponent<GroupComponent3Type> = ({
  className = "",
  propBackgroundImage,
  rectangle63,
  camera5,
  prop,
  propMinWidth,
  prop1,
  propMinWidth1,
  prop2,
  frameDivPadding,
  frameDivPadding1,
  frameDivPadding2,
  divMinWidth,
}) => {
  return (
    <FrameParentRoot className={className}>
      <RectangleParent propBackgroundImage={propBackgroundImage}>
        <FrameChild alt="" src={rectangle63} />
        <CameraFeedPlaceholder>
          <CameraFeedPlaceholderChild />
          <Camera>{camera5}</Camera>
        </CameraFeedPlaceholder>
        <CameraFeedPlaceholder1>
          <CameraFeedPlaceholderItem />
          <Date1>{`Date : 12/06/2025 14:55:50 `}</Date1>
        </CameraFeedPlaceholder1>
      </RectangleParent>
      <VectorParent>
        <VectorIcon loading="lazy" alt="" src="/vector-12.svg" />
        <Wrapper frameDivPadding={frameDivPadding}>
          <Div propMinWidth={propMinWidth}>{prop}</Div>
        </Wrapper>
        <VectorWrapper>
          <VectorIcon1 loading="lazy" alt="" src="/vector-22.svg" />
        </VectorWrapper>
        <Container frameDivPadding1={frameDivPadding1}>
          <Div1 propMinWidth1={propMinWidth1}>{prop1}</Div1>
        </Container>
        <FrameWrapper>
          <VectorGroup>
            <VectorIcon2 loading="lazy" alt="" src="/vector-31.svg" />
            <Frame frameDivPadding2={frameDivPadding2}>
              <Div2 divMinWidth={divMinWidth}>{prop2}</Div2>
            </Frame>
          </VectorGroup>
        </FrameWrapper>
      </VectorParent>
    </FrameParentRoot>
  );
};

export default GroupComponent3;
