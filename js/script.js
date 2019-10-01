$(document).ready(function() {  

	load_data();
    
	function load_data(){
		$.ajax({
			url:"fetch.php",
			method:"POST",
			success:function(data){
				$('#user_data').html(data);
			}
		});
	}
	
	$("#user_dialog").dialog({
		autoOpen:false,
		width:400
	});
	
	$('#add').click(function(){
		$('#user_dialog').attr('title', 'Add Data');
		$('#action').val('insert');
		$('#form_action').val('Insert');
		$('#user_form')[0].reset();
		$('#form_action').attr('disabled', false);
		$("#user_dialog").dialog('open');
	});
	
	$('#user_form').on('submit', function(event){
		event.preventDefault();
		var error_first_name = '';
		var error_second_name = '';
		var error_email = '';
		var email = $('#email').val();
		var firstName = $('#first_name').val();
		var secondName = $('#second_name').val();
		

		// function for validating the inserted by user First Name and Second Name via regexp
  		function validateName(name) {
  			var nameReg =  /^[0-9a-zA-Z-]+$/;
  			return nameReg.test(name);
		}

		if($('#first_name').val() == '' || !validateName(firstName)){
			error_first_name = 'Only letters, numbers and hyphens allowed';
			$('#error_first_name').text(error_first_name);
			$('#first_name').css('border-color', '#cc0000');
		} else {
			error_first_name = '';
			$('#error_first_name').text(error_first_name);
			$('#first_name').css('border-color', '');
		}

		if($('#second_name').val() == '' || !validateName(secondName)){
			error_second_name = 'Only letters, numbers and hyphens allowed';
			$('#error_second_name').text(error_second_name);
			$('#second_name').css('border-color', '#cc0000');
		} else {
			error_second_name = '';
			$('#error_second_name').text(error_second_name);
			$('#second_name').css('border-color', '');
		}
	
		// function for validating the inserted by user email via regexp
		function validateEmail(email){
  			var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  			return emailReg.test(email);
		}

			
		if($('#email').val() == '' || !validateEmail(email)){
			error_email = 'A valid Email is expected e.g.: example@example.com';
			$('#error_email').text(error_email);
			$('#email').css('border-color', '#cc0000');
		} else {
			error_email = '';
			$('#error_email').text(error_email);
			$('#email').css('border-color', '');
		}
		
		if(error_first_name != '' || error_second_name != '' || error_email != ''){
			return false;
		} else {
			$('#form_action').attr('disabled', 'disabled');
			var form_data = $(this).serialize();
			$.ajax({
				url:"action.php",
				method:"POST",
				data:form_data,
				success:function(data){
					$('#user_dialog').dialog('close');
					load_data();
					$('#form_action').attr('disabled', false);
				}
			});
		}
		
	});
	
	$(document).on('click', '.edit', function(){
		var id = $(this).attr('id');
		var action = 'fetch_single';
		$.ajax({
			url:"action.php",
			method:"POST",
			data:{id:id, action:action},
			dataType:"json",
			success:function(data){
				$('#first_name').val(data.first_name);
				$('#second_name').val(data.second_name);
				$('#email').val(data.email);
				$('#user_dialog').attr('title', 'Edit Data');
				$('#action').val('update');
				$('#hidden_id').val(id);
				$('#form_action').val('Update');
				$('#user_dialog').dialog('open');
			}
		});
	});
	
	$('#delete_confirmation').dialog({
		autoOpen:false,
		modal: true,
		buttons:{
			Ok : function(){
				var id = $(this).data('id');
				var action = 'delete';
				$.ajax({
					url:"action.php",
					method:"POST",
					data:{id:id, action:action},
					success:function(data){
						$('#delete_confirmation').dialog('close');
						load_data();
					}
				});
			},
			Cancel : function(){
				$(this).dialog('close');
			}
		}	
	});
	
	$(document).on('click', '.delete', function(){
		var id = $(this).attr("id");
		$('#delete_confirmation').data('id', id).dialog('open');
	});
	
});