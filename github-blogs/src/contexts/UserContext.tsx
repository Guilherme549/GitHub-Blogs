import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

export interface User {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    user_view_type: string;
    site_admin: boolean;
    name: string;
    company: string | null;
    blog: string;
    location: string | null;
    email: string | null;
    hireable: boolean | null;
    bio: string;
    twitter_username: string | null;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
}

interface UserContexType {
    user: User 
}

interface UserContextProviderProps {
    children: ReactNode
}


export const UserContext = createContext({} as UserContexType)

export function UserContextProvider( {children}: UserContextProviderProps){
    const [ user, setUser] = useState<User>( {} as User)

    async function fetchUser() {
        const response = await api.get('users/Guilherme549', {})

        setUser(response.data);
    }

    useEffect(() => {

        fetchUser()
    }, [])
    console.log(user?.avatar_url)
    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    )
}