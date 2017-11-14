	var numclicks2 = 0;
	var keydowns2 = 0;

	var addedelements2 = [];

	$(document).ready(function() {
		$("#image2").click(function(e) {
			numclicks2++;
			$("#image2count").text(numclicks2);
			$("#image2countfield").val(numclicks2);

			var newdomelement2 = $("<div class='marker'></div>");
			newdomelement2.css("left", (e.pageX-3) + "px");
			newdomelement2.css("top", (e.pageY-3) + "px");

			var currhistory2 = $("#history2").val();
			currhistory2 += "|" + e.pageX + "," + e.pageY + "|";
			$("#history2").val(currhistory2);

			newdomelement2.click(removeElement2Event2);

			$("body").append(newdomelement2);

          // add to history
          addedelements2.push(newdomelement2);
      })
/*		$(document).keydown(function(e) {
			keydowns2++;
			$("#numkeydowns2").val(keydowns2);

			console.log(e);

			if(e.key=="z" && e.ctrlKey) {
				var elem2remove2 = addedelements2.pop();
				removeElement2(elem2remove2);
			}
		})*/
	})

	function removeElement2(elem) {
		$(elem).remove();

		numclicks2--;
		$("#image2count").text(numclicks2);
		$("#image2countfield").val(numclicks2);       
	}

	function removeElement2Event2(e) {
		removeElement2(this);
	}