import styled from 'styled-components';
import phoneView from '../responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(""), center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    ${ phoneView({ width: "75%" })};
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    // align-items: center;
    justify-content: center;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Aggrement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`
// const ButtonContainer = styled.div`
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: center;
// `
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    cursor: pointer;
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
                <Input placeholder="User Name" />
                <Input placeholder="Email" />
                <Input placeholder="Password" />
                <Input placeholder="Confirm Password" />
                <Aggrement>
                    By continuing, you agree to Apna's <b>Terms of Use</b> and <b>Privacy Policy.</b>
                </Aggrement>
                {/* <ButtonContainer> */}
                    <Button>CREATE</Button>
                {/* </ButtonContainer> */}
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register;