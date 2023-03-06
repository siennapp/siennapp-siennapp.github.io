import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostItem from './PostItem'
import { PostListItemType } from 'types/PostItem.types'

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
// import SwiperCore, { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

type PostListProps = {
  posts: PostListItemType[]
}


const TitleBox = styled.div`
  padding-top: 70px; 
  height: 420px; 
  display: flex;
  align-items: center;
  justify-content: center;
`
const ListTitle = styled.h2`
  padding-left: 30px;
  margin-bottom: 5px; 
  font-size: 60px;
  font-weight: 800;
  color: #ffffff; 
  font-family: 'Montserrat', sans-serif;
`

const List = styled.div` 
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;
  padding-bottom: 140px;
  @media (max-width: 991px) {
    grid-template-columns: 1fr 1fr ;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`


const ItemList: FunctionComponent<PostListProps> = function ({posts}) {
    return (
      <div className='container'>
          <TitleBox>
          <ListTitle>Work Portfolio</ListTitle>
          </TitleBox>
            <List>
            {posts.map(
              ({
                node: { id, fields: { slug },frontmatter },
              }: PostListItemType) => (
                <PostItem {...frontmatter} link={slug} key={id} />
              )
            )}
            </List>
      </div>
      
    )
  }
  
  export default ItemList