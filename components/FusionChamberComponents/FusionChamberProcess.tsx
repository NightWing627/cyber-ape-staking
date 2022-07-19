import React from "react";
import {
  MainContainer,
  EmptyContainer,
  DefaultHeaderContainer,
  FusionChamberStart,
  FusionChamberStartButton,
} from "../../styles/FusionChamber";

interface Props {
  toNext: () => void;
}

const FusionChamberProcessComponent: React.FC<Props> = ({ toNext }) => {
  return (
    <MainContainer>
      <FusionChamberStart>
        <FusionChamberStartButton onClick={() => toNext()} />
      </FusionChamberStart>
    </MainContainer>
  );
};

export default FusionChamberProcessComponent;
