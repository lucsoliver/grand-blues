import styled from "styled-components";

export const teste = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const Center = styled.div`
  text-align: center;
`;

export const Container = styled.div`
  //  background-color: #3b3d42;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Card = styled.div`
  width: auto;
  height: auto;
  background-color: #282c34;
  box-shadow: 0 2px 4px 0 rgb(245, 220, 172);
  &:hover {
    boxshadow: 0 8px 16px 0 rgb(245, 220, 172);
  }
  transition: 0.3s;
  border-radius: 5px;
`;

export const { Card: Hover } = styled.div`
  box-shadow: 0 8px 16px 0 rgb(245, 220, 172);
`;

export const CardBody = styled.div`
  padding: 2px 16px;
`;

export const Image = styled.img`
  width: auto;
  height: 30vh;
  margin-top: 14px;
  border-radius: 5px;
`;

export const Text = styled.p`
  font-size: 14px;
  max-width: 22vw;
  margin-left: auto;
  margin-right: auto;
  color: #fafafa;
`;

export const Texto = styled.h4`
  font-size: 18px;
  color: #fafafa;
`;
