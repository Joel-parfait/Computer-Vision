import { FunctionComponent } from "react";
import GroupComponent1 from "./GroupComponent1";
import GroupComponent2 from "./GroupComponent2";
import GroupComponent3 from "./GroupComponent3";
import styled from "styled-components";

export type CameraFeedGridType = {
  className?: string;
};

const CameraFeedGridRoot = styled.div`
  width: 56.875rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: center;
  padding: 0rem var(--padding-mini) 0rem 0rem;
  box-sizing: border-box;
  gap: 1.875rem 6.375rem;
  min-height: 40.125rem;
  max-width: 100%;
  z-index: 1;
  text-align: right;
  font-size: var(--font-size-smi-3);
  color: var(--color-white);
  font-family: var(--font-manrope);
  @media screen and (max-width: 750px) {
    gap: var(--gap-32xl);
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-6xl);
  }
`;

const CameraFeedGrid: FunctionComponent<CameraFeedGridType> = ({
  className = "",
}) => {
  return (
    <CameraFeedGridRoot className={className}>
      <GroupComponent1
        rectangle63="/rectangle-631@2x.png"
        camera1="Camera #1"
        cameraFeedPlaceholderItem="05"
      />
      <GroupComponent1
        propBackgroundImage="url('/rectangle-632@2x.png')"
        rectangle63="/rectangle-632@2x.png"
        propWidth="6.631rem"
        camera1="Camera #2"
        cameraFeedPlaceholderItem="00"
        cameraFeedCameraPadding="0rem var(--padding-mid) var(--padding-11xs-8)"
        camera1MinWidth="4.313rem"
      />
      <GroupComponent2
        rectangle63="/rectangle-633@2x.png"
        camera3="Camera #3"
        prop="02"
        prop1="02"
      />
      <GroupComponent2
        propBackgroundImage="url('/rectangle-634@2x.png')"
        rectangle63="/rectangle-634@2x.png"
        camera3="Camera #4"
        prop="00"
        prop1="00"
      />
      <GroupComponent3
        rectangle63="/rectangle-635@2x.png"
        camera5="Camera #5"
        prop="46"
        prop1="10"
        prop2="15"
      />
      <GroupComponent3
        propBackgroundImage="url('/rectangle-636@2x.png')"
        rectangle63="/rectangle-636@2x.png"
        camera5="Camera #6"
        prop="12"
        propMinWidth="0.875rem"
        prop1="00"
        propMinWidth1="1.188rem"
        prop2="12"
        frameDivPadding="0rem var(--padding-mini)"
        frameDivPadding1="0rem var(--padding-xs) 0rem var(--padding-smi)"
        frameDivPadding2="0rem var(--padding-4xs) 0rem var(--padding-3xs)"
        divMinWidth="0.875rem"
      />
    </CameraFeedGridRoot>
  );
};

export default CameraFeedGrid;
