import styled from 'styled-components';

const Form = styled.form`
  margin-left: 70%;
  width: 250px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: rgba(0, 0, 0, 0.02);
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  position: absolute;
  margin-top: 35px;
  label {
    color: white;
    display: block;
    margin-bottom: 1rem;
  }
  input[type='text'] {
    width: 100%;
    height: 35px;
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 30px;
  }
  input[type='text'] &:active {
    border: none;
    background-color: blue; 
  }
  input[placeholder] {
    padding-left: 20px;
  }
`;

export default Form;