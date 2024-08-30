import { FunctionComponent } from "react";
import styled from "styled-components";
import CamerasHeader from "./CamerasHeader";
import FrameComponent2 from "./frame-component2";

export type FrameComponent5Type = {
  className?: string;
};

const SubtractIcon = styled.img`
  position: relative;
  width: 26.688rem;
  height: 44.063rem;
`;
const VectorIcon = styled.img`
  position: absolute;
  height: 33.92%;
  width: 22.25%;
  top: 32.75%;
  right: 70.02%;
  bottom: 33.33%;
  left: 7.73%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const PersonsDetected = styled.div`
  position: absolute;
  top: 3.063rem;
  left: 0rem;
  line-height: 1.5rem;
  font-weight: 600;
`;
const Div = styled.div`
  position: absolute;
  top: 0rem;
  left: 4.938rem;
  font-size: var(--font-size-33xl);
  line-height: 1.5rem;
  font-weight: 800;
`;
const PersonsDetectedParent = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  width: 10.625rem;
  height: 4.563rem;
`;
const GroupWrapper = styled.div`
  position: absolute;
  top: 3.813rem;
  left: 14.375rem;
  width: 10.625rem;
  height: 4.563rem;
`;
const SubtractParent = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  width: 26.688rem;
  height: 10.688rem;
  text-align: right;
  font-size: var(--font-size-xl);
  font-family: var(--font-manrope);
`;
const FrameParentRoot = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  width: 26.688rem;
  height: 44.063rem;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-smi-9);
  color: var(--color-white);
  font-family: var(--font-poppins);
`;

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  return (
    <FrameParentRoot className={className}>
      <SubtractParent>
        <SubtractIcon alt="" src="/subtract.svg" />
        <VectorIcon alt="" src="/vector-11.svg" />
        <GroupWrapper>
          <PersonsDetectedParent>
            <PersonsDetected>Persons detected</PersonsDetected>
            <Div>120</Div>
          </PersonsDetectedParent>
        </GroupWrapper>
      </SubtractParent>
      <CamerasHeader camera1="Camera #1" />
      <CamerasHeader
        propBackgroundColor="unset"
        propBorder="unset"
        propMinHeight="unset"
        frameDivTop="17.938rem"
        frameDivLeft="calc(50% - 213.5px)"
        frameDivWidth="26.688rem"
        frameDivHeight="6.75rem"
        camera1="Camera #2"
        ellipseDivTop="1.563rem"
        ellipseDivLeft="23.688rem"
        frameDivPadding="28px 45px"
        frameDivGap="2px"
        frameDivHeight1="3.25rem"
        frameDivWidth1="1.875rem"
        frameDivHeight2="1.875rem"
        vectorIconWidth="1.25rem"
        vectorIconHeight="1.563rem"
        camera1FontSize="12.9px"
        groupDivWidth="9.063rem"
        groupDivTop="1.75rem"
        groupDivLeft="14.938rem"
        groupDivHeight="3.25rem"
        vectorIconTop="0.125rem"
        vectorIconLeft="4.125rem"
        vectorIconWidth1="1.438rem"
        vectorIconHeight1="1.438rem"
        vectorIconTop1="0.125rem"
        vectorIconLeft1="0rem"
        vectorIconWidth2="2.375rem"
        vectorIconHeight2="1.438rem"
        vectorIconTop2="0rem"
        vectorIconLeft2="7.25rem"
        vectorIconWidth3="1.813rem"
        vectorIconHeight3="1.813rem"
        divTop="2rem"
        divLeft="0.813rem"
        divFontSize="12.9px"
        divTop1="2rem"
        divLeft1="4.313rem"
        divFontSize1="12.9px"
        divTop2="2rem"
        divLeft2="7.688rem"
        divFontSize2="12.9px"
        ellipseDivWidth="0.563rem"
        ellipseDivHeight="0.563rem"
      />
      <FrameComponent2 camera3="Camera #3" />
      <FrameComponent2
        propTop="31.438rem"
        propFilter="unset"
        propBackground="unset"
        camera3="Camera #4"
      />
      <FrameComponent2
        propTop="38.188rem"
        propFilter="blur(4px)"
        propBackground="linear-gradient(180deg, rgba(0, 4, 26, 0), rgba(153, 153, 153, 0.26))"
        camera3="Camera #5"
      />
    </FrameParentRoot>
  );
};

export default FrameComponent5;
