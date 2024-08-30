import { FunctionComponent, useCallback, type CSSProperties } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export type Sidebar1Type = {
  className?: string;
  icdashboard?: string;
  icsettings?: string;

  /** Style props */
  rectangleDivTop?: CSSProperties["top"];
  dashboardColor?: CSSProperties["color"];
  icsettingsIconLeft?: CSSProperties["left"];
  setttingsColor?: CSSProperties["color"];
  sidebarTop?: CSSProperties["top"];
  sidebarLeft?: CSSProperties["left"];
  sidebarWidth?: CSSProperties["width"];
  sidebarHeight?: CSSProperties["height"];
  sidebarPadding?: CSSProperties["padding"];
  sidebarGap?: CSSProperties["gap"];
  rectangleDivWidth?: CSSProperties["width"];
  rectangleDivLeft?: CSSProperties["left"];
  rectangleDivHeight?: CSSProperties["height"];
  frameDivWidth?: CSSProperties["width"];
  frameDivGap?: CSSProperties["gap"];
  groupDivWidth?: CSSProperties["width"];
  groupDivHeight?: CSSProperties["height"];
  groupDivTop?: CSSProperties["top"];
  groupDivLeft?: CSSProperties["left"];
  groupDivWidth1?: CSSProperties["width"];
  groupDivHeight1?: CSSProperties["height"];
  smartDsVisionTop?: CSSProperties["top"];
  smartDsVisionLeft?: CSSProperties["left"];
  smartDsVisionFontSize?: CSSProperties["fontSize"];
  frameIconTop?: CSSProperties["top"];
  frameIconLeft?: CSSProperties["left"];
  frameIconWidth?: CSSProperties["width"];
  frameIconHeight?: CSSProperties["height"];
  frameDivTop?: CSSProperties["top"];
  frameDivLeft?: CSSProperties["left"];
  frameDivWidth1?: CSSProperties["width"];
  frameDivHeight?: CSSProperties["height"];
  frameDivGap1?: CSSProperties["gap"];
  icdashboardIconWidth?: CSSProperties["width"];
  icdashboardIconHeight?: CSSProperties["height"];
  dashboardFontSize?: CSSProperties["fontSize"];
  groupDivWidth2?: CSSProperties["width"];
  groupDivHeight2?: CSSProperties["height"];
  frameDivTop1?: CSSProperties["top"];
  frameDivLeft1?: CSSProperties["left"];
  frameDivWidth2?: CSSProperties["width"];
  frameDivHeight1?: CSSProperties["height"];
  vectorIconWidth?: CSSProperties["width"];
  vectorIconHeight?: CSSProperties["height"];
  camerasTop?: CSSProperties["top"];
  camerasLeft?: CSSProperties["left"];
  camerasFontSize?: CSSProperties["fontSize"];
  camerasWidth?: CSSProperties["width"];
  camerasHeight?: CSSProperties["height"];
  groupDivWidth3?: CSSProperties["width"];
  groupDivHeight3?: CSSProperties["height"];
  icrecruitmentIconTop?: CSSProperties["top"];
  icrecruitmentIconWidth?: CSSProperties["width"];
  icrecruitmentIconHeight?: CSSProperties["height"];
  personnelTop?: CSSProperties["top"];
  personnelLeft?: CSSProperties["left"];
  personnelFontSize?: CSSProperties["fontSize"];
  personnelWidth?: CSSProperties["width"];
  personnelHeight?: CSSProperties["height"];
  groupDivWidth4?: CSSProperties["width"];
  groupDivHeight4?: CSSProperties["height"];
  icsettingsIconTop?: CSSProperties["top"];
  icsettingsIconWidth?: CSSProperties["width"];
  icsettingsIconHeight?: CSSProperties["height"];
  setttingsTop?: CSSProperties["top"];
  setttingsLeft?: CSSProperties["left"];
  setttingsFontSize?: CSSProperties["fontSize"];
  setttingsWidth?: CSSProperties["width"];
  setttingsHeight?: CSSProperties["height"];

  /** Action props */
  onFrameContainerClick?: () => void;
  onGroupContainerClick1?: () => void;
  onGroupContainerClick2?: () => void;
  onIcsettingsClick?: () => void;
};

const SidebarChild = styled.div<{
  rectangleDivTop?: CSSProperties["top"];
  rectangleDivWidth?: CSSProperties["width"];
  rectangleDivLeft?: CSSProperties["left"];
  rectangleDivHeight?: CSSProperties["height"];
}>`width: 3px;
  position: absolute;
  margin: 0 !important;
  top: 651px;
  left: 265px;
  background-color: var(--color-dodgerblue-100);
  height: 113px;
  z-index: 0;
  top: ${(p) => p.rectangleDivTop}
  width: ${(p) => p.rectangleDivWidth}
  left: ${(p) => p.rectangleDivLeft}
  height: ${(p) => p.rectangleDivHeight}
`;
const Smartdsvision = styled.div<{
  smartDsVisionTop?: CSSProperties["top"];
  smartDsVisionLeft?: CSSProperties["left"];
  smartDsVisionFontSize?: CSSProperties["fontSize"];
}>`position: absolute;
  top: 106px;
  left: 0px;
  line-height: 33.84px;
  font-weight: 600;
  top: ${(p) => p.smartDsVisionTop}
  left: ${(p) => p.smartDsVisionLeft}
  font-size: ${(p) => p.smartDsVisionFontSize}
`;
const FrameIcon = styled.img<{
  frameIconTop?: CSSProperties["top"];
  frameIconLeft?: CSSProperties["left"];
  frameIconWidth?: CSSProperties["width"];
  frameIconHeight?: CSSProperties["height"];
}>`position: absolute;
  top: 0px;
  left: 30.3px;
  width: 90px;
  height: 79px;
  overflow: hidden;
  object-fit: cover;
  top: ${(p) => p.frameIconTop}
  left: ${(p) => p.frameIconLeft}
  width: ${(p) => p.frameIconWidth}
  height: ${(p) => p.frameIconHeight}
`;
const SmartdsvisionParent = styled.div<{
  groupDivTop?: CSSProperties["top"];
  groupDivLeft?: CSSProperties["left"];
  groupDivWidth1?: CSSProperties["width"];
  groupDivHeight1?: CSSProperties["height"];
}>`position: absolute;
  top: 0px;
  left: 0px;
  width: 151px;
  height: 140px;
  top: ${(p) => p.groupDivTop}
  left: ${(p) => p.groupDivLeft}
  width: ${(p) => p.groupDivWidth1}
  height: ${(p) => p.groupDivHeight1}
`;
const GroupChild = styled.div<{
  frameDivTop?: CSSProperties["top"];
  frameDivLeft?: CSSProperties["left"];
  frameDivWidth1?: CSSProperties["width"];
  frameDivHeight?: CSSProperties["height"];
}>`position: absolute;
  top: 82.8px;
  left: 23.9px;
  width: 103.1px;
  height: 50px;
  top: ${(p) => p.frameDivTop}
  left: ${(p) => p.frameDivLeft}
  width: ${(p) => p.frameDivWidth1}
  height: ${(p) => p.frameDivHeight}
`;
const GroupContainer = styled.div<{
  groupDivWidth?: CSSProperties["width"];
  groupDivHeight?: CSSProperties["height"];
}>`width: 151px;
  position: relative;
  height: 140px;
  cursor: pointer;
  font-size: var(--font-size-xl);
  color: var(--color-white);
  width: ${(p) => p.groupDivWidth}
  height: ${(p) => p.groupDivHeight}
`;
const IcdashboardIcon = styled.img<{
  icdashboardIconWidth?: CSSProperties["width"];
  icdashboardIconHeight?: CSSProperties["height"];
}>`width: 40px;
  position: relative;
  height: 40px;
  overflow: hidden;
  flex-shrink: 0;
  width: ${(p) => p.icdashboardIconWidth}
  height: ${(p) => p.icdashboardIconHeight}
`;
const Dashboard4 = styled.div<{
  dashboardColor?: CSSProperties["color"];
  dashboardFontSize?: CSSProperties["fontSize"];
}>`align-self: stretch;
  position: relative;
  line-height: 19.34px;
  color: ${(p) => p.dashboardColor}
  font-size: ${(p) => p.dashboardFontSize}
`;
const IcdashboardParent = styled.div<{ frameDivGap1?: CSSProperties["gap"] }>`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xl);
  text-align: center;
  gap: ${(p) => p.frameDivGap1};
`;
const VectorIcon = styled.img<{
  vectorIconWidth?: CSSProperties["width"];
  vectorIconHeight?: CSSProperties["height"];
}>`width: 32px;
  position: relative;
  height: 40px;
  width: ${(p) => p.vectorIconWidth}
  height: ${(p) => p.vectorIconHeight}
`;
const VectorWrapper = styled.div<{
  frameDivTop1?: CSSProperties["top"];
  frameDivLeft1?: CSSProperties["left"];
  frameDivWidth2?: CSSProperties["width"];
  frameDivHeight1?: CSSProperties["height"];
}>`position: absolute;
  top: 0px;
  left: 1.5px;
  width: 60px;
  height: 51.3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  top: ${(p) => p.frameDivTop1}
  left: ${(p) => p.frameDivLeft1}
  width: ${(p) => p.frameDivWidth2}
  height: ${(p) => p.frameDivHeight1}
`;
const Cameras = styled.div<{
  camerasTop?: CSSProperties["top"];
  camerasLeft?: CSSProperties["left"];
  camerasFontSize?: CSSProperties["fontSize"];
  camerasWidth?: CSSProperties["width"];
  camerasHeight?: CSSProperties["height"];
}>`position: absolute;
  top: 68.4px;
  left: 0px;
  line-height: 19.34px;
  display: inline-block;
  width: 61px;
  height: 17.1px;
  top: ${(p) => p.camerasTop}
  left: ${(p) => p.camerasLeft}
  font-size: ${(p) => p.camerasFontSize}
  width: ${(p) => p.camerasWidth}
  height: ${(p) => p.camerasHeight}
`;
const FrameParent = styled.div<{
  groupDivWidth2?: CSSProperties["width"];
  groupDivHeight2?: CSSProperties["height"];
}>`width: 61.5px;
  position: relative;
  height: 85.5px;
  width: ${(p) => p.groupDivWidth2}
  height: ${(p) => p.groupDivHeight2}
`;
const IcrecruitmentIcon = styled.img<{
  icrecruitmentIconTop?: CSSProperties["top"];
  icrecruitmentIconWidth?: CSSProperties["width"];
  icrecruitmentIconHeight?: CSSProperties["height"];
}>`position: absolute;
  top: 0px;
  left: calc(50% - 19px);
  width: 33px;
  height: 29px;
  overflow: hidden;
  object-fit: cover;
  top: ${(p) => p.icrecruitmentIconTop}
  width: ${(p) => p.icrecruitmentIconWidth}
  height: ${(p) => p.icrecruitmentIconHeight}
`;
const Personnel = styled.div<{
  personnelTop?: CSSProperties["top"];
  personnelLeft?: CSSProperties["left"];
  personnelFontSize?: CSSProperties["fontSize"];
  personnelWidth?: CSSProperties["width"];
  personnelHeight?: CSSProperties["height"];
}>`position: absolute;
  top: 53.8px;
  left: 0px;
  line-height: 19.34px;
  display: inline-block;
  width: 66px;
  height: 18px;
  top: ${(p) => p.personnelTop}
  left: ${(p) => p.personnelLeft}
  font-size: ${(p) => p.personnelFontSize}
  width: ${(p) => p.personnelWidth}
  height: ${(p) => p.personnelHeight}
`;
const IcrecruitmentParent = styled.div<{
  groupDivWidth3?: CSSProperties["width"];
  groupDivHeight3?: CSSProperties["height"];
}>`width: 66px;
  position: relative;
  height: 71.8px;
  width: ${(p) => p.groupDivWidth3}
  height: ${(p) => p.groupDivHeight3}
`;
const IcsettingsIcon = styled.img<{
  icsettingsIconLeft?: CSSProperties["left"];
  icsettingsIconTop?: CSSProperties["top"];
  icsettingsIconWidth?: CSSProperties["width"];
  icsettingsIconHeight?: CSSProperties["height"];
}>`position: absolute;
  top: 0px;
  left: calc(50% - 30.1px);
  width: 60px;
  height: 60px;
  overflow: hidden;
  left: ${(p) => p.icsettingsIconLeft}
  top: ${(p) => p.icsettingsIconTop}
  width: ${(p) => p.icsettingsIconWidth}
  height: ${(p) => p.icsettingsIconHeight}
`;
const Setttings = styled.div<{
  setttingsColor?: CSSProperties["color"];
  setttingsTop?: CSSProperties["top"];
  setttingsLeft?: CSSProperties["left"];
  setttingsFontSize?: CSSProperties["fontSize"];
  setttingsWidth?: CSSProperties["width"];
  setttingsHeight?: CSSProperties["height"];
}>`position: absolute;
  top: 68.6px;
  left: 0px;
  line-height: 19.34px;
  display: inline-block;
  width: 61px;
  height: 17.1px;
  color: ${(p) => p.setttingsColor}
  top: ${(p) => p.setttingsTop}
  left: ${(p) => p.setttingsLeft}
  font-size: ${(p) => p.setttingsFontSize}
  width: ${(p) => p.setttingsWidth}
  height: ${(p) => p.setttingsHeight}
`;
const IcsettingsParent = styled.div<{
  groupDivWidth4?: CSSProperties["width"];
  groupDivHeight4?: CSSProperties["height"];
}>`width: 61px;
  position: relative;
  height: 85.7px;
  text-align: center;
  color: var(--color-dodgerblue-100);
  width: ${(p) => p.groupDivWidth4}
  height: ${(p) => p.groupDivHeight4}
`;
const GroupParent = styled.div<{
  frameDivWidth?: CSSProperties["width"];
  frameDivGap?: CSSProperties["gap"];
}>`width: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-37xl);
  z-index: 1;
  width: ${(p) => p.frameDivWidth}
  gap: ${(p) => p.frameDivGap}
`;
const SidebarRoot = styled.div<{
  sidebarTop?: CSSProperties["top"];
  sidebarLeft?: CSSProperties["left"];
  sidebarWidth?: CSSProperties["width"];
  sidebarHeight?: CSSProperties["height"];
  sidebarPadding?: CSSProperties["padding"];
  sidebarGap?: CSSProperties["gap"];
}>`position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-black);
  border: 1px solid var(--color-gray-200);
  box-sizing: border-box;
  width: 268.3px;
  height: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-base-1) 0px var(--padding-79xl-3);
  gap: var(--gap-12xl);
  text-align: left;
  font-size: var(--font-size-smi-9);
  color: var(--color-darkgray-100);
  font-family: var(--font-poppins);
  top: ${(p) => p.sidebarTop}
  left: ${(p) => p.sidebarLeft}
  width: ${(p) => p.sidebarWidth}
  height: ${(p) => p.sidebarHeight}
  padding: ${(p) => p.sidebarPadding}
  gap: ${(p) => p.sidebarGap}
`;

const Sidebar1: FunctionComponent<Sidebar1Type> = ({
  className = "",
  rectangleDivTop,
  onFrameContainerClick,
  icdashboard,
  dashboardColor,
  onGroupContainerClick1,
  onGroupContainerClick2,
  icsettings,
  onIcsettingsClick,
  icsettingsIconLeft,
  setttingsColor,
  sidebarTop,
  sidebarLeft,
  sidebarWidth,
  sidebarHeight,
  sidebarPadding,
  sidebarGap,
  rectangleDivWidth,
  rectangleDivLeft,
  rectangleDivHeight,
  frameDivWidth,
  frameDivGap,
  groupDivWidth,
  groupDivHeight,
  groupDivTop,
  groupDivLeft,
  groupDivWidth1,
  groupDivHeight1,
  smartDsVisionTop,
  smartDsVisionLeft,
  smartDsVisionFontSize,
  frameIconTop,
  frameIconLeft,
  frameIconWidth,
  frameIconHeight,
  frameDivTop,
  frameDivLeft,
  frameDivWidth1,
  frameDivHeight,
  frameDivGap1,
  icdashboardIconWidth,
  icdashboardIconHeight,
  dashboardFontSize,
  groupDivWidth2,
  groupDivHeight2,
  frameDivTop1,
  frameDivLeft1,
  frameDivWidth2,
  frameDivHeight1,
  vectorIconWidth,
  vectorIconHeight,
  camerasTop,
  camerasLeft,
  camerasFontSize,
  camerasWidth,
  camerasHeight,
  groupDivWidth3,
  groupDivHeight3,
  icrecruitmentIconTop,
  icrecruitmentIconWidth,
  icrecruitmentIconHeight,
  personnelTop,
  personnelLeft,
  personnelFontSize,
  personnelWidth,
  personnelHeight,
  groupDivWidth4,
  groupDivHeight4,
  icsettingsIconTop,
  icsettingsIconWidth,
  icsettingsIconHeight,
  setttingsTop,
  setttingsLeft,
  setttingsFontSize,
  setttingsWidth,
  setttingsHeight,
}) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <SidebarRoot
      sidebarTop={sidebarTop}
      sidebarLeft={sidebarLeft}
      sidebarWidth={sidebarWidth}
      sidebarHeight={sidebarHeight}
      sidebarPadding={sidebarPadding}
      sidebarGap={sidebarGap}
      className={className}
    >
      <SidebarChild
        rectangleDivTop={rectangleDivTop}
        rectangleDivWidth={rectangleDivWidth}
        rectangleDivLeft={rectangleDivLeft}
        rectangleDivHeight={rectangleDivHeight}
      />
      <GroupParent frameDivWidth={frameDivWidth} frameDivGap={frameDivGap}>
        <GroupContainer
          onClick={onGroupContainerClick}
          groupDivWidth={groupDivWidth}
          groupDivHeight={groupDivHeight}
        >
          <SmartdsvisionParent
            groupDivTop={groupDivTop}
            groupDivLeft={groupDivLeft}
            groupDivWidth1={groupDivWidth1}
            groupDivHeight1={groupDivHeight1}
          >
            <Smartdsvision
              smartDsVisionTop={smartDsVisionTop}
              smartDsVisionLeft={smartDsVisionLeft}
              smartDsVisionFontSize={smartDsVisionFontSize}
            >
              SmartDsVision
            </Smartdsvision>
            <FrameIcon
              alt=""
              src="/frame@2x.png"
              frameIconTop={frameIconTop}
              frameIconLeft={frameIconLeft}
              frameIconWidth={frameIconWidth}
              frameIconHeight={frameIconHeight}
            />
          </SmartdsvisionParent>
          <GroupChild
            frameDivTop={frameDivTop}
            frameDivLeft={frameDivLeft}
            frameDivWidth1={frameDivWidth1}
            frameDivHeight={frameDivHeight}
          />
        </GroupContainer>
        <IcdashboardParent
          onClick={onFrameContainerClick}
          frameDivGap1={frameDivGap1}
        >
          <IcdashboardIcon
            alt=""
            src={icdashboard}
            icdashboardIconWidth={icdashboardIconWidth}
            icdashboardIconHeight={icdashboardIconHeight}
          />
          <Dashboard4
            dashboardColor={dashboardColor}
            dashboardFontSize={dashboardFontSize}
          >
            Dashboard
          </Dashboard4>
        </IcdashboardParent>
        <FrameParent
          onClick={onGroupContainerClick1}
          groupDivWidth2={groupDivWidth2}
          groupDivHeight2={groupDivHeight2}
        >
          <VectorWrapper
            frameDivTop1={frameDivTop1}
            frameDivLeft1={frameDivLeft1}
            frameDivWidth2={frameDivWidth2}
            frameDivHeight1={frameDivHeight1}
          >
            <VectorIcon
              alt=""
              src="/vector.svg"
              vectorIconWidth={vectorIconWidth}
              vectorIconHeight={vectorIconHeight}
            />
          </VectorWrapper>
          <Cameras
            camerasTop={camerasTop}
            camerasLeft={camerasLeft}
            camerasFontSize={camerasFontSize}
            camerasWidth={camerasWidth}
            camerasHeight={camerasHeight}
          >
            Cameras
          </Cameras>
        </FrameParent>
        <IcrecruitmentParent
          onClick={onGroupContainerClick2}
          groupDivWidth3={groupDivWidth3}
          groupDivHeight3={groupDivHeight3}
        >
          <IcrecruitmentIcon
            alt=""
            src="/icrecruitment1@2x.png"
            icrecruitmentIconTop={icrecruitmentIconTop}
            icrecruitmentIconWidth={icrecruitmentIconWidth}
            icrecruitmentIconHeight={icrecruitmentIconHeight}
          />
          <Personnel
            personnelTop={personnelTop}
            personnelLeft={personnelLeft}
            personnelFontSize={personnelFontSize}
            personnelWidth={personnelWidth}
            personnelHeight={personnelHeight}
          >
            Personnel
          </Personnel>
        </IcrecruitmentParent>
        <IcsettingsParent
          groupDivWidth4={groupDivWidth4}
          groupDivHeight4={groupDivHeight4}
        >
          <IcsettingsIcon
            alt=""
            src={icsettings}
            onClick={onIcsettingsClick}
            icsettingsIconLeft={icsettingsIconLeft}
            icsettingsIconTop={icsettingsIconTop}
            icsettingsIconWidth={icsettingsIconWidth}
            icsettingsIconHeight={icsettingsIconHeight}
          />
          <Setttings
            setttingsColor={setttingsColor}
            setttingsTop={setttingsTop}
            setttingsLeft={setttingsLeft}
            setttingsFontSize={setttingsFontSize}
            setttingsWidth={setttingsWidth}
            setttingsHeight={setttingsHeight}
          >
            Setttings
          </Setttings>
        </IcsettingsParent>
      </GroupParent>
    </SidebarRoot>
  );
};

export default Sidebar1;
