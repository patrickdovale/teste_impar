import styled, { keyframes } from "styled-components";
import fonts from "Styles/fonts";
import colors from "../../Styles/colors";
import { RiDeleteBinLine } from "react-icons/ri";

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

export const Modal = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => (props.theme === "small" ? "auto" : "60vw")};
  min-width: 80vw;
  max-height: 80vh;
  height: ${(props) => (props.theme === "small" ? "auto" : "80vh")};
  background: ${colors.white};
  position: fixed;
  z-index: 1;
  top: 50%;
  left: 50%;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
  transform: translate(-50%, -200px);
  transition: all 0.4s ease 0.1s;
  animation: ${openUp} 0.4s ease forwards;

  @media screen and (min-width: 768px) {
    width: ${(props) => (props.theme === "small" ? "auto" : "45vw")};
    min-width: 438px;
    min-height: 430px;
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

export const Title = styled.div`
  font-size: ${fonts.title};
  color: ${colors.red};
  margin-bottom: 13px;
`;

export const Text = styled.p`
  font-size: ${fonts.default};
  color: ${colors.text};
`;

export const Options = styled.div`
  display: flex;
  margin-top: 40px;
  gap: 18px;
`;

export const CircleIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 155px;
  height: 155px;
  border: 5px solid ${colors.lightGrey};
  background-color: ${colors.grey};
  border-radius: 50%;
  margin-bottom: 25px;
`;

export const IconDelete = styled(RiDeleteBinLine)`
  width: 68px;
  height: 68px;
  color: ${colors.red};
`;

export const Close = styled.div`
  width: 10.5px;
  height: 10.5px;
  padding: 16px;
  position: absolute;
  background-color: ${colors.orange};

  top: -17px;
  right: -17px;
  border-radius: 50%;
  cursor: pointer;

  &::after,
  &::before {
    content: "";
    width: 14px;
    height: 2px;
    background-color: ${colors.white};
    position: absolute;
    top: calc(50% - 1px);
    left: calc(50% - 7px);
  }

  &::after {
    transform: rotate(45deg);
  }

  &::before {
    transform: rotate(-45deg);
  }
`;
