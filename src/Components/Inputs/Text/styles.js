import styled from "styled-components";
import fonts from "Styles/fonts";
import colors from "Styles/colors";

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  color: ${colors.label};
  margin-bottom: 12px;
  text-transform: uppercase;
  font-size: ${fonts.s};
`;
export const Input = styled.input`
  outline: none;
  border: 1px solid #b9b9b9;
  padding: 18px 25px;
  font-size: ${fonts.l};
  border-radius: 8px;
`;
