import { FunctionComponent } from "react";
import styled from "styled-components";
import GroupComponent from "./GroupComponent";

export type FeatureResumeType = {
  className?: string;
};

const FeatureItemChild = styled.div`
  height: 3.5rem;
  width: 3.875rem;
  position: relative;
  border-radius: var(--br-5xs);
  border: 1px solid var(--color-white);
  box-sizing: border-box;
  display: none;
`;
const FeatureIcon = styled.img`
  height: 1.65rem;
  width: 1.5rem;
  position: relative;
  z-index: 1;
`;
const FeatureItem = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xs);
  border: 1px solid var(--color-white);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-smi) var(--padding-lg);
`;
const FeatureRow = styled.div`
  width: 3.875rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs) 0rem 0rem;
  box-sizing: border-box;
`;
const RealTimeDetection = styled.b``;
const RealTimeDetection1 = styled.p`
  margin: 0;
  font-size: var(--font-size-xl);
`;
const InstantlyDetectAnd = styled.p`
  margin: 0;
`;
const RealTimeDetectionInstantlyContainer = styled.div`
  height: 5.375rem;
  position: relative;
  letter-spacing: -0.02em;
  line-height: 148%;
  display: inline-block;
`;
const FeatureRowParent = styled.div`
  width: 17.813rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xl);
  font-size: var(--font-size-sm);
`;
const GroupIcon = styled.img`
  height: 1.456rem;
  width: 1.75rem;
  position: relative;
  z-index: 1;
`;
const RectangleParent = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xs);
  border: 1px solid var(--color-white);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-sm) var(--padding-base) var(--padding-mini);
`;
const MonitorEmployeeActivity = styled.p`
  margin: 0;
  font-size: var(--font-size-sm);
`;
const DetailedActivityTrackingContainer = styled.div`
  height: 5.375rem;
  flex: 1;
  position: relative;
  letter-spacing: -0.02em;
  line-height: 148%;
  display: inline-block;
  min-width: 9.813rem;
`;
const FrameParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-12xl);
  min-width: 13.563rem;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    gap: var(--gap-mini);
    flex-wrap: wrap;
  }
`;
const FeatureResumeRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: var(--gap-11xl);
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-white);
  font-family: var(--font-manrope);
`;

const FeatureResume: FunctionComponent<FeatureResumeType> = ({
  className = "",
}) => {
  return (
    <FeatureResumeRoot className={className}>
      <FeatureRowParent>
        <FeatureRow>
          <FeatureItem>
            <FeatureItemChild />
            <FeatureIcon loading="lazy" alt="" src="/vector2.svg" />
          </FeatureItem>
        </FeatureRow>
        <RealTimeDetectionInstantlyContainer>
          <RealTimeDetection1>
            <RealTimeDetection>Real-Time Detection</RealTimeDetection>
          </RealTimeDetection1>
          <InstantlyDetectAnd>{`Instantly detect and recognize `}</InstantlyDetectAnd>
          <InstantlyDetectAnd>
            employees as they enter and exit.
          </InstantlyDetectAnd>
        </RealTimeDetectionInstantlyContainer>
      </FeatureRowParent>
      <FrameParent>
        <FeatureRow>
          <RectangleParent>
            <FeatureItemChild />
            <GroupIcon loading="lazy" alt="" src="/group.svg" />
          </RectangleParent>
        </FeatureRow>
        <DetailedActivityTrackingContainer>
          <InstantlyDetectAnd>
            <RealTimeDetection>Detailed Activity Tracking</RealTimeDetection>
          </InstantlyDetectAnd>
          <MonitorEmployeeActivity>
            Monitor employee activity and productivity with detailed logs and
            reports.
          </MonitorEmployeeActivity>
        </DetailedActivityTrackingContainer>
      </FrameParent>
      <GroupComponent
        vector="/vector-13.svg"
        reactive="Reactive"
        realtimeAnormalieDetectio="Realtime Anormalie detection and notification in Crown"
      />
      <GroupComponent
        vector="/vector-23.svg"
        propHeight="2.138rem"
        propHeight1="5.375rem"
        propDisplay="inline-block"
        reactive="Secure and Reliable"
        realtimeAnormalieDetectio="Ensure data security and reliability with state-of-the-art technology."
        frameDivPadding="9px 16px"
      />
    </FeatureResumeRoot>
  );
};

export default FeatureResume;
