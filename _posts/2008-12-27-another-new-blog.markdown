---
layout: post
title: another new blog
---
I think I've changed my blog about as many times as I've written posts.  This time I'm using [Jekyll](http://github.com/mojombo/jekyll/tree/master) created by [Tom Preston-Werner](http://tom.preston-werner.com), and used by [GitHub Pages](http://pages.github.com/).

I've been looking at Jekyll ever since it was released, and was really intrigued by the way it works.  Now that I've been using it for the last few days, I'm really liking it.  The biggest thing I've been trying to wrap my head around is the best way to deploy/update it.

I thought about just putting a git repo on my server and pointing the `DocumentRoot` at the `_site` directory.  That way any time I wanted to add a new post, I would push the changes to the remote repo on my server and issue the `jekyll` command on the server.  One problem I had with that approach is that I keep my repos in  `/home/git` and web apps live in `/home/deploy`, with those users being in different groups and having different permissions.  And, I just didn't like serving this site from where I kept my repo.

I decided that I would keep the repo and deployment of the site separate, and just write a Rake command to push a new copy of the site to the server.  What I ended up writing is basically a poor man's [Capistrano](http://www.capify.org), but it works and is easy enough to maintain.

One of the downsides, but also one of the reasons I like Jekyll, is that it is just a static site.  Because of that, there's no facility for comments, tags, etc.  I thought about using a comment service, such as [Disqus](http://disqus.com/) and others, to provide that functionality; but, none work the way that I think they should.  So, I think I'm going to write my own... not that I necessarily like to re-write the wheel, but it sounds like a fun project to work on.  And, if it doesn't work out, I'll just switch to Disqus or something similar.  So, for now there will be no comments, but feel free to email me: jacob@jacobswanner.com

I've still got a few things to finish up, such as creating an atom feed, adding a list of related posts, and tweaking the style sheets; but, for the most part I'm pretty happy.