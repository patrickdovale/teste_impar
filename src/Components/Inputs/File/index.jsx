import React from "react";
import Button from "Components/Button/index.jsx";

import * as S from "./styles.js";

const InputFile = ({ label = "Nenhum arquivo selecionado", name }) => {
  return (
    <S.FormGroup>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.File>
        <span htmlFor={name}>Nenhum arquivo selecionado</span>
        <Button htmlFor={name} outline color="orange">
          Escolher arquivo
        </Button>
        {/* <S.Input name={name} type="file" /> */}
      </S.File>
    </S.FormGroup>
  );
};

export default InputFile;
