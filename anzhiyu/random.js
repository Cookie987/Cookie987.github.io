var posts=["posts/hexo-butterfly-blog.html","posts/how-to-install-win11.html","posts/test-waline.html","posts/winserver2022.html","posts/hello-world.html","posts/pandownjs-butterfly.html","posts/linkrule.html","posts/obs-vcam-vmic.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };