import { FunctionComponent } from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import CameraFeedGrid from "../components/CameraFeedGrid";

const BackgroundImage = styled.section`
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0rem;
  right: 0rem;
  bottom: 0rem;
  left: 0rem;
`;
const Cameras = styled.a`
  text-decoration: none;
  position: relative;
  line-height: 1.5rem;
  font-weight: 800;
  color: inherit;
  z-index: 1;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-10xl);
    line-height: 1.188rem;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-3xl);
    line-height: 0.875rem;
  }
`;
const CamerasBackground = styled.div`
  height: 0.375rem;
  flex: 1;
  position: relative;
  background-color: var(--color-dodgerblue-100);
  z-index: 1;
`;
const CamerasContent = styled.div`
  width: 4.813rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-12xs);
  box-sizing: border-box;
`;
const CamerasParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-xl) 0rem 0rem;
  gap: 0.5rem;
`;
const CameraFeedGridWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem 0rem var(--padding-12xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const FrameParent = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4.187rem;
  max-width: calc(100% - 400px);
  flex-shrink: 0;
  text-align: left;
  font-size: var(--font-size-17xl);
  color: var(--color-white);
  font-family: var(--font-manrope);
  @media screen and (max-width: 1050px) {
    gap: var(--gap-14xl);
  }
  @media screen and (max-width: 750px) {
    max-width: 100%;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-mid);
  }
`;
const DashboardRoot = styled.div`
  width: 100%;
  height: 56.25rem;
  position: relative;
  background-color: var(--color-gray-300);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 3.562rem 0rem var(--padding-12xs);
  box-sizing: border-box;
  gap: 8.231rem;
  line-height: normal;
  letter-spacing: normal;
  @media screen and (max-width: 1200px) {
    gap: var(--gap-47xl);
  }
  @media screen and (max-width: 750px) {
    gap: var(--gap-14xl);
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    height: auto;
    gap: var(--gap-base);
  }
`;

const Dashboard1: FunctionComponent = () => {
  return (
    <DashboardRoot>
      <BackgroundImage data-scroll-to="backgroundImage" />
      <Sidebar />
      <FrameParent>
        <CamerasParent>
          <Cameras>Cameras</Cameras>
          <CamerasContent>
            <CamerasBackground />
          </CamerasContent>
        </CamerasParent>
        <CameraFeedGridWrapper>
          <CameraFeedGrid />
        </CameraFeedGridWrapper>
      </FrameParent>
    </DashboardRoot>
  );
};

export default Dashboard1;
