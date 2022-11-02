import React from "react";
import * as S from "./styles";

import myLogo from "../../Assents/Imagens/logo-teste.svg";

export default function Header() {
  return (
    <S.Header>
      <S.Logo src={myLogo} alt="SVG logo image" />
    </S.Header>
  );
}
