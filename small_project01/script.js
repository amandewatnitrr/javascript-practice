/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const target_cell = document.querySelector(".grid");

target_cell.addEventListener("mouseenter",() => {
    target_cell.style.outline = "6px solid black";
});

target_cell.addEventListener("mouseleave", () => {
    target_cell.style.outline = "";
  });

const target_boxes = document.querySelectorAll(".cell");

target_boxes.forEach((target) => {
    target.addEventListener("mouseenter", (e) => {
        target.style.backgroundColor = "black";
    });

    target.addEventListener("mouseleave", () => {
        target.style.backgroundColor = "";
    });
});

