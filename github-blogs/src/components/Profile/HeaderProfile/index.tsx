import { Link } from "react-router-dom";
import { Description, LinksStyle, PostInto, ProfileInto, Title, Title1, UserStats } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { User } from "../../../contexts/UserContext";
import { Issue } from "../../../contexts/PostsContext";
import { dateFormatter } from "../../../utils/formatter";

type VariantStyle = 'ProfileInto' | 'PostInto'

type Props = {
    styleSelect: VariantStyle
    user: User 
    post: Issue
}




export function HeaderProfile({ styleSelect, user, post }: Props) {
    return (
        <>
            {styleSelect === 'ProfileInto' ? (
                <ProfileInto>
                    <img src={user.avatar_url} alt="" />
                    <div>
                        <Title>
                            <h1>{user.name}</h1>
                            <Link to={user.html_url}>
                                github
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ fontSize: '12px' }} />
                            </Link>
                        </Title>
                        <Description>
                            <p>{user.bio}</p>
                        </Description>
                        <UserStats>
                            <span>
                                <img src="./icons/github-brands.svg" />
                                {user.login}
                            </span>
                            {user?.company ? (
                            <span>
                                <img src="./icons/building-solid.svg" />
                                {user.company}
                            </span>
                            ) : (null)}

                            <span>
                                <img src="./icons/user-group-solid.svg" />
                                {user.followers ? (`${user.followers} seguidores`): (0)}
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
                            <Link to={post.html_url}>
                                    Ver no github
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ fontSize: '12px' }} />
                            </Link>
                        </LinksStyle>
                        <Title1>
                        {post.title}
                        </Title1>
                        <UserStats>
                            <span>
                                <img src="./icons/github-brands.svg" />
                                {post.user.login}
                            </span>
                            <span>
                                <img src="./icons/calendar-day-solid.svg" />
                                {dateFormatter.format(new Date(post.created_at))}
                            </span>
                            <span>
                                <img src="./icons/comment-solid.svg" />
                                {post.comments}
                            </span>
                        </UserStats>
                    </div>
                </PostInto>
            ) : null}
        </>
    );
}
