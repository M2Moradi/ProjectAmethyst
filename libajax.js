var AJAX_FLAG_SUCCESS = 1;
var AJAX_FLAG_FAILURE = 2;

function ajax_load_async (data_url, callback_success, callback_failure)
{
	var http_request;
	try
	{
		http_request = new XMLHttpRequest();
	}
	catch (e)
	{
		try
		{
			http_request = new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e)
		{
			try
			{
				http_request = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e)
			{
				callback_failure();
				return AJAX_FLAG_FAILURE;
			}
		}
	}
	http_request.onreadystatechange = function(){
		if (http_request.readyState == 4)
		{
			callback_success(http_request.responseText);
			return AJAX_FLAG_SUCCESS;
		}
	}
}
