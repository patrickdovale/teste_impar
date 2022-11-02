import React from "react";
import * as S from "./styles";

export default function Button(props) {
  return (
    <S.Button {...props} className={props.styleButton || "default"}>
      {props.children}
    </S.Button>
  );
}
