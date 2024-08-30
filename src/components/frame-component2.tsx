import { FunctionComponent, type CSSProperties } from "react";
import styled from "styled-components";

export type FrameComponent2Type = {
  className?: string;
  camera3?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propFilter?: CSSProperties["filter"];
  propBackground?: CSSProperties["background"];
};

const VectorIcon = styled.img`
  width: 1.25rem;
  position: relative;
  height: 1.563rem;
`;
const VectorWrapper = styled.div`
  width: 1.875rem;
  height: 1.875rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Camera = styled.div`
  position: relative;
  line-height: 1.209rem;
`;
const FrameGroup = styled.div`
  height: 3.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 0;
`;
const VectorIcon1 = styled.img`
  position: absolute;
  top: 0.125rem;
  left: 4.125rem;
  width: 1.438rem;
  height: 1.438rem;
`;
const VectorIcon2 = styled.img`
  position: absolute;
  top: 0.125rem;
  left: 0rem;
  width: 2.375rem;
  height: 1.438rem;
`;
const VectorIcon3 = styled.img`
  position: absolute;
  top: 0rem;
  left: 7.25rem;
  width: 1.813rem;
  height: 1.813rem;
`;
const Div = styled.div`
  position: absolute;
  top: 2rem;
  left: 0.813rem;
  line-height: 1.209rem;
`;
const Div1 = styled.div`
  position: absolute;
  top: 2rem;
  left: 4.313rem;
  line-height: 1.209rem;
`;
const Div2 = styled.div`
  position: absolute;
  top: 2rem;
  left: 7.688rem;
  line-height: 1.209rem;
`;
const VectorParent = styled.div`
  width: 9.063rem;
  position: absolute;
  margin: 0 !important;
  top: 1.75rem;
  left: 14.938rem;
  height: 3.25rem;
  z-index: 1;
  text-align: center;
`;
const FrameParentRoot = styled.div<{
  propTop?: CSSProperties["top"];
  propFilter?: CSSProperties["filter"];
  propBackground?: CSSProperties["background"];
}>`position: absolute;
  top: 24.688rem;
  left: calc(50% - 213.5px);
  width: 26.688rem;
  height: 6.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-9xl) var(--padding-26xl);
  box-sizing: border-box;
  gap: var(--gap-11xs);
  text-align: left;
  font-size: var(--font-size-smi-9);
  color: var(--color-white);
  font-family: var(--font-poppins);
  top: ${(p) => p.propTop}
  filter: ${(p) => p.propFilter}
  background: ${(p) => p.propBackground}
`;

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
  propTop,
  propFilter,
  propBackground,
  camera3,
}) => {
  return (
    <FrameParentRoot
      propTop={propTop}
      propFilter={propFilter}
      propBackground={propBackground}
      className={className}
    >
      <FrameGroup>
        <VectorWrapper>
          <VectorIcon alt="" src="/vector-21.svg" />
        </VectorWrapper>
        <Camera>{camera3}</Camera>
      </FrameGroup>
      <VectorParent>
        <VectorIcon1 alt="" src="/vector-4.svg" />
        <VectorIcon2 alt="" src="/vector-3.svg" />
        <VectorIcon3 alt="" src="/vector-5.svg" />
        <Div>10</Div>
        <Div1>02</Div1>
        <Div2>05</Div2>
      </VectorParent>
    </FrameParentRoot>
  );
};

export default FrameComponent2;
