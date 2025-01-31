import { Link } from "react-router-dom";
import { Description, ProfileInto, Title, UserStats } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export function HeaderProfile(){
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
                    <span>
                        <img src="./icons/github-brands.svg" />
                        cameronwll
                    </span>
                    <span>
                        <img src="./icons/building-solid.svg" />
                        Rocketseat
                    </span>
                    <span>
                        <img src="./icons/user-group-solid.svg" />
                        32 seguidores
                    </span>
                </UserStats>
            </div>
        </ProfileInto>
    )
}