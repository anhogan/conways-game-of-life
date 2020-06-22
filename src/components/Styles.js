import styled from 'styled-components';

export const RulesButton = styled.button`
  border: 0;
  background: mediumspringgreen;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  line-height: 1;
  &:hover {
    cursor: pointer;
    background: midnightblue;
    color: white;
  };
  &:focus {
    outline: none
  }
`;

export const ModalDiv = styled.div`
  width: 500px;
  margin-top: -650px;
  background: white;
  border: 1px solid #ccc;
  transition: 1.1s ease-out;
  box-shadow: -2rem 2rem 2rem rgba(black, 0.2);
  filter: blur(0);
  transform: scale(1);  
  opacity: 1;
  visibility: visible;
  @supports (offset-rotate: 0deg) {
    offset-rotate: 0deg;
    offset-path: path("M 250,100 S -300,500 -700,-200");
  }
  h2 {
    border-bottom: 1px solid #ccc;
    padding: 1rem;
    margin: 0;
  }
  .content {
    padding: 1rem;
  }
  .playBtn {
    border-top: 1px solid #ccc;
    background: lightgray;
    padding: 0.5rem 1rem;
    button {
      border: 0;
      background: mediumspringgreen;
      border-radius: 5px;
      padding: 0.5rem 1rem;
      font-size: 0.8rem;
      line-height: 1;
      &:hover {
        cursor: pointer;
        background: midnightblue;
        color: white;
      };
    }
  }
`;

export const CellDiv = styled.div`
  width: 1px;
  display: flex;
  flex: 1;
  padding: 10px;
  margin: 1px;
  border: 1px solid mediumspringgreen;
  background: midnightblue;
`;

export const RowDiv = styled.div`
  display: flex;
`;

export const GridDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 50px;
  margin: 0 auto;
`;

export const InputContainer = styled.div`
  width: 150%;
  margin-left: -25%;
  display: flex;
  justify-content: center;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  margin: 1% 0;
`;

export const Inputs = styled.input`
  font-size: 1.2rem;
  border-radius: 5px;
  color: midnightblue;
  border: 1px solid mediumspringgreen;
  padding: 1%;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  &:focus {
    outline: none
  }
`;

export const Labels = styled.label`
  font-size: 1.2rem;
  color: midnightblue;
`;