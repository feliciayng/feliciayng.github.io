	var numclicks3 = 0;
	var keydowns3 = 0;

	var addedelements3 = [];

	$(document).ready(function() {
		$("#image3").click(function(e) {
			numclicks3++;
			$("#image3count").text(numclicks3);
			$("#image3countfield").val(numclicks3);

			var newdomelement3 = $("<div class='marker'></div>");
			newdomelement3.css("left", (e.pageX-3) + "px");
			newdomelement3.css("top", (e.pageY-3) + "px");

			var currhistory3 = $("#history3").val();
			currhistory3 += "|" + e.pageX + "," + e.pageY + "|";
			$("#history3").val(currhistory3);

			newdomelement3.click(removeElement3Event3);

			$("body").append(newdomelement3);

          // add to history
          addedelements3.push(newdomelement3);
      })
/*		$(document).keydown(function(e) {
			keydowns3++;
			$("#numkeydowns3").val(keydowns3);

			console.log(e);

			if(e.key=="z" && e.ctrlKey) {
				var elem2remove3 = addedelements3.pop();
				removeElement3(elem2remove3);
			}
		})*/
	})

	function removeElement3(elem) {
		$(elem).remove();

		numclicks3--;
		$("#image3count").text(numclicks3);
		$("#image3countfield").val(numclicks3);       
	}

	function removeElement3Event3(e) {
		removeElement3(this);
	}