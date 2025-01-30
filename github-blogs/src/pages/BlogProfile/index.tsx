import { Buildings, GithubLogo, UserGear } from "phosphor-react";
import { Description, ProfileInto, Title, UserStats } from "./styles";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";


export function BlogProfile(){
    return (
        <ProfileInto>
            <img src="./avatar.svg" alt="" />
            <div>
                <Title>
                    <h1>Cameron Williamson</h1>
                    <Link to="/">
                        github
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ fontSize: '12px' }} />
                    </Link>
                </Title>
                <Description>
                    <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
                </Description>
                <UserStats>
                    <span><GithubLogo size={18}/>
                    cameronwll</span>
                    <span><Buildings size={18}/>Rocketseat</span>
                    <span><UserGear size={18}/>32 seguidores</span>
                </UserStats>
            </div>
        </ProfileInto>
    )
}