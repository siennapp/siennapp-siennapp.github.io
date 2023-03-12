import React, { FunctionComponent } from 'react'
import { graphql, Link } from 'gatsby'
import Template from 'components/Common/Template'
import { PostFrontmatterType} from 'types/PostItem.types'
// import PostHead from 'components/Common/PostHeader'
import styled from '@emotion/styled'
import {  AiOutlineCalendar, 
          AiFillExclamationCircle,
          AiOutlineUnorderedList, 
          AiOutlineLink, 
          AiOutlineSwapLeft,
          AiOutlineTeam } from 'react-icons/ai';


import PostContent from 'components/Common/PostContent'

type PostTemplateProps = {
  data: {
    allMarkdownRemark: {
      edges:{
        node: {
          id: string
          fields: {
            slug: string
          }
          frontmatter: {
            title: string
            startDate: string
            endDate: string
            skills: string[]
            notice: string
            contentImg: {
              publicURL: string
            }
            employment: string
            link: string
          }
        }
      }
    }
  }
}
const TemplateBg = styled.div`
  width: 100%; 
  height: 100%; 
  background-color: #F6F6F6; 
  background-color: #0b0b1a;
  padding: 120px 0; 
`
const PostWrap= styled.div`
  padding: 50px 60px; 
  background-color: #ffffff; 
  border-radius: 10px;
  @media (max-width: 768px) {
    padding: 30px; 
  }
  @media (max-width: 480px) {
    padding: 30px 20px; 
  }
`
const Title = styled.h2`
  font-size: 2.25rem; 
  line-height: 1.4em;
  color: #333; 
  letter-spacing: -0.03em;
  margin-bottom: 48px;
  @media (max-width: 768px) {
    font-size: 1.75rem; 
  }
  @media (max-width: 480px) {
    margin-bottom: 36px; 
  }
`
const InfoList = styled.div`
  border-bottom: 1px solid #e5e5e5; 
  margin-bottom: 80px;
  padding-bottom: 40px; 
  margin-bottom: 80px;
`
const InfoLine = styled.div`
  min-height: 32px;
  display: flex;
  align-items: center;
  margin: 4px 0;
  flex-wrap: wrap;
  b{
    width: 80px;
    font-size: 1rem;
    line-height: 30px;
    color: #3dd065;
    padding: 0 10px;
    margin-right: 12px; 
    @media (max-width: 640px) {
      margin-right: 8px;
      line-height: 28px;
    }
  }
  span{
    color: #555555; 
    font-size: 1rem; 
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
  @media (max-width: 640px) {
    
    min-height: 28px;
  }
`
const Label = styled.span`
    padding: 3px 5px;
    border: 1px solid #DEDEDE;
    color: #333333;
    border-radius: 5px;
    display: inline-block;
    margin-right: 4px;
    font-size: .813rem !important;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    margin-top: 3px; 
    margin-bottom: 3px; 
`

const ContentImg = styled.img`
  display: block;
  width: 90%;
  margin: 0 auto; 
  @media (max-width: 991px) {
    width: 100%
  }
`
const GoBack = styled(Link)`
  position: fixed; 
  top: 55vh; 
  left: 50%;
  transform : translateX(570px) ;
  background: #3dd065; 
  width: 60px; 
  height: 60px; 
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  transition: .18s ease-in; 
  z-index: 999;
  svg{
    color: #ffffff; 
  }
  &:hover{
    transform: translateX(560px);
  }
  @media (max-width: 1264px) {
    left: 100%;
    width: 50px; 
    height: 50px; 
    transform : translateX(-60px) ;
    &:hover{
      transform: translateX(-70px);
    }
  }
  @media (max-width: 600px) {
    left: 100%;
    width: 40px; 
    height: 40px; 
    top: 70%;
    transform : translateX(-45px) ;
 
  }
 
`
const LabelWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 640px) {
    margin-top: 10px; 
    width: 100%
  }
`
const InfoBox = styled.div`
  /* @media (max-width: 640px) {
    width: 100%
  } */
`
const Notice = styled.span`
  color: #666666; 
  font-size: .875rem;
  display: flex;
  align-items: center;
  svg{
    fill: #eb8948 !important;
    margin-right: 5px; 
  }
  position: relative;
  top: 25px;
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
        link,
        employment,
        notice
      },
    },
  } = edges[0]
// const PostTemplate: FunctionComponent<PostTemplateProps> = function (props) {
//   console.log(props)

  return (
  <Template>
     <TemplateBg>
        <div className='container'>
            <PostWrap>
              <GoBack to={'/'}><AiOutlineSwapLeft size={28}/></GoBack>
              <Title>{title}</Title>
              <div className='info-list'>
                <InfoList>
                  <InfoLine><AiOutlineTeam size={22}/><b>소속</b><InfoBox>{employment}</InfoBox></InfoLine>
                  <InfoLine><AiOutlineCalendar size={22}/><b>작업기간</b><InfoBox> {startDate} ~ {endDate}</InfoBox></InfoLine>
                  <InfoLine> <AiOutlineLink size={22}/> <b>URL</b> {link?<InfoBox><a href={link} target={'_blank'}>{link}</a> </InfoBox>: '-'}</InfoLine>

                  <InfoLine><AiOutlineUnorderedList size={22}/> 
                  <b>사용기술</b>
                  <LabelWrap>
                  {
                    skills.map( skill => <Label>{skill}</Label>)
                  }
                  </LabelWrap>
                   
                  </InfoLine>
                  {notice? <Notice><AiFillExclamationCircle size={18} />{notice}</Notice> : false}
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
            employment
            notice
          }
        }
      }
    }
  }
`