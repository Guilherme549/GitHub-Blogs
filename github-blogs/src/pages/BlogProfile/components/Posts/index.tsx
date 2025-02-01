import { Link } from "react-router-dom";
import { Content, Post, Title } from "./styles";
import ReactMarkdown from 'react-markdown';
import { Issue } from "../../../../contexts/PostsContext";
import { dateFormatter } from "../../../../utils/formatter";

export type PostsProps = {
    post: Issue
}

export function Posts({ post }: PostsProps) {
    return (
        <Post>
            <Link to={
                {
                    pathname: '/post',
                    search: `?id=${post.id}&title=${encodeURIComponent(post.title)}&created_at=${encodeURIComponent(post.created_at)}`
                }
            }>
                <Title>
                    <h3>
                        {post.title}
                    </h3>
                    <span>{dateFormatter.format(new Date(post.created_at))}</span>
                </Title>
                <Content>
                        <ReactMarkdown components={{
                            h1: () => null, // Não renderiza <h1>
                            h2: () => null,
                        }}>
                            {post.body.substring(0, 230)+ `...`}
                        </ReactMarkdown>
                        
                </Content>
            </Link>
        </Post>
    );
}
