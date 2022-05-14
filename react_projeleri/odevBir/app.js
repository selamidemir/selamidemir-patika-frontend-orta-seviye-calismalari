import axios from "axios";

const getData = async (userId) => {
    let userUrl = "https://jsonplaceholder.typicode.com/users/" + userId;
    let postUrl = "https://jsonplaceholder.typicode.com/posts?userId=" + userId;

    const { data: user } = await ( axios(userUrl) );
    const { data: posts } = await ( axios(postUrl) );

    user["post"] = [];
    posts.forEach( post => {
        user.post.push(post);
    });

    return user;
}

export default getData;