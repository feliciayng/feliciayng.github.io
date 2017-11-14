	var numclicks0 = 0;
	var keydowns0 = 0;

	var addedelements0 = [];

	$(document).ready(function() {
		$("#image0").click(function(e) {
			numclicks0++;
			$("#image0count").text(numclicks0);
			$("#image0countfield").val(numclicks0);

			var newdomelement0 = $("<div class='marker'></div>");
			newdomelement0.css("left", (e.pageX-3) + "px");
			newdomelement0.css("top", (e.pageY-3) + "px");

			var currhistory0 = $("#history0").val();
			currhistory0 += "|" + e.pageX + "," + e.pageY + "|";
			$("#history0").val(currhistory0);

			newdomelement0.click(removeElement0Event0);

			$("body").append(newdomelement0);

          // add to history
          addedelements0.push(newdomelement0);
      })
/*		$(document).keydown(function(e) {
			keydowns0++;
			$("#numkeydowns0").val(keydowns0);

			console.log(e);

			if(e.key=="z" && e.ctrlKey) {
				var elem0remove0 = addedelements0.pop();
				removeElement0(elem0remove0);
			}
		})*/
	})

	function removeElement0(elem) {
		$(elem).remove();

		numclicks0--;
		$("#image0count").text(numclicks0);
		$("#image0countfield").val(numclicks0);       
	}

	function removeElement0Event0(e) {
		removeElement0(this);
	}