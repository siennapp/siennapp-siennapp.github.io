import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/react'
import 'swiper/swiper-bundle.min.css';
const defaultStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600;800&family=Noto+Sans+KR:wght@100;300;400;500;700&display=swap');
  
  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    //font-family: 'Montserrat', sans-serif;
    font-family: 'Noto Sans KR', sans-serif;
  }

  html,
  body,
  #___gatsby {
    width:100%;
    height: 100%;
    min-height: 700px;
    font-size: 16px;
    min-width: 310px;
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 500;
    word-break: keep-all;
    color: #333333; 
  }
  a,
  a:hover {
    color: inherit !important;
    text-decoration: none !important;
    cursor: pointer;
  }
  .container{
    width: 100%;
    height: 100%;
    max-width: 1264px; 
    margin: 0 auto; 
    position: relative; 
    padding: 0 32px;
  }

  //swiper css
  /* .swiper {
  width: 100%;
  height: 100%;
}
.swiper-container{
    padding: 0 60px;
}
.swiper-slide {
  width:40vw !important;
  min-width: 700px;
  text-align: center;
  font-size: 1.125rem;
  padding: 25px 15px; 

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  &:last-of-type{
    margin-right: 200%;
  }
}
.swiper-button-next, .swiper-button-prev{

    display: none !important;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
} */

.info-list svg{
    fill: #49e173 !important;
    fill: #3dd065 !important;
}
.post-content{
  > div {
    padding-bottom: 20px; 
  }
  h2{
    font-size: 1.5rem; 
    margin-bottom: 20px; 
    font-weight: 600; 
    color: #333333; 
  }
  hr{
    background: #e5e5e5;
  }
  ul{
    list-style: none;
    position: relative; 
    left: -5px;

    li{
      position: relative; 
      
      &::before{
        content:'';
        width: 4px;
        height: 4px; 
        background: #49e173;
        position: absolute;
        left: -15px;
        top: 11px;  
      }
    }
  }
}
@media (max-width: 768px) {
    .container{
      padding: 0 20px;
    }
    html,
    body,
    #___gatsby {
      font-size: 14px !important;
    }
    .post-content{
      > div {
        padding-bottom: 0px; 
      }
      ul{
        li::before{
            top: 9px;  
          }
        }
      }
    }
  
`

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle