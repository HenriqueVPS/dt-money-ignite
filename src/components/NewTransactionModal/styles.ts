import styled from "styled-components";
import { darken, transparentize } from 'polished'

export const Container = styled.form`
    h2 { 
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        border: 1px solid #d7d7d7;
        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type=submit] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #fff;
        font-weight: 500;
        font-size: 1.2rem;
        border-radius: 0.25rem;
        border: none;
        margin-top: 1.5rem;
        transition: 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;
 
export const TransactionTypeContainer = styled.div`
    margin: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

`;

interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors = {
    red: '#e52e4d',
    green: '#33cc95'
}

export const RadioBox = styled.button<RadioBoxProps>`
        height: 4rem;
        border: 1px solid #d7d7d7;
        border-radius: 0.25rem;
        background: ${(props) => props.isActive ? transparentize(0.9, colors[props.activeColor]) : 'transparent'};
        display: flex;
        align-items: center;
        justify-content: center;
        transition: border-color 0.2s;


        &:hover {
            border-color: ${darken(0.1, '#d7d7d7')};
        }

        img {
            width: 1.4rem;
            height: 1.4rem;
        }

        span {
            display: inline-block;
            margin: 0 1rem;
            font-size: 1rem;
            color: var(--text-title);
        }
`;
