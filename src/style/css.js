import React from "react";

import styled from "styled-components";

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const Topimg = styled.img`
  height: 50px;
`;

export const BottomMain = styled.div`
  display: flex;
  column-gap: 10px;
  margin-top: 20px;
`;

export const DivIcon = styled.div`
  height: 35px;
  width: 40px;
  border-radius: 5px;
  background-color: #393939;
  margin-right: 10px;
`;

export const BottomThree = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 20px;

  @media screen and (max-width: 1080px) {
    display: grid;
    row-gap: 15px;
    margin-top: 130px;
  }
`;

export const SideNav = styled.div`
  height: 100%;
  margin-top: 50px;
  width: 200px;
  position: fixed;
  top: 0;
  background-color: #393939;
  padding-top: 20px;

  /* @media screen and (max-width: 700px) {
    height: 1550px;
    margin-top: 300px;
  } */
`;

export const SideA = styled.a`
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 20px;
  color: #818181;
  display: block;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  outline: none;
`;

export const SelectDown = styled.select`
  width: 200px;
  height: 30px;
  border-radius: 5px;
`;

export const SelectTwo = styled.div`
  width: 200px;
  height: 25px;
  border-radius: 5px;
  color: white;
  background-color: #393939;
  text-align: center;
  padding-top: 5px;
`;

export const SelectThree = styled.div`
  width: 200px;
  height: 25px;
  background-color: whitesmoke;
  text-align: center;
  border-radius: 5px;
  padding-top: 5px;
`;

export const MainCont = styled.div`
  margin-left: 250px;
  margin-top: 50px;
  font-size: 20px;
  padding: 0px 10px;
  width: 800px;
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: repeat(4, 220px);
  gap: 50px;

  @media screen and (max-width: 1150px) {
    display: grid;
    grid-template-columns: repeat(3, 200px);
  }
  @media screen and (max-width: 1035px) {
    display: grid;
    grid-template-columns: repeat(2, 200px);
  }
  @media screen and (max-width: 438px) {
    display: grid;
    grid-template-columns: repeat(1, 200px);
  }
`;

export const Grid = styled.div`
  background-color: #393939;
  border-radius: 10px;
  box-shadow: 0px 7px 20px 20px #a3b7df21;
  border-radius: 21px;
  opacity: 1;
`;

export const GridCont = styled.div`
  color: white;
  text-align: center;
  padding-top: 20px;
`;
export const ListCont = styled.ul`
  color: white;
  font-size: 14px;
`;

export const GridDiv = styled.div`
  display: grid;
  row-gap: 20px;
`;

export const Preview = styled.div`
  color: #e45829;
  text-align: center;
  font-size: 15px;
  background-color: #ffffff;
  height: 31px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const SelectDownMain = styled.div`
  margin-top: 130px;
`;

export const Both = styled.div`
  display: flex;
`;
