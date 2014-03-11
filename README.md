# Boilerplate Jekyll - ovt-2014.at
Build my first [jekyll](http://jekyllrb.com/) website for [http://ovt-2014.at](http://ovt-2014.at).

Though it's a good idea to share it as a boilerplate or playground for all of us :-)

## Featuring
- grunt building (assets - minify, uglify, concat, revision, ...)
- bootrap3 layout (with custom less available)
- blog
- some static pages
- image gallery
- contact form
- ...

## Todos/ideas
- Blog
  - RSS: https://github.com/snaptortoise/jekyll-rss-feeds
  - Category view
  - ...
- Analytics: Piwik / Google
- Find something better than shareThis - or nothing like that?
- Contact maybe without "mailto": http://getsimpleform.com/
- 404 page


## Get started

Start cli at root folder
```cli
bower install
grunt build
grunt watch
```

start a 2nd cli
```cli
cd dist
jekyll serve --watch
```

Page should be available `http://127.0.0.1:4000` or `http://localhost:4000`
