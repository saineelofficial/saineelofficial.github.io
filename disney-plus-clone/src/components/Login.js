import React from 'react'
import styled from 'styled-components'
function Login() {
    return (
        <Container>
            <Box>
                <Logo1 src='/images/cta-logo-one.svg' />
                <SignUp>
                    GET ALL THERE
                </SignUp>
                <Description>
                    Get Premier Access to Raya and Last Dragon for an addition fee with Disney+ subscription. As of 01/26/2022, the price of Disney+ and The Disney Bundle will increase by $2.    
                </Description>
                <Logo2 src='/images/cta-logo-two.png' />
            </Box>
        </Container>
    )
}

export default Login

const Container  = styled.div`
    height: calc(100vh - 70px);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: top;
    &:before
    {
        content: '';
        background: url("/images/login-background.jpg") top / cover no-repeat ;
        position: absolute;
        top: 0;
        left: 0;
        right:0;
        bottom:0;
        z-index: -2;
    }
`
const Box = styled.div`
    width: 90%;
    max-width: 650px;
    margin-top: 100px;
    padding: 80px 40px;
    display:flex;
    flex-direction: column;
    align-items: center;
`
const Logo1  = styled.img`

`
const SignUp  = styled.a`
    width: 100%;
    background-color: #0063e5;
    text-align:center;
    border-radius: 4px;
    padding: 17px 0px;
    color: #f9f9f9;
    font-weigth: bold;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin: 8px 0px 12px;
    &:hover
    {
        background: #0483ee
    }
`
const Description = styled.p`
    letter-spacing: 1.5px;
    text-align: center;
    font-size:11px;
    line-height: 1.5;
`
const Logo2 = styled.img`
    width: 90%;
    
`