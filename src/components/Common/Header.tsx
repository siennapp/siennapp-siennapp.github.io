import React, { FunctionComponent, useState } from 'react'
import styled from "@emotion/styled"
import { AiFillGithub, AiOutlineCodepen,AiOutlineUser } from "react-icons/ai";

const HeaderWrap = styled.div`
    width: 100%; 
    height: 70px;
    position: fixed;
    left: 0; top: 0; 
    z-index: 999;
    background-color: rgba(255, 255, 255, 0.1);
    /* background-color: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(15px); */
        color: #ffffff; 
    &.fixed{
        background-color: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(15px);
        color: #444444; 
    }
`
const HeaderContent = styled.header`
    width: 100%; 
    height: 100%; 
    display: flex;
    align-items: center;
    font-size: 18px;
   
    .outlink-list{
        display: flex;
        align-items: center;
    }
`
const Outlink = styled.a`
    display: inline-flex;
    align-items: center;
    margin: 0 8px; 
    svg{
        transition: .2s; 
        &:hover{
            fill: #3dd065; 
        }
    }

`
export const ScrollDetector = () => {
    const [navbar, setNavbar] = useState(false)
  
    const fixNavbar = () => {
      if (window.scrollY >= 30) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    }
  
    if (typeof window !== `undefined`) {
      window.addEventListener('scroll', fixNavbar)
    }
  
    return navbar
  }
  
const Header: FunctionComponent = function () {


    return (
      <HeaderWrap className={ScrollDetector() ? 'fixed' : ''}>
        <div className='container'>
            <HeaderContent>
                <b>Sieun Park </b>
                <span style={{paddingLeft: 7, paddingRight: 15}}> 프론트엔드</span>
                <div className='outlink-list'>
                    {/* <Outlink href="https://my.surfit.io/w/143670746" target={'_blank'}><AiOutlineUser size={22}/></Outlink>
                    <Outlink href="https://my.surfit.io/w/143670746" target={'_blank'}><AiFillGithub size={23}/></Outlink> */}
                       <Outlink href="https://codepen.io/siennapp" target={'_blank'}><AiOutlineUser size={22}/></Outlink>
                    <Outlink href="https://codepen.io/siennapp" target={'_blank'}><AiFillGithub size={23}/></Outlink>
                    <Outlink href="https://codepen.io/siennapp" target={'_blank'}><AiOutlineCodepen size={24}/></Outlink>
                </div>
            </HeaderContent>
        </div>
        
        
      </HeaderWrap>
    )
  }
  
  export default Header