import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Subscribe from '../components/Subscribe';
import {Add, Remove } from '@mui/icons-material';
import phoneView from '../responsive';

const Container = styled.div``
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${ phoneView({ padding: "10px", flexDirection: "column"})}
`
const ImgContainer = styled.div`
    flex: 1;
    ${ phoneView({ textAlign: "center" })}
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${ phoneView({ height: "55vh", width: "95%", textAlign: "center" })}
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${ phoneView({ padding: "10px" })}
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${phoneView({ width: "100%" })};
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${phoneView({ width: "100%" })}
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
`

const Product = () => {
  return (
    <Container>
        <Announcement />
        <Nav />
        <Wrapper>
            <ImgContainer>
                <Image src="" />
            </ImgContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>Lorem ipsum dolor sit Lorem ipsum Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit</Desc>
                <Price>Rs 500</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color:</FilterTitle>
                        <FilterColor color="black" title="black" />
                        <FilterColor color="darkblue" title="darkblue" />
                        <FilterColor color="gray" title="gray" />
                    </Filter>
                    <Filter>
                        <FilterTitle>Size:</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove />
                        <Amount>1</Amount>
                        <Add />
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Subscribe />
        <Footer />
    </Container>
  )
}

export default Product