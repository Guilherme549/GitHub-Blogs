import { Link } from "react-router-dom";
import { Description, LinksStyle, PostInto, ProfileInto, Title, Title1, UserStats } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

type VariantStyle = 'ProfileInto' | 'PostInto'



type Props = {
    styleSelect: VariantStyle
}

export function HeaderProfile({ styleSelect }: Props) {
    return (
        <>
            {styleSelect === 'ProfileInto' ? (
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
            ) : styleSelect === 'PostInto' ? (
                <PostInto>
                    <div>
                        <LinksStyle>
                            <Link to="/">
                            <FontAwesomeIcon icon={faChevronLeft} />
                                    voltar
                            </Link>
                            <Link to="/">
                                    Ver no github
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ fontSize: '12px' }} />
                            </Link>
                        </LinksStyle>
                        <Title1>
                        JavaScript data types and data structures
                        </Title1>
                        <UserStats>
                            <span>
                                <img src="./icons/github-brands.svg" />
                                cameronwll
                            </span>
                            <span>
                                <img src="./icons/calendar-day-solid.svg" />
                                Há 1 dia
                            </span>
                            <span>
                                <img src="./icons/comment-solid.svg" />
                                5 comentários
                            </span>
                        </UserStats>
                    </div>
                </PostInto>
            ) : null}
        </>
    );
}
