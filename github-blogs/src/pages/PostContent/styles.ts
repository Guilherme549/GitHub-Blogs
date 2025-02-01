import styled from "styled-components";


export const ContentContainer = styled.div`
    width: 54rem;
    padding: 2.5rem;

    h1, h2 {
        margin-bottom: 15px;
        border-bottom: 1px solid ${props => props.theme.colors["base-border"]} ;
    }

    p, ul {
        margin-bottom: 24px;
    }
    
    li {
        margin-bottom: 14px;
    }

    a {
            color: ${props => props.theme.colors.blue};
        }

    
`