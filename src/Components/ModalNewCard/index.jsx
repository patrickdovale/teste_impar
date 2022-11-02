import React, { useState, useEffect } from "react";
import Button from "Components/Button/index.jsx";
import InputFile from "Components/Inputs/File/index.jsx";
import InputText from "Components/Inputs/Text/index.jsx";
import IconCriar from "../../Assents/Imagens/icone_criar.svg";

import * as S from "./styles.js";

export default function ModalNewCard({ opened, setOpened, theme = "normal" }) {
  const [openedHandler, setOpenedHandler] = useState(opened);

  useEffect(() => {
    const animationHandler = () => {
      setOpenedHandler(false);
    };

    let timingToAnimation;

    if (!opened) {
      timingToAnimation = setTimeout(animationHandler, 500);
    } else {
      setOpenedHandler(true);
      clearTimeout(timingToAnimation);
    }
  }, [opened]);

  return openedHandler ? (
    <S.Container className={!opened ? "closed" : ""}>
      <S.Modal theme={theme} className={!opened ? "closed" : ""}>
        <S.Close onClick={() => setOpened(false)}></S.Close>
        <S.Content>
          <S.Header>
            <img src={IconCriar} alt="imagem adicionar card" />
            <S.Title>Criar card</S.Title>
          </S.Header>

          <S.Form>
            <InputText
              label="DIGITE UM NOME PARA O CARD"
              placeholder={"Digite o título"}
            />

            <InputFile
              label="INCLUA UMA IMAGEM PARA APARECER NO CARD"
              name="file"
            />
            <S.Footer>
              <Button>Criar card</Button>
            </S.Footer>
          </S.Form>
        </S.Content>
      </S.Modal>
      <S.Shadow onClick={() => setOpened(false)} />
    </S.Container>
  ) : (
    <></>
  );
}
