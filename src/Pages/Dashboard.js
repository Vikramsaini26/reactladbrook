import React from "react";
import lad from "images/lad.png";

import {
  BottomMain,
  Top,
  Topimg,
  DivIcon,
  SideNav,
  SideA,
  SelectDown,
  SelectTwo,
  SelectThree,
  BottomThree,
  MainCont,
  Grid,
  GridCont,
  SelectDownMain,
  GridDiv,
  Both,
} from "../style/css";

const Dashboard = () => {
  return (
    <wrapper>
      <Top>
        <Topimg src={lad} />
        <BottomMain>
          <DivIcon></DivIcon>
          <DivIcon></DivIcon>
          <DivIcon></DivIcon>
          <DivIcon></DivIcon>
          <DivIcon></DivIcon>
        </BottomMain>
      </Top>
      <div>
        <SelectDownMain>
          <BottomThree>
            <div>
              <SelectDown>
                <option>Filter By</option>
                <option>Investor</option>
                <option>State</option>
              </SelectDown>
            </div>
            <div>
              <SelectTwo>Total Properties 117</SelectTwo>
            </div>
            <div>
              <SelectThree>All Properties</SelectThree>
            </div>
          </BottomThree>
        </SelectDownMain>
      </div>
      <Both>
        <SideNav>
          <SideA href="#about">Select A Project</SideA>
          <SideA href="/dashboard">Dashboard</SideA>
          <SideA href="/note">Notes</SideA>
          <SideA href="#contact">ACQUISITION</SideA>
          <SideA href="#contact">Deal Analyzer</SideA>
          <SideA href="#">Offer/Negotiation</SideA>
          <SideA href="#">PURSHASE</SideA>
          <SideA href="#">POSSESSION</SideA>
          <SideA href="#contact">Service</SideA>
        </SideNav>

        <MainCont>
          <Grid>
            <GridDiv>
              <GridCont>Dashboard</GridCont>
            </GridDiv>
          </Grid>

          <Grid>
            <GridDiv>
              <GridCont>Dashboard</GridCont>
            </GridDiv>
          </Grid>
          <Grid>
            <GridDiv>
              <GridCont>Dashbaord</GridCont>
            </GridDiv>
          </Grid>
        </MainCont>
      </Both>
    </wrapper>
  );
};

export default Dashboard;
