import styled from "styled-components";
import { BsArrow90DegUp } from "react-icons/bs";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 15px;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 15px;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 10px;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 20px;
  }
`;

export const More = styled.strong`
  text-align: center;
  margin: 25px 0;
  cursor: pointer;

  ::before {
    content: ${BsArrow90DegUp};
  }
`;
