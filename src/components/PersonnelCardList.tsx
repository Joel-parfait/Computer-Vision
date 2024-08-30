import { FunctionComponent, type CSSProperties } from "react";
import styled from "styled-components";

export type PersonnelCardListType = {
  className?: string;
  maskGroup?: string;
  fabriceMoukete?: string;
  maskGroup1?: string;
  maskGroup2?: string;
  maskGroup3?: string;
  maskGroup4?: string;
  maskGroup5?: string;
  maskGroup6?: string;
  maskGroup7?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propAlignSelf2?: CSSProperties["alignSelf"];
  propAlignSelf3?: CSSProperties["alignSelf"];
  propAlignSelf4?: CSSProperties["alignSelf"];
  propAlignSelf5?: CSSProperties["alignSelf"];
  propAlignSelf6?: CSSProperties["alignSelf"];
  propAlignSelf7?: CSSProperties["alignSelf"];
  personnelCardListContentPadding?: CSSProperties["padding"];
  fabriceMouketeMinWidth?: CSSProperties["minWidth"];
};

const MaskGroupIcon = styled.img`
  height: 1.956rem;
  width: 1.956rem;
  position: relative;
  object-fit: contain;
`;
const FabriceMoukete = styled.div<{
  fabriceMouketeMinWidth?: CSSProperties["minWidth"];
}>`
  position: relative;
  line-height: 1.125rem;
  font-weight: 500;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #fff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  min-width: 6.25rem;
  min-width: ${(p) => p.fabriceMouketeMinWidth};
`;
const PersonnelCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-6xs-7) 0rem 0rem;
`;
const PersonnelCardListContent = styled.div<{
  propAlignSelf?: CSSProperties["alignSelf"];
  personnelCardListContentPadding?: CSSProperties["padding"];
}>`background-color: var(--color-gray-500);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs-4) var(--padding-30xl) var(--padding-5xs-5);
  gap: var(--gap-mini-9);
  z-index: 2;
  align-self: ${(p) => p.propAlignSelf}
  padding: ${(p) => p.personnelCardListContentPadding}
`;
const FabriceMoukete1 = styled.div`
  position: relative;
  line-height: 1.125rem;
  font-weight: 500;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #fff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  min-width: 6.25rem;
`;
const PersonnelCardListContent1 = styled.div<{
  propAlignSelf1?: CSSProperties["alignSelf"];
}>`
  background-color: var(--color-gray-500);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs-4) var(--padding-30xl) var(--padding-5xs-5);
  gap: var(--gap-mini-9);
  z-index: 2;
  align-self: ${(p) => p.propAlignSelf1};
`;
const FabriceMouketeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-6xs-6) 0rem 0rem;
`;
const PersonnelCardListContent2 = styled.div<{
  propAlignSelf2?: CSSProperties["alignSelf"];
}>`
  background-color: var(--color-gray-500);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs-5) var(--padding-30xl) var(--padding-5xs-4);
  gap: var(--gap-mini-9);
  z-index: 2;
  align-self: ${(p) => p.propAlignSelf2};
`;
const PersonnelCardListContent3 = styled.div<{
  propAlignSelf3?: CSSProperties["alignSelf"];
}>`
  background-color: var(--color-gray-500);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs-5) var(--padding-30xl) var(--padding-5xs-4);
  gap: var(--gap-mini-9);
  z-index: 2;
  align-self: ${(p) => p.propAlignSelf3};
`;
const PersonnelCardListContent4 = styled.div<{
  propAlignSelf4?: CSSProperties["alignSelf"];
}>`
  background-color: var(--color-gray-500);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs-4) var(--padding-30xl) var(--padding-5xs-5);
  gap: var(--gap-mini-9);
  z-index: 2;
  align-self: ${(p) => p.propAlignSelf4};
`;
const PersonnelCardListContent5 = styled.div<{
  propAlignSelf5?: CSSProperties["alignSelf"];
}>`
  background-color: var(--color-gray-500);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs-4) var(--padding-30xl) var(--padding-5xs-5);
  gap: var(--gap-mini-9);
  z-index: 2;
  align-self: ${(p) => p.propAlignSelf5};
`;
const PersonnelCardListContent6 = styled.div<{
  propAlignSelf6?: CSSProperties["alignSelf"];
}>`
  background-color: var(--color-gray-500);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs-5) var(--padding-30xl) var(--padding-5xs-4);
  gap: var(--gap-mini-9);
  z-index: 2;
  align-self: ${(p) => p.propAlignSelf6};
`;
const PersonnelCardListContent7 = styled.div<{
  propAlignSelf7?: CSSProperties["alignSelf"];
}>`
  background-color: var(--color-gray-500);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs-4) var(--padding-30xl) var(--padding-5xs-5);
  gap: var(--gap-mini-9);
  z-index: 2;
  align-self: ${(p) => p.propAlignSelf7};
`;
const PersonnelCardListRoot = styled.div<{ propFlex?: CSSProperties["flex"] }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs-7);
  text-align: left;
  font-size: var(--font-size-xs-9);
  font-family: var(--font-poppins);
  flex: ${(p) => p.propFlex};
`;

const PersonnelCardList: FunctionComponent<PersonnelCardListType> = ({
  className = "",
  propFlex,
  propAlignSelf,
  maskGroup,
  fabriceMoukete,
  propAlignSelf1,
  maskGroup1,
  propAlignSelf2,
  maskGroup2,
  propAlignSelf3,
  maskGroup3,
  propAlignSelf4,
  maskGroup4,
  propAlignSelf5,
  maskGroup5,
  propAlignSelf6,
  maskGroup6,
  propAlignSelf7,
  maskGroup7,
  personnelCardListContentPadding,
  fabriceMouketeMinWidth,
}) => {
  return (
    <PersonnelCardListRoot propFlex={propFlex} className={className}>
      <PersonnelCardListContent
        propAlignSelf={propAlignSelf}
        personnelCardListContentPadding={personnelCardListContentPadding}
      >
        <MaskGroupIcon loading="lazy" alt="" src={maskGroup} />
        <PersonnelCardDetails>
          <FabriceMoukete fabriceMouketeMinWidth={fabriceMouketeMinWidth}>
            {fabriceMoukete}
          </FabriceMoukete>
        </PersonnelCardDetails>
      </PersonnelCardListContent>
      <PersonnelCardListContent1 propAlignSelf1={propAlignSelf1}>
        <MaskGroupIcon loading="lazy" alt="" src={maskGroup1} />
        <PersonnelCardDetails>
          <FabriceMoukete1>Fabrice Moukete</FabriceMoukete1>
        </PersonnelCardDetails>
      </PersonnelCardListContent1>
      <PersonnelCardListContent2 propAlignSelf2={propAlignSelf2}>
        <MaskGroupIcon loading="lazy" alt="" src={maskGroup2} />
        <FabriceMouketeContainer>
          <FabriceMoukete1>Fabrice Moukete</FabriceMoukete1>
        </FabriceMouketeContainer>
      </PersonnelCardListContent2>
      <PersonnelCardListContent3 propAlignSelf3={propAlignSelf3}>
        <MaskGroupIcon loading="lazy" alt="" src={maskGroup3} />
        <FabriceMouketeContainer>
          <FabriceMoukete1>Fabrice Moukete</FabriceMoukete1>
        </FabriceMouketeContainer>
      </PersonnelCardListContent3>
      <PersonnelCardListContent4 propAlignSelf4={propAlignSelf4}>
        <MaskGroupIcon loading="lazy" alt="" src={maskGroup4} />
        <PersonnelCardDetails>
          <FabriceMoukete1>Fabrice Moukete</FabriceMoukete1>
        </PersonnelCardDetails>
      </PersonnelCardListContent4>
      <PersonnelCardListContent5 propAlignSelf5={propAlignSelf5}>
        <MaskGroupIcon loading="lazy" alt="" src={maskGroup5} />
        <FabriceMouketeContainer>
          <FabriceMoukete1>Fabrice Moukete</FabriceMoukete1>
        </FabriceMouketeContainer>
      </PersonnelCardListContent5>
      <PersonnelCardListContent6 propAlignSelf6={propAlignSelf6}>
        <MaskGroupIcon loading="lazy" alt="" src={maskGroup6} />
        <FabriceMouketeContainer>
          <FabriceMoukete1>Fabrice Moukete</FabriceMoukete1>
        </FabriceMouketeContainer>
      </PersonnelCardListContent6>
      <PersonnelCardListContent7 propAlignSelf7={propAlignSelf7}>
        <MaskGroupIcon loading="lazy" alt="" src={maskGroup7} />
        <PersonnelCardDetails>
          <FabriceMoukete1>Fabrice Moukete</FabriceMoukete1>
        </PersonnelCardDetails>
      </PersonnelCardListContent7>
    </PersonnelCardListRoot>
  );
};

export default PersonnelCardList;
