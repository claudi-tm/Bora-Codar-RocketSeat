function changeImage() {
	let controller = document.getElementById("controller");
	if (controller.innerHTML === "0") {
		let image_360 = document.createElement("img");
		image_360.setAttribute("src", "images/sofa.gif");
		image_360.setAttribute("id", "image_360");
		image_360.style.width = "70%";
		let static_image = document.getElementById("image_static");
        let close_image = document.createElement("img");
        let button_360 = document.getElementById("button-360");
        close_image.setAttribute("src", "images/VectorClose.png");
        close_image.setAttribute("id", "close-image");
        button_360.replaceWith(close_image);

		static_image.replaceWith(image_360);
        controller.innerHTML = "1";
	} else {
        let image_static = document.createElement("img");
		image_static.setAttribute("src", "images/image 2.png");
		image_static.setAttribute("id", "image_static");
		let image_360 = document.getElementById("image_360");
		image_360.replaceWith(image_static);
        let close_image = document.getElementById("close-image");
        let button_360 = document.createElement("img");
        button_360.setAttribute("src", "images/Vector.png");
        button_360.setAttribute("id", "button-360");
        close_image.replaceWith(button_360);
        controller.innerHTML = "0";
    }
}
