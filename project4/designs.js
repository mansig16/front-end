$(function()
{
	function makeMyGrid()
	{
		let nor=$('#inputHeight').val();
		let noc=$('#inputWeight').val();
		$('table tr').remove();
		for(var i=0;i<nor;i++)
		{
			$('table').append('<tr></tr>');
			for(var j=0;j<noc;j++)
			{
				$('tr').last().append('<td></td>');
				$('td').addClass('cells');
			}
		}
	}

	$(document).ready(function(){
		$('#submit').on('click',function(e)
		{
			e.preventDefault();
			makeMyGrid();
		});
		

		$('#pixelCanvas').on('click','td',function()
		{
			let paint=$('#colorPicker').val();
			$(this).css('background-color',paint);

		});
	});

	
});