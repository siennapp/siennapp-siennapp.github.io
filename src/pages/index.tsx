import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from '../components/Common/GlobalStyle'
import Profile from '../components/Main/Profile'
import ItemList from '../components/Main/ItemList'
import Footer from '../components/Common/Footer'
import { graphql } from 'gatsby'
import { PostListItemType } from 'types/PostItem.types'
import Template from 'components/Common/Template'

type IndexPageProps = {
  location: {
    search: string
  }
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
  }
}
const ContentSection = styled.div`
  flex-grow: 1;
  min-height: calc( 100vh - 80px );
  position: relative;
  background-color: #F6F6F6; 
  &::before{
    content:'';
    width: 100%; 
    height: 490px; 
    position: absolute;
    left: 0; top: 0; 
    background: #0b0b1a;
  }
  @media (max-width: 640px) {
    &::before{
      height: 70vw; 
    }
  }
`
const IndexPage: FunctionComponent<IndexPageProps> = function ({
  location: { search },
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  return (
    <Template>
      {/* <Profile /> */}
      <ContentSection>
        <ItemList posts={edges}/>
      </ContentSection>
    </Template>

  );
};

export default IndexPage

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [ frontmatter___endDate] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            startDate
            endDate
            skills
            thumbnail {
              publicURL
            }
            link
          }
        }
      }
    }
  }
`