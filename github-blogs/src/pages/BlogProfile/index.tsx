import { PostCard, SectionTitle} from "./styles";
import { SearchPostForm } from "./components/SearchPostForm";
import { Posts } from "./components/Posts";
import { HeaderProfile } from "../../components/Profile/HeaderProfile";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { PostsContext } from "../../contexts/PostsContext";


export function BlogProfile(){
    const { user } = useContext(UserContext)
    const { posts, fetchPosts} = useContext(PostsContext)
    return (
        <>

        <HeaderProfile styleSelect="ProfileInto" user={user}/>
        <SectionTitle>
            <h3>Publicações</h3>
            <span>6 publicações</span>
        </SectionTitle>
        <SearchPostForm />
        <PostCard>
            {posts.map((post) => (
                <Posts 
                    key={post.id}
                    post={post}
                 />
            ))}
        </PostCard>
        </>
    )
}