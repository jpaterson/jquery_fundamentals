// SOLUTIONS GO BELOW EACH EXERCISE

// EXERCISE: Change Background

// Change the background color of '#target' by script. 
// Hint: you can use .css
// $(document).ready(function() { 
// 	$(#target).css("background-color", "yellow");
//  });

// EXERCISE: Change Parent
// Change the text in the span, a child of "#target"
// Hint: you can use .text
// $(document).ready(function() {
// 	$("#target").find("span").text("Hello There!");
// });

// EXERCISE: Create Clone
// Create a clone of the span in "#target" and position it under the origin.
// Hint: you can use .clone and .insertAfter
// $(document).ready(function() {
// 	$("#target").find("span").clone().insertAfter("#target");
// });

// EXERCISE: Use Filter
// Change background color of the second ".target"
// Hint: you can use .eq and .css
// $(document).ready(function() {
// 	$(".target").eq(1).css("background-color", "orange");
// });

// EXERCISE: Disable Buttons
// Disable the button
// Hint: you will have to select the button and can use .attr
// $(document).ready(function() {
// 	$(".target").find("button").attr("disabled", true);
// });

// EXERCISE: Uncheck CheckBoxes
// Uncheck all checkboxes using jQuery
// Hint: you will have to select the input and can use .removeAttr
// $(document).ready(function() {
// 	$(".target").find("input").prop('checked', false);
// });

// EXERCISE: Change Parent

// Move "#child" from "#parent1" to "#parent2"
// Hint: you can use .appendTo
// $(document).ready(function() {
// 	$("#child").appendTo("#parent2");
// });

// EXERCISE: Select A Option in A Select Box
// Select the second option in the selectbox by script
// Hint: you will have to select the option and can use .eq and .attr
// $(document).ready(function() {
// 	$("select option[value='second']").attr("selected", "selected");
// });

// EXERCISE: Change Size
// Make "#target" double size
// Hint: you can use .css, .width and .height
// $(document).ready(function() {
// 	$("#target").css("width", '300px')
// 	$("#target").css("height", '200px')
// });

// EXERCISE: Empty Elements
// Hint: you can use .empty
// Remove all children and text of "#target"
// $(document).ready(function() {
// 	$("#target").empty();
	// $(".child").remove();
// });

// EXERCISE: Delay
// Show Alert with 1 second delay (Use "setTimeout")
// Hint: you can use .setTimeout and alert
// $(document).ready(function() {
// 	setTimeout(function(){alert("Hello")},3000);
// });

// EXERCISE: Count
// Show the number of children in an alert
// Hint: you can use .children, .length and alert or you could use .find, .size and alert. the alert should show 5
// $(document).ready(function() {
// 	var x = $(".child").length
// 	alert(x)
// });

// EXERCISE: Animate
// Make "#target" double size with animation
// Hint: you can use .animate, .width, and .height
// $(document).ready(function() {
// 	$("#target").animate({ width: "300px", height: "200px" }, 500);
// });

// EXERCISE: Alternate Color
// Make the list-box alternating. (Make odd options a different color)
// Hint: you can select the option and use .filter and .css
// $(document).ready(function() {
// 	var x = $("#target option").filter(":odd");
// 	x.css("color", "red")
// });

// EXERCISE: All But One
// Remove all children of "#target" but h2
// Hint: you can use .children, .not and .remove
//  $(document).ready(function() {
// 	$("#target").contents().not('h2').empty();
// });

// EXERCISE: Without Children

// Remove all 'div' whitch has no child elements.
// Hint: you can use .not and .remove. Look closely at what options you can pass .not
$(document).ready(function() {
	$("div:empty").remove();
});
