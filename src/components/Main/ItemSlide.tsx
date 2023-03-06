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



const ListWrap = styled.div`
  flex-grow: 1;
    display: flex;
    align-items: flex-start;
    //position: relative;
    min-height: 500px;

`

const Background = styled.div`
  width: 100%;
  position: absolute;
  top:45%;
  transform: translateY(-40%);

`
const ListTitle = styled.h2`
  padding-left: 30px;
  margin-bottom: 5px; 
  font-size: 52px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
`
const settings = {
	    spaceBetween: 10,
    	// navigation: { // 좌우 버튼 커스텀 
    	// 	  prevEl: 'prevButton' ,// 이전 버튼 Ref 또는 className
      //   	nextEl: 'nextButton'// 다음 버튼 Ref 또는 className
    	// },
      navigation: true,
      slidesPerView:'auto',
      modules: [Pagination]
      // centeredSlides:true
};
const ItemList: FunctionComponent<PostListProps> = function ({posts}) {
    return (
      <ListWrap>
        
        <Background>
           <ListTitle>Work Portfolio</ListTitle>
            <Swiper {...settings} >
              {posts.map(
                ({
                  node: { id, fields: { slug },frontmatter },
                }: PostListItemType) => (
                  <SwiperSlide>
                    <PostItem 
                      key={id}
                      link={slug}
                      {...frontmatter} />
                  </SwiperSlide>
                )
              )}
            </Swiper>
        </Background>
      </ListWrap>
      
    )
  }
  
  export default ItemList