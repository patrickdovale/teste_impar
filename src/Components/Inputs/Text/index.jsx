import React from "react";

import * as S from "./styles.js";

const InputText = ({ label, name, placeholder }) => {
  return (
    <S.FormGroup>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input name={name} type="text" placeholder={placeholder} />
    </S.FormGroup>
  );
};

export default InputText;
