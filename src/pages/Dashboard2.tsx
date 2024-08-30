import { FunctionComponent } from "react";
import styled from "styled-components";
import FrameComponent3 from "../components/FrameComponent3";
import PersonnelCardList from "../components/PersonnelCardList";
import FionaContent from "../components/FionaContent";

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
const SideBarBackgroundChild = styled.div`
  width: 0.188rem;
  height: 7.063rem;
  position: relative;
  background-color: var(--color-dodgerblue-100);
`;
const SideBarBackground = styled.div`
  height: 15.088rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Sidebar2 = styled.div`
  width: 16.769rem;
  background-color: var(--color-black);
  border: 1px solid var(--color-gray-200);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: var(--padding-45xl) 0rem var(--padding-127xl) 6.125rem;
  gap: var(--gap-xl);
  z-index: 1;
  @media screen and (max-width: 1125px) {
    padding-top: var(--padding-23xl);
    padding-bottom: var(--padding-76xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-top: var(--padding-8xl);
    padding-bottom: var(--padding-43xl);
    box-sizing: border-box;
  }
`;
const MainContent = styled.div`
  width: 19.325rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Personnel = styled.a`
  text-decoration: none;
  position: relative;
  line-height: 1.5rem;
  font-weight: 800;
  color: inherit;
  z-index: 1;
  @media screen and (max-width: 800px) {
    font-size: var(--font-size-10xl);
    line-height: 1.188rem;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-3xl);
    line-height: 0.875rem;
  }
`;
const PersonnelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-5xl);
`;
const SearchBackgroundChild = styled.div`
  height: 0.375rem;
  flex: 1;
  position: relative;
  background-color: var(--color-dodgerblue-100);
  z-index: 1;
`;
const SearchBackground = styled.div`
  width: 7.813rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-6xl);
  box-sizing: border-box;
`;
const FrameChild = styled.div`
  height: 40.044rem;
  width: 35.45rem;
  position: relative;
  border-radius: 7.45px;
  background-color: var(--color-gray-400);
  border: 0.7px solid var(--color-gray-600);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
`;
const FrameItem = styled.div`
  height: 2.088rem;
  width: 15.319rem;
  position: relative;
  border-radius: 5.21px;
  border: 0.7px solid var(--color-gray-100);
  box-sizing: border-box;
  display: none;
`;
const FindAPersonnel = styled.input`
  width: calc(100% - 47.1px);
  border: none;
  outline: none;
  font-family: var(--font-poppins);
  font-size: var(--font-size-xs-9);
  background-color: transparent;
  height: 1.2rem;
  flex: 1;
  position: relative;
  letter-spacing: -0.04em;
  line-height: 1.118rem;
  color: var(--color-darkgray-100);
  text-align: left;
  display: flex;
  align-items: center;
  min-width: 6.125rem;
  padding: 0;
  z-index: 1;
`;
const FrameInner = styled.img`
  height: 1.119rem;
  width: 1.319rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  z-index: 1;
`;
const RectangleGroup = styled.div`
  align-self: stretch;
  border-radius: 5.21px;
  border: 0.7px solid var(--color-gray-100);
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-7xs) var(--padding-xs) var(--padding-7xs)
    var(--padding-sm);
  gap: 2.068rem;
  z-index: 2;
`;
const SearchInputField = styled.div`
  width: 15.319rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2.675rem;
  min-width: 15.319rem;
  @media screen and (max-width: 800px) {
    flex: 1;
  }
`;
const RectangleDiv = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: 3.72px;
  background-color: var(--color-gold-300);
  display: none;
`;
const PencilIcon = styled.img`
  position: absolute;
  top: 0.188rem;
  left: 0.513rem;
  width: 1.119rem;
  height: 1.119rem;
  overflow: hidden;
  z-index: 1;
`;
const RectangleContainer = styled.div`
  height: 2.088rem;
  width: 2.144rem;
  position: relative;
  border-radius: 3.72px;
  background-color: var(--color-gold-300);
  z-index: 2;
`;
const FrameChild1 = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: 3.72px;
  background-color: var(--color-tomato-200);
  display: none;
`;
const VectorIcon = styled.img`
  position: absolute;
  height: 45.51%;
  width: 31.2%;
  top: 28.74%;
  right: 34.11%;
  bottom: 25.75%;
  left: 34.69%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  z-index: 1;
`;
const GroupDiv = styled.div`
  height: 2.088rem;
  width: 2.144rem;
  position: relative;
  border-radius: 3.72px;
  background-color: var(--color-tomato-200);
  z-index: 2;
`;
const AdministratorHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mini-9);
`;
const FrameChild2 = styled.div`
  height: 2.063rem;
  width: 14.438rem;
  position: relative;
  border-radius: 5.21px;
  border: 0.7px solid var(--color-gray-100);
  box-sizing: border-box;
  display: none;
`;
const Administrators = styled.div`
  position: relative;
  letter-spacing: -0.04em;
  line-height: 1.2rem;
  display: inline-block;
  min-width: 5.563rem;
  z-index: 1;
`;
const AdministratorDropdownIcon = styled.img`
  width: 0.556rem;
  height: 0.231rem;
  position: relative;
  z-index: 1;
`;
const AdministratorDropdownIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0rem 0rem var(--padding-6xs-6);
`;
const RectangleParent = styled.div`
  align-self: stretch;
  border-radius: 5.21px;
  border: 0.7px solid var(--color-gray-100);
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: var(--padding-7xs) var(--padding-sm) var(--padding-8xs)
    var(--padding-smi);
  gap: var(--gap-xl);
  z-index: 2;
`;
const Layout = styled.div`
  width: 14.45rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 1.487rem;
`;
const FionaListWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0rem var(--padding-3xs) 0rem 0rem;
`;
const LayoutParent = styled.div`
  width: 15.944rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 2.7rem;
  min-width: 15.944rem;
  @media screen and (max-width: 800px) {
    flex: 1;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-3xl);
  }
`;
const RectangleParent1 = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  border-radius: 7.45px;
  background-color: var(--color-gray-400);
  border: 0.7px solid var(--color-gray-600);
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 1.437rem var(--padding-xl) var(--padding-26xl);
  gap: 0.443rem;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;
const VerticalSpacerChild = styled.div`
  position: absolute;
  top: 33.875rem;
  left: 0rem;
  border-radius: 7.45px;
  background-color: rgba(31, 134, 255, 0.5);
  width: 33.875rem;
  height: 0.375rem;
  transform: rotate(-90deg);
  transform-origin: 0 0;
  z-index: 2;
`;
const VerticalSpacerItem = styled.div`
  position: absolute;
  top: 13.075rem;
  left: 0.05rem;
  border-radius: 7.45px;
  background-color: var(--color-dodgerblue-100);
  width: 5.356rem;
  height: 0.281rem;
  transform: rotate(-90deg);
  transform-origin: 0 0;
  z-index: 3;
`;
const VerticalSpacer = styled.div`
  position: absolute;
  top: 9.813rem;
  left: 33rem;
  width: 0.375rem;
  height: 33.875rem;
`;
const MaskGroupIcon = styled.img`
  height: 1.956rem;
  width: 1.956rem;
  position: relative;
  object-fit: contain;
`;
const FabriceMoukete = styled.div`
  position: relative;
  line-height: 1.125rem;
  font-weight: 500;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #fff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  min-width: 6.25rem;
`;
const PersonnelListHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-6xs-7) 0rem 0rem;
`;
const PersonnelListHeader = styled.div`
  position: absolute;
  top: 37.75rem;
  left: 1.313rem;
  background-color: var(--color-gray-500);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs-4) var(--padding-30xl) var(--padding-5xs-5);
  gap: var(--gap-mini-8);
  z-index: 2;
`;
const PersonnelListHeader1 = styled.div`
  position: absolute;
  top: 41.25rem;
  left: 1.313rem;
  background-color: var(--color-gray-500);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs-4) var(--padding-30xl) var(--padding-5xs-5);
  gap: var(--gap-mini-8);
  z-index: 1;
`;
const PersonnelListHeader2 = styled.div`
  position: absolute;
  top: 37.75rem;
  left: 17.075rem;
  background-color: var(--color-gray-500);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs-4) var(--padding-30xl) var(--padding-5xs-5);
  gap: var(--gap-mini-9);
  z-index: 2;
`;
const PersonnelListHeader3 = styled.div`
  position: absolute;
  top: 41.25rem;
  left: 17.075rem;
  background-color: var(--color-gray-500);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs-4) var(--padding-30xl) var(--padding-5xs-5);
  gap: var(--gap-mini-9);
  z-index: 1;
`;
const Layout1 = styled.div`
  align-self: stretch;
  height: 44.138rem;
  position: relative;
  max-width: 100%;
  @media screen and (max-width: 800px) {
    height: auto;
    min-height: 706.2;
  }
`;
const SearchBackgroundParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-xs-9);
  font-family: var(--font-poppins);
`;
const FrameParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75rem;
  max-width: 100%;
`;
const Layout2 = styled.div`
  width: 35.45rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 3.312rem 0rem 0rem;
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 1125px) {
    padding-top: 2.125rem;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-top: var(--padding-3xl);
    box-sizing: border-box;
  }
`;
const Layout3 = styled.div`
  width: 22.188rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-73xl) 0rem 0rem;
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 1125px) {
    padding-top: var(--padding-41xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-top: 2.438rem;
    box-sizing: border-box;
  }
`;
const DashboardRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color-gray-300);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4.175rem;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  font-size: var(--font-size-17xl);
  color: var(--color-white);
  font-family: var(--font-manrope);
  @media screen and (max-width: 1300px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 800px) {
    gap: var(--gap-14xl);
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-mid);
  }
`;

const Dashboard2: FunctionComponent = () => {
  return (
    <DashboardRoot>
      <BackgroundImage data-scroll-to="backgroundImage" />
      <MainContent>
        <Sidebar2>
          <FrameComponent3 />
          <SideBarBackground>
            <SideBarBackgroundChild />
          </SideBarBackground>
        </Sidebar2>
      </MainContent>
      <Layout2>
        <FrameParent>
          <PersonnelWrapper>
            <Personnel>Personnel</Personnel>
          </PersonnelWrapper>
          <SearchBackgroundParent>
            <SearchBackground>
              <SearchBackgroundChild />
            </SearchBackground>
            <Layout1>
              <RectangleParent1>
                <FrameChild />
                <SearchInputField>
                  <RectangleGroup>
                    <FrameItem />
                    <FindAPersonnel
                      placeholder="Find a personnel"
                      type="text"
                    />
                    <FrameInner alt="" src="/frame-9@2x.png" />
                  </RectangleGroup>
                  <PersonnelCardList
                    maskGroup="/mask-group@2x.png"
                    fabriceMoukete="Fabrice Moukete"
                    maskGroup1="/mask-group-1@2x.png"
                    maskGroup2="/mask-group-2@2x.png"
                    maskGroup3="/mask-group-3@2x.png"
                    maskGroup4="/mask-group-4@2x.png"
                    maskGroup5="/mask-group-5@2x.png"
                    maskGroup6="/mask-group-6@2x.png"
                    maskGroup7="/mask-group-7@2x.png"
                  />
                </SearchInputField>
                <LayoutParent>
                  <Layout>
                    <AdministratorHeader>
                      <RectangleContainer>
                        <RectangleDiv />
                        <PencilIcon loading="lazy" alt="" src="/pencil.svg" />
                      </RectangleContainer>
                      <GroupDiv>
                        <FrameChild1 />
                        <VectorIcon loading="lazy" alt="" src="/vector-1.svg" />
                      </GroupDiv>
                    </AdministratorHeader>
                    <RectangleParent>
                      <FrameChild2 />
                      <Administrators>Administrators</Administrators>
                      <AdministratorDropdownIconWrapper>
                        <AdministratorDropdownIcon
                          alt=""
                          src="/administrator-dropdown-icon.svg"
                        />
                      </AdministratorDropdownIconWrapper>
                    </RectangleParent>
                  </Layout>
                  <FionaListWrapper>
                    <PersonnelCardList
                      propFlex="1"
                      propAlignSelf="stretch"
                      maskGroup="/mask-group-8@2x.png"
                      fabriceMoukete="Fiona Greavesm"
                      propAlignSelf1="stretch"
                      maskGroup1="/mask-group-9@2x.png"
                      propAlignSelf2="stretch"
                      maskGroup2="/mask-group-10@2x.png"
                      propAlignSelf3="stretch"
                      maskGroup3="/mask-group-11@2x.png"
                      propAlignSelf4="stretch"
                      maskGroup4="/mask-group-12@2x.png"
                      propAlignSelf5="stretch"
                      maskGroup5="/mask-group-13@2x.png"
                      propAlignSelf6="stretch"
                      maskGroup6="/mask-group-14@2x.png"
                      propAlignSelf7="stretch"
                      maskGroup7="/mask-group-15@2x.png"
                      personnelCardListContentPadding="7.4px 50px 7.5px"
                      fabriceMouketeMinWidth="6.125rem"
                    />
                  </FionaListWrapper>
                </LayoutParent>
              </RectangleParent1>
              <VerticalSpacer>
                <VerticalSpacerChild />
                <VerticalSpacerItem />
              </VerticalSpacer>
              <PersonnelListHeader>
                <MaskGroupIcon
                  loading="lazy"
                  alt=""
                  src="/mask-group-16@2x.png"
                />
                <PersonnelListHeaderContent>
                  <FabriceMoukete>Fabrice Moukete</FabriceMoukete>
                </PersonnelListHeaderContent>
              </PersonnelListHeader>
              <PersonnelListHeader1>
                <MaskGroupIcon
                  loading="lazy"
                  alt=""
                  src="/mask-group-16@2x.png"
                />
                <PersonnelListHeaderContent>
                  <FabriceMoukete>Fabrice Moukete</FabriceMoukete>
                </PersonnelListHeaderContent>
              </PersonnelListHeader1>
              <PersonnelListHeader2>
                <MaskGroupIcon
                  loading="lazy"
                  alt=""
                  src="/mask-group-18@2x.png"
                />
                <PersonnelListHeaderContent>
                  <FabriceMoukete>Fabrice Moukete</FabriceMoukete>
                </PersonnelListHeaderContent>
              </PersonnelListHeader2>
              <PersonnelListHeader3>
                <MaskGroupIcon
                  loading="lazy"
                  alt=""
                  src="/mask-group-18@2x.png"
                />
                <PersonnelListHeaderContent>
                  <FabriceMoukete>Fabrice Moukete</FabriceMoukete>
                </PersonnelListHeaderContent>
              </PersonnelListHeader3>
            </Layout1>
          </SearchBackgroundParent>
        </FrameParent>
      </Layout2>
      <Layout3>
        <FionaContent />
      </Layout3>
    </DashboardRoot>
  );
};

export default Dashboard2;
