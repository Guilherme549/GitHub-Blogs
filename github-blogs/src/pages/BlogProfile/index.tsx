import { PostCard, SectionTitle} from "./styles";
import { SearchPostForm } from "./components/SearchPostForm";
import { Posts } from "./components/Posts";
import { HeaderProfile } from "../../components/Profile/HeaderProfile";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";


export function BlogProfile(){
    const { user } = useContext(UserContext)

    return (
        <>

        <HeaderProfile styleSelect="ProfileInto" user={user}/>
        <SectionTitle>
            <h3>Publicações</h3>
            <span>6 publicações</span>
        </SectionTitle>
        <SearchPostForm />
        <PostCard>
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
        </PostCard>
        </>
    )
}