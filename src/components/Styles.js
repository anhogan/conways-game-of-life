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