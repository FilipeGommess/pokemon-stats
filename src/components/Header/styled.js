import styled from 'styled-components';
import { secondColor, primaryColor, fourthColor, fourthHover } from '../../config/colors';

export const ContainerHeader = styled.div`
  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 30vh;
  background-color: ${secondColor};
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 2.8rem;
  margin-bottom: 2vh;
  color: ${primaryColor};
`;

export const ContainerSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const InputSearch = styled.input`
  background-color: ${primaryColor};
  border: 3px solid ${primaryColor};
  border-radius: 5px;
  height: 30px;
  width: 250px;
`;

export const InputSubmit = styled.button`
  background-color: ${fourthColor};
  border: 3px solid ${fourthColor};
  border-radius: 5px;
  display: flex;
  height: 35px;
  justify-content: center;
  align-items: center;
  margin-top: 2vh;
  font-weight: 600;
  color: ${primaryColor};
  width: 170px;

  :hover {
    background-color: ${fourthHover};
    border-color: ${fourthHover};
    cursor: pointer;
  }
`;
