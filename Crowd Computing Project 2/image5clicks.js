	var numclicks5 = 0;
	var keydowns5 = 0;

	var addedelements5 = [];

	$(document).ready(function() {
		$("#image5").click(function(e) {
			numclicks5++;
			$("#image5count").text(numclicks5);
			$("#image5countfield").val(numclicks5);

			var newdomelement5 = $("<div class='marker'></div>");
			newdomelement5.css("left", (e.pageX-3) + "px");
			newdomelement5.css("top", (e.pageY-3) + "px");

			var currhistory5 = $("#history5").val();
			currhistory5 += "|" + e.pageX + "," + e.pageY + "|";
			$("#history5").val(currhistory5);

			newdomelement5.click(removeElement5Event5);

			$("body").append(newdomelement5);

          // add to history
          addedelements5.push(newdomelement5);
      })
/*		$(document).keydown(function(e) {
			keydowns5++;
			$("#numkeydowns5").val(keydowns5);

			console.log(e);

			if(e.key=="z" && e.ctrlKey) {
				var elem2remove5 = addedelements5.pop();
				removeElement5(elem2remove5);
			}
		})*/
	})

	function removeElement5(elem) {
		$(elem).remove();

		numclicks5--;
		$("#image5count").text(numclicks5);
		$("#image5countfield").val(numclicks5);       
	}

	function removeElement5Event5(e) {
		removeElement5(this);
	}