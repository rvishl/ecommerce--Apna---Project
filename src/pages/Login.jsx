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
    background-color: red;
`
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    border-radius: 4px;
    ${ phoneView({ width: "75%" })};
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;     
    flex-direction: column;   
    
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    cursor: pointer;
    margin-bottom: 10px;
`
const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;    
    cursor: pointer;
    transition: 0.4s;
    &:hover {
        text-decoration: underline;
    }
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />             
                <Button>LOGIN</Button>     
                <Link>Forget your password</Link>
                <Link>Create a New Account</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login;