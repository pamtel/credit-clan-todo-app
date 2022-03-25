import styled from "styled-components";
import {SimpleButton} from "../TodoForm/todoForm.styled";
import {mobileBreakpoint} from "../../styles/global";

export const DeleteButton = styled(SimpleButton)`
  display: none;
  
  &.active {
    display: inline; 
  }
  
  @media only screen and (max-width: ${mobileBreakpoint}) {
    display: inline;
  }
`