var g = require('gulp'),
    c = require('./config'),
    del = require('del'),
    plugins = require('gulp-load-plugins'),
    p = plugins();

g.task('build',['copy'],()=>{
    return g.src(c.dest+'/**/*')
        .pipe(g.dest(c.serverPath));
})
g.task('copy',['html2php','themes_copy'],()=>{
    return g.src(c.build)
        .pipe(g.dest(c.dest));
})
g.task('themes_copy',()=>{
    return g.src(c.themes)
        .pipe(g.dest(c.dest));
})
// 将html转成php
g.task('html2php', () => {
    return g.src(c.html)
        // .pipe(p.replace(/"\//gi, "\"<?php echo get_theme_root_uri();?>/wildcn/"))
        // .pipe(replace(/<!.+footer\.html.+>/gi, "<?php get_footer(); ?>"))
        // .pipe(replace(/<!.+sidebar\.html.+>/gi, "<?php get_sidebar(); ?>"))
        // .pipe(include({
        //     includerReg: /<!\-\-\s?include\s+"([^"]+)"\-\->/g
        // }))
        // .pipe(replace(/\.\.\//gi, ''))
        // .pipe(replace(/\.\//gi, "<?php bloginfo('template_url'); ?>/"))
        .pipe(p.rename((path) => {
            path.extname = '.php'
        }))
        .pipe(g.dest(c.serverPath))
       
})
g.task('copyFile', () => {
    return g.src(c.fileCopy)
        .pipe(g.dest(c.serverPath))
})
g.task('php',()=>{
    g.src(c.my.php)
        .pipe(g.dest(c.serverPath))
})
g.task('watch', () => {
    g.watch(c.my.php,['php'])
})

g.task('dev', ['html2php','copyFile','watch']);