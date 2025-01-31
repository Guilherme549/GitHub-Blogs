import { Link } from "react-router-dom";
import { Content, Post, Title } from "./styles";

export function Posts(){
    return (
        <Post>
            <Link to='/post'>
                <Title>
                    <h3>
                    JavaScript data types and data structures
                    </h3>
                    <span>Há 1 dia</span>
                </Title>
                <Content>
                    <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in </p>
                </Content>
            </Link>
        </Post>
    )
}