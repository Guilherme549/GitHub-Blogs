import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";

export const SearchPostFormContainer = styled.form`
    width: 54rem;

    input {
        ${mixins.fonts.textM}
        width: 100%;
        height: 3.12rem;
        padding: 16px;

        background-color: ${props => props.theme.colors["base-input"]};
        color: ${props => props.theme.colors["base-label"]};

        border: 2px solid ${props => props.theme.colors["base-border"]};
        border-radius: 6px;

        &:active {
            color: ${props => props.theme.colors["base-text"]};
            border-color: ${props => props.theme.colors.blue};
        }
    }

`