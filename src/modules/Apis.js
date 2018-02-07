// var domain = 'http://localhost:5000/';
const Apis = {
	getHeadLine:'http://www.fashionwhale.com/wp-json/wp/v2/posts?sticky=true&per_page=3&fields=better_featured_image,title,id,link,excerpt,date,excerpt',
	getCommonNewsList:'http://www.fashionwhale.com/wp-json/wp/v2/posts?sticky=false&fields=better_featured_image.media_details.sizes.thumbnail,better_featured_image.source_url,title,id,link,excerpt,date,excerpt,format,categories,media_all,video_all,author&medias=media,video',
	getNewsContent:'http://www.fashionwhale.com/wp-json/wp/v2/posts/',
	getUserInfo:'http://www.fashionwhale.com/wp-json/wp/v2/users/',
	getTagInfo:'http://www.fashionwhale.com/wp-json/wp/v2/tags/',
};

export default Apis;