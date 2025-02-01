import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";

export const Post = styled.div`

    width: 26rem;
    height: 16.25rem;
    padding: 30px;

    background-color: ${props => props.theme.colors["base-post"]};
    border-radius: 10px;

    a {
        text-decoration: none;
        color: inherit; 
    }

`

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    
    h3 {
        ${mixins.fonts.titleM}
        color: ${props => props.theme.colors["base-title"]};
        width: 283px;
        height: 64px;
    }

    span {
        ${mixins.fonts.textS}
        color: ${props => props.theme.colors["base-span"]};
        height: 22px;
        width: 77px;
    }
`

export const Content = styled.div`
    ${mixins.fonts.textM}

    margin: 20px 0px;

`
