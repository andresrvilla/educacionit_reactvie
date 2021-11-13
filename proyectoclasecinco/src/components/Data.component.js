import useFetch from "../hooks/useFetch";

export default function Data() {
    const users = useFetch("https://jsonplaceholder.typicode.com/users", []);
    const posts = useFetch('https://jsonplaceholder.typicode.com/posts', []);

    return <>
        <h1>Posts</h1>
        <ul>
            {posts.data.map(post => <li key={post.id}>{post.title}</li>)}
        </ul>
        <h1>Users</h1>
        <ul>
            {users.data.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
    </>

}