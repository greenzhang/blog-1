/**
 * 首页
 **/
define(function(){
	var base_tpl = ['<div class="col-md-8">',
		'<div class="jumbotron">',
			'<h1>{username}你还有脸回来！</h1>',
			'<p>你有多久没有更新博文了？</p>',
			'<p>博客还想不想要了？</p>',
			'<p>人生就此荒废你开心么？</p>',
			'<p><a class="btn btn-primary btn-lg" href="/" target="_blank" role="button">去看看博客</a></p>',
		'</div>',
		'<div class="list-group">',
			'<a class="list-group-item" href="/ajax/clear_cache"  data-action-ajax="清除缓存成功" >清除<strong>所有</strong>缓存</a>',
			'<a class="list-group-item" href="/ajax/clear_cache?type=ajax" data-action-ajax="清除缓存成功" >清除ajax缓存</a>',
			'<a class="list-group-item" href="/ajax/clear_cache?type=comment" data-action-ajax="清除缓存成功" >清除评论缓存</a>',
			'<a class="list-group-item" href="/ajax/clear_cache?type=html" data-action-ajax="清除缓存成功" >清除页面缓存</a>',
		'</div>',
	'</div>',
	'<div class="col-md-4">',
		'<div class="panel custom-mb20">',
			'<div class="panel-body">',
				'<h3>发布台<small>增加博客内容</small></h3>',
				'<div class="list-group">',
					'<a class="list-group-item custom-publish" href="javascript:void(0)" data-type="article">写博文</a>',
					'<a class="list-group-item custom-publish" href="javascript:void(0)" data-type="share">发分享</a>',
					'<a class="list-group-item custom-publish" href="javascript:void(0)" data-type="labs">实验室</a>',
					'<a class="list-group-item custom-publish" href="javascript:void(0)" data-type="opus">传作品</a>',
					'<a class="list-group-item custom-publish" href="javascript:void(0)" data-type="friends">加友链</a>',
				'</div>',
			'</div>',
		'</div>',
		'<div class="panel custom-mb20">',
			'<div class="panel-body">',
				'<h3>图库<small>静态资源管理</small></h3>',
				'<p>远程镜像至七牛云存储，新增操作直接上传即可。修改或删除操作需要进入七牛后台进行重复操作。</p>',
				'<a class="btn btn-info custom-lofox" href="/admin/gallery">进入图库</a>',
			'</div>',
		'</div>',
		'<div class="panel custom-mb20">',
			'<div class="panel-body">',
				'<a class="btn btn-default custom-lofox" href="/admin/comments">评论管理</a>',
			'</div>',
		'</div>',
		'<div class="panel custom-mb20">',
			'<div class="panel-body">',
				'<h3>代码编辑<small>谨慎操作</small></h3>',
				'<p>临时修改线上代码，仅作为调试使用，切勿频繁修改。</p>',
				'<a class="btn btn-warning custom-lofox" href="/admin/file_edit">篡改代码</a>',
			'</div>',
		'</div>',
	'</div>'].join('');
	function INDEX(dom){
		var txt = base_tpl.replace('{username}',admin_dataBase.username);
		dom.html(txt);
	}
	return INDEX;
});