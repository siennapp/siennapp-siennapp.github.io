import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const Background = styled.div`
  width: 100%;
  background: linear-gradient(-45deg, rgb(68, 89, 110), rgb(164, 203, 184)) 0px 0px repeat scroll transparent;

`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  max-width: 960px;
  height: 40vh;
  margin: 0 auto;
  padding: 15px; 

`

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
`

const Title = styled.div`
  margin-top: 5px;
  font-size: 42px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;

`

const Profile: FunctionComponent = function () {
  return (
    <Background>
      <Wrapper>
        <div>
          <SubTitle>Work Portfolio</SubTitle>
          {/* <Title>I'm Junior Frontend Developer Hyun.</Title> */}
        </div>
      </Wrapper>
    </Background>
  )
}

export default Profile