$(function(e){

	// if ($(".search-form input[name='customword']")!='') {
	// $(".search-form input[name='customword']").on("blur",function(e){

	// 	questionspopup($(this),$(this).val());

		/*$.get("/questions/", {
			search_key :  $(this).val(),
		},function(data){
			
			var item={}
			if (data.count == 0){
				$("#counts").parent().hide();
				$("#search-carousel p").empty();
				$("#search-carousel p").text("No result found.")
			}else{

				$("#counts").parent().show();
				$("#counts").html(data.count);
				$("#search-carousel").data('owlCarousel').destroy()
				$("#search-carousel").empty("");
				questions=''
				for (var i=0; i< data.count; i++){
					answers=""
					for (var j=0;j< data.data[i].answers.length;j++){
						answers+='<a href="#" class="tg-btn customNextBtn" anwser_id="'+data.data[i].answers[j].id+'">'+data.data[i].answers[j].answer+'</a>'
								
					}
					counts = parseInt(i) + 1
					questions+='<div class="item text-center pt-3 pb-4" ><h4 class="pb-4 w-50 m-auto">'+counts+'.) '+data.data[i].question+' </h4><div class="d-flex align-items-center py-4 justify-content-center question_index_'+counts+'" question_index="'+counts+'">'+answers+'</div><hr></div>'
				}
				$("#search-carousel").html(questions)
		        $("#search-carousel").owlCarousel({
		            navigation: true,
		            pagination: true,
		            slideSpeed: 1000,
		            stopOnHover: true,
		            autoPlay: false,
		            items: 1,
		            itemsDesktop: [1199, 1],
		            itemsDesktopSmall: [980, 1],
		            itemsTablet: [768, 1],
		            itemsTablet: [767, 1],
		            itemsTabletSmall: [480, 1],
		            itemsMobile: [479, 1],
					dots:true
		        });
	 		$('#search-carousel').find('.owl-prev').html('<i class="lni-chevron-left" id="blap"></i>');
	        $('#search-carousel').find('.owl-next').html('<i class="lni-chevron-right" id="blan"></i>');

			$(document).on('click', '#search-carousel .tg-btn', function(event){
				var ids=[]
				var index=$(this).parent().attr("question_index")
				$("#search-carousel .question_index_"+index).find(".tg-btn").removeClass("active")
				$(this).addClass("active")
				item[index]=$(this).attr("anwser_id")
				for(var i=1;i<=data.count;i++){
					if (item[i] !== undefined){
						ids.push(item[i])
					}
				}
				if (ids.length == data.count){
					location.href = "/product-list/?id="+ids.join(',')+"&keyword="+data.keyword
				}
			});

		}
		
		});*/
//	});}
	
	
//	 var highestBox = 0;
 //    $('.blog-block').each(function(){  
 //        if($(this).height() > highestBox){  
 //            highestBox = $(this).height();  
 //    	}
 //    });    
 //   $('.blog-block').height(highestBox);
	var ids = $('#recent-transactions form select[name="topics"]').attr("ids");
	$('#recent-transactions form select[name="topics"] option').each(function(e){
		if(ids){
			if(jQuery.inArray($(this).val(), ids.split(',')) !== -1){
				$(this).attr("selected","selected")
			}
		}
	});
	
  $(".reply-area").hide();
  $(".reply-btn").click(function(){
  	$(this).parent().parent().find(".reply-area").toggle();
  });
    
    $("form.reply-area").submit(function(e){	
    	var comment_id = $(this).find('input[name="comment"]').val()
		if ($("#reply-textarea_"+comment_id).val()==''){
			$("#reply-textarea_"+comment_id).parent().find(".error").text("Please enter description.")
			e.preventDefault();
		}
		if ($( "#user_name_"+comment_id ).val()==''){
			$( "#user_name_"+comment_id ).parent().find(".error").text("Please enter name.")
			e.preventDefault();
		}
	});
    
    $("form.comment-form").submit(function(e){
		if ($("#description").val()==''){
			$("#description").parent().find(".error").text("Please enter description.")
			e.preventDefault();
		}
		if ($("#user_name").val() == ''){
			$("#user_name").parent().find(".error").text("Please enter name.")
			e.preventDefault();
		}
	});

    $("form.contact-form").submit(function(e){
		if ($("#full_name").val()==''){
			if(/^[a-zA-Z]+([\s][a-zA-Z]+)$/.test($(this).val())){
				$(this).parent().find(".error").empty()
			}else{
				$(this).parent().find(".error").text("Please enter full name in alphabets only.")
			}
		}else{
			$(this).parent().find(".error").empty()
		}
		if ($("#phone_number").val()==''){
			$("#phone_number").parent().find(".error").text("Please enter mobile number.")
			e.preventDefault();
		}else if($("#phone_number").val()){
	         var filter = /^[0-9]{5,15}$/;
	         if (!filter.test($("#phone_number").val())) {
	     	 	e.preventDefault();
		     	$("#phone_number").parent().find(".error").text("Please enter valid mobile number.")
			 }else{
				$("#phone_number").parent().find(".error").text("")
			}
		}else{
			$("#phone_number").parent().find(".error").text("")
		}
		if ($("#email").val()==''){
			$("#email").parent().find(".error").text("Please enter email.")
			e.preventDefault();
		}
		if ($("#message").val()==''){
			$("#message").parent().find(".error").text("Please enter message.")
			e.preventDefault();
		}
	});


	var keywords=[];
	$.get("/keywords_name/").done(function(data){
		for(var i=0;i<data.count;i++){
			keywords.push(data.data[i])
		}
	}).done(function(data){
	    $( "input[name='customword']" ).autocomplete({

	      source: function(requestObj, responseFunc) {
            var newvalue = [];
            var matchArry = keywords;                     
            var srchTerms = $.trim(requestObj.term).split(/\s+/);
            var new_value = []	
			
			for(var i=0;i< srchTerms.length;i++){
				var regx = new RegExp(srchTerms[i], "i");
				$.map(matchArry, function(item) {
            		console.log(regx.test(item),item,srchTerms[i],regx)
            		if (regx.test(item)){
            			newvalue.push(item)
            		}
                });
			}

			$.map(newvalue, function(item) {
        		if (regx.test(item)){
        			new_value.push(item)
        		}
            });

            responseFunc(new_value);
        },
        select: function (event, ui) {

        	questionspopup($(this),ui.item.label);

        //setTimeout( $('#search-modal').modal('show') , 3000 );
 
    },
        open: function(event, ui) {
                // This function provides no hooks to the results list, so we have to trust the selector, for now.
                var resultsList = $("ul.ui-autocomplete > li.ui-menu-item > a");

                var srchTerm = $.trim($("#tags").val()).split(/\s+/).join('|');

                resultsList.each(function() {

                    var jThis = $(this);
                    var regX = new RegExp('(' + srchTerm + ')', "ig");
                    var oldTxt = jThis.text();
                    jThis.html(oldTxt.replace(regX, '<span class="srchHilite">$1</span>'));
                });
            }
	    });
	});
	
	$('.search-bar .search-form input[type="text"],.search-bar .search-form').keydown(function(e){
		if (e.keyCode == 13){
			e.preventDefault()	
		}
	});


	$("#new-products-new .featured-box input[type='checkbox']").click(function(e){
		var topic_id = $(this).attr("topic_id")
		var token=$("#new-products-new input[name='csrfmiddlewaretoken']").val()
		$.post("/send-topic/"+topic_id+"/",{"csrfmiddlewaretoken":token}).done(function(data){
			if (data.status == true){
				alert(data.data)
			}else{
				location.href="/accounts/login/"
			}
		});
	});
	$(".registration input[name='email'],.sign_in input[name='email'],.forgot-password input[type='email']").bind("keyup keydown keypress blur",function(e){
		$("ul.errorlist").hide() 
		if($(this).val() != ""){
			if(! validateEmail($(this).val())){
				$(this).parent().find(".error").text("Your email is not valid.")
			}else{
				$(this).parent().find(".error").empty()
			}
		}else{
			$(this).parent().find(".error").empty()
		}
	});
	
	$(".registration input[name='password'],.registration input[name='confirm-password'],.sign_in input[name='password'],.change_password input[name='newpassword'],.change_password input[name='confirmpassword']"
		).each(function(e){
		if($(this).val() != ""){
			if(!$(this).val().length > 8){
				$(this).parent().find(".error").text("Please enter 8 digit password.")
			}else{
				$(this).parent().find(".error").empty()
			}
		}else{
			$(this).parent().find(".error").empty()
		}
	});
	
	
	$(".sign_in").on("submit",function(e){
		$(".sign_in input[type = 'email']").each(function(ev){
			if($(this).val() != ""){
				if(! validateEmail($(this).val())){
					$(this).parent().find(".error").empty()
					$(this).parent().find(".error").text("Your email is not valid.")
					e.preventDefault();
				}else{
					$(this).parent().find(".error").empty()
				}
			}else{
				$(this).parent().find(".error").empty()
				$(this).parent().find(".error").text("Please enter email.")
				e.preventDefault();
			}
		});
		$(".sign_in input[type = 'password']").each(function(ev){
			if($(this).val() != ""){
				if(!$(this).val().length > 8){
					$(this).parent().find(".error").text("Please enter 8 digit password.")
					e.preventDefault();
				}
				else{
					$(this).parent().find(".error").empty()
				}
			}else{
				$(this).parent().find(".error").empty()
				$(this).parent().find(".error").text("Please enter password.")
				e.preventDefault();
			}
		});
	});
	
	$(".registration").on("submit",function(e){
		$(".registration input[type = 'email']").each(function(ev){
			if($(this).val() != ""){
				if(! validateEmail($(this).val())){
					$(this).parent().find(".error").empty()
					$(this).parent().find(".error").text("Your email is not valid.")
					e.preventDefault();
				}else{
					$(this).parent().find(".error").empty()
				}
			}else{
				$(this).parent().find(".error").empty()
				$(this).parent().find(".error").text("Please enter email.")
				e.preventDefault();
			}
		});
		$(".registration input[type = 'password']").each(function(ev){
			if($(this).val() != ""){
				if(!$(this).val().length >= 8){
					$(this).parent().find(".error").text("Please enter 8 digit password.")
					e.preventDefault();
				}else{
					$(this).parent().find(".error").empty()
				}
			}else{
				$(this).parent().find(".error").empty()
				$(this).parent().find(".error").text("Please enter password.")
				e.preventDefault();
			}
		});
		$(".registration input[type = 'checkbox']").each(function(ev){
			if(!$(this).is(':checked')){
				$(this).parent().find(".error").empty()
				$(this).parent().find(".error").text("Please accept terms and conditions.")
				e.preventDefault();
			}else{var matchHeight = function () {
	
	function init() {
		eventListeners();
		matchHeight();
	}
	
	function eventListeners(){
		$(window).on('resize', function() {
			matchHeight();
		});
	}
	
	function matchHeight(){
		var groupName = $('[data-match-height]');
		var groupHeights = [];
		
		groupName.css('min-height', 'auto');
		
		groupName.each(function() {
			groupHeights.push($(this).outerHeight());
		});
		
		var maxHeight = Math.max.apply(null, groupHeights);
		groupName.css('min-height', maxHeight);
	};
	
	return {
		init: init
	};
	
} ();

$(document).ready(function() {
	matchHeight.init();
});
			
				$(this).parent().find(".error").empty()
			}
		});
	});

	
	$('form.forgot-password').on('submit',function(e){
		$("ul.errorlist").hide() 
		$(".forgot-password input[type = 'email']").each(function(ev){
			if($(this).val() != ""){
				if(! validateEmail($(this).val())){
					$(this).parent().find(".error").empty()
					$(this).parent().find(".error").text("Your email is not valid.")
					e.preventDefault();
				}else{
					$(this).parent().find(".error").empty()
				}
			}else{
				$(this).parent().find(".error").empty()
				$(this).parent().find(".error").text("Please enter email.")
				e.preventDefault();
			}
		});
	});

	$(".change_password").on("submit",function(e){
		$(".change_password input[type = 'password']").each(function(ev){
			if($(this).val() != ""){
				if(!$(this).val().length > 8){
					$(this).parent().find(".error").text("Please enter 8 digit password.")
					e.preventDefault();
				}
				else{
					$(this).parent().find(".error").empty()
				}
			}else{
				$(this).parent().find(".error").empty()
				$(this).parent().find(".error").text("Please enter password.")
				e.preventDefault();
			}
		});
	});
	

	$('.btn-common').on('click', function(e){
	    $('body').addClass('changeCursor');
	});	





});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



function questionspopup(self,selectedname) {

    $.get("/questions/", {
			search_key :  selectedname,
		},function(data){
			
			var item={}
			if (data.count == 0){

				$("#counts").parent().hide();
				$("#search-carousel p").empty();
				$("#search-carousel p").text("No result found.")
			}else{

				$("#counts").parent().show();
				$("#counts").html(data.count);
				$("#search-carousel").data('owlCarousel').destroy()
				$("#search-carousel").empty("");
				questions=''
				for (var i=0; i< data.count; i++){
					answers=""
					for (var j=0;j< data.data[i].answers.length;j++){
						answers+='<a href="#" class="tg-btn customNextBtn" anwser_id="'+data.data[i].answers[j].id+'">'+data.data[i].answers[j].answer+'</a>'
								
					}
					counts = parseInt(i) + 1
					questions+='<div class="item text-center pt-3 pb-4" ><h4 class="pb-4 w-50 m-auto">'+counts+'.) '+data.data[i].question+' </h4><div class="d-flex align-items-center py-4 justify-content-center question_index_'+counts+'" question_index="'+counts+'">'+answers+'</div><hr></div>'
				}
				$("#search-carousel").html(questions)
		        var owl = $("#search-carousel");
		        owl.owlCarousel({
		            navigation: false,
		            pagination: true,
		            slideSpeed: 1000,
		            stopOnHover: true,
		            autoPlay: false,
		            items: 1,
		            itemsDesktop: [1199, 1],
		            itemsDesktopSmall: [980, 1],
		            itemsTablet: [768, 1],
		            itemsTablet: [767, 1],
		            itemsTabletSmall: [480, 1],
		            itemsMobile: [479, 1],
					dots:true,
					singleItem:true
		        });
	 		$('#search-carousel').find('.owl-prev').html('<i class="lni-chevron-left" id="blap"></i>');
	        $('#search-carousel').find('.owl-next').html('<i class="lni-chevron-right" id="blan"></i>');	      

	        $('#search-carousel .customNextBtn').click(function() {

    			owl.trigger('owl.next');
			});

			$(document).on('click', '#search-carousel .tg-btn', function(event){    			
				
				var ids=[]
				var index=$(this).parent().attr("question_index")

				$("#search-carousel .question_index_"+index).find(".tg-btn").removeClass("active")
				self.addClass("active")
				item[index]=$(this).attr("anwser_id")
				for(var i=1;i<=data.count;i++){
					if (item[i] !== undefined){
						ids.push(item[i])
					}
				}
				if (ids.length == data.count){
					location.href = "/product-list/?id="+ids.join(',')+"&keyword="+data.keyword
				}
			});
			 $('#search-modal').modal('show');

		}
		
		});

}
