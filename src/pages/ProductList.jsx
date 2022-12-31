import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Nav from '../components/Nav';
import Products from '../components/Products';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';
import phoneView from '../responsive';

const Container = styled.div`

`
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    ${ phoneView({ margin: "0px 10px", display: "flex", flexDirection: "column" })}
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${ phoneView({ marginRight: "0px"})}
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${ phoneView({ margin: "10px 0px" })}
`
const Option = styled.option`

`


const ProductList = () => {
    return (
        <Container>
            <Announcement />
            <Nav />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>                        
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (Low to High)</Option>
                        <Option>Price (High to Low)</Option>                                              
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Subscribe />
            <Footer />
        </Container>
    )
}

export default ProductList;