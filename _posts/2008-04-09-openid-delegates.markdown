---
layout: post
title: OpenID delegates
---
This is more or less to add to what James Duncan Davidson has already said about [OpenID and delegates](http://duncandavidson.com/2008/03/using-your-domain-as-your-open.html).

Even though I had been using OpenID for a while prior to his post, I hadn't set things up to use my own domain.  After his post, I realized how easy it was to do.  In his example he's using [myOpenID](http://www.myopenid.com/), which I don't use; so, I had to figure out how to do it using my provider, [Verisign Labs PIP](http://pip.verisignlabs.com).  I had to do a bit of searching to find the server URL (`https://pip.verisignlabs.com/server`), but after that it was simple.

So, to amend James Duncan Davidson's three easy steps, replace the HTML snippet in step 2 with the following:

    <link rel="openid.server" href="https://pip.verisignlabs.com/server" />
    <link rel="openid.delegate" href="http://yourid.pip.verisignlabs.com" />

Today I also tried out another [OpenID provider](http://openid-provider.appspot.com/) built on [Google App Engine](http://code.google.com/appengine/), which authenticates with your Google ID; that's a plus if you already have a Google account (such as Gmail) because that's one less account you have to remember (isn't less IDs part of the point of OpenID?).  Anyway, the HTML snippet you need to use that provider is the following:

    <link rel="openid.server" href="http://openid-provider.appspot.com/" />
    <link rel="openid.delegate" href="http://openid-provider.appspot.com/yourid" />

Update:  The above provider built on Google App Engine is currently a bit buggy.  I would shy away from changing any of your accounts to use that as your OpenID URL directly.  That's another plus of using your own domain as your OpenID URL, you can change the server you use on your site without having to change the accounts that use your OpenID URL.