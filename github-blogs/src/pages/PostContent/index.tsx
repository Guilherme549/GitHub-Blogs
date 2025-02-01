import { useContext } from "react";
import { HeaderProfile } from "../../components/Profile/HeaderProfile";
import { ContentContainer } from "./styles";
import { PostsContext } from "../../contexts/PostsContext";
import { useLocation } from "react-router-dom";
import ReactMarkdown from 'react-markdown';

export function PostContent() {
    const { posts } = useContext(PostsContext);
    const location = useLocation();

    // Criando um objeto para manipular os parâmetros de consulta (query params)
    const queryParams = new URLSearchParams(location.search);

    // Pegando os parâmetros da URL
    const id = queryParams.get('id');

    // Encontrando o post com o id
    const post = posts.find((post) => post.id === Number(id));

    if (!post) {
        return <p>Post não encontrado.</p>; // Adiciona um fallback caso o post não seja encontrado
    }

    return (
        <>
            <HeaderProfile styleSelect="PostInto" user={post.user} post={post} />

            <ContentContainer>
                <ReactMarkdown>{post.body}</ReactMarkdown> {/* Renderiza o conteúdo do post */}
            </ContentContainer>
        </>
    );
}
