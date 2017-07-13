$(document).ready(function() {

	$("#searchBook").keypress(function(event) {
		if (event.keyCode == 13) {

			let sItem = $(':radio[name="searchItem"]:checked').val();

			if (sItem == 'book') {
				$.post('/naver/book', {
					searchBook : $(this).val()
				}, function(result) {
					$('#resultBody').html(result)
				})

			} else if(sItem=='movie') {
				$.post('/naver/movie', {
					searchBook : $(this).val()
				}, function(result) {
					$('#resultBody').html(result)
				})

			} else {
				$.post('/naver/news', {
					searchBook : $(this).val()
				}, function(result) {
					$('#resultBody').html(result)
				})

			}

		}
	})
})
