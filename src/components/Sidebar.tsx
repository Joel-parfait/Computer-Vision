import { FunctionComponent, useCallback } from "react";
import FrameComponent from "./FrameComponent";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export type SidebarType = {
  className?: string;
};

const IcdashboardIcon = styled.img`
  height: 2.5rem;
  width: 2.5rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  cursor: pointer;
`;
const DashboardMenuItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-36xl);
`;
const Dashboard4 = styled.a`
  text-decoration: none;
  align-self: stretch;
  position: relative;
  line-height: 1.25rem;
  color: inherit;
`;
const DashboardMenuItemParent = styled.div`
  width: 10.688rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-xl) 0rem 0rem;
  box-sizing: border-box;
  gap: var(--gap-xl);
  text-align: center;
`;
const CamerasMenuIcon = styled.img`
  height: 2.5rem;
  width: 2rem;
  position: relative;
`;
const HealthProfessionalTeamamico = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0rem var(--padding-12xs) 0rem 0rem;
`;
const CamerasMenuIconContainer = styled.div`
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
`;
const CamerasMenuIconContainerParent = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mid-1);
  cursor: pointer;
`;
const CamerasMenuInnerInner = styled.div`
  align-self: stretch;
  height: 5.344rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-11xs);
  box-sizing: border-box;
  color: var(--color-dodgerblue-100);
`;
const IcrecruitmentIcon = styled.img`
  height: 1.813rem;
  width: 2.063rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const PersonnelMenuItem = styled.div`
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
`;
const PersonnelMenuItemParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl-8);
  cursor: pointer;
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
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0rem var(--padding-12xs) 0rem 0rem;
  gap: var(--gap-4xs-6);
  cursor: pointer;
`;
const CamerasMenuInnerChild = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-11xs);
  text-align: center;
`;
const CamerasMenuInner = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-37xl);
`;
const CamerasMenuContainer = styled.div`
  width: 4.125rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base-4) 0rem 0rem;
  box-sizing: border-box;
`;
const SidebarBackground = styled.div`
  height: 7.063rem;
  width: 0.188rem;
  position: relative;
  background-color: var(--color-dodgerblue-100);
`;
const CamerasMenuItem = styled.div`
  width: 10.425rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
`;
const CamerasMenuItemWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0rem var(--padding-12xs);
`;
const SidebarRoot = styled.div`
  margin-top: -3.625rem;
  width: 16.769rem;
  background-color: var(--color-black);
  border: 1px solid var(--color-gray-200);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-45xl) 0rem var(--padding-127xl) var(--padding-37xl);
  gap: var(--gap-20xl-6);
  flex-shrink: 0;
  z-index: 1;
  text-align: left;
  font-size: var(--font-size-smi-9);
  color: var(--color-darkgray-100);
  font-family: var(--font-poppins);
  @media screen and (max-width: 1050px) {
    padding-top: var(--padding-23xl);
    padding-bottom: var(--padding-76xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    display: none;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-xl);
    padding-left: var(--padding-xl);
    padding-top: var(--padding-8xl);
    padding-bottom: var(--padding-43xl);
    box-sizing: border-box;
  }
`;

const Sidebar: FunctionComponent<SidebarType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onIcdashboardIconClick = useCallback(() => {
    navigate("/dashboard3");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='backgroundImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onGroupContainerClick1 = useCallback(() => {
    navigate("/dashboard1");
  }, [navigate]);

  const onGroupContainerClick2 = useCallback(() => {
    navigate("/dashboard2");
  }, [navigate]);

  return (
    <SidebarRoot className={className}>
      <FrameComponent />
      <DashboardMenuItemParent>
        <DashboardMenuItem>
          <IcdashboardIcon
            loading="lazy"
            alt=""
            src="/icdashboard2.svg"
            onClick={onIcdashboardIconClick}
          />
        </DashboardMenuItem>
        <Dashboard4>Dashboard</Dashboard4>
      </DashboardMenuItemParent>
      <CamerasMenuItemWrapper>
        <CamerasMenuItem>
          <CamerasMenuContainer>
            <CamerasMenuInner>
              <CamerasMenuInnerInner>
                <CamerasMenuIconContainerParent onClick={onGroupContainerClick}>
                  <CamerasMenuIconContainer>
                    <HealthProfessionalTeamamico>
                      <CamerasMenuIcon
                        loading="lazy"
                        alt=""
                        src="/vector1.svg"
                      />
                    </HealthProfessionalTeamamico>
                  </CamerasMenuIconContainer>
                  <Cameras>Cameras</Cameras>
                </CamerasMenuIconContainerParent>
              </CamerasMenuInnerInner>
              <PersonnelMenuItemParent onClick={onGroupContainerClick1}>
                <PersonnelMenuItem>
                  <IcrecruitmentIcon
                    loading="lazy"
                    alt=""
                    src="/icrecruitment1@2x.png"
                  />
                </PersonnelMenuItem>
                <Personnel>Personnel</Personnel>
              </PersonnelMenuItemParent>
              <CamerasMenuInnerChild>
                <IcsettingsParent onClick={onGroupContainerClick2}>
                  <IcsettingsIcon
                    loading="lazy"
                    alt=""
                    src="/icsettings1.svg"
                  />
                  <Setttings>Setttings</Setttings>
                </IcsettingsParent>
              </CamerasMenuInnerChild>
            </CamerasMenuInner>
          </CamerasMenuContainer>
          <SidebarBackground />
        </CamerasMenuItem>
      </CamerasMenuItemWrapper>
    </SidebarRoot>
  );
};

export default Sidebar;
