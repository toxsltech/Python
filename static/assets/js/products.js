window.addEventListener("load", function() {
    (function($) {
    	if($("select[name='category'] option:selected").val() == ''){
    		
	    	$('select[name=subcategory],select[name=questions],select[name=answer]').empty();
			$('select[name=subcategory],select[name=questions],select[name=answer]').attr("disabled","disabled")	    	
	    } 
	    else {
        	var subcategory='';
        	var question = '';
        	if ($("select[name='questions'] option:selected").val() == ''){
		    	$.get("/product_subcategories/"+$("select[name='category'] option:selected").val()+"/").done(function(data){
			    	for(var i=0;i<data.data.sub_category.length;i++){
			    		subcategory+="<option value='"+data.data.sub_category[i].id+"'>"+data.data.sub_category[i].name+"</option>"
			    	}
			    	for(var i=0;i<data.data.question.length;i++){
			    		question+="<option value='"+data.data.question[i].id+"'>"+data.data.question[i].name+"</option>"
			    	}
			    	$('select[name=subcategory]').empty();
			    	$('select[name=subcategory]').html(subcategory);

			    	$('select[name=questions]').empty();
			    	$('select[name=questions]').html(question);
			    	$('select[name=subcategory],select[name=questions]').removeAttr("disabled");
			    });
			}
		}
    	if($("select[name='questions'] option:selected").val() != ''){
    		var answer='';
    		var my_selected_ids = []
        	$('select[name="questions"] :selected').each(function(i, sel){ 
        		my_selected_ids.push($(sel).val())
			});

    		if (my_selected_ids.length > 0)
    		{
    			if ($('select[name=answer]').val() == ''){
		            $.get("/answers/",{ids:my_selected_ids.join(",")}).done(function(data){
				    	for(var i=0;i<data.data.answers.length;i++){
					    	answer +="<option value='"+data.data.answers[i].id+"'>"+data.data.answers[i].answer+"</option>"
					    }
				    	$('select[name=answer]').empty();
				    	$('select[name=answer]').html(answer);
				    	$('select[name=answer]').removeAttr("disabled")
					});
				}
			}
			
			else {
				$('select[name=answer]').empty();
				$('select[name=answer]').attr("disabled","disabled")
			}
		} 
		else {
			$('select[name=answer]').empty();
			$('select[name=answer]').attr("disabled","disabled")
		}



        $("select[name='category']").change(function() {
        	var subcategory='<option value=""> ----- </option>';
        	var question = '';

        	if($(this).val() !=''){
	            $.get("/product_subcategories/"+$(this).val()+"/").done(function(data){
			    	for(var i=0;i<data.data.sub_category.length;i++){
			    		subcategory+="<option value='"+data.data.sub_category[i].id+"'>"+data.data.sub_category[i].name+"</option>"
			    	}
			    	for(var i=0;i<data.data.question.length;i++){
			    		question+="<option value='"+data.data.question[i].id+"'>"+data.data.question[i].name+"</option>"
			    	}
			    	$('select[name=subcategory]').empty();
			    	$('select[name=subcategory]').html(subcategory);

			    	$('select[name=questions]').empty();
			    	$('select[name=questions]').html(question);
			    	$('select[name=subcategory],select[name=questions]').removeAttr("disabled")
			    	//$("select[name=subcategory],select[name=questions]").prop("selected", false);
			    });
        	} 
        	else {
		    	$('select[name=subcategory],select[name=questions],select[name=answer]').empty();
		    	$('select[name=subcategory],select[name=questions],select[name=answer]').attr("disabled","disabled")
		    }
        });

        $('select[name=questions]').change(function(){
        	var selected_value=[]
        	$('select[name=answer] :selected').each(function(i, sel){ 
        		selected_value.push($(sel).val())
			});
        	var answer='';
        	if($(this).val() !=''){
	            $.get("/answers/",{ids:$(this).val().join(",")}).done(function(data){
	            	var answers_list = data.data.answer_list
			    	for(var i=0;i<data.data.answers.length;i++){
		    			answer +="<option value='"+data.data.answers[i].id+"' question='"+data.data.answers[i].question+"'>"+data.data.answers[i].answer+"</option>"
				    }
			    	$('select[name=answer]').empty();
			    	$('select[name=answer]').html(answer);
			    	$('select[name=answer]').removeAttr("disabled")
			    	$('select[name=answer]').val(selected_value)
			    	$(".field-answer ul.select2-selection__rendered li").each(function(e){
			    		if ($.inArray($(this).text().substring(1, $(this).text().length),answers_list)== -1){
			    			$(this).remove()
			    		}
			    	});
				});
			} 
			else {
				$('select[name=answer]').empty();
				$('select[name=answer]').attr("disabled","disabled")
				$("ul.select2-selection__rendered").empty()
			}
        });

    })(django.jQuery);
});

