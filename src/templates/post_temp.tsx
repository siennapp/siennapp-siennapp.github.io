import React, { FunctionComponent } from 'react'
import { graphql, Link } from 'gatsby'
import Template from 'components/Common/Template'
import { PostFrontmatterType} from 'types/PostItem.types'
// import PostHead from 'components/Common/PostHeader'
import styled from '@emotion/styled'
import {  AiOutlineCalendar, 
          AiOutlineUser,
          AiOutlineUnorderedList, 
          AiOutlineLink, 
          AiOutlineSwapLeft } from 'react-icons/ai';


import PostContent from 'components/Common/PostContent'

type PostTemplateProps = {}
const TemplateBg = styled.div`
  width: 100%; 
  height: 100%; 
  background-color: #F6F6F6; 
  padding: 120px 0; 
`
const PostWrap= styled.div`

  padding: 50px 60px; 
  background-color: #ffffff; 
  border-radius: 10px;
  @media (max-width: 768px) {
    padding: 30px 50px; 
  }
`
const Title = styled.h2`
  font-size: 40px; 
  font-weight: 700;
  color: #333; 
  margin-bottom: 28px;
  
`
const InfoList = styled.div`
  border-bottom: 1px solid #e5e5e5; 
  margin-bottom: 80px;
  padding-bottom: 50px; 
  margin-bottom: 80px;

`
const InfoLine = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0; 
  flex-wrap: wrap;
  b{
    width: 80px;
    font-size: 16px;
    color: #3dd065;
    padding: 0 10px;
    margin-right: 12px; 
  }
  span{
    color: #555555; 
    font-size: 16px; 
  }
  a{
    text-decoration: underline !important;
    color: #555555 !important;
    transition: all .15s;
    &:hover{
      color: #3dd065 !important; 
    }
    /* */
  }
`
const Label = styled.span`
    padding: 3px 5px;
    border: 1px solid #DEDEDE;
    color: #333333;
    border-radius: 5px;
    display: inline-block;
    margin-right: 4px;
    font-size: 11px;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
`

const ContentImg = styled.img`
  display: block;
  width: 70%;
  margin: 0 auto; 
  @media (max-width: 991px) {
    width: 100%
  }
`
const GoBack = styled(Link)`
  position: fixed; 
  top: 70%; 
  right: 8px; 
  background: #3dd065; 
  width: 60px; 
  height: 60px; 
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  transition: .3s ease-out; 
  svg{
    color: #ffffff; 
  }
  &:hover{
    transform: translateX(-10px);
  }
`
const PostTemplate: FunctionComponent<PostTemplateProps> = function ({
   data: {
    allMarkdownRemark: { edges },
  },
}) {
  const {
    node: {
      html,
      frontmatter: {
        title,
        startDate,
        endDate,
        skills,
        contentImg: {
          publicURL
        },
        link
      },
    },
  } = edges[0]
// const PostTemplate: FunctionComponent<PostTemplateProps> = function (props) {
//   console.log(props)

  return (
  <Template>
     <TemplateBg>
        <div className='container'>
            <Title>{title}</Title>
            <PostWrap>
           
           
              <GoBack to={'/'}><AiOutlineSwapLeft size={28}/></GoBack>
              
              <div className='info-list'>
                <InfoList>
                  <InfoLine><AiOutlineCalendar size={22}/><b>투입기간</b><span> {startDate} ~ {endDate}</span></InfoLine>
                  <InfoLine><AiOutlineUnorderedList size={22}/> 
                  <b>사용언어</b>
                   {
                    skills.map( skill => <Label>{skill}</Label>)
                  }
                  </InfoLine>
                  <InfoLine> <AiOutlineLink size={22}/> <b>URL</b> {link? <a href={link} target={'_blank'}>{link}</a> : '-'}</InfoLine>
                  
                </InfoList>
              </div>
             
                <ContentImg src={publicURL}/> 
              
                <div className='post-content'>
                  <PostContent html={html} />
                </div>
              
            
            
            </PostWrap>
            </div>
            </TemplateBg>
        </Template>
    )
}

export default PostTemplate


export type PostPageItemType = {
  node: {
    html: string
    frontmatter: PostFrontmatterType
  }
}
export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            startDate
            endDate
            skills
            contentImg {
              publicURL
            }
            link
           
          }
        }
      }
    }
  }
`