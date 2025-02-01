import { PostCard, SectionTitle} from "./styles";
import { SearchPostForm } from "./components/SearchPostForm";
import { Posts } from "./components/Posts";
import { HeaderProfile } from "../../components/Profile/HeaderProfile";


export function BlogProfile(){
    return (
        <>

        <HeaderProfile styleSelect="ProfileInto"/>
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