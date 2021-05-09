import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { auth, provider } from '../firebase'
import { useHistory } from 'react-router-dom'
import { 
    selectUserName,
    selectUserPhoto,
    setUserLogin,
    setSignOut
    
} from '../features/user/userSlice'

function Header() {

    const userName = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(()=> {
        auth.onAuthStateChanged(async (user)=>{
            if(user){
                dispatch(setUserLogin({ 
                name: user.displayName,
                email: user.email, 
                photo: user.photoURL
            }))
            history.push("/")
            }
            
        })
    })

    const signIn = ()=>{
        auth.signInWithPopup(provider)
        .then((result) => {
            
            let user = result.user
            dispatch(setUserLogin({ 
                name: user.displayName,
                email: user.email, 
                photo: user.photoURL
            }))
            history.push("/")
        })
    }
     const signOut=()=>{

        
        auth.signOut()
        .then(() =>
        {
            dispatch(setSignOut())
            history.push("/login")
        })
     }




    return (
        <Nav>
            <MenuContainer>
                <Menu src= "/images/bars-solid.svg" alt="menu-icon" />
                <MenuItems>
                            <a>
                                <img src='/images/home-icon.svg' />
                                <span>HOME</span>
                            </a>
                            <a>
                                <img src='/images/search-icon.svg' />
                                <span>SEARCH</span>
                            </a>
                            <a>
                                <img src='/images/watchlist-icon.svg' />
                                <span>WATCHLIST</span>
                            </a>
                            <a>
                                <img src='/images/original-icon.svg' />
                                <span>ORIGINALS</span>
                            </a>
                            <a>
                                <img src='/images/movie-icon.svg' />
                                <span>MOVIES</span>
                            </a>
                            <a>
                                <img src='/images/series-icon.svg' />
                                <span>SERIES</span>
                            </a>
                        </MenuItems>
            </MenuContainer>
            
            <Logo src='/images/logo.svg' />
            {
                !userName ? (
                    <LoginContainer>
                        <Login onClick = {signIn}>
                            LOGIN
                        </Login>
                    </LoginContainer>
                ) :
                (
                    <>
                        <NavMenu>
                            <a>
                                <img src='/images/home-icon.svg' />
                                <span>HOME</span>
                            </a>
                            <a>
                                <img src='/images/search-icon.svg' />
                                <span>SEARCH</span>
                            </a>
                            <a>
                                <img src='/images/watchlist-icon.svg' />
                                <span>WATCHLIST</span>
                            </a>
                            <a>
                                <img src='/images/original-icon.svg' />
                                <span>ORIGINALS</span>
                            </a>
                            <a>
                                <img src='/images/movie-icon.svg' />
                                <span>MOVIES</span>
                            </a>
                            <a>
                                <img src='/images/series-icon.svg' />
                                <span>SERIES</span>
                            </a>
                        </NavMenu>
                        <UserImg src={userPhoto} onClick = {signOut} />
                    </>
                )
            }
            
        </Nav>
    )
}

export default Header




const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 34px;
    @media(max-width:894px){
        display:flex;
        justify-content:space-between;
        align-items: center;
    }

`
const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-left: 25px;
    flex:1;
    a
    {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        
        img
        {
            height:20px;
            padding: 0 1px;
        }
        span
        {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            
            &:after
            {
                content:'';
                height:2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity:0;
                transform: scaleX(0);
                transform-origin: left center;
                transition: all 250ms ease-in-out ;
            }
        }
        &:hover{
            span:after
            {
                transform: scaleX(1);
                opacity:1;
            }
        }
    }

    @media(max-width:894px){
        display:none;
    }
`
const MenuItems = styled(NavMenu)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top:60px;
    opacity:0;
    left:-26px;
    box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
                 rgba(0 0 0 / 73%) 0px 16px 10px -10px;
    border-radius: 4px;
    background: rgba(0 0 0 / 50%);
    z-index:-2;
    transition: all 200ms ease-out;
    a{
        margin:10px 16px;
        img{
            height: 22.5px;
            padding:0 2px;
        }
        span{
            font-size:14px;
        }
    }
`
const Menu = styled.img`
    
    
`
const MenuContainer = styled.div`
display: none;
    @media(max-width:894px)
    {
        display:flex;
        align-items:center; 
        color:white;
        height:34px;
        width:34px;
        cursor:pointer;
        ${Menu}{
            height:100%;
            width:100%;
            object-fit:contain;
        }
    }
    &:hover{
        ${MenuItems}
        {
            opacity:1;
            z-index:1;
            transform-origin: top center
        }
    }


`
const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer; 
    
`
const Login = styled.div`
    border: 2px solid #f9f9f9;
    padding: 8px 16px;
    border-radius: 4px;
    background-color: rgba(0 0 0 / 60%);
    letter-spacing: 1.5px;
    transition: all 200ms;
    cursor: pointer;
    &:hover{
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
    @media(max-width:894px){
        padding: 7px 12px;
        font-size:14px;
    }
`

const LoginContainer = styled.div`
    flex:1;
    display: flex;
    justify-content: flex-end;
    @media(max-width:894px){
        flex:none;
    }
`