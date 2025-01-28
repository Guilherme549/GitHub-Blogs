import { ArrowUpRight, Buildings, GithubLogo, UserGear } from "phosphor-react";
import { ProfileInto, Title } from "./styles";
import { Link } from "react-router-dom";

export function BlogProfile(){
    return (
        <ProfileInto>
            <img src="./avatar.svg" alt="" />
            <div>
                <Title>
                    <h1>Cameron Williamson</h1>
                    <Link to="/">
                        github
                        <ArrowUpRight size={12}/>
                    </Link>
                </Title>
                <div>
                    <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
                </div>
                <div>
                    <span><GithubLogo size={18}/>cameronwll</span>
                    <span><Buildings />Rocketseat</span>
                    <span><UserGear />32 seguidores</span>
                </div>
            </div>
        </ProfileInto>
    )
}