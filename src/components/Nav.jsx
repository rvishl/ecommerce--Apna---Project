import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import phoneView from '../responsive';


const Container = styled.div`
  height: 60px;
  ${phoneView({height: "50px"})};
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${phoneView({ padding: "10px 0px"})};
`

const Left = styled.div`
  flex: 1;
`
const Logo = styled.h1`
  font-weight: bold;
  margin-left: 3rem;
  display: inline-block;
  // &:hover {
  //   color: blue;
  // }
  &::after {
    content: '';
    display: block;
    margin-top: 2px;
    margin-left: auto;
    margin-right: auto;
    height: 2px;
    width: 0px;
    background-color: black;
  }
  &:hover::after {
    width: 100%;
    transition: all 0.5s;
  }
  ${phoneView({ fontSize: "22px", marginLeft: ".75rem", marginRight: ".60rem" })};
`

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  // justify-content: end;
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-right: 25px;
  padding: 5px;
`
const Input = styled.input`
  border: none;
  outline: none;
  ${phoneView({ width: "50px" })};
`

const Language = styled.span`
  font-weight: 14px; 
  cursor: pointer;
  ${phoneView({display: "none"})};
`

const Right = styled.div`
  flex: 1;  
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${phoneView({ flex: 2, justifyContent: "center" })};
`
const MenuItem =  styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  &::after {
    content: '';
    display: block;
    margin-top: 2px;
    margin-left: auto;
    margin-right: auto;
    height: 1px;
    width: 0px;
    background-color: black;
  }
  &:hover::after {
    width: 100%;
    transition: all 0.5s;
  }
  ${phoneView({ fontSize: "12px", marginLeft: "8px" })};
`


const Nav = () => {
  return (
    <Container>
      <Wrapper>

        <Left>
          <Logo>Apna!</Logo>
        </Left>

        <Center>
        <SearchContainer>
            <Input placeholder="search" />
            <Search style={{color: "gray", fontSize: "16px"}}/>
          </SearchContainer>
          <Language>EN</Language>
        </Center>

        <Right>
          <MenuItem>Sign up</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>

      </Wrapper>
    </Container>
  )
}

export default Nav;