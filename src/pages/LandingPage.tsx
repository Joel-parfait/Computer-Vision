import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import styled from "styled-components";
import FeatureResume from "../components/FeatureResume";

const HeroImageBackground = styled.div`
  position: absolute;
  top: 3.625rem;
  left: 0rem;
  border-radius: var(--br-41xl);
  border: 2px solid var(--color-dodgerblue-100);
  box-sizing: border-box;
  width: 36.875rem;
  height: 23.563rem;
`;
const HeroImageOverlay = styled.div`
  position: absolute;
  top: 0rem;
  left: 5.75rem;
  border-radius: var(--br-41xl);
  border: 2px solid var(--color-white);
  box-sizing: border-box;
  width: 36.375rem;
  height: 23.625rem;
  z-index: 1;
`;
const WhatsappImage = styled.img`
  position: absolute;
  top: 1.125rem;
  left: 1.313rem;
  border-radius: var(--br-41xl);
  width: 39.438rem;
  height: 24.688rem;
  object-fit: cover;
  z-index: 2;
`;
const HeroImageContainer = styled.div`
  height: 27.188rem;
  flex: 1;
  position: relative;
  max-width: 100%;
`;
const HeroImage = styled.div`
  position: absolute;
  top: 0rem;
  left: 38.25rem;
  width: 42.125rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
`;
const GetStarted = styled.b`
  position: relative;
  font-size: var(--font-size-xl);
  letter-spacing: -0.02em;
  line-height: 100%;
  display: inline-block;
  font-family: var(--font-manrope);
  color: var(--color-whitesmoke);
  text-align: left;
  min-width: 7.375rem;
`;
const GetStartedWrapper = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-base) 2.875rem;
  background-color: var(--color-dodgerblue-100);
  position: absolute;
  top: 22rem;
  left: 0rem;
  border-radius: var(--br-5xs);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  white-space: nowrap;
  &:hover {
    background-color: var(--color-cornflowerblue);
  }
`;
const FrameChild = styled.div`
  position: absolute;
  top: 4.375rem;
  left: 9.188rem;
  background-color: var(--color-dodgerblue-100);
  width: 23.063rem;
  height: 4rem;
`;
const Revolutionise = styled.p`
  margin: 0;
`;
const YourAttendance = styled.span``;
const Tracking = styled.span`
  color: var(--color-dodgerblue-100);
`;
const RevolutioniseYourAttendanceContainer = styled.h1`
  margin: 0;
  position: absolute;
  top: 0rem;
  left: 0rem;
  font-size: inherit;
  letter-spacing: -0.02em;
  line-height: 100%;
  font-weight: 800;
  font-family: inherit;
  display: inline-block;
  width: 100%;
  height: 100%;
  z-index: 3;
  @media screen and (max-width: 750px) {
    font-size: 3.188rem;
    line-height: 3.188rem;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-19xl);
    line-height: 2.375rem;
  }
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 2rem;
  left: 0rem;
  width: 38.625rem;
  height: 10.063rem;
`;
const EfficientAccurateAnd = styled.div`
  position: absolute;
  top: 17.019rem;
  left: 0.25rem;
  font-size: var(--font-size-xl);
  letter-spacing: -0.02em;
  line-height: 148%;
  display: inline-block;
  width: 27.75rem;
  height: 1.863rem;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
    line-height: 1.5rem;
  }
`;
const HeroImageParent = styled.div`
  align-self: stretch;
  height: 27.188rem;
  position: relative;
  max-width: 100%;
`;
const FrameParent = styled.section`
  width: 80.938rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5rem;
  max-width: 100%;
  text-align: left;
  font-size: 4rem;
  color: var(--color-white);
  font-family: var(--font-manrope);
  @media screen and (max-width: 675px) {
    gap: 2.5rem;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-xl);
  }
`;
const LandingPageRoot = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-31xl) 4.562rem 6.062rem var(--padding-30xl);
  box-sizing: border-box;
  gap: var(--gap-47xl);
  background-image: url("/landing-page@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  line-height: normal;
  letter-spacing: normal;
  @media screen and (max-width: 750px) {
    gap: var(--gap-14xl);
    padding-left: var(--padding-5xl);
    padding-right: 2.25rem;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-base);
  }
`;

const LandingPage: FunctionComponent = () => {
  return (
    <LandingPageRoot>
      <FrameComponent1 />
      <FrameParent>
        <HeroImageParent>
          <HeroImage>
            <HeroImageContainer>
              <HeroImageBackground />
              <HeroImageOverlay />
              <WhatsappImage
                loading="lazy"
                alt=""
                src="/whatsapp-image-20240802--135717-5dd8ef88-1@2x.png"
              />
            </HeroImageContainer>
          </HeroImage>
          <GetStartedWrapper>
            <GetStarted>Get started !</GetStarted>
          </GetStartedWrapper>
          <RectangleParent>
            <FrameChild />
            <RevolutioniseYourAttendanceContainer>
              <Revolutionise>{`Revolutionise `}</Revolutionise>
              <Revolutionise>
                <YourAttendance>{`your Attendance `}</YourAttendance>
                <Tracking>Tracking</Tracking>
              </Revolutionise>
            </RevolutioniseYourAttendanceContainer>
          </RectangleParent>
          <EfficientAccurateAnd>
            Efficient, accurate, and hassle-free attendance management using
            advanced computer vision.
          </EfficientAccurateAnd>
        </HeroImageParent>
        <FeatureResume />
      </FrameParent>
    </LandingPageRoot>
  );
};

export default LandingPage;
