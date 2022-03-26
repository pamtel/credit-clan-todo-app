import styled from 'styled-components';
import {
  backgroundColor,
  bgImageDesktop,
  bgImageMobile,
  placeholderColor,
  textColor,
} from '../../styles/theme';
import { mobileBreakpoint } from '../../styles/global';

export const MainContainer = styled.main`
  display: flex;
  min-height: 100vh;
  color: ${textColor};
  background-color: ${backgroundColor};

  transition: all 150ms ease-in-out;
`;

export const TodoContainer = styled.section`
  max-width: 600px;
  width: 100%;

  margin: 0 auto;
  padding: 3rem;
  z-index: 1;

  //BACKGROUND IMAGE
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    z-index: -1;

    background-position: top;
    background-repeat: no-repeat;
    background-image: url(${bgImageDesktop});
  }

  @media only screen and (max-width: ${mobileBreakpoint}) {
    & {
      padding: 2.5rem 1.5rem;
    }

    &:before {
      background-image: url(${bgImageMobile});
      background-size: contain;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const IconThemeContainer = styled.div`
  cursor: pointer;
`;

export const Title = styled.h1`
  text-transform: uppercase;
  letter-spacing: 1rem;
  font-family: 'JosefinSans-Bold', sans-serif;
  font-weight: bolder;
  font-size: 2rem;
  color: white;
`;

export const TodoFooter = styled.footer`
  text-align: center;
  font-size: 0.8rem;
  color: ${placeholderColor};
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 2rem;

  .attribution {
    margin-top: 1rem;

    & > p {
      margin-top: 0.5rem;
    }
  }

  @media only screen and (max-width: ${mobileBreakpoint}) {
    margin-top: calc(40px + 2.5rem);
  }
`;
