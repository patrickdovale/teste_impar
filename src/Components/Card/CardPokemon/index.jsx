import React from "react";
import * as S from "./styles";

export default function CardPokemon({ data, handleModalDelete }) {
  return (
    <S.Card>
      <S.Body>
        <S.ContainerImg>
          <S.Image src={data?.sprites?.front_default} />
        </S.ContainerImg>
        <S.Divider />
        <S.Description>
          <p>{data?.name || "---"}</p>
        </S.Description>
      </S.Body>
      <S.Footer>
        <S.Option onClick={() => handleModalDelete()}>
          <S.IconDelete />
          <p className="delete">Excluir</p>
        </S.Option>
        <S.Option
          onClick={() => alert("Essa funcionalidade está em desenvolvimento")}
        >
          <S.IconEdit />
          <p className="edit">Editar</p>
        </S.Option>
      </S.Footer>
    </S.Card>
  );
}
