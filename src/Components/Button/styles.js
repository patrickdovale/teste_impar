import styled from "styled-components";
import colors from "Styles/colors";
import fonts from "Styles/fonts";

const getColors = (color) => {
  switch (color) {
    case "primary":
      return colors.primary;
    case "red":
      return colors.red;
    default:
      return colors.orange;
  }
};

export const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 13px 42px;
  cursor: pointer;
  font-size: ${fonts.button};
  background-color: ${(props) =>
    props.outline ? `transparent` : getColors(props.color)};
  border: ${(props) =>
    props.outline ? `2px solid ${getColors(props.color)}` : "none"};
  color: ${(props) => (props.outline ? getColors(props.color) : colors.white)};
  box-shadow: 0px 3px 6px #92207242;

  .outline {
    outline: 1px solid ${colors.orange};
    color: ${colors.orange};
    background-color: transparent;
  }
`;
