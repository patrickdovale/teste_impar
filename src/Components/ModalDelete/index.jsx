import Button from "Components/Button/index.jsx";
import React, { useState, useEffect } from "react";

import * as S from "./styles.js";

const ModalDelete = ({ opened, setOpened, theme = "normal" }) => {
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
      <S.Modal theme={theme}>
        <S.Close onClick={() => setOpened(false)}></S.Close>

        <S.CircleIcon>
          <S.IconDelete />
        </S.CircleIcon>

        <S.Title>Excluir</S.Title>
        <S.Text>CERTEZA QUE DESEJA EXCLUIR?</S.Text>

        <S.Options>
          <Button
            color="red"
            onClick={() => window.alert("Funcionalidade em desenvolvimento")}
          >
            Excluir
          </Button>
          <Button outline onClick={() => setOpened(false)} color="red">
            Cancelar
          </Button>
        </S.Options>
      </S.Modal>
      <S.Shadow onClick={() => setOpened(false)} />
    </S.Container>
  ) : (
    <></>
  );
};

export default ModalDelete;
