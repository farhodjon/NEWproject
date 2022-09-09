import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@mui/icons-material';
import styled from 'styled-components'
 import Image from "../components/IMAGE/Payment-Background-PNG.png"
const Container = styled.div`
display: flex;
`;

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;
const Logo = styled.h1``;

const Desc = styled.pre`
margin: 20px 0;

`;

const SocialContainer = styled.div`
display: flex;
`;

const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color:#${props => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px; 

`;

const Center = styled.div`
flex: 1;
padding: 20px;
`;
const Title = styled.h3`
margin-bottom: 30px;
`;
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`;

const Right = styled.div`
padding: 20px;
flex: 1 ;
`;
const ContactItem =styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`;
const Payment=styled.img`
width: 50%;
`;
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>New Project.uz</Logo>
                <Desc>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Fugit, aperiam
                    veniam velit nulla
                    ullam laudantium, atque <br /> corrupti
                    architecto ipsam  necessitatibus consequatur natus <br /> hic est
                    doloribus nisi optio minima. Lorem, ipsum.
                </Desc>
                <SocialContainer>
                    <SocialIcon color='3B5999'>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color='E4405F'>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color='55ACEE'>
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color='E60023'>
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem> <Room style={{marginRight:"10px"}}/> 622 Lorem ipsum dolor sit amet 98336</ContactItem>
                <ContactItem> <Phone style={{marginRight:"10px"}}/> +998972151995</ContactItem>
                <ContactItem><MailOutline style={{marginRight:"10px"}}/>contact@New Project.uz</ContactItem>
                 <Payment src={Image} alt='payment'/>
            </Right>



        </Container>
    )
}

export default Footer