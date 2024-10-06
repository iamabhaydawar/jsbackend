require('dotenv').config()


const express = require('express')
const app = express()
const port = 4000


const githubData ={
    "login": "iamabhaydawar",
    "id": 131337328,
    "node_id": "U_kgDOB9QMcA",
    "avatar_url": "https://avatars.githubusercontent.com/u/131337328?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/iamabhaydawar",
    "html_url": "https://github.com/iamabhaydawar",
    "followers_url": "https://api.github.com/users/iamabhaydawar/followers",
    "following_url": "https://api.github.com/users/iamabhaydawar/following{/other_user}",
    "gists_url": "https://api.github.com/users/iamabhaydawar/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/iamabhaydawar/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/iamabhaydawar/subscriptions",
    "organizations_url": "https://api.github.com/users/iamabhaydawar/orgs",
    "repos_url": "https://api.github.com/users/iamabhaydawar/repos",
    "events_url": "https://api.github.com/users/iamabhaydawar/events{/privacy}",
    "received_events_url": "https://api.github.com/users/iamabhaydawar/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 2,
    "public_gists": 0,
    "followers": 1,
    "following": 8,
    "created_at": "2023-04-20T06:08:55Z",
    "updated_at": "2024-10-06T21:19:10Z"
  }


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('iamabhaydawar')
})
app.get('/login',(req,res)=>{
    res.send('<h1>please login at jsbackend</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>@iamabhaydawar</h2>")
})

app.get('/github',(req,res)=>{
    res.json(githubData)
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})