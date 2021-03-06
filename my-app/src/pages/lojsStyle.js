import styled from "styled-components";
import px2vw from "../utils/px2vw";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(32)};
  max-width: 100%;

  @media (min-width: 1024px) {
  }
`;

export const Box = styled.div`
  display: flex;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  flex-direction: column;
  padding: ${px2vw(5)};
  margin: ${px2vw(5)};
  background-color: ${props => props.bgColor};
  height: 100%;
  text-align: center;

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(150, 768)};
    min-height: ${px2vw(300)};
    height: 100%;
  }
`;

export const Box2 = styled.div`
  display: block
  justify-content: center;

  @media (min-width: 768px) {
    flex-wrap: wrap;
  }

  @media (min-width: 1024px) {
    flex-wrap: wrap;
  }
`;

export const BoxTitle = styled.h3`
  color: #333;
  font-size: 2rem;
  

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const BoxText = styled.p`
  margin-top: ${px2vw(20)};
  color: #666;
  font-size: 1.5rem;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;