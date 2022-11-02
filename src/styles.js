import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { MdOutlineKeyboardArrowUp, MdClear } from "react-icons/md";
import fonts from "Styles/fonts";
import BannerBackGround from "./Assents/Imagens/fundo-busca.png";
import colors from "Styles/colors";

export const Page = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  margin: 0 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1024px) {
    width: 1046px;
  }
`;
export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 0;
  width: 100%;
  height: 261px;
  background-image: url(${BannerBackGround});
  background-repeat: no-repeat;
  background-size: cover;

  input {
    width: 100%;
    outline: none;
    font-size: ${fonts.xl};
    padding: 23px 70px 23px 26px;
    border-radius: 8px;
    border: none;
    font-weight: lighter;
  }
`;

export const FormGroupSearch = styled.form`
  position: relative;
  width: 80%;

  @media screen and (min-width: 1024px) {
    width: 55%;
  }
`;

export const IconSearch = styled(BsSearch)`
  position: absolute;
  top: calc(50% - 20px);
  right: 15px;
  font-size: 40px;
  color: #a5a5a5;
  cursor: pointer;
`;

export const IconClear = styled(MdClear)`
  position: absolute;
  top: calc(50% - 20px);
  right: 15px;
  font-size: 40px;
  color: ${colors.red};
  cursor: pointer;
`;

export const HeaderContent = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column-reverse;
  margin: 40px 0;
  width: 100%;
  align-items: center;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }

  h1 {
    color: #5f1478;
    font-size: ${fonts.title};
    font-weight: normal;
  }
`;
export const ToTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 50px;
  height: 50px;
  background-color: ${colors.orange};
  color: ${colors.white};
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
`;

export const ToTopIcon = styled(MdOutlineKeyboardArrowUp)`
  font-size: ${fonts.xl};
`;
