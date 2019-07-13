/** @jsx jsx */ 
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Wrapper from '../../components/wrapper';


const Layout = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    background: #663399;
    font-family: Montserrat;
`;

const Header = styled.header`
    display: flex;
    justify-content: center;
    margin: 10px;
`;

const Footer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
`;

const Content = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Card = styled.div`
    box-shadow: 15px 20px 21px 9px hsla(0, 0%, 0%, 0.34);
    margin: 20px;
    height: auto;
    width: auto;
    padding: 20px;
    border-radius: 30px;

    background: #E49AB0;
`;

const Button = styled.button`

    // reset the button styles
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;

    display:inline-block;
    padding: 0.7em 1.4em;
    margin: 0 0.3em 0.3em 0;
    border-radius: 0.15em;
    box-sizing: border-box;
    text-decoration: none;
    font-family: Montserrat,sans-serif;
    text-transform: uppercase;
    font-weight: 400;
    color: ${props => props.color};
    background-color: ${props => props.backgroundColor};
    box-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);
    text-align: center;
    position: relative;
    cursor: pointer;
    
        &:active {
            top:0.1em;
        }
`;

export default () => (
    <Wrapper>
        <Layout>
            <Card>
                <Content>
                    <Header>
                        <h1>BOO!</h1>      
                    </Header>
                    <Header>
                        <h1>You canceled your order</h1>      
                    </Header>
                </Content>
                <Footer>    
                    <Link to="/">
                        <Button color="#FFFFFF" backgroundColor="#663399">Back to demo</Button>
                    </Link>
                </Footer>          
            </Card>
        </Layout>
    </Wrapper> 
)