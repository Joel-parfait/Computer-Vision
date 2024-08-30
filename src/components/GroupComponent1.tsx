import { FunctionComponent, type CSSProperties } from "react";
import styled from "styled-components";

export type GroupComponent1Type = {
  className?: string;
  rectangle63?: string;
  camera1?: string;
  cameraFeedPlaceholderItem?: string;

  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
  propWidth?: CSSProperties["width"];
  cameraFeedCameraPadding?: CSSProperties["padding"];
  camera1MinWidth?: CSSProperties["minWidth"];
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
const CameraFeedCameraChild = styled.div`
  height: 1.3rem;
  width: 6.631rem;
  position: relative;
  backdrop-filter: blur(3.08px);
  background-color: var(--color-dodgerblue-200);
  display: none;
`;
const Camera = styled.div<{ camera1MinWidth?: CSSProperties["minWidth"] }>`
  position: relative;
  line-height: 1.188rem;
  font-weight: 800;
  display: inline-block;
  min-width: 4.188rem;
  z-index: 2;
  min-width: ${(p) => p.camera1MinWidth};
`;
const CameraFeedCamera = styled.div<{
  propWidth?: CSSProperties["width"];
  cameraFeedCameraPadding?: CSSProperties["padding"];
}>`backdrop-filter: blur(3.08px);
  background-color: var(--color-dodgerblue-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-lgi) var(--padding-11xs-8);
  white-space: nowrap;
  z-index: 1;
  width: ${(p) => p.propWidth}
  padding: ${(p) => p.cameraFeedCameraPadding}
`;
const CameraFeedDateContainerChild = styled.div`
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
const CameraFeedDateContainer = styled.div`
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
  background-image: url("/rectangle-631@2x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  background-image: ${(p) => p.propBackgroundImage};
`;
const CameraFeedItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0rem 0rem var(--padding-10xs-6);
  box-sizing: border-box;
  min-width: 13.313rem;
  max-width: 100%;
`;
const CameraFeedSeparator = styled.img`
  width: 2.763rem;
  height: 1.675rem;
  position: relative;
`;
const CameraFeedPlaceholder = styled.div`
  position: relative;
  line-height: 1.438rem;
  display: inline-block;
  min-width: 1.188rem;
`;
const CameraFeedPlaceholderContai = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0rem var(--padding-xs) 0rem var(--padding-smi);
`;
const CameraFeedSeparator1 = styled.img`
  height: 1.675rem;
  width: 1.675rem;
  position: relative;
`;
const CameraFeedSeparatorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0rem var(--padding-5xs) 0rem var(--padding-4xs);
`;
const CameraFeedSeparator2 = styled.img`
  width: 2.106rem;
  height: 2.106rem;
  position: relative;
`;
const CameraFeedPlaceholderContai1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0rem var(--padding-7xs) 0rem var(--padding-5xs);
`;
const CameraFeedBottomRow = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-12xs-1);
`;
const CameraFeedBottomRowWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0rem var(--padding-9xs) 0rem var(--padding-7xs);
`;
const CameraFeedSeparatorParent = styled.div`
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
const CameraFeedItemParentRoot = styled.div`
  width: 24.625rem;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
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

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  className = "",
  propBackgroundImage,
  rectangle63,
  propWidth,
  camera1,
  cameraFeedPlaceholderItem,
  cameraFeedCameraPadding,
  camera1MinWidth,
}) => {
  return (
    <CameraFeedItemParentRoot className={className}>
      <CameraFeedItem>
        <RectangleParent propBackgroundImage={propBackgroundImage}>
          <FrameChild alt="" src={rectangle63} />
          <CameraFeedCamera
            propWidth={propWidth}
            cameraFeedCameraPadding={cameraFeedCameraPadding}
          >
            <CameraFeedCameraChild />
            <Camera camera1MinWidth={camera1MinWidth}>{camera1}</Camera>
          </CameraFeedCamera>
          <CameraFeedDateContainer>
            <CameraFeedDateContainerChild />
            <Date1>{`Date : 12/06/2025 14:55:50 `}</Date1>
          </CameraFeedDateContainer>
        </RectangleParent>
      </CameraFeedItem>
      <CameraFeedSeparatorParent>
        <CameraFeedSeparator loading="lazy" alt="" src="/vector-12.svg" />
        <CameraFeedPlaceholderContai>
          <CameraFeedPlaceholder>03</CameraFeedPlaceholder>
        </CameraFeedPlaceholderContai>
        <CameraFeedSeparatorWrapper>
          <CameraFeedSeparator1 loading="lazy" alt="" src="/vector-22.svg" />
        </CameraFeedSeparatorWrapper>
        <CameraFeedPlaceholderContai>
          <CameraFeedPlaceholder>00</CameraFeedPlaceholder>
        </CameraFeedPlaceholderContai>
        <CameraFeedBottomRowWrapper>
          <CameraFeedBottomRow>
            <CameraFeedSeparator2 loading="lazy" alt="" src="/vector-31.svg" />
            <CameraFeedPlaceholderContai1>
              <CameraFeedPlaceholder>
                {cameraFeedPlaceholderItem}
              </CameraFeedPlaceholder>
            </CameraFeedPlaceholderContai1>
          </CameraFeedBottomRow>
        </CameraFeedBottomRowWrapper>
      </CameraFeedSeparatorParent>
    </CameraFeedItemParentRoot>
  );
};

export default GroupComponent1;
