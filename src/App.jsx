import React, { useState, useEffect } from "react";
import * as S from "./styles";

import Header from "Components/Header";
import Cards from "Components/Cards/CardsPokemon";
import Button from "Components/Button";
import ModalNewCard from "Components/ModalNewCard";
import ModalDelete from "Components/ModalDelete";
import GetListPokemon from "Services/Pokemon/List";
import GetSearch from "Services/Pokemon/search";

function App() {
  const [modalNewCard, setModalNewCard] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [searchHandle, setSearchHandle] = useState("");
  const [searchResut, setSearchResult] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    setSearchHandle(search);
  };

  const handleModalNewCard = () => {
    setModalNewCard(true);
  };

  const handleModalDelete = () => {
    setModalDelete(true);
  };

  useEffect(() => {
    const loadAll = async () => {
      const list = await GetListPokemon(9, data.length);
      setData(list);
    };

    loadAll();
  }, []);

  useEffect(() => {
    if (searchHandle) {
      const loadSearcg = async () => {
        const list = await GetSearch(searchHandle);
        setSearchResult(list);
      };

      loadSearcg();
    } else {
      setSearchResult("");
    }
  }, [searchHandle]);

  useEffect(() => {
    if (!search) {
      setSearchHandle("");
      setSearchResult("");
    }
  }, [search]);

  const handleLoadMore = async () => {
    const list = await GetListPokemon(9, data.length);

    setData(list);
  };

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const clearSearch = (e) => {
    e.preventDefault();
    setSearch("");
    setSearchHandle("");
  };

  return (
    <S.Page>
      <Header />
      <S.Banner>
        <S.FormGroupSearch onSubmit={handleSearch}>
          <input
            name="search"
            type="text"
            placeholder="Digite aqui sua Busca..."
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
          />
          {searchHandle ? (
            <S.IconClear onClick={(e) => clearSearch(e)} />
          ) : (
            <S.IconSearch onClick={(e) => handleSearch(e)} />
          )}
        </S.FormGroupSearch>
      </S.Banner>
      <S.Container>
        <S.HeaderContent>
          <h1>Resultado de Busca</h1>
          <Button onClick={handleModalNewCard}>Novo Card</Button>
        </S.HeaderContent>

        {searchResut ? (
          searchResut?.status === 200 ? (
            <Cards
              data={[searchResut?.data]}
              handleModalDelete={handleModalDelete}
            />
          ) : (
            <h1>Nenhum Pokemon Encontrado</h1>
          )
        ) : (
          <Cards
            data={data}
            handleLoadMore={handleLoadMore}
            handleModalDelete={handleModalDelete}
            more
          />
        )}
      </S.Container>
      <ModalNewCard opened={modalNewCard} setOpened={setModalNewCard} />
      <ModalDelete
        opened={modalDelete}
        setOpened={setModalDelete}
        theme="small"
      ></ModalDelete>

      <S.ToTop onClick={() => handleTop()}>
        <S.ToTopIcon />
      </S.ToTop>
    </S.Page>
  );
}

export default App;
