	var numclicks4 = 0;
	var keydowns4 = 0;

	var addedelements4 = [];

	$(document).ready(function() {
		$("#image4").click(function(e) {
			numclicks4++;
			$("#image4count").text(numclicks4);
			$("#image4countfield").val(numclicks4);

			var newdomelement4 = $("<div class='marker'></div>");
			newdomelement4.css("left", (e.pageX-3) + "px");
			newdomelement4.css("top", (e.pageY-3) + "px");

			var currhistory4 = $("#history4").val();
			currhistory4 += "|" + e.pageX + "," + e.pageY + "|";
			$("#history4").val(currhistory4);

			newdomelement4.click(removeElement4Event4);

			$("body").append(newdomelement4);

          // add to history
          addedelements4.push(newdomelement4);
      })
/*		$(document).keydown(function(e) {
			keydowns4++;
			$("#numkeydowns4").val(keydowns4);

			console.log(e);

			if(e.key=="z" && e.ctrlKey) {
				var elem2remove4 = addedelements4.pop();
				removeElement4(elem2remove4);
			}
		})*/
	})

	function removeElement4(elem) {
		$(elem).remove();

		numclicks4--;
		$("#image4count").text(numclicks4);
		$("#image4countfield").val(numclicks4);       
	}

	function removeElement4Event4(e) {
		removeElement4(this);
	}