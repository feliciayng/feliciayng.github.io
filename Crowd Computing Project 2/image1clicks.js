	var numclicks1 = 0;
	var keydowns1 = 0;

	var addedelements1 = [];

	$(document).ready(function() {
		$("#image1").click(function(e) {
			numclicks1++;
			$("#image1count").text(numclicks1);
			$("#image1countfield").val(numclicks1);

			var newdomelement1 = $("<div class='marker'></div>");
			newdomelement1.css("left", (e.pageX-3) + "px");
			newdomelement1.css("top", (e.pageY-3) + "px");

			var currhistory1 = $("#history1").val();
			currhistory1 += "|" + e.pageX + "," + e.pageY + "|";
			$("#history1").val(currhistory1);

			newdomelement1.click(removeElement1Event1);

			$("body").append(newdomelement1);

          // add to history
          addedelements1.push(newdomelement1);
      })
/*		$(document).keydown(function(e) {
			keydowns1++;
			$("#numkeydowns1").val(keydowns1);

			console.log(e);

			if(e.key=="z" && e.ctrlKey) {
				var elem1remove1 = addedelements1.pop();
				removeElement1(elem1remove1);
			}
		})*/
	})

	function removeElement1(elem) {
		$(elem).remove();

		numclicks1--;
		$("#image1count").text(numclicks1);
		$("#image1countfield").val(numclicks1);       
	}

	function removeElement1Event1(e) {
		removeElement1(this);
	}