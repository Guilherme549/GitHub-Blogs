import { Link } from "react-router-dom";
import { Content, Post, Title } from "./styles";
import ReactMarkdown from 'react-markdown';
import { Issue } from "../../../../contexts/PostsContext";
import { dateFormatter } from "../../../../utils/formatter";

type Props = {
    post: Issue
}

export function Posts({ post }: Props) {
    return (
        <Post>
            <Link to='/post'>
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
