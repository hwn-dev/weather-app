import styled from 'styled-components';

const Form = styled.form`
  justify-content: flex-end;
  margin: 5px 0 5px 70%;
  width: 360px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: rgba(0, 0, 0, 0.02);
  padding: 1.2rem;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  label {
    color: white;
    display: block;
    margin-bottom: 1rem;
  }
  input[type='text'] {
    justify-content: flex-end;
    align-items: center;
    margin-top: 5%;
    width: 100%;
    height: 35px;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid white;
    border-radius: 30px;
  }
  input[placeholder] {
    padding-left: 20px;
  }
`;

export default Form;