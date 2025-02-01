import { PostCard, SectionTitle } from "./styles";
import { SearchPostForm } from "./components/SearchPostForm";
import { Posts } from "./components/Posts";
import { HeaderProfile } from "../../components/Profile/HeaderProfile";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { PostsContext } from "../../contexts/PostsContext";

export function BlogProfile() {
  const { user } = useContext(UserContext);
  const { posts, fetchPosts } = useContext(PostsContext);

  // Função que trata a mudança do valor do input
  const handleSearchInputChange = (value: string) => {
    fetchPosts(value); // Passa o valor para fetchPosts
  };

  return (
    <>
      <HeaderProfile styleSelect="ProfileInto" user={user} />
      <SectionTitle>
        <h3>Publicações</h3>
        <span>{posts.length} publicações</span>
      </SectionTitle>
      <SearchPostForm onInputChange={handleSearchInputChange} />
      <PostCard>
        {posts.map((post) => (
          <Posts key={post.id} post={post} />
        ))}
      </PostCard>
    </>
  );
}
