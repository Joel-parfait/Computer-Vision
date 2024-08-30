import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export type FrameComponent3Type = {
  className?: string;
};

const FrameIcon = styled.img`
  height: 4.938rem;
  width: 5.625rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const FrameWrapper = styled.div`
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
const FrameGroup = styled.div`
  margin-left: -2.469rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8xl);
  cursor: pointer;
  font-size: var(--font-size-xl);
  color: var(--color-white);
`;
const FrameChild = styled.div`
  width: 6.444rem;
  height: 3.125rem;
  margin: 0 !important;
  position: absolute;
  top: 5.175rem;
  left: -0.975rem;
  z-index: 1;
`;
const IcdashboardIcon = styled.img`
  height: 2.5rem;
  width: 2.5rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const IcdashboardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-base);
`;
const Dashboard4 = styled.div`
  position: relative;
  line-height: 1.25rem;
  display: inline-block;
  min-width: 4.5rem;
`;
const FrameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
  text-align: center;
`;
const CameraIcon = styled.img`
  height: 2.5rem;
  width: 2rem;
  position: relative;
`;
const CameraIconWrapper = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0rem var(--padding-12xs) 0rem 0rem;
  flex-shrink: 0;
`;
const FrameWrapper1 = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem 0rem var(--padding-12xs);
`;
const Cameras = styled.a`
  text-decoration: none;
  position: relative;
  line-height: 1.069rem;
  color: inherit;
  display: inline-block;
  min-width: 3.813rem;
  flex-shrink: 0;
`;
const FrameParent = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mid-1);
`;
const FrameDiv = styled.div`
  align-self: stretch;
  height: 5.344rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-8xs);
  box-sizing: border-box;
  flex-shrink: 0;
`;
const IcrecruitmentIcon = styled.img`
  height: 1.813rem;
  width: 2.063rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const IcrecruitmentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-lgi) 0rem var(--padding-sm);
`;
const Personnel = styled.div`
  position: relative;
  line-height: 1.209rem;
  display: inline-block;
  min-width: 4.125rem;
  flex-shrink: 0;
`;
const GroupDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl-8);
  cursor: pointer;
`;
const FrameWrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-10xs);
  color: var(--color-dodgerblue-100);
`;
const IcsettingsIcon = styled.img`
  width: 3.75rem;
  height: 3.75rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Setttings = styled.a`
  text-decoration: none;
  align-self: stretch;
  position: relative;
  line-height: 1.069rem;
  color: inherit;
  display: inline-block;
  min-width: 3.813rem;
`;
const IcsettingsParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-12xs) 0rem 0rem;
  gap: var(--gap-4xs-6);
`;
const FrameWrapper3 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-8xs);
  text-align: center;
`;
const FrameParentRoot = styled.div`
  height: 42.938rem;
  width: 4.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem var(--padding-122xl-7);
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-37xl);
  cursor: pointer;
  text-align: left;
  font-size: var(--font-size-smi-9);
  color: var(--color-darkgray-100);
  font-family: var(--font-poppins);
  @media screen and (max-width: 1125px) {
    padding-bottom: var(--padding-73xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-bottom: var(--padding-41xl);
    box-sizing: border-box;
  }
`;

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupContainerClick1 = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='backgroundImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <FrameParentRoot onClick={onFrameContainerClick} className={className}>
      <FrameGroup onClick={onGroupContainerClick}>
        <FrameWrapper>
          <FrameIcon loading="lazy" alt="" src="/frame@2x.png" />
        </FrameWrapper>
        <Smartdsvision>SmartDsVision</Smartdsvision>
      </FrameGroup>
      <FrameChild />
      <FrameContainer>
        <IcdashboardWrapper>
          <IcdashboardIcon loading="lazy" alt="" src="/icdashboard.svg" />
        </IcdashboardWrapper>
        <Dashboard4>Dashboard</Dashboard4>
      </FrameContainer>
      <FrameDiv>
        <FrameParent>
          <FrameWrapper1>
            <CameraIconWrapper>
              <CameraIcon loading="lazy" alt="" src="/vector.svg" />
            </CameraIconWrapper>
          </FrameWrapper1>
          <Cameras>Cameras</Cameras>
        </FrameParent>
      </FrameDiv>
      <FrameWrapper2>
        <GroupDiv onClick={onGroupContainerClick1}>
          <IcrecruitmentWrapper>
            <IcrecruitmentIcon
              loading="lazy"
              alt=""
              src="/icrecruitment@2x.png"
            />
          </IcrecruitmentWrapper>
          <Personnel>Personnel</Personnel>
        </GroupDiv>
      </FrameWrapper2>
      <FrameWrapper3>
        <IcsettingsParent>
          <IcsettingsIcon loading="lazy" alt="" src="/icsettings.svg" />
          <Setttings>Setttings</Setttings>
        </IcsettingsParent>
      </FrameWrapper3>
    </FrameParentRoot>
  );
};

export default FrameComponent3;
