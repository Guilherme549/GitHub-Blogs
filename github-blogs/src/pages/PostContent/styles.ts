import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const ContentContainer = styled.div`
    width: 54rem;
    padding: 2.5rem;

    div{
        ${mixins.fonts.textM}
        width: 50rem;
        margin-bottom: 24px;
        
        a {
            color: ${props => props.theme.colors.blue};
        }
    }

    pre{
        background-color: ${props => props.theme.colors["base-post"]};

        width: 50rem;
        padding: 1rem;

        border-radius: 2px;

        code {
            ${mixins.fonts.code}
            display: block;
            color:  #D5DCE3;

            
        }
    }
    
`