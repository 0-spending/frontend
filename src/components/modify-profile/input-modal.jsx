import React, { useState } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 40px 20px;
  border-radius: 20px;
  width: 400px;
  height: 200px;
  text-align: center;
`;

const ModalInput = styled.input`
    width: 350px;
    height: 40px;
    border: 2px solid ${(props) => props.theme.colors.grayscale[500]};
    font-weight: 800;
    color: ${(props) => props.theme.colors.grayscale[900]};
    border-radius: 8px;
    margin-bottom: 40px;
    padding-left: 10px;
`;

const ModalTitle = styled.h2`
  color: ${(props) => props.theme.colors.grayscale[800]};
  text-align: left;
  width: 100%;
  font-size: 20px;
  padding-left: 23px;
  margin-bottom: 23px;
`;

const CloseButton = styled.button`
  background: ${(props) => props.theme.colors.grayscale[200]};
  border: 2px solid ${(props) => props.theme.colors.primary[300]};
  padding: 8px 20px;
  cursor: pointer;
  border-radius: 8px;
  margin-right: 30px;
`;

const PressButton = styled.button`
  background: ${(props) => props.theme.colors.primary[700]};
  border: 2px solid ${(props) => props.theme.colors.primary[800]};
  color: white;
  padding: 8px 20px;
  cursor: pointer;
  border-radius: 8px;
`;

export default function InputModal({ onClose, setNickname }) {
  const [inputValue, setInputValue] = useState('');

    const handleConfirm = () => {
        setNickname(inputValue);
        onClose();
    }

    return (
        <ModalOverlay>
            <ModalContent>
                <ModalTitle>닉네임</ModalTitle>
                <ModalInput 
                  value={inputValue} 
                  onChange={(e) => setInputValue(e.target.value)}
                  />
                <CloseButton onClick={onClose}>취소</CloseButton>
                <PressButton onClick={handleConfirm}>확인</PressButton>
            </ModalContent>
        </ModalOverlay>
    )
}