import styled from 'styled-components';
import { Send } from '@mui/icons-material';
import phoneView from '../responsive';

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    ${phoneView({ fontSize: "65px" })};
`;
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${phoneView({textAlign: "center"})}
`
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${phoneView({ width: "80%" })};
`;
const Input = styled.input`
  border: none;
  Outline: none;
  flex: 8;
  padding-left: 20px;
`
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`

const Subscribe = () => {
  return (
    <Container>
        <Title>Subscribe</Title>
        <Desc>Get timely updates from your favorite products.</Desc>
        <InputContainer>
            <Input placeholder='Your email' />
            <Button>
                <Send />
            </Button>
        </InputContainer>
    </Container>
  )
}
export default Subscribe;