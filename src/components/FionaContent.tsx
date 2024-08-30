import { FunctionComponent } from "react";
import styled from "styled-components";
import Background from "./background";
import ActionButtons from "./ActionButtons";

export type FionaContentType = {
  className?: string;
};

const MaskGroupIcon = styled.img`
  height: 7.313rem;
  width: 7.313rem;
  position: relative;
  object-fit: cover;
  z-index: 1;
`;
const MaskGroupWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0rem var(--padding-24xl);
`;
const FionaGreavesm = styled.h3`
  margin: 0;
  position: relative;
  font-size: var(--font-size-9xl);
  line-height: 1.5rem;
  font-weight: 800;
  font-family: var(--font-manrope);
  color: var(--color-white);
  text-align: right;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-3xl);
    line-height: 1.188rem;
  }
`;
const FrameParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-8xl);
`;
const Layout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-40xl);
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const DateOfBirth = styled.span`
  color: var(--color-white);
`;
const Span = styled.span`
  color: var(--color-dodgerblue-100);
`;
const Name1 = styled.div`
  position: relative;
  font-size: var(--font-size-smi-7);
  letter-spacing: -0.02em;
  line-height: 0.813rem;
  font-family: var(--font-poppins);
  text-align: left;
  display: inline-block;
  min-width: 2.938rem;
`;
const BackgroundChild = styled.div`
  height: 2.594rem;
  width: 21.25rem;
  position: relative;
  border-radius: 13.27px;
  border: 0.8px solid var(--color-silver);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
`;
const FionaGreavesm1 = styled.input`
  width: 5.75rem;
  border: none;
  outline: none;
  font-family: var(--font-poppins);
  font-size: var(--font-size-xs-6);
  background-color: transparent;
  height: 0.75rem;
  position: relative;
  letter-spacing: -0.02em;
  line-height: 100%;
  color: var(--color-silver);
  text-align: left;
  display: inline-block;
  padding: 0;
  z-index: 1;
`;
const Background1 = styled.div`
  align-self: stretch;
  border-radius: 13.27px;
  border: 0.8px solid var(--color-silver);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-smi) var(--padding-lgi) var(--padding-sm);
  max-width: 100%;
`;
const InfoHeaders = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-12xs) 0rem 0rem;
  box-sizing: border-box;
  gap: var(--gap-3xs-4);
  max-width: 100%;
`;
const DateOfBirthContainer = styled.div`
  position: relative;
  font-size: var(--font-size-smi-7);
  letter-spacing: -0.02em;
  line-height: 0.813rem;
  font-family: var(--font-poppins);
  text-align: left;
  display: inline-block;
  min-width: 5.313rem;
  flex-shrink: 0;
`;
const Jan = styled.div`
  position: relative;
  font-size: var(--font-size-xs-6);
  letter-spacing: -0.02em;
  line-height: 0.75rem;
  font-family: var(--font-poppins);
  color: var(--color-silver);
  text-align: left;
  display: inline-block;
  min-width: 3.875rem;
  z-index: 1;
`;
const Jan1996Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs-4) 0rem 0rem;
`;
const CalendarIcon = styled.img`
  height: 1.125rem;
  width: 1rem;
  position: relative;
  min-height: 1.125rem;
  z-index: 1;
`;
const Background2 = styled.div`
  align-self: stretch;
  border-radius: 13.27px;
  border: 0.8px solid var(--color-silver);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--padding-4xs) var(--padding-lg) var(--padding-2xs)
    var(--padding-lgi);
  flex-shrink: 0;
  max-width: 100%;
  gap: var(--gap-xl);
`;
const DateOfBirthParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-12xs) 0rem 0rem;
  box-sizing: border-box;
  gap: var(--gap-3xs-3);
  max-width: 100%;
`;
const Post = styled.div`
  position: relative;
  font-size: var(--font-size-smi-7);
  letter-spacing: -0.02em;
  line-height: 0.813rem;
  font-family: var(--font-poppins);
  text-align: left;
  display: inline-block;
  min-width: 2.188rem;
`;
const SalesAndMarketist = styled.input`
  width: 6.938rem;
  border: none;
  outline: none;
  font-family: var(--font-poppins);
  font-size: var(--font-size-xs-6);
  background-color: transparent;
  height: 0.75rem;
  position: relative;
  letter-spacing: -0.02em;
  line-height: 100%;
  color: var(--color-silver);
  text-align: left;
  display: inline-block;
  padding: 0;
  z-index: 1;
`;
const Department = styled.div`
  position: relative;
  font-size: var(--font-size-smi-7);
  letter-spacing: -0.02em;
  line-height: 0.813rem;
  font-family: var(--font-poppins);
  text-align: left;
  display: inline-block;
  min-width: 5.25rem;
`;
const FionaInfo = styled.div`
  height: 19.9rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem var(--padding-65xl-8);
  box-sizing: border-box;
  gap: var(--gap-2xl);
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 450px) {
    padding-bottom: var(--padding-36xl);
    box-sizing: border-box;
  }
`;
const Layout1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-6xs) var(--padding-4xl-6);
  box-sizing: border-box;
  max-width: 100%;
`;
const FionaContentRoot = styled.form`
  margin: 0;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-33xl);
  max-width: 100%;
  @media screen and (max-width: 450px) {
    gap: var(--gap-7xl);
  }
`;

const FionaContent: FunctionComponent<FionaContentType> = ({
  className = "",
}) => {
  return (
    <FionaContentRoot className={className}>
      <Layout>
        <FrameParent>
          <MaskGroupWrapper>
            <MaskGroupIcon loading="lazy" alt="" src="/mask-group-20@2x.png" />
          </MaskGroupWrapper>
          <FionaGreavesm>Fiona Greavesm</FionaGreavesm>
        </FrameParent>
      </Layout>
      <Layout1>
        <FionaInfo>
          <InfoHeaders>
            <Name1>
              <DateOfBirth>Name</DateOfBirth>
              <Span>*</Span>
            </Name1>
            <Background1>
              <BackgroundChild />
              <FionaGreavesm1 placeholder="Fiona Greavesm" type="text" />
            </Background1>
          </InfoHeaders>
          <DateOfBirthParent>
            <DateOfBirthContainer>
              <DateOfBirth>Date of birth</DateOfBirth>
              <Span>*</Span>
            </DateOfBirthContainer>
            <Background2>
              <BackgroundChild />
              <Jan1996Wrapper>
                <Jan>12 Jan 1996</Jan>
              </Jan1996Wrapper>
              <CalendarIcon alt="" src="/vector-2.svg" />
            </Background2>
          </DateOfBirthParent>
          <InfoHeaders>
            <Post>
              <DateOfBirth>Post</DateOfBirth>
              <Span>*</Span>
            </Post>
            <Background1>
              <BackgroundChild />
              <SalesAndMarketist
                placeholder="Sales and marketist"
                type="text"
              />
            </Background1>
          </InfoHeaders>
          <InfoHeaders>
            <Department>
              <DateOfBirth>Department</DateOfBirth>
              <Span>*</Span>
            </Department>
            <Background />
          </InfoHeaders>
        </FionaInfo>
      </Layout1>
      <ActionButtons updatePersonnelInformatio="Update personnel informations" />
    </FionaContentRoot>
  );
};

export default FionaContent;
