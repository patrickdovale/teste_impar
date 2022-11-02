import styled from "styled-components";

import Colors from "../../../Styles/colors";
import Fonts from "../../../Styles/fonts";

import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";

export const Card = styled.section`
  display: block;
  width: 95%;
  margin: 0 auto 50px;
  padding: 0px;
  background-color: ${Colors.white};
  color: ${Colors.darkGrey};
  border-radius: 2px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.4s ease;
`;

export const Description = styled.div`
  margin-bottom: 10px;
  color: ${Colors.text};

  p {
    display: block;
    line-height: 20px;
    font-size: ${Fonts.default};
    line-height: 1;
    padding: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  color: ${Colors.darkGrey};
`;

export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95px;
  height: 95px;
  background-color: ${Colors.grey};
  border: 1px solid ${Colors.lightGrey};
  border-radius: 50%;
`;

export const Image = styled.img`
  width: 64px;
  height: 64px;
`;

export const Divider = styled.hr`
  width: 80%;
  height: 1px;
  margin-top: 20px;
  margin-bottom: 10px;
  border-color: ${Colors.divider};
`;

export const Footer = styled.div`
  margin-top: 41px;
  display: flex;
  gap: 40px;
  padding: 16px;
  color: ${Colors.darkGrey};
  border-radius: 0px 0px 8px 8px;
  opacity: 1;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0px 3px 6px #0000000f;
  color: ${Colors.text};
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    height: 13px;
    margin-right: 10px;
  }

  p {
    transition: color 0.3s;
    font-size: ${Fonts.s};
  }

  .edit:hover {
    color: ${Colors.orange};
  }

  .delete:hover {
    color: ${Colors.red};
  }
`;

export const IconDelete = styled(RiDeleteBinLine)`
  color: ${Colors.red};
`;

export const IconEdit = styled(FiEdit2)`
  color: ${Colors.orange};
`;
