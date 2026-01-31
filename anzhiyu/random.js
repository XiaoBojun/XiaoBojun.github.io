var posts=["2025/02/18/TE-Demo/","2025/02/18/Test/","2025/02/18/Unity TEngine开源框架 Luban篇/","2025/02/18/hello-world/","2025/02/18/TEngine框架架构解析/","2025/02/18/Unity常用设计模式/","2025/02/18/Unity性能优化技巧/","2026/01/31/TEngine相关文档/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };