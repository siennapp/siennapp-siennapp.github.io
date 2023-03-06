import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import Footer from 'components/Common/Footer'
import Header from 'components/Common/Header'

type TemplateProps = {
  children: ReactNode
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  overflow: auto ;
`

const Template: FunctionComponent<TemplateProps> = function ({ children }) {
  return (
    <Container>
      <GlobalStyle />
      <Header/>
      {children}
      <Footer />
    </Container>
  )
}

export default Template
