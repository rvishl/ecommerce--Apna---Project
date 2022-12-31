import { Facebook, Instagram, Twitter, WhatsApp, Room, Phone, MailOutline } from '@mui/icons-material';
import styled from 'styled-components';
import phoneView from '../responsive';

const Container = styled.div`
    display: flex;
    ${ phoneView({flexDirection: "column"} ) }
`
const Left = styled.div`
    flex: 1;
    padding: 20px;
    ${ phoneView({ display: "none" }) }
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    Width: 50%;
    margin-bottom: 10px;
`

const Center = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
`
const Logo = styled.h1``;
const Desc = styled.div`
    margin: 20px 0px;
`;
const SocialContainer = styled.div`
    display: flex;
    
`;
const SocialIcon = styled.div`
    margin: 10px;
    color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .4s ease;
    &:hover {
        transform: scale(1.1)
    }
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const ContactItem = styled.div`
    display: flex;
    align-items: center;
    // justify-content: center;
    margin-bottom: 10px;
`
const Payment = styled.img`
    height: 30%;
    width: 80%;
`


const Footer = () => {
  return (
    <Container>
        <Left>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>WishList</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Left>

        <Center>
            <Logo>Apna!</Logo>
            <Desc>
                Popular and best seller website.
            </Desc>
            <SocialContainer>
                <SocialIcon color="25D366">
                    <WhatsApp />
                </SocialIcon> 
                <SocialIcon color="E4405F">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="3B5999">
                    <Facebook />
                </SocialIcon>                
                <SocialIcon color="55ACEE">
                    <Twitter />
                </SocialIcon>                               
            </SocialContainer>
        </Center>

        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight: "10px"}} /> Bihar, India.
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight: "10px"}} /> +91 7277005236
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight: "10px"}} /> rvishl05@gmail.com
            </ContactItem>
            <Payment src="https://t4.ftcdn.net/jpg/04/10/37/87/360_F_410378748_em18QNzhAY3uhB3AJRPlZdJKj84vO1qs.jpg" />
        </Right>
    </Container>
  )
}

export default Footer;