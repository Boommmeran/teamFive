import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 79px;
  height: 40px;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  color: var(--primaryTextColor);
`;

export const Avatar = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 5px;
`;

export const Button = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  color: var(--primaryTextColor);
  background: var(--headerBgColor);
  border: 0;
  cursor: pointer;
`;
