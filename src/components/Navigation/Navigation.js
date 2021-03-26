import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

const NavigationWrapper = styled.nav`
  align-self: center;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  text-transform: uppercase;
  list-style: none;
  font-size: 3.5rem;
  font-weight: 400;
`;

const NavListItem = styled.li`
  position: relative;
  margin-bottom: 20px;
  cursor: pointer;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    height: 100%;
    width: 100%;
    background-color: #43617e;
    transition: 0.4s;
    transition-timing-function: ease-in-out;
  }

  &::after {
    content: "";
    position: absolute;
    top: 90%;
    left: -100%;
    height: 5px;
    width: 50px;
    background-color: #43617e;
    transition: 0.4s;
    transition-timing-function: ease-in-out;
  }

  &:hover {
    &::before {
      left: 100%;
    }
    &::after {
      width: 100%;
      left: 0;
    }
  }
`;

const StyledLink = styled(Link)`
  color: white;
  padding: 0 5px 0 32px;
  text-decoration: none;
`;

const Navigation = () => (
  <NavigationWrapper>
    <NavList>
      <NavListItem>
        <StyledLink to="/about">About</StyledLink>
      </NavListItem>
      <NavListItem>
        <StyledLink to="/projects">Projects</StyledLink>
      </NavListItem>
      <NavListItem>
        <StyledLink to="/skills">Skills</StyledLink>
      </NavListItem>
      <NavListItem>
        <StyledLink to="/contact">Contact</StyledLink>
      </NavListItem>
    </NavList>
  </NavigationWrapper>
);

export default Navigation;
