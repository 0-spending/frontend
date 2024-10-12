import React,{ useState } from 'react'
import styled from 'styled-components'
import Button from '../ui/button'
import InputModal from './input-modal'

import AvatarIcon from '../../assets/icons/avatar.svg'
import NickNameIcon from '../../assets/icons/nickname-icon.svg'
import PasswordIcon from '../../assets/icons/password-icon.svg'
import Arrow from '../../assets/icons/arrow.svg'

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
    gap: 13px;
`;

const InputContainer = styled.div`
    width: 423px;
    position: relative;
    display: flex;
    align-items: center;
`;

const Input = styled.input`
    padding-left: 60px;
    padding-top: 5px;
    width: 400px;
    height: 52px;
    font-size: 14px;
    font-weight: 700;
    border-radius: 8px;
    border-width: 1px;
`;

const Icon = styled.img`
    position: absolute;
    left: 30px;
    width: 24px;
    height: 29px;
`;

const LeftAlignedButton = styled(Button)`
  justify-content: space-between;
  padding-left: 30px;
  font-size: 14px;
  font-weight: 800;
`;

export default function ModifyForm() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleNickNameClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <FormContainer>
            <img src={AvatarIcon} alt="Icon" width="88" height="88" style={{ margin: '20px' }} />
            <InputContainer>
                <Icon src={NickNameIcon} alt="Icon" width={24} height={24} />
                <Input type='text' placeholder='닉네임' onClick={handleNickNameClick} />
            </InputContainer>
            <InputContainer>
                <Icon src={PasswordIcon} alt="Icon" width={24} height={24} />
                <Input type='text' placeholder='비밀번호' />
            </InputContainer>
            <LeftAlignedButton width='423px' height='59px' variant='primary-100'>
                수정 완료
                <img src={Arrow} alt="Icon" width="20" height="20" />
            </LeftAlignedButton>
            <LeftAlignedButton width='423px' height='59px' variant='primary-100'>
                로그아웃
                <img src={Arrow} alt="Icon" width="20" height="20" />
            </LeftAlignedButton>

            {isModalOpen && <InputModal onClose={handleCloseModal} />}
        </FormContainer>
    )
}