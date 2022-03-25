import styled from 'styled-components';
import {
  auxiliarColor,
  bgColorComponents,
  hoverEffect,
  inactiveColor,
  placeholderColor,
  textColor,
} from '../../styles/theme';
import { mobileBreakpoint } from '../../styles/global';
import checkIcon from '../../assets/images/icon-check.svg';

export const ItemGroup = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  position: relative;

  &.individual {
    background-color: ${bgColorComponents};
    border-radius: 5px;
  }

  &.list-item {
    border-bottom: 1px solid ${auxiliarColor};
  }
`;

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  width: 100%;

  & > input[type='checkbox'] {
    opacity: 0;
    width: 1rem;
    height: 1rem;

    & ~ span {
      cursor: pointer;

      &:before,
      &:after {
        content: '';
        width: 1.2rem;
        height: 1.2rem;
        position: absolute;
        left: 1rem;
        border-radius: 50%;
        top: 26%;
      }

      &:before {
        border: 1px solid ${placeholderColor};
      }
    }

    &:checked ~ span {
      text-decoration: line-through;
      color: ${inactiveColor};

      &:before {
        border: var(--check-background);
        background: var(--check-background);
      }
      &:after {
        content: '';
        background-image: url(${checkIcon});
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }
`;

export const InputText = styled.input`
  font-family: 'JosefinSans-Regular', sans-serif;
  font-size: 1rem;
  color: ${textColor};
  width: 100%;
  height: 30px;
  padding: 0 1rem;
  border: 0;
  background-color: ${bgColorComponents};

  &::placeholder {
    color: ${placeholderColor};
  }
`;

export const Text = styled.span`
  font-size: 1rem;
  color: ${textColor};
  display: flex;
  align-items: center;
  min-height: 30px;
  padding: 0 1rem;

  @media only screen and (max-width: ${mobileBreakpoint}) {
    font-size: 0.8rem;
  }
`;

export const ListContainer = styled.div`
  background-color: ${bgColorComponents};
  border-radius: 5px;
  margin: 1rem 0;
  box-shadow: 0 3.4px 2.7px rgba(0, 0, 0, 0.023),
    0 8.7px 6.9px rgba(0, 0, 0, 0.034), 0 17.7px 14.2px rgba(0, 0, 0, 0.043),
    0 36.5px 29.2px rgba(0, 0, 0, 0.052), 0 100px 80px rgba(0, 0, 0, 0.07);
`;

export const ListFooter = styled.footer`
  position: relative;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  font-size: 0.7rem;
  padding: 1rem;
  height: 40px;
`;

export const FilterOptions = styled.div`
  font-family: 'JosefinSans-Bold', sans-serif;
  font-size: 0.8rem;
  order: 0;

  & > button {
    padding: 0 0.5rem;
  }

  @media only screen and (max-width: ${mobileBreakpoint}) {
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${bgColorComponents};
    border-radius: 5px;

    width: 100%;
    height: 40px;
    order: 1;
    margin: 3rem 0 2rem -1rem;
  }
`;

// BUTTON
export const SimpleButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  box-shadow: none;
  outline: 0;
`;

export const SmallButton = styled(SimpleButton)`
  font-family: inherit;
  font-size: inherit;
  color: inherit;

  &:hover {
    color: ${hoverEffect};
  }
  &.active {
    color: var(--bright-blue);
  }
`;
