import React from "react";
import { Link } from "react-router-dom";
import lad from "../images/lad.png";

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
  ListCont,
  SelectDownMain,
  GridDiv,
  Preview,
  Both,
} from "../style/css";

const Home = () => {
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
              <GridCont>Pending Analysis</GridCont>

              <ListCont>
                <li>Number Of Properties</li>
                <li>Total Property Value</li>
                <li>Total Property Value</li>
                <li>At Risk</li>
              </ListCont>
              <Preview>Preview</Preview>
            </GridDiv>
          </Grid>
          <Grid>
            <GridDiv>
              <GridCont> Purchase</GridCont>

              <ListCont>
                <li>Number Of Properties</li>
                <li>Total Property Value</li>
                <li>Total Property Value</li>
                <li>At Risk</li>
              </ListCont>
              <Preview>Preview</Preview>
            </GridDiv>
          </Grid>
          <Grid>
            <GridDiv>
              <GridCont>Eviction</GridCont>

              <ListCont>
                <li>Number Of Properties</li>
                <li>Total Property Value</li>
                <li>Total Property Value</li>
                <li>At Risk</li>
              </ListCont>
              <Preview>Preview</Preview>
            </GridDiv>
          </Grid>
          <Grid>
            <GridDiv>
              <GridCont>Secured</GridCont>

              <ListCont>
                <li>Number Of Properties</li>
                <li>Total Property Value</li>
                <li>Total Property Value</li>
                <li>At Risk</li>
              </ListCont>
              <Preview>Preview</Preview>
            </GridDiv>
          </Grid>
          <Grid>
            <GridDiv>
              <GridCont>Evaluating</GridCont>

              <ListCont>
                <li>Number Of Properties</li>
                <li>Total Property Value</li>
                <li>Total Property Value</li>
                <li>At Risk</li>
              </ListCont>
              <Preview>Preview</Preview>
            </GridDiv>
          </Grid>
          <Grid>
            <GridDiv>
              <GridCont>Obtaining</GridCont>

              <ListCont>
                <li>Number Of Properties</li>
                <li>Total Property Value</li>
                <li>Total Property Value</li>
                <li>At Risk</li>
              </ListCont>
              <Preview>Preview</Preview>
            </GridDiv>
          </Grid>
          <Grid>
            <GridDiv>
              <GridCont>Pending Approval</GridCont>

              <ListCont>
                <li>Number Of Properties</li>
                <li>Total Property Value</li>
                <li>Total Property Value</li>
                <li>At Risk</li>
              </ListCont>
              <Preview>Preview</Preview>
            </GridDiv>
          </Grid>
          <Grid>
            <GridDiv>
              <GridCont>Rehab</GridCont>

              <ListCont>
                <li>Number Of Properties</li>
                <li>Total Property Value</li>
                <li>Total Property Value</li>
                <li>At Risk</li>
              </ListCont>
              <Preview>Preview</Preview>
            </GridDiv>
          </Grid>
          <Grid>
            <GridDiv>
              <GridCont>Pre Listing</GridCont>

              <ListCont>
                <li>Number Of Properties</li>
                <li>Total Property Value</li>
                <li>Total Property Value</li>
                <li>At Risk</li>
              </ListCont>
              <Preview>Preview</Preview>
            </GridDiv>
          </Grid>
          <Grid>
            <GridDiv>
              <GridCont>Listed</GridCont>

              <ListCont>
                <li>Number Of Properties</li>
                <li>Total Property Value</li>
                <li>Total Property Value</li>
                <li>At Risk</li>
              </ListCont>
              <Preview>Preview</Preview>
            </GridDiv>
          </Grid>
          <Grid>
            <GridDiv>
              <GridCont>Sold</GridCont>

              <ListCont>
                <li>Number Of Properties</li>
                <li>Total Property Value</li>
                <li>Total Property Value</li>
                <li>At Risk</li>
              </ListCont>
              <Preview>Preview</Preview>
            </GridDiv>
          </Grid>
          <Grid>
            <GridDiv>
              <GridCont>Escrow</GridCont>

              <ListCont>
                <li>Number Of Properties</li>
                <li>Total Property Value</li>
                <li>Total Property Value</li>
                <li>At Risk</li>
              </ListCont>
              <Preview>Preview</Preview>
            </GridDiv>
          </Grid>
        </MainCont>
      </Both>
    </wrapper>
  );
};

export default Home;
