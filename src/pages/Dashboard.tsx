import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Sidebar1 from "../components/Sidebar1";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent4 from "../components/frame-component4";

const BackgroundImage = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  width: 90rem;
  height: 56.25rem;
`;
const Dashboard4 = styled.div`
  position: absolute;
  top: 3.563rem;
  left: 25rem;
  line-height: 1.5rem;
  font-weight: 800;
`;
const DashboardChild = styled.div`
  position: absolute;
  top: 5.563rem;
  left: 25.063rem;
  background-color: var(--color-dodgerblue-100);
  width: 4.688rem;
  height: 0.375rem;
`;
const FrameParent = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  width: 56.563rem;
  height: 44.063rem;
`;
const GroupChild = styled.img`
  position: absolute;
  top: 0rem;
  left: 0rem;
  border-radius: 10px;
  width: 26.688rem;
  height: 15.563rem;
  object-fit: cover;
`;
const GroupItem = styled.div`
  position: absolute;
  top: 0.188rem;
  left: 0.188rem;
  backdrop-filter: blur(4px);
  background-color: var(--color-dodgerblue-200);
  width: 8.625rem;
  height: 1.688rem;
`;
const GroupInner = styled.div`
  position: absolute;
  top: 13.688rem;
  left: 0.188rem;
  backdrop-filter: blur(4px);
  background-color: var(--color-dodgerblue-200);
  width: 9.438rem;
  height: 1.688rem;
`;
const Camera = styled.div`
  position: absolute;
  top: 0.188rem;
  left: 1.75rem;
  line-height: 1.5rem;
  font-weight: 800;
`;
const Date1 = styled.div`
  position: absolute;
  top: 13.813rem;
  left: 0.938rem;
  font-size: 0.625rem;
  line-height: 1.5rem;
  font-weight: 500;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 28.5rem;
  left: 29.875rem;
  width: 26.688rem;
  height: 15.563rem;
`;
const Dashcontent = styled.div`
  position: absolute;
  top: 8.5rem;
  left: 25rem;
  width: 56.563rem;
  height: 44.063rem;
  font-size: var(--font-size-base);
`;
const AlertOctagonIcon = styled.img`
  position: absolute;
  top: 27.381rem;
  left: 44.25rem;
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
`;
const DashboardRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color-gray-300);
  height: 56.25rem;
  overflow: hidden;
  text-align: right;
  font-size: var(--font-size-17xl);
  color: var(--color-white);
  font-family: var(--font-manrope);
`;

const Dashboard: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='backgroundImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onGroupContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onGroupContainerClick1 = useCallback(() => {
    navigate("/dashboard1");
  }, [navigate]);

  const onIcsettingsClick = useCallback(() => {
    navigate("/dashboard2");
  }, [navigate]);

  return (
    <DashboardRoot>
      <BackgroundImage data-scroll-to="backgroundImage" />
      <Sidebar1
        rectangleDivTop="15.063rem"
        onFrameContainerClick={onFrameContainerClick}
        icdashboard="/icdashboard1.svg"
        dashboardColor="#1f86ff"
        onGroupContainerClick1={onGroupContainerClick}
        onGroupContainerClick2={onGroupContainerClick1}
        icsettings="/icsettings1.svg"
        onIcsettingsClick={onIcsettingsClick}
        icsettingsIconLeft="0.069rem"
        setttingsColor="#b2b2b2"
        sidebarTop="0rem"
        sidebarLeft="0rem"
        sidebarWidth="16.769rem"
        sidebarHeight="56.25rem"
        sidebarPadding="var(--padding-base-1) 0rem var(--padding-79xl-3)"
        sidebarGap="31px"
        rectangleDivWidth="0.188rem"
        rectangleDivLeft="16.563rem"
        rectangleDivHeight="7.063rem"
        frameDivWidth="4.5rem"
        frameDivGap="56px"
        groupDivWidth="9.438rem"
        groupDivHeight="8.75rem"
        groupDivTop="0rem"
        groupDivLeft="0rem"
        groupDivWidth1="9.438rem"
        groupDivHeight1="8.75rem"
        smartDsVisionTop="6.625rem"
        smartDsVisionLeft="0rem"
        smartDsVisionFontSize="20px"
        frameIconTop="0rem"
        frameIconLeft="1.894rem"
        frameIconWidth="5.625rem"
        frameIconHeight="4.938rem"
        frameDivTop="5.175rem"
        frameDivLeft="1.494rem"
        frameDivWidth1="6.444rem"
        frameDivHeight="3.125rem"
        frameDivGap1="20px"
        icdashboardIconWidth="2.5rem"
        icdashboardIconHeight="2.5rem"
        dashboardFontSize="12.9px"
        groupDivWidth2="3.844rem"
        groupDivHeight2="5.344rem"
        frameDivTop1="0rem"
        frameDivLeft1="0.094rem"
        frameDivWidth2="3.75rem"
        frameDivHeight1="3.206rem"
        vectorIconWidth="2rem"
        vectorIconHeight="2.5rem"
        camerasTop="4.275rem"
        camerasLeft="0rem"
        camerasFontSize="12.9px"
        camerasWidth="3.813rem"
        camerasHeight="1.069rem"
        groupDivWidth3="4.125rem"
        groupDivHeight3="4.488rem"
        icrecruitmentIconTop="0rem"
        icrecruitmentIconWidth="2.063rem"
        icrecruitmentIconHeight="1.813rem"
        personnelTop="3.363rem"
        personnelLeft="0rem"
        personnelFontSize="12.9px"
        personnelWidth="4.125rem"
        personnelHeight="1.125rem"
        groupDivWidth4="3.819rem"
        groupDivHeight4="5.356rem"
        icsettingsIconTop="0rem"
        icsettingsIconWidth="3.75rem"
        icsettingsIconHeight="3.75rem"
        setttingsTop="4.288rem"
        setttingsLeft="0rem"
        setttingsFontSize="12.9px"
        setttingsWidth="3.813rem"
        setttingsHeight="1.069rem"
      />
      <Dashboard4>Dashboard</Dashboard4>
      <DashboardChild />
      <Dashcontent>
        <FrameParent>
          <FrameComponent5 />
          <FrameComponent4
            subtract="/subtract-1.svg"
            notifications="Notifications"
            prop="15"
          />
          <FrameComponent4
            propTop="14.188rem"
            subtract="/subtract-2.svg"
            propLeft="10.938rem"
            propWidth="14.063rem"
            propWidth1="14.063rem"
            notifications="Abnormalities captured"
            prop="12"
            propLeft1="10.625rem"
          />
        </FrameParent>
        <RectangleParent>
          <GroupChild alt="" src="/rectangle-63@2x.png" />
          <GroupItem />
          <GroupInner />
          <Camera>Camera #1</Camera>
          <Date1>{`Date : 12/06/2025 14:55:50 `}</Date1>
        </RectangleParent>
      </Dashcontent>
      <AlertOctagonIcon alt="" src="/alertoctagon.svg" />
    </DashboardRoot>
  );
};

export default Dashboard;
