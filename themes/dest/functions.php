<?php
/** widgets */
if( function_exists('register_sidebar') ) {
	register_sidebar(array(
		'name' => 'First_sidebar',
		'before_widget' => '',
		'after_widget' => '',
		'before_title' => '<h4>',
		'after_title' => '</h4>'
	));
	register_sidebar(array(
		'name' => 'Second_sidebar',
		'before_widget' => '',
		'after_widget' => '',
		'before_title' => '<h4>',
		'after_title' => '</h4>'
	));
	register_sidebar(array(
		'name' => 'Third_sidebar',
		'before_widget' => '',
		'after_widget' => '',
		'before_title' => '<h4>',
		'after_title' => '</h4>'
	));
	register_sidebar(array(
		'name' => 'Fourth_sidebar',
		'before_widget' => '',
		'after_widget' => '',
		'before_title' => '<h4>',
		'after_title' => '</h4>'
	));
}
/*启用特色图片*/
if ( function_exists( 'add_theme_support' ) ) {
        add_theme_support( 'post-thumbnails', array( 'post', 'page' ) );
        set_post_thumbnail_size( 300, 200, true );
}


// 自动为文章增加特色图片
function wpforce_featured() {
    global $post;
    $already_has_thumb = has_post_thumbnail($post->ID);
    if (!$already_has_thumb)  {
        $attached_image = get_children( "post_parent=$post->ID&post_type=attachment&post_mime_type=image&numberposts=1" );
        if ($attached_image) {
                foreach ($attached_image as $attachment_id => $attachment) {
                set_post_thumbnail($post->ID, $attachment_id);
            }
        }
    }
}  

//end function
add_action('the_post', 'wpforce_featured');
add_action('save_post', 'wpforce_featured');
add_action('draft_to_publish', 'wpforce_featured');
add_action('new_to_publish', 'wpforce_featured');
add_action('pending_to_publish', 'wpforce_featured');
add_action('future_to_publish', 'wpforce_featured');
function curPageURL() {
	$pageURL = 'http://';

	$this_page = $_SERVER["REQUEST_URI"]; 
	if (strpos($this_page , "?") !== false) 
		$this_page = reset(explode("?", $this_page));

	$pageURL .= $_SERVER["SERVER_NAME"]  . $this_page;

	return $pageURL;
}

//让当前主题支持原生的自定义菜单
if (function_exists('register_nav_menus')){
	// This theme uses wp_nav_menu() in two locations.
	register_nav_menus( array(
		'header_menu'    => __( 'top_menu'),
		'social' => __( 'social_menu'),
		'footer_menu' => __( 'footer_menu'),
	) );
}

// 添加主题框架
if (!function_exists('optionsframework_init')){
	define('OPTIONS_FRAMEWORK_DIRECTORY', get_template_directory_uri().'/inc/');
	require_once dirname(__FILE__).'/inc/options-framework.php';
}
// 主题设置框架中的js代码
add_action('optionsframework_custom_scripts', 'optionsframework_custom_scripts');
function optionsframework_custom_scripts(){ ?>
    <script type="text/javascript">
        
    </script>
<?php
}
// 更改摘要样式
function new_excerpt_more($more) {
	return "<i>  [阅读全文]</i>";
}
add_filter("excerpt_more", "new_excerpt_more");	
/*控制摘要字数*/
function new_excerpt_length($length) {
	return 50;
}
add_filter("excerpt_length", "new_excerpt_length");

// 获取第一张图片
function catch_that_image() {
  global $post, $posts;
  $first_img = '';
  ob_start();
  ob_end_clean();
  $output = preg_match_all('/<img.+src=[\'"]([^\'"]+)[\'"].*>/i', $post->post_content, $matches);  //正则匹配文章中所有图片
  $first_img = $matches [1] [0];
 
  if(empty($first_img)){ //定义默认图片
    $first_img = "/images/default.jpg";  //默认图片地址需自己设置
  }
  return $first_img;
}
// 获取特色图片

function get_post_thumbnail_url($post_id){
    $post_id = ( null === $post_id ) ? get_the_ID() : $post_id;
    $thumbnail_id = get_post_thumbnail_id($post_id);
    if($thumbnail_id ){
            $thumb = wp_get_attachment_image_src($thumbnail_id, 'thumbnail');
            return $thumb[0];
    }else{
            return false;
    }
}

// 最新文章排除 ID

add_filter( 'widget_posts_args', 'wpdit_widget_posts_args' );
function wpdit_widget_posts_args( $args ) {
    $args['category__not_in'] = [30,11]; 
    return $args;
}
// 加载分发
require_once(TEMPLATEPATH . '/distribute.php');



// 为后台增加样式
add_action('admin_head', 'admin_style');
function admin_mycss() {
    wp_enqueue_style( "admin", get_template_directory_uri() . "/admin.css" );
}
add_action('admin_head', 'admin_mycss');

// 为后台添加js

function my_enqueue() {
    wp_enqueue_script( 'my_custom_script', get_template_directory_uri() . '/js/admin.js',array('jquery'),'' );
}
add_action( 'admin_enqueue_scripts', 'my_enqueue' );
