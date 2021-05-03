import axios from "axios";
import "./styles.scss";

(async () => {
  const root = document.getElementById("root");
  const title = document.createElement("h1");
  title.innerText = "BLOG SITE";
  root.appendChild(title);
  const url = "https://jsonplaceholder.typicode.com/posts";
  const response = await axios.get(url);

  const data = response.data;

  const AllPosts = document.createElement("div");
  data.forEach((fetchedpost) => {
    const post = document.createElement("div");
    const title = document.createElement("h2");
    const body = document.createElement("p");
    title.innerText = fetchedpost.title;
    body.innerText = fetchedpost.body;
  
    post.appendChild(title);
    post.appendChild(body);
    AllPosts.appendChild(post);
  });
  root.appendChild(AllPosts);
})();
