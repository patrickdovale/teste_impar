import styled from "styled-components";
import colors from "Styles/colors";
import fonts from "Styles/fonts";
// import colors from "Styles/colors";

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const File = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  width: 100%;
  border: 1px solid #b9b9b9;
  padding: 10px 10px 10px 25px;
  border-radius: 8px;
`;
export const Label = styled.label`
  color: ${colors.label};
  margin-bottom: 12px;
  text-transform: uppercase;
  font-size: ${fonts.s};
`;
export const Input = styled.input``;
// export const FormGroup = styled.div``;
