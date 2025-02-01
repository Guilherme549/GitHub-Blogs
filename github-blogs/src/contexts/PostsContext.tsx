import { createContext, useEffect, useState } from "react";
import { ContextProviderProps, User } from "./UserContext";
import { api } from "../lib/axios";

interface Reaction {
    url: string;
    total_count: number;
    "+1": number;
    "-1": number;
    laugh: number;
    hooray: number;
    confused: number;
    heart: number;
    rocket: number;
    eyes: number;
  }
  
  interface SubIssuesSummary {
    total: number;
    completed: number;
    percent_completed: number;
  }
  
  export interface Issue {
    url: string;
    repository_url: string;
    labels_url: string;
    comments_url: string;
    events_url: string;
    html_url: string;
    id: number;
    node_id: string;
    number: number;
    title: string;
    user: User;
    labels: string[];
    state: string;
    locked: boolean;
    assignee: string | null;
    assignees: string[];
    milestone: string | null;
    comments: number;
    created_at: string;
    updated_at: string;
    closed_at: string | null;
    author_association: string;
    sub_issues_summary: SubIssuesSummary;
    active_lock_reason: string | null;
    body: string;
    reactions: Reaction;
    timeline_url: string;
    performed_via_github_app: string | null;
    state_reason: string | null;
    score: number;
  }
 
  
  interface PostsContextType {
    posts: Issue[]
    fetchPosts: ( query?: string) => Promise<void>
  }

export const PostsContext = createContext( {} as PostsContextType)

export function PostsContextProvider( { children }: ContextProviderProps){
    const [ posts, setPosts ] = useState<Issue[]>( [])

    async function fetchPosts(query: string = 'Dynamic%20typing%20repo:daltonmenezes/test'){
        const response = await api.get('search/issues', {
            params: {
                q: query
            }
        })

        setPosts(response.data.items)
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    return (
    <PostsContext.Provider value={ {posts, fetchPosts} }>
            {children}
        </PostsContext.Provider>
    )
}