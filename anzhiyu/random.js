var posts=["2025/02/18/Test/","2025/02/17/hello-world/","2025/02/18/Unity TEngine开源框架 Luban篇/","2025/02/18/TE-Demo/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };