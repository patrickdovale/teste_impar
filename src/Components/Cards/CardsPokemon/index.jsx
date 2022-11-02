import React from "react";

import Card from "../../Card/CardPokemon";

import * as S from "./styles";

export default function CardsPokemon({
  data,
  handleLoadMore,
  handleModalDelete,
  more,
}) {
  return (
    <>
      <S.Container>
        {data &&
          data.map((pokemon, i) => (
            <Card
              key={i}
              data={pokemon}
              handleModalDelete={handleModalDelete}
            />
          ))}
      </S.Container>
      {more ? (
        <S.More onClick={() => handleLoadMore()}>Ver mais</S.More>
      ) : (
        <></>
      )}
    </>
  );
}
