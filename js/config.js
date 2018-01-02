var config = {
	'python_3': 1,
	'normal_qa': 2,
	'python': 2
}

var word_cloud = ['python', 'cx_Oracle', 'Centos', 'Decorator', 'SQLALchemy']

var recently_post = [
	{
		'href': 'post20180102.html',
		'title': 'SQLALchemy联合主键的用法',
		'date': '2018-01-02',
		'img': 'img/gallery/sm/gallery_5.jpg'
	},{
		'href': 'post20171117.html',
		'title': 'Python之装饰器详解',
		'date': '2017-11-17',
		'img': 'img/gallery/sm/gallery_4.jpg'
	},{
		'href': 'post20171108.html',
		'title': 'Python内存泄露问题',
		'date': '2017-11-08',
		'img': 'img/gallery/sm/gallery_1.jpg'
	},{
		'href': 'post20171105.html',
		'title': 'Python安装cx_Oracle问题一览',
		'date': '2017-11-05',
		'img': 'img/gallery/sm/gallery_2.jpg'
	},{
		'href': 'post201711051.html',
		'title': 'Centos6下升级Python到2.7极简过程',
		'date': '2017-11-05',
		'img': 'img/gallery/sm/gallery_3.jpg'
	}
]

function set_blog_info() {
	//设置文章系列统计
    document.getElementById('python_3').innerHTML = config['python_3'];
    document.getElementById('normal_qa').innerHTML = config['normal_qa'];
    document.getElementById('python').innerHTML = config['python'];
}

function set_word_cloud() {
	// 设置词云
	var template = []
	for (var i = 0; i < word_cloud.length; i++) {
		template.push('<a class="f-tag b-tag" href="#">'+ word_cloud[i]+'</a>')
	}
	var html = template.join('');
	document.getElementById('word_cloud').innerHTML = html;
}

function set_recently_post() {
	// 设置最近发表文章，5篇
	var five_html = [];
	for (var i = 0; i < recently_post.length; i++) {
		var html = [];
		html.push('<div class="b-blog-short-post--popular col-md-12  col-xs-12 f-primary-b">');
	    html.push('<div class="b-blog-short-post__item_img">');
	    html.push('<a href="#"><img data-retina src="'+ recently_post[i].img +'" alt=""/></a>');
	    html.push('</div>');
	    html.push('<div class="b-remaining">');
		html.push('<div class="b-blog-short-post__item_text f-blog-short-post__item_text">');
	    html.push('<a href="'+recently_post[i].href +'">'+recently_post[i].title +'</a>');
	    html.push('</div>');
	    html.push('<div class="b-blog-short-post__item_date f-blog-short-post__item_date f-primary-it">');
	    html.push(recently_post[i].date);
	    html.push('</div>');
	    html.push('</div>');
	    html.push('</div>');
	    var template = html.join('');
	    five_html.push(template);
	}
	var five_template = five_html.join('');
    document.getElementById('recently_post').innerHTML = five_template;
}


set_blog_info();
set_recently_post();
set_word_cloud()
