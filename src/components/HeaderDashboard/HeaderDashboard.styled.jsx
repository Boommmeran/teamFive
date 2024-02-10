import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 26px;

  @media (max-width: 767px) {
    padding: 14px 0px;
  }

  @media (min-width: 768px) {
    padding: 26px 0px;
  }

  @media (min-width: 1440px) {
    padding: 10px 0px;
  }
`;

export const BoardName = styled.h3`
  font-family: 'Poppins-Medium';
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;

  color: var(--primaryTextColor);

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const FilterBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  font-family: 'Poppins-Medium';

  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;

  border: none;

  color: var(--secondaryTextColor);
  opacity: 0.8;
  background-color: inherit;

  stroke: var(--secondaryTextColor);
  stroke-opacity: 0.8;
  transition: opacity var(--transition);
  > svg {
    width: 16px;
    height: 16px;
  }

  cursor: pointer;
  &:hover,
  &:focus {
    opacity: 1;
  }
`;
