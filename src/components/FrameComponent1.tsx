import { FunctionComponent, useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export type FrameComponent1Type = {
  className?: string;
};

const Logo = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  width: 100%;
  height: 100%;
  display: none;
`;
const TopBarElement = styled.img`
  position: absolute;
  top: 1.825rem;
  left: 1.625rem;
  width: 3rem;
  height: 2.625rem;
  overflow: hidden;
  object-fit: cover;
  z-index: 1;
`;
const LogoParent = styled.div`
  height: 6.275rem;
  width: 6.275rem;
  position: relative;
`;
const Smartdsvision = styled.div`
  position: relative;
  letter-spacing: -0.02em;
  line-height: 100%;
  font-weight: 800;
`;
const SmartdsvisionWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-21xl-2) 0rem 0rem;
`;
const FrameParent = styled.div`
  margin-top: -1.513rem;
  width: 16.813rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8xl-6);
`;
const TopBarDivider = styled.div`
  height: 3rem;
  width: 0.125rem;
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 24px);
  left: 6.25rem;
  background-color: var(--color-white);
  z-index: 1;
`;
const SignUp = styled.b`
  position: relative;
  font-size: var(--font-size-xl);
  letter-spacing: -0.02em;
  line-height: 100%;
  display: inline-block;
  font-family: var(--font-manrope);
  color: var(--color-whitesmoke);
  text-align: left;
  min-width: 4.5rem;
  cursor: pointer;
`;
const SignUpWrapper = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-base) var(--padding-14xl);
  background-color: var(--color-dodgerblue-100);
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
const SignIn = styled.div`
  position: relative;
  letter-spacing: -0.02em;
  line-height: 100%;
  font-weight: 600;
  display: inline-block;
  min-width: 3.875rem;
  white-space: nowrap;
  cursor: pointer;
`;
const SignInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-smi) 0rem 0rem;
`;
const FrameGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  @media screen and (max-width: 675px) {
    display: none;
  }
`;
const TopBar = styled.div`
  height: 5.375rem;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--padding-mid) 0rem;
  box-sizing: border-box;
  position: relative;
  max-width: 100%;
  gap: var(--gap-xl);
`;
const TopBarWrapperRoot = styled.header`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0rem var(--padding-4xs) 0rem 0rem;
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-white);
  font-family: var(--font-manrope);
`;

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onSignUpTextClick = useCallback(() => {
    navigate("/dashboard2");
  }, [navigate]);

  const onSignInTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <TopBarWrapperRoot className={className}>
      <TopBar>
        <FrameParent>
          <LogoParent>
            <Logo />
            <TopBarElement loading="lazy" alt="" src="/frame1@2x.png" />
          </LogoParent>
          <SmartdsvisionWrapper>
            <Smartdsvision>SmartDsVision</Smartdsvision>
          </SmartdsvisionWrapper>
        </FrameParent>
        <TopBarDivider />
        <FrameGroup>
          <SignUpWrapper>
            <SignUp onClick={onSignUpTextClick}>Sign Up</SignUp>
          </SignUpWrapper>
          <SignInWrapper>
            <SignIn onClick={onSignInTextClick}>Sign In</SignIn>
          </SignInWrapper>
        </FrameGroup>
      </TopBar>
    </TopBarWrapperRoot>
  );
};

export default FrameComponent1;
