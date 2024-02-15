var posts=["posts/how-to-install-win11.html","posts/test-waline.html","posts/winserver2022.html","posts/hello-world.html","posts/hexo-butterfly-blog.html","posts/pandownjs-butterfly.html","posts/notice.html","posts/linkrule.html","posts/obs-vcam-vmic.html","posts/2594b0ef.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };