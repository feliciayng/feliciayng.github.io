	var numclicks7 = 0;
	var keydowns7 = 0;

	var addedelements7 = [];

	$(document).ready(function() {
		$("#image7").click(function(e) {
			numclicks7++;
			$("#image7count").text(numclicks7);
			$("#image7countfield").val(numclicks7);

			var newdomelement7 = $("<div class='marker'></div>");
			newdomelement7.css("left", (e.pageX-3) + "px");
			newdomelement7.css("top", (e.pageY-3) + "px");

			var currhistory7 = $("#history7").val();
			currhistory7 += "|" + e.pageX + "," + e.pageY + "|";
			$("#history7").val(currhistory7);

			newdomelement7.click(removeElement7Event7);

			$("body").append(newdomelement7);

          // add to history
          addedelements7.push(newdomelement7);
      })
/*		$(document).keydown(function(e) {
			keydowns7++;
			$("#numkeydowns7").val(keydowns7);

			console.log(e);

			if(e.key=="z" && e.ctrlKey) {
				var elem2remove7 = addedelements7.pop();
				removeElement7(elem2remove7);
			}
		})*/
	})

	function removeElement7(elem) {
		$(elem).remove();

		numclicks7--;
		$("#image7count").text(numclicks7);
		$("#image7countfield").val(numclicks7);       
	}

	function removeElement7Event7(e) {
		removeElement7(this);
	}