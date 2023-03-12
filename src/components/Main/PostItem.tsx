import React, { FunctionComponent,  useState, useCallback } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { PostFrontmatterType } from 'types/PostItem.types'
import { GatsbyImage} from 'gatsby-plugin-image'

type PostItemProps = PostFrontmatterType & { link: string }


const PostItemWrapper = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  transition: 0.3s box-shadow;
  background-color: #ffffff;
  cursor: pointer;
  transform: translateY(0);
  transition: all .2s ease-out;
  &:hover {
    transform: translateY(-20px);
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);
  }
  @media (max-width: 768px) {
    margin-bottom: 10px; 
  }
`
const ThumbContainer = styled.div`
    width: 100%; 
    height: 260px;
    max-height: 400px; 
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px 10px 0 0;
    overflow: hidden;
    position: relative; 
    background-size: cover;
    background-position: center center;
    background-repeat: none;
`
const ThumbnailImage = styled.img`
  width: 100%;
  min-width: 367px;
  height: auto;
  object-fit: cover;
  margin: 0; 
`
const Content = styled.div`
    height: 230px;
    padding: 32px 30px; 
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    @media (max-width: 640px) {
      height: auto;
    }
`

const Date = styled.span`
    font-size: 1rem;
    line-height: 1em ;
    color: #999999;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    display: inline-block;
    margin-bottom: 12px; 
`
const Title = styled.h2`
    font-size: 1.438rem;
    height: 62px;
    line-height: 1.313em;
    letter-spacing: -0.04em;
    margin-bottom: 14px;
    @media (max-width: 640px) {
      height: auto;
      margin-bottom: 30px;
    }
`
const LabelWrap = styled.div`
    width: 100%; 
    display: flex;
    justify-self: end;
    flex-grow: 1;
    align-items: flex-end;
    flex-wrap: wrap;
`
const Label = styled.span`
    padding: 3px 5px;
    border: 1px solid #DEDEDE;
    color: #333333;
    border-radius: 4px;
    display: inline-block;
    margin-right: 3px;
    font-size: .75rem;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
`
const PostItem: FunctionComponent<PostItemProps> = function ({
    title,
    startDate,
    endDate,
    skills,
    thumbnail:{publicURL},
    link,
  }) {
    
    return (
        <PostItemWrapper to={link} >
        {/* <PostItemWrapper ={onClickToggleModal} > */}
            <ThumbContainer style={{backgroundImage: `url(${publicURL})`}}>
               

            </ThumbContainer>
            <Content>
                <Date>{startDate} ~ {endDate}</Date>
                <Title>{title}</Title>
                
                <LabelWrap>{skills.map( skill => (
                    <Label>{skill}</Label>
                ))}</LabelWrap>
            </Content>
          
        </PostItemWrapper>
    )
  }
  
  export default PostItem

//   {isOpenModal && (
//     <Modal onClickToggleModal={onClickToggleModal}>
//     이곳에 children이 들어갑니다.
//     </Modal>
// )}