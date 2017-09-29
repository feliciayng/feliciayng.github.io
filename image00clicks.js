	var numclicks00 = 0;
	var keydowns00 = 0;

	var addedelements00 = [];

	$(document).ready(function() {
		$("#image00").click(function(e) {
			numclicks00++;
			$("#image00count").text(numclicks00);
			$("#image00countfield").val(numclicks00);

			var newdomelement00 = $("<div class='marker'></div>");
			newdomelement00.css("left", (e.pageX-3) + "px");
			newdomelement00.css("top", (e.pageY-3) + "px");

			var currhistory00 = $("#history00").val();
			currhistory00 += "|" + e.pageX + "," + e.pageY + "|";
			$("#history00").val(currhistory00);

			newdomelement00.click(removeElement00Event00);

			$("body").append(newdomelement00);

          // add to history
          addedelements00.push(newdomelement00);
      })
/*		$(document).keydown(function(e) {
			keydowns00++;
			$("#numkeydowns00").val(keydowns00);

			console.log(e);

			if(e.key=="z" && e.ctrlKey) {
				var elem00remove00 = addedelements00.pop();
				removeElement00(elem00remove00);
			}
		})*/
	})

	function removeElement00(elem) {
		$(elem).remove();

		numclicks00--;
		$("#image00count").text(numclicks00);
		$("#image00countfield").val(numclicks00);       
	}

	function removeElement00Event00(e) {
		removeElement00(this);
	}