import styled from "styled-components"
import { mixins } from "../../../styles/mixins"

// ProfileInto

export const ProfileInto = styled.section`
    gap: 25px;
    display: flex;
    position: relative;
    margin-top: -6.06rem;

    width: 54rem;
    padding: 32px 40px;

    background-color: ${props => props.theme.colors["base-profile"]};
    border-radius: 10px;
    box-shadow: 0px 2px 28px 0px #000000;

    img {
        border-radius: 8px;
        width: 148px;
        height: 148px;
    }
`

export const Title = styled.div`
    
    display: flex;
    justify-content: space-between;
    width: 38.35rem;

    h1 {
        
        ${mixins.fonts.titleL}
        color: ${props => props.theme.colors["base-title"]};
    }

    a {
        ${mixins.fonts.link}
        text-decoration: none;
        color: ${props => props.theme.colors.blue};
        text-transform: uppercase;
        svg {
            margin-left: 5px;
        }
    }

`

export const Description = styled.div`
    ${mixins.fonts.textM}
    margin: 10px 0 30px;
`

export const UserStats = styled.div`
    ${mixins.fonts.textM}
    
    span {
        margin-right: 27px;
        display: inline-flex;
        align-items: center;
    }
    
    img {
        opacity: 0.5;
        margin-right: 6px;
        height: 18px;
        width: 18px;
    }
`

// PostInto

export const PostInto = styled.section`
    gap: 25px;
    display: flex;
    position: relative;
    margin-top: -6.06rem;

    width: 54rem;
    padding: 32px 40px;

    background-color: ${props => props.theme.colors["base-profile"]};
    border-radius: 10px;
    box-shadow: 0px 2px 28px 0px #000000;
`

export const LinksStyle = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50rem;

    a {
        ${mixins.fonts.link}
        text-decoration: none;
        color: ${props => props.theme.colors.blue};
        text-transform: uppercase;
        
        svg {
            margin: 0 7px 0 7px;
        }
    }
`

export const Title1 = styled.h1`
     ${mixins.fonts.titleL}
     color: ${props => props.theme.colors["base-title"]};

     width: 50rem;
     height: 1.93rem;

     margin: 17px 0 13px;
`