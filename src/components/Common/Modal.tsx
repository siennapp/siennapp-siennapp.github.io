import React from 'react'
import { Link } from 'gatsby'
import { PostFrontmatterType } from 'types/PostItem.types'
import styled from '@emotion/styled'

interface ModalDefaultType {
    onClickToggleModal: () => void;
  }
  
  function Modal({
    onClickToggleModal,
    // children,
  //}: PropsWithChildren<ModalDefaultType>) {
  }){
    return (
      <ModalContainer>
        <DialogBox>dd</DialogBox>
        <Backdrop
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
  
            if (onClickToggleModal) {
              onClickToggleModal();
            }
          }}
        />
      </ModalContainer>
    );
  }
  
  const ModalContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0; top: 0;
    z-index: 100;
  `;
  
  const DialogBox = styled.dialog`
    width: 800px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    border-radius: 3px;
    box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
    box-sizing: border-box;
    background-color: white;
    z-index: 102;
  `;
  
  const Backdrop = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: 101;
    background-color: rgba(0, 0, 0, 0.2);
  `;
  
  export default Modal;