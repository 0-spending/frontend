import React from 'react'
import { useState, useRef } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

import Button from '../ui/button'
import ImageIcon from '../../assets/icons/image-icon.svg'
import FolderIcon from '../../assets/icons/folder-icon.svg'
import ClipIcon from '../../assets/icons/clip-icon.svg'
import ContainerIcon from '../../assets/icons/container-icon.svg'

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
    margin-left: 5px;
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
    margin-top: 15px;
    font-size: ${(props) => props.theme.fontSizes.small};
    color: ${(props) => props.theme.colors.grayscale[800]};
    font-weight: 700;
    font-family: Segoe UI;
    overflow: hidden;
    line-height: 1.5;
    box-sizing: border-box;
`;

const UploadButton = styled.div`
    align-self: flex-end;
`;

const TodaySending = styled.div`
    font-weight: 1000;
    color: ${(props) => props.theme.colors.grayscale[800]};
    margin-top: 20px;
    margin-left: 2px;
`;

const PriceInput = styled.input`
    width: 100px;
    font-size: ${(props) => props.theme.fontSizes.small};
    color: ${(props) => props.theme.colors.grayscale[800]};
    font-weight: 1000;
    border: none;
    text-align: right;
`;

const MapContainer = styled.div`
    width: 600px;
    height: 260px;
    background-color: lightgray;
    margin-top: 20px;
`;

export default function WriteForm({ selectedCategory }) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const textAreaRef = useRef(null);
    const navigate = useNavigate();

    const handleTitleClick = (value) => {
        setTitle(value);
    }

    const handleBodyClick = (value) => {
        setBody(value);
    }

    const handleInput = (e) => {
        const textarea = textAreaRef.current;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight-25}px`;

        setBody(e.target.value);
    };

    const handlePosting = () => {
        navigate('/homelogin');
    }

    return (
        <FormContainer>
            <IconRow>
                <img src={ImageIcon} alt="Icon" width="20" height="20" />
                <img src={FolderIcon} alt="Icon" width="20" height="20" />
                <img src={ClipIcon} alt="Icon" width="20" height="20" />
                <img src={ContainerIcon} alt="Icon" width="20" height="20" />
            </IconRow>

            <WriteContainer>
                <TitleInput
                    value={title}
                    onClick={(e) => handleTitleClick(e.target.value)}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="글 제목"
                ></TitleInput>

                {selectedCategory === 0 && (
                    <>
                        <TodaySending>오늘 소비 금액: <PriceInput placeholder='____________'/>원</TodaySending>
                        <BodyInput
                            ref={textAreaRef}
                            value={body}
                            onClick={(e) => handleBodyClick(e.target.value)}
                            onChange={handleInput}
                            placeholder="내용을 입력하세요"
                        />
                    </>
                )}

                {selectedCategory === 2 && (
                    <>
                        <BodyInput
                            ref={textAreaRef}
                            value={body}
                            onChange={handleInput}
                            placeholder="내용을 입력하세요"
                        />
                        <MapContainer></MapContainer>
                    </>
                )}

                {selectedCategory !== 0 && selectedCategory !== 2 && (
                    <BodyInput
                        ref={textAreaRef}
                        value={body}
                        onChange={handleInput}
                        placeholder="내용을 입력하세요"
                    />
                )}
            </WriteContainer>

            <UploadButton>
                <Button
                    variant="primary-700"
                    width="113px"
                    height="48px"
                    borderColor="primary-800"
                    style={{ color: 'white', fontWeight: '700' }}
                    onClick = {handlePosting}
                >
                    게시
                </Button>
            </UploadButton>
        </FormContainer>
    );
}