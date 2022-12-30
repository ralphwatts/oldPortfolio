$(function(){
	$("#accordion").dcAccordion({
		eventType:'click',
		autoClose:true,
		saveState:true,
		speed:'slow',
		autoExpand:true,
		showCount:false,
		classExpand:'dcjq-current-parent'
	});
});

$('.tooltips').tooltip();

$('.fa-bars').on('click',function(){
	if ($('#sidebar > ul').is(':visible') === true ){
			$('#main-content').css({
				'margin': '0px'
			});
			$('#sidebar').css({
				'margin-left': '-210px'
			});
			$('#sidebar > ul').hide();
			$('#video1').css({
				'padding-left': '0px'
			});
	} else{
			$('main-content').css({
				'margin-left': '210px'
			});
			$('#sidebar').css({
				'margin-left':'0px'
			});
			$('#sidebar > ul').show();
			$('#video1').css({
				'padding-left': '-210px'
			});
	};
});

