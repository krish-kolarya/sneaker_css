const xhr = new XMLHttpRequest();
xhr.open('GET', './products.json');
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText);

        const wrapper = document.querySelector(".sliderWrapper");
        const menuItems = document.querySelectorAll(".menuItem");

        let chosenProduct = data[0];

        const currentProductImg = document.querySelector(".productImg");
        const currentProductTitle = document.querySelector(".productTitle");
        const currentProductPrice = document.querySelector(".productPrice");
        const currentProductColors = document.querySelectorAll(".color");
        const currentProductSizes = document.querySelectorAll(".size");

        menuItems.forEach((item, index) => {
            item.addEventListener("click", () => {

                wrapper.style.transform = `translateX(${-100 * index}vw)`;

                chosenProduct = data[index];

                currentProductTitle.textContent = chosenProduct.title;
                currentProductPrice.textContent = "$" + chosenProduct.price;
                currentProductImg.src = chosenProduct.colors[0].img;

                currentProductColors.forEach((color, colorIndex) => {
                    color.style.backgroundColor = chosenProduct.colors[colorIndex].code;
                });
            });
        });

        currentProductColors.forEach((color, index) => {
            color.addEventListener("click", () => {
                currentProductImg.src = chosenProduct.colors[index].img;
            });
        });

        currentProductSizes.forEach((size, index) => {
            size.addEventListener("click", () => {
                currentProductSizes.forEach((size) => {
                    size.style.backgroundColor = "white";
                    size.style.color = "black";
                });
                size.style.backgroundColor = "black";
                size.style.color = "white";
            });
        });

        const productButton = document.querySelector(".productButton");
        const payment = document.querySelector(".payment");
        const close = document.querySelector(".close");

        productButton.addEventListener("click", () => {
            payment.style.display = "flex";
        });

        close.addEventListener("click", () => {
            payment.style.display = "none";
        });

        $(document).ready(function() {
          let cartItems = 0;
      
          function updateCart() {
              $("#cartCount").text(cartItems);
          }
      
          $(".addToCart").on("click", function() {

              cartItems++;

              updateCart();
          });
      });
      
    }
}
xhr.send();