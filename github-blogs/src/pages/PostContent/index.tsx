import { HeaderProfile } from "../../components/Profile/HeaderProfile";
import { ContentContainer } from "./styles";

export function PostContent(){
    return(
        <>
        <HeaderProfile styleSelect="PostInto"/>

        <ContentContainer>
            <div>
                <p>
                Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
                <br />
                <br />
                <a href="#">Dynamic typing</a>
                <br />
                JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
                </p>
            </div>
            <pre >
            <code>let foo = 42;    // foo is now a number</code>
            <code>foo = `bar`;    // foo is now a string</code>
            <code>foo = true;    // foo is now a boolean</code>
            
            </pre>
        </ContentContainer>

        </>
    )
}