import styled from 'styled-components';
import phoneView from '../responsive';

const Container = styled.div`
  flex: 1;
  // border: 3px solid black;
  // border-radius: 20px;
  margin: 3px;
  height: 70vh;
  position: relative;
  ${phoneView({ textAlign: "center" })}
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  ${phoneView({height: "38vh", width: "90%"})}
`
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  color: white;
  margin: 20px;
`
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: grey;
  cursor: pointer;
  font-weight: 600;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem;