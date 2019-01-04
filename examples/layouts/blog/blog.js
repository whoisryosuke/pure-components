import React from 'react'
import { createGlobalStyle } from "styled-components";

import Base from "../../../src/components/Base/Base"
import Grid from "../../../src/components/Grid/Grid"
import Button from "../../../src/components/Button/Button"
import Menu from "../../../src/components/Menu/Menu"

const BlogTheme = createGlobalStyle`
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

a {
    text-decoration: none;
    color: rgb(61, 146, 201);
}
a:hover,
a:focus {
    text-decoration: underline;
}

h3 {
    font-weight: 100;
}

/* LAYOUT CSS */
.pure-img-responsive {
    max-width: 100%;
    height: auto;
}

#layout {
    padding: 0;
}

.header {
    text-align: center;
    top: auto;
    margin: 3em auto;
}

.sidebar {
    background: rgb(61, 79, 93);
    color: #fff;
}

.brand-title,
.brand-tagline {
    margin: 0;
}
.brand-title {
    text-transform: uppercase;
}
.brand-tagline {
    font-weight: 300;
    color: rgb(176, 202, 219);
}

.nav-list {
    margin: 0;
    padding: 0;
    list-style: none;
}
.nav-item {
    display: inline-block;
    *display: inline;
    zoom: 1;
}
.nav-item a {
    background: transparent;
    border: 2px solid rgb(176, 202, 219);
    color: #fff;
    margin-top: 1em;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    font-size: 85%;
}
.nav-item a:hover,
.nav-item a:focus {
    border: 2px solid rgb(61, 146, 201);
    text-decoration: none;
}

.content-subhead {
    text-transform: uppercase;
    color: #aaa;
    border-bottom: 1px solid #eee;
    padding: 0.4em 0;
    font-size: 80%;
    font-weight: 500;
    letter-spacing: 0.1em;
}

.content {
    padding: 2em 1em 0;
}

.post {
    padding-bottom: 2em;
}
.post-title {
    font-size: 2em;
    color: #222;
    margin-bottom: 0.2em;
}
.post-avatar {
    border-radius: 50px;
    float: right;
    margin-left: 1em;
}
.post-description {
    font-family: Georgia, "Cambria", serif;
    color: #444;
    line-height: 1.8em;
}
.post-meta {
    color: #999;
    font-size: 90%;
    margin: 0;
}

.post-category {
    margin: 0 0.1em;
    padding: 0.3em 1em;
    color: #fff;
    background: #999;
    font-size: 80%;
}
    .post-category-design {
        background: #5aba59;
    }
    .post-category-pure {
        background: #4d85d1;
    }
    .post-category-yui {
        background: #8156a7;
    }
    .post-category-js {
        background: #df2d4f;
    }

.post-images {
    margin: 1em 0;
}
.post-image-meta {
    margin-top: -3.5em;
    margin-left: 1em;
    color: #fff;
    text-shadow: 0 1px 1px #333;
}

.footer {
    padding: 1em 0;
}
.footer a {
    color: #ccc;
    font-size: 80%;
}
.footer .pure-menu a:hover,
.footer .pure-menu a:focus {
    background: none;
}

@media (min-width: 48em) {
    .content {
        padding: 2em 3em 0;
        margin-left: 25%;
    }

    .header {
        margin: 80% 2em 0;
        text-align: right;
    }

    .sidebar {
        position: fixed;
        top: 0;
        bottom: 0;
    }

    .footer {
        text-align: center;
    }
}

`;

export default function blog() {
  return (
    <Base>
        <StyleguideTheming />
    <Grid id="layout">
    <Grid.Unit width={[1, 1/4]}> <div class="header">
        <h1 class="brand-title">A Sample Blog</h1>
        <h2 class="brand-tagline">Creating a blog layout using Pure</h2>

        <nav class="nav">
            <ul class="nav-list">
                <li class="nav-item">
                    <Button as="a" href="http://purecss.io">Pure</Button>
                </li>
                <li class="nav-item">
                    <Button as="a" href="http://yuilibrary.com">YUI Library</Button>
                </li>
            </ul>
        </nav>
        </div>
    </Grid.Unit>

    <Grid.Unit width={[1, 1/4]} class="content">
        <div>
            {/* A wrapper for all the blog posts */}
            <div class="posts">
                <h1 class="content-subhead">Pinned Post</h1>

                {/*  A single blog post */}
                <section class="post">
                    <header class="post-header">
                        <img width="48" height="48" alt="Tilo Mitra&#x27;s avatar" class="post-avatar" src="img/common/tilo-avatar.png">

                        <h2 class="post-title">Introducing Pure</h2>

                        <p class="post-meta">
                            By <a href="#" class="post-author">Tilo Mitra</a> under <a class="post-category post-category-design"
                                href="#">CSS</a> <a class="post-category post-category-pure" href="#">Pure</a>
                        </p>
                    </header>

                    <div class="post-description">
                        <p>
                            Yesterday at CSSConf, we launched Pure – a new CSS library. Phew! Here are the <a href="https://speakerdeck.com/tilomitra/pure-bliss">slides
                                from the presentation</a>. Although it looks pretty minimalist, we’ve been working on
                            Pure for several months. After many iterations, we have released Pure as a set of small,
                            responsive, CSS modules that you can use in every web project.
                        </p>
                    </div>
                </section>
            </div>

            <div class="posts">
                <h1 class="content-subhead">Recent Posts</h1>

                <section class="post">
                    <header class="post-header">
                        <img width="48" height="48" alt="Eric Ferraiuolo&#x27;s avatar" class="post-avatar" src="img/common/ericf-avatar.png">

                        <h2 class="post-title">Everything You Need to Know About Grunt</h2>

                        <p class="post-meta">
                            By <a class="post-author" href="#">Eric Ferraiuolo</a> under <a class="post-category post-category-js"
                                href="#">JavaScript</a>
                        </p>
                    </header>

                    <div class="post-description">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                </section>

                <section class="post">
                    <header class="post-header">
                        <img width="48" height="48" alt="Reid Burke&#x27;s avatar" class="post-avatar" src="img/common/reid-avatar.png">

                        <h2 class="post-title">Photos from CSSConf and JSConf</h2>

                        <p class="post-meta">
                            By <a class="post-author" href="#">Reid Burke</a> under <a class="post-category" href="#">Uncategorized</a>
                        </p>
                    </header>

                    <Grid.Unit class="post-description">
                        <Grid class="post-images">
                            <Grid.Unit width={[1, 1/2]}> <a href="http://www.flickr.com/photos/uberlife/8915936174/">
                                <img alt="Photo of someone working poolside at a resort" class="pure-img-responsive"
                                    src="http://farm8.staticflickr.com/7448/8915936174_8d54ec76c6.jpg">
                                </a>

                                <div class="post-image-meta">
                                    <h3>CSSConf Photos</h3>
                                </div>
                            </Grid.Unit>

                            <Grid.Unit width={[1, 1/2]}> <a href="http://www.flickr.com/photos/uberlife/8907351301/">
                                <img alt="Photo of the sunset on the beach" class="pure-img-responsive" src="http://farm8.staticflickr.com/7382/8907351301_bd7460cffb.jpg">
                                </a>

                                <div class="post-image-meta">
                                    <h3>JSConf Photos</h3>
                                </div>
                            </Grid.Unit>
                        </Grid>
            </div>
            </section>

            <section class="post">
                <header class="post-header">
                    <img width="48" height="48" alt="Andrew Wooldridge&#x27;s avatar" class="post-avatar" src="img/common/andrew-avatar.png">

                    <h2 class="post-title">YUI 3.10.2 Released</h2>

                    <p class="post-meta">
                        By <a class="post-author" href="#">Andrew Wooldridge</a> under <a class="post-category post-category-yui"
                            href="#">YUI</a>
                    </p>
                </header>

                <div class="post-description">
                    <p>
                        We are happy to announce the release of YUI 3.10.2! You can find it now on the Yahoo! CDN,
                        download it directly, or pull it in via npm. We’ve also updated the YUI Library website
                        with the latest documentation.
                    </p>
                </div>
            </section>
        </div>

        <footer class="footer">
            <Menu as="ul" horizontal>
                <Menu.Item as="li"><a href="http://purecss.io/" class="link">About</a></Menu.Item>
                <Menu.Item as="li"><a href="http://twitter.com/yuilibrary/" class="link">Twitter</a></Menu.Item>
                <Menu.Item as="li"><a href="http://github.com/pure-css/pure/" class="link">GitHub</a></Menu.Item>
            </Menu>
        </footer>
    </Grid.Unit>
</Grid>
</Base>
  )
}
