import { FunctionComponent, type CSSProperties } from "react";
import styled from "styled-components";

export type CamerasHeaderType = {
  className?: string;
  camera1?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBorder?: CSSProperties["border"];
  propMinHeight?: CSSProperties["minHeight"];
  frameDivTop?: CSSProperties["top"];
  frameDivLeft?: CSSProperties["left"];
  frameDivWidth?: CSSProperties["width"];
  frameDivHeight?: CSSProperties["height"];
  ellipseDivTop?: CSSProperties["top"];
  ellipseDivLeft?: CSSProperties["left"];
  frameDivPadding?: CSSProperties["padding"];
  frameDivGap?: CSSProperties["gap"];
  frameDivHeight1?: CSSProperties["height"];
  frameDivWidth1?: CSSProperties["width"];
  frameDivHeight2?: CSSProperties["height"];
  vectorIconWidth?: CSSProperties["width"];
  vectorIconHeight?: CSSProperties["height"];
  camera1FontSize?: CSSProperties["fontSize"];
  groupDivWidth?: CSSProperties["width"];
  groupDivTop?: CSSProperties["top"];
  groupDivLeft?: CSSProperties["left"];
  groupDivHeight?: CSSProperties["height"];
  vectorIconTop?: CSSProperties["top"];
  vectorIconLeft?: CSSProperties["left"];
  vectorIconWidth1?: CSSProperties["width"];
  vectorIconHeight1?: CSSProperties["height"];
  vectorIconTop1?: CSSProperties["top"];
  vectorIconLeft1?: CSSProperties["left"];
  vectorIconWidth2?: CSSProperties["width"];
  vectorIconHeight2?: CSSProperties["height"];
  vectorIconTop2?: CSSProperties["top"];
  vectorIconLeft2?: CSSProperties["left"];
  vectorIconWidth3?: CSSProperties["width"];
  vectorIconHeight3?: CSSProperties["height"];
  divTop?: CSSProperties["top"];
  divLeft?: CSSProperties["left"];
  divFontSize?: CSSProperties["fontSize"];
  divTop1?: CSSProperties["top"];
  divLeft1?: CSSProperties["left"];
  divFontSize1?: CSSProperties["fontSize"];
  divTop2?: CSSProperties["top"];
  divLeft2?: CSSProperties["left"];
  divFontSize2?: CSSProperties["fontSize"];
  ellipseDivWidth?: CSSProperties["width"];
  ellipseDivHeight?: CSSProperties["height"];
};

const VectorIcon = styled.img<{
  vectorIconWidth?: CSSProperties["width"];
  vectorIconHeight?: CSSProperties["height"];
}>`width: 1.25rem;
  position: relative;
  height: 1.563rem;
  width: ${(p) => p.vectorIconWidth}
  height: ${(p) => p.vectorIconHeight}
`;
const VectorWrapper = styled.div<{
  frameDivWidth1?: CSSProperties["width"];
  frameDivHeight2?: CSSProperties["height"];
}>`width: 1.875rem;
  height: 1.875rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${(p) => p.frameDivWidth1}
  height: ${(p) => p.frameDivHeight2}
`;
const Camera = styled.div<{ camera1FontSize?: CSSProperties["fontSize"] }>`
  position: relative;
  line-height: 1.209rem;
  font-size: ${(p) => p.camera1FontSize};
`;
const FrameGroup = styled.div<{ frameDivHeight1?: CSSProperties["height"] }>`
  height: 3.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 0;
  height: ${(p) => p.frameDivHeight1};
`;
const VectorIcon1 = styled.img<{
  vectorIconTop?: CSSProperties["top"];
  vectorIconLeft?: CSSProperties["left"];
  vectorIconWidth1?: CSSProperties["width"];
  vectorIconHeight1?: CSSProperties["height"];
}>`position: absolute;
  top: 0.125rem;
  left: 4.125rem;
  width: 1.438rem;
  height: 1.438rem;
  top: ${(p) => p.vectorIconTop}
  left: ${(p) => p.vectorIconLeft}
  width: ${(p) => p.vectorIconWidth1}
  height: ${(p) => p.vectorIconHeight1}
`;
const VectorIcon2 = styled.img<{
  vectorIconTop1?: CSSProperties["top"];
  vectorIconLeft1?: CSSProperties["left"];
  vectorIconWidth2?: CSSProperties["width"];
  vectorIconHeight2?: CSSProperties["height"];
}>`position: absolute;
  top: 0.125rem;
  left: 0rem;
  width: 2.375rem;
  height: 1.438rem;
  top: ${(p) => p.vectorIconTop1}
  left: ${(p) => p.vectorIconLeft1}
  width: ${(p) => p.vectorIconWidth2}
  height: ${(p) => p.vectorIconHeight2}
`;
const VectorIcon3 = styled.img<{
  vectorIconTop2?: CSSProperties["top"];
  vectorIconLeft2?: CSSProperties["left"];
  vectorIconWidth3?: CSSProperties["width"];
  vectorIconHeight3?: CSSProperties["height"];
}>`position: absolute;
  top: 0rem;
  left: 7.25rem;
  width: 1.813rem;
  height: 1.813rem;
  top: ${(p) => p.vectorIconTop2}
  left: ${(p) => p.vectorIconLeft2}
  width: ${(p) => p.vectorIconWidth3}
  height: ${(p) => p.vectorIconHeight3}
`;
const Div = styled.div<{
  divTop?: CSSProperties["top"];
  divLeft?: CSSProperties["left"];
  divFontSize?: CSSProperties["fontSize"];
}>`position: absolute;
  top: 2rem;
  left: 0.813rem;
  line-height: 1.209rem;
  top: ${(p) => p.divTop}
  left: ${(p) => p.divLeft}
  font-size: ${(p) => p.divFontSize}
`;
const Div1 = styled.div<{
  divTop1?: CSSProperties["top"];
  divLeft1?: CSSProperties["left"];
  divFontSize1?: CSSProperties["fontSize"];
}>`position: absolute;
  top: 2rem;
  left: 4.313rem;
  line-height: 1.209rem;
  top: ${(p) => p.divTop1}
  left: ${(p) => p.divLeft1}
  font-size: ${(p) => p.divFontSize1}
`;
const Div2 = styled.div<{
  divTop2?: CSSProperties["top"];
  divLeft2?: CSSProperties["left"];
  divFontSize2?: CSSProperties["fontSize"];
}>`position: absolute;
  top: 2rem;
  left: 7.688rem;
  line-height: 1.209rem;
  top: ${(p) => p.divTop2}
  left: ${(p) => p.divLeft2}
  font-size: ${(p) => p.divFontSize2}
`;
const VectorParent = styled.div<{
  groupDivWidth?: CSSProperties["width"];
  groupDivTop?: CSSProperties["top"];
  groupDivLeft?: CSSProperties["left"];
  groupDivHeight?: CSSProperties["height"];
}>`width: 9.063rem;
  position: absolute;
  margin: 0 !important;
  top: 1.75rem;
  left: 14.938rem;
  height: 3.25rem;
  z-index: 1;
  text-align: center;
  width: ${(p) => p.groupDivWidth}
  top: ${(p) => p.groupDivTop}
  left: ${(p) => p.groupDivLeft}
  height: ${(p) => p.groupDivHeight}
`;
const FrameChild = styled.div<{
  ellipseDivTop?: CSSProperties["top"];
  ellipseDivLeft?: CSSProperties["left"];
  ellipseDivWidth?: CSSProperties["width"];
  ellipseDivHeight?: CSSProperties["height"];
}>`width: 0.563rem;
  position: absolute;
  margin: 0 !important;
  top: 1.875rem;
  left: 20.25rem;
  border-radius: 50%;
  background-color: var(--color-tomato-100);
  border: 1px solid var(--color-white);
  box-sizing: border-box;
  height: 0.563rem;
  z-index: 2;
  top: ${(p) => p.ellipseDivTop}
  left: ${(p) => p.ellipseDivLeft}
  width: ${(p) => p.ellipseDivWidth}
  height: ${(p) => p.ellipseDivHeight}
`;
const FrameParentRoot = styled.div<{
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBorder?: CSSProperties["border"];
  propMinHeight?: CSSProperties["minHeight"];
  frameDivTop?: CSSProperties["top"];
  frameDivLeft?: CSSProperties["left"];
  frameDivWidth?: CSSProperties["width"];
  frameDivHeight?: CSSProperties["height"];
  frameDivPadding?: CSSProperties["padding"];
  frameDivGap?: CSSProperties["gap"];
}>`position: absolute;
  top: 11.188rem;
  left: calc(50% - 213.5px);
  background-color: var(--color-dodgerblue-100);
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
  background-color: ${(p) => p.propBackgroundColor}
  border: ${(p) => p.propBorder}
  min-height: ${(p) => p.propMinHeight}
  top: ${(p) => p.frameDivTop}
  left: ${(p) => p.frameDivLeft}
  width: ${(p) => p.frameDivWidth}
  height: ${(p) => p.frameDivHeight}
  padding: ${(p) => p.frameDivPadding}
  gap: ${(p) => p.frameDivGap}
`;

const CamerasHeader: FunctionComponent<CamerasHeaderType> = ({
  className = "",
  propBackgroundColor,
  propBorder,
  propMinHeight,
  frameDivTop,
  frameDivLeft,
  frameDivWidth,
  frameDivHeight,
  camera1,
  ellipseDivTop,
  ellipseDivLeft,
  frameDivPadding,
  frameDivGap,
  frameDivHeight1,
  frameDivWidth1,
  frameDivHeight2,
  vectorIconWidth,
  vectorIconHeight,
  camera1FontSize,
  groupDivWidth,
  groupDivTop,
  groupDivLeft,
  groupDivHeight,
  vectorIconTop,
  vectorIconLeft,
  vectorIconWidth1,
  vectorIconHeight1,
  vectorIconTop1,
  vectorIconLeft1,
  vectorIconWidth2,
  vectorIconHeight2,
  vectorIconTop2,
  vectorIconLeft2,
  vectorIconWidth3,
  vectorIconHeight3,
  divTop,
  divLeft,
  divFontSize,
  divTop1,
  divLeft1,
  divFontSize1,
  divTop2,
  divLeft2,
  divFontSize2,
  ellipseDivWidth,
  ellipseDivHeight,
}) => {
  return (
    <FrameParentRoot
      propBackgroundColor={propBackgroundColor}
      propBorder={propBorder}
      propMinHeight={propMinHeight}
      frameDivTop={frameDivTop}
      frameDivLeft={frameDivLeft}
      frameDivWidth={frameDivWidth}
      frameDivHeight={frameDivHeight}
      frameDivPadding={frameDivPadding}
      frameDivGap={frameDivGap}
      className={className}
    >
      <FrameGroup frameDivHeight1={frameDivHeight1}>
        <VectorWrapper
          frameDivWidth1={frameDivWidth1}
          frameDivHeight2={frameDivHeight2}
        >
          <VectorIcon
            alt=""
            src="/vector-21.svg"
            vectorIconWidth={vectorIconWidth}
            vectorIconHeight={vectorIconHeight}
          />
        </VectorWrapper>
        <Camera camera1FontSize={camera1FontSize}>{camera1}</Camera>
      </FrameGroup>
      <VectorParent
        groupDivWidth={groupDivWidth}
        groupDivTop={groupDivTop}
        groupDivLeft={groupDivLeft}
        groupDivHeight={groupDivHeight}
      >
        <VectorIcon1
          alt=""
          src="/vector-4.svg"
          vectorIconTop={vectorIconTop}
          vectorIconLeft={vectorIconLeft}
          vectorIconWidth1={vectorIconWidth1}
          vectorIconHeight1={vectorIconHeight1}
        />
        <VectorIcon2
          alt=""
          src="/vector-3.svg"
          vectorIconTop1={vectorIconTop1}
          vectorIconLeft1={vectorIconLeft1}
          vectorIconWidth2={vectorIconWidth2}
          vectorIconHeight2={vectorIconHeight2}
        />
        <VectorIcon3
          alt=""
          src="/vector-5.svg"
          vectorIconTop2={vectorIconTop2}
          vectorIconLeft2={vectorIconLeft2}
          vectorIconWidth3={vectorIconWidth3}
          vectorIconHeight3={vectorIconHeight3}
        />
        <Div divTop={divTop} divLeft={divLeft} divFontSize={divFontSize}>
          10
        </Div>
        <Div1 divTop1={divTop1} divLeft1={divLeft1} divFontSize1={divFontSize1}>
          02
        </Div1>
        <Div2 divTop2={divTop2} divLeft2={divLeft2} divFontSize2={divFontSize2}>
          05
        </Div2>
      </VectorParent>
      <FrameChild
        ellipseDivTop={ellipseDivTop}
        ellipseDivLeft={ellipseDivLeft}
        ellipseDivWidth={ellipseDivWidth}
        ellipseDivHeight={ellipseDivHeight}
      />
    </FrameParentRoot>
  );
};

export default CamerasHeader;
