import styled, { css } from 'styled-components';
import { IButtonStyled } from './types'


export const ButtonContainer = styled.button<IButtonStyled>`
    width: 100%;
    height: 42px;
    background-color: #d3d3d3;
    color: #FFF;

    border: 1px solid #d3d3d3;
    border-radius: 21px;

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }

    ${({ variant }) => variant !== "primary" && css`
    min-width:167px;
    height: 33px;
    background: #81259D;
    color: #FFFFFF;
    border-radius:22px;
    &:hover{
        opacity:0.6;
        cursor: pointer;
    }
    &::after{
        content: '';
        position: absolute;
    //    border: 1px solid #81259D;
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height:calc(100% +10px);
        border-radius:22px;
        
    }
`}
`