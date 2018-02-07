var moduleJsPath = '../module/Public/build/',
    moduleSassPath = '../module/Public/ui/';
var config = {
    html:'./build/index.html',
    build:'./build/**/*',
    my: {
        js: './js',
        css: './css',
        scss: './scss',
        images: './images',
        es6: './es6',
        html: './html',
        php:'./themes/**/*.php',
        rendercss:['./scss/style.scss','./scss/admin.scss']
    },
    dest:'./themes/dest',
    fileCopy: ['./build/**/*','./themes/*.php','./themes/*inc/**/*','./themes/style.css'],
    themes: ['./themes/*.php','./themes/*inc/**/*','./themes/style.css'],
    myHtml: ['html/*.html', 'include/*.html'],
    LocalServerPath: '/Users/dulianqiang/360/project/webServer/wordpress/wp-content/themes/qxqj',
    serverPath: '/Volumes/wildcn/fashionwhale/wp-content/themes/wildcn',
}


module.exports = config;