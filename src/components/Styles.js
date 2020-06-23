import styled from 'styled-components';

export const Header = styled.h1`
  margin-bottom: .5%;
`;

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
  margin-left: 32.5%;
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

export const ContentContainerDiv = styled.div`
  display: flex;
  margin-top: -2%;
`;

export const GridColumnDiv = styled.div`
  width: 58%;
  margin: 3% 1%;
`;

export const ActionColumnDiv = styled.div`
  width: 38%;
  margin: 1%;
  padding: 5% 1%;
`;

export const CellDiv = styled.div`
  position: absolute;  
  background: white;
`;

export const GridDiv = styled.div`
  position: relative;
  margin: 0 auto;
  background: midnightblue;
  background-image: linear-gradient(mediumspringgreen 1px, transparent 1px),    linear-gradient(90deg, mediumspringgreen 1px, transparent 1px);
`;

export const GenerationText = styled.h4`
  font-size: 1.2rem;
  color: midnightblue;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const UserButtons = styled.button`
  width: 25%;
  border: 0;
  background: mediumspringgreen;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  line-height: 1;
  margin: 1% auto;
  &:hover {
    cursor: pointer;
    background: midnightblue;
    color: white;
  };
  &:focus {
    outline: none
  }
`;