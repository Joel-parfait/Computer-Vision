import { FunctionComponent, type CSSProperties } from "react";
import styled from "styled-components";

export type FrameComponent4Type = {
  className?: string;
  subtract?: string;
  notifications?: string;
  prop?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propLeft1?: CSSProperties["left"];
};

const SubtractIcon = styled.img`
  position: relative;
  width: 26.688rem;
  height: 10.688rem;
`;
const Notifications = styled.div`
  position: absolute;
  top: 3.063rem;
  left: 0rem;
  line-height: 1.5rem;
  font-weight: 600;
`;
const Div = styled.div<{ propLeft1?: CSSProperties["left"] }>`
  position: absolute;
  top: 0rem;
  left: 4.375rem;
  font-size: var(--font-size-33xl);
  line-height: 1.5rem;
  font-weight: 800;
  left: ${(p) => p.propLeft1};
`;
const NotificationsParent = styled.div<{ propWidth1?: CSSProperties["width"] }>`
  position: absolute;
  top: 0rem;
  left: 0rem;
  width: 7.813rem;
  height: 4.563rem;
  width: ${(p) => p.propWidth1};
`;
const GroupWrapper = styled.div<{
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
}>`position: absolute;
  top: 3.813rem;
  left: 17.188rem;
  width: 7.813rem;
  height: 4.563rem;
  left: ${(p) => p.propLeft}
  width: ${(p) => p.propWidth}
`;
const SubtractParent = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  width: 26.688rem;
  height: 10.688rem;
`;
const FrameWrapperRoot = styled.div<{ propTop?: CSSProperties["top"] }>`
  position: absolute;
  top: 0rem;
  left: 29.875rem;
  width: 26.688rem;
  height: 10.688rem;
  text-align: right;
  font-size: var(--font-size-xl);
  color: var(--color-white);
  font-family: var(--font-manrope);
  top: ${(p) => p.propTop};
`;

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
  propTop,
  subtract,
  propLeft,
  propWidth,
  propWidth1,
  notifications,
  prop,
  propLeft1,
}) => {
  return (
    <FrameWrapperRoot propTop={propTop} className={className}>
      <SubtractParent>
        <SubtractIcon alt="" src={subtract} />
        <GroupWrapper propLeft={propLeft} propWidth={propWidth}>
          <NotificationsParent propWidth1={propWidth1}>
            <Notifications>{notifications}</Notifications>
            <Div propLeft1={propLeft1}>{prop}</Div>
          </NotificationsParent>
        </GroupWrapper>
      </SubtractParent>
    </FrameWrapperRoot>
  );
};

export default FrameComponent4;
