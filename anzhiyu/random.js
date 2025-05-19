var posts=["2025/05/19/Unity TEngine开源框架 Luban篇/","2025/02/18/TE-Demo/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };