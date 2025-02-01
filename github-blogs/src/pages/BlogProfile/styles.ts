import styled from "styled-components";
import { mixins } from "../../styles/mixins";

// Posts

export const SectionTitle = styled.div`
    display:  flex;
    justify-content: space-between;
    margin: 70px 0 14px;

    h3{
        ${mixins.fonts.titleS}
        color: ${props => props.theme.colors["base-title"]};
    }

    span {
        ${mixins.fonts.textS}
        color: ${props => props.theme.colors["base-span"]};
    }

`

export const PostCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
    grid-row-gap: 25px;
`


