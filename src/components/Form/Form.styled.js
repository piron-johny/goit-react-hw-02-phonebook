import styled from '@emotion/styled';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  & label {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }
  & span {
    display: inline-block;
  }
  & input {
    width: 100%;
    max-width: 200px;
  }
  & button {
    margin: 15px 0;
    width: 100%;
  }
`;
