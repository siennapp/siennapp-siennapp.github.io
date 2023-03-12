import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const FooterWrapper = styled.div`
  display: grid;
  height: 80px;
  place-items: center;
  margin-top: auto;
  padding: 20px 0;
  font-size: .813rem;
  text-align: center;
  line-height: 1.5;
`

const Footer: FunctionComponent = function () {
  return (
    <FooterWrapper>
      Thank You for Visiting My Portfolio.
      <br />© 2023 Developer Sienna, Powered By Gatsby.
    </FooterWrapper>
  )
}

export default Footer