	var numclicks6 = 0;
	var keydowns6 = 0;

	var addedelements6 = [];

	$(document).ready(function() {
		$("#image6").click(function(e) {
			numclicks6++;
			$("#image6count").text(numclicks6);
			$("#image6countfield").val(numclicks6);

			var newdomelement6 = $("<div class='marker'></div>");
			newdomelement6.css("left", (e.pageX-3) + "px");
			newdomelement6.css("top", (e.pageY-3) + "px");

			var currhistory6 = $("#history6").val();
			currhistory6 += "|" + e.pageX + "," + e.pageY + "|";
			$("#history6").val(currhistory6);

			newdomelement6.click(removeElement6Event6);

			$("body").append(newdomelement6);

          // add to history
          addedelements6.push(newdomelement6);
      })
/*		$(document).keydown(function(e) {
			keydowns6++;
			$("#numkeydowns6").val(keydowns6);

			console.log(e);

			if(e.key=="z" && e.ctrlKey) {
				var elem2remove6 = addedelements6.pop();
				removeElement6(elem2remove6);
			}
		})*/
	})

	function removeElement6(elem) {
		$(elem).remove();

		numclicks6--;
		$("#image6count").text(numclicks6);
		$("#image6countfield").val(numclicks6);       
	}

	function removeElement6Event6(e) {
		removeElement6(this);
	}