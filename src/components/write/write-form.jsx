import React from 'react'
import { useState, useRef } from 'react'
import styled from 'styled-components'

import Button from '../ui/button'
import ImageIcon from '../assets/icons/image-icon.svg'
import FolderIcon from '../assets/icons/folder-icon.svg'
import ClipIcon from '../assets/icons/clip-icon.svg'
import ContainerIcon from '../assets/icons/container-icon.svg'

const FormContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    min-height: 65vh;
`;

const WriteContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    flex-grow: 1;
`;

const IconRow = styled.div`
    display: flex;
    gap: 10px;
`;

const TitleInput = styled.input`
    width: auto;
    height: 47px;
    border: none;
    font-size: ${(props) => props.theme.fontSizes.mediumLarge};
    font-weight: 700;
`;

const BodyInput = styled.textarea`
    width: auto;
    height: 24px;
    border: none;
    resize: none;
    margin-top: 20px;
    font-size: ${(props) => props.theme.fontSizes.small};
    color: ${(props) => props.theme.colors.grayscale[800]};
    font-weight: 700;
    font-family: Segoe UI;
    overflow: hidden;
    line-height: 1.5;
`;

const UploadButton = styled.div`
    align-self: flex-end;
`;

export default function WriteForm() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const textAreaRef = useRef(null);

    const handleTitleClick = (value) => {
        setTitle(value);
    }

    const handleBodyClick = (value) => {
        setBody(value);
    }

    const handleInput = (e) => {
        const textarea = textAreaRef.current;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
        setText(e.target.value);
    };

    return (
        <FormContainer>
            <IconRow>
                <img src={ImageIcon} alt="Icon" width="25" height="25" />
                <img src={FolderIcon} alt="Icon" width="25" height="25" />
                <img src={ClipIcon} alt="Icon" width="25" height="25" />
                <img src={ContainerIcon} alt="Icon" width="25" height="25" />
            </IconRow>

            <WriteContainer>
                <TitleInput 
                    value={title} 
                    onClick={(e) => handleTitleClick(e.target.value)}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="글 제목"
                ></TitleInput>
                <BodyInput 
                    ref={textAreaRef}
                    value={body}
                    onClick={(e) => handleBodyClick(e.target.value)}
                    onChange={(e) => setBody(e.target.value)}
                    onInput={handleInput}
                    placeholder="내용을 입력하세요"
                ></BodyInput>
            </WriteContainer>
            
            <UploadButton>
                <Button
                    variant="primary-700"
                    width="113px"
                    height="48px"
                    borderColor="primary-800"
                    style={{ color: 'white', fontWeight: '700' }}
                >
                    게시
                </Button>
            </UploadButton>
        </FormContainer>
    );
}