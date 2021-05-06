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
`

const LoginContainer = styled.div`
    flex:1;
    display: flex;
    justify-content: flex-end;
`