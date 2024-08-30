import { FunctionComponent } from "react";
import styled from "styled-components";

export type ActionButtonsType = {
  className?: string;
  updatePersonnelInformatio?: string;
};

const FrameChild = styled.div`
  height: 2.088rem;
  width: 22.188rem;
  position: relative;
  border-radius: 3.72px;
  border: 1px solid var(--color-gold-100);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
`;
const UpdatePersonnelInformations = styled.div`
  flex: 1;
  position: relative;
  font-size: var(--font-size-xs-9);
  letter-spacing: -0.04em;
  line-height: 1.2rem;
  font-weight: 500;
  font-family: var(--font-poppins);
  color: var(--color-gold-100);
  text-align: center;
  z-index: 1;
`;
const RectangleParent = styled.button`
  cursor: pointer;
  border: 1px solid var(--color-gold-100);
  padding: var(--padding-7xs) var(--padding-26xl);
  background-color: transparent;
  align-self: stretch;
  border-radius: 3.72px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  white-space: nowrap;
  max-width: 100%;
  z-index: 1;
  &:hover {
    background-color: var(--color-gold-400);
    border: 1px solid var(--color-gold-200);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const FrameItem = styled.div`
  height: 2.088rem;
  width: 22.188rem;
  position: relative;
  border-radius: 3.72px;
  background-color: var(--color-dodgerblue-100);
  display: none;
  max-width: 100%;
`;
const CreateNewPersonnel = styled.div`
  flex: 1;
  position: relative;
  font-size: var(--font-size-xs-9);
  letter-spacing: -0.04em;
  line-height: 1.2rem;
  font-weight: 500;
  font-family: var(--font-poppins);
  color: var(--color-white);
  text-align: center;
  z-index: 1;
`;
const RectangleGroup = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-5xs-1) var(--padding-26xl);
  background-color: var(--color-dodgerblue-100);
  align-self: stretch;
  border-radius: 3.72px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  flex-shrink: 0;
  white-space: nowrap;
  max-width: 100%;
  z-index: 1;
  &:hover {
    background-color: var(--color-cornflowerblue);
  }
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const ActionButtonsRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-2xl-6);
  max-width: 100%;
`;

const ActionButtons: FunctionComponent<ActionButtonsType> = ({
  className = "",
  updatePersonnelInformatio,
}) => {
  return (
    <ActionButtonsRoot className={className}>
      <RectangleParent>
        <FrameChild />
        <UpdatePersonnelInformations>
          {updatePersonnelInformatio}
        </UpdatePersonnelInformations>
      </RectangleParent>
      <RectangleGroup>
        <FrameItem />
        <CreateNewPersonnel>Create new personnel</CreateNewPersonnel>
      </RectangleGroup>
    </ActionButtonsRoot>
  );
};

export default ActionButtons;
