import styled, { keyframes } from "styled-components";
import fonts from "Styles/fonts";
import colors from "../../Styles/colors";

const fadeIn = keyframes`
	to {
		opacity: 1;
		visibility: visible;
	}
`;

const fadeOut = keyframes`
	from {
		opacity: 1;
		visibility: visible;
	}
	to {
		opacity: 0;
		visibility: hidden;
	}
`;

const openUp = keyframes`
	to {
		transform: translate(-50%, -50%);
	}
`;

const closeUp = keyframes`
	to {
		transform: translate(50%, 50%);
	}
`;

export const Modal = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: ${colors.white};
  position: fixed;
  z-index: 1;
  top: 50%;
  padding: 40px 35px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
  transform: translate(50%, -30vw);
  transition: all 0.4s ease 0.1s;
  animation: ${openUp} 0.4s ease forwards;
  overflow-y: auto;
  overflow-x: hidden;

  &.closed {
    animation: ${closeUp} 0.4s ease forwards;
  }

  @media screen and (min-width: 768px) {
    width: ${(props) => (props.theme === "small" ? "auto" : "85vw")};
  }

  @media screen and (min-width: 1024px) {
    width: ${(props) => (props.theme === "small" ? "auto" : "45vw")};
    right: -30vw;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 90%;
  }

  @media screen and (min-width: 1024px) {
    width: calc(100vw - 66vw);
  }
`;

export const Container = styled.div`
  transition: all 0.4s ease;
  z-index: 10;
  position: fixed;
  opacity: 0;
  visibility: hidden;
  animation: ${fadeIn} 0.4s ease forwards;

  &.closed {
    animation: ${fadeOut} 0.4s ease forwards;
  }
`;

export const Shadow = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.6);
  top: 0;
  left: 0;
  position: fixed;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 50px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 25px;

  img {
    width: 46px;
    height: 46px;
    margin-right: 18px;
  }
`;

export const Title = styled.h1`
  color: ${colors.primary};
  font-size: ${fonts.title};
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
  border-top: 1px solid #ccc;
  margin-top: 25px;
`;

export const Close = styled.div`
  width: 25.5px;
  height: 25.5px;
  padding: 16px;
  position: relative;
  background-color: #e76316;
  top: -25px;

  right: -95%;
  border-radius: 50%;
  cursor: pointer;

  &::after,
  &::before {
    content: "";
    width: 18px;
    height: 2px;
    background-color: ${colors.white};
    position: absolute;
    top: calc(50% - 1px);
    left: calc(50% - 9px);
  }

  &::after {
    transform: rotate(45deg);
  }

  &::before {
    transform: rotate(-45deg);
  }
`;
