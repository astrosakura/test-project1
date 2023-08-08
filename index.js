const productData = [
  {
    name: "1 Pair",
    price: "DKK 195.00",
    colors: ["Red", "Blue", "Green"],
    discount: "50% OFF",
    size: ["S", "M", "L"],
  },
  {
    name: "2 Pair",
    price: "DKK 250.00",
    discount: "40% OFF",
    colors: ["Black", "White", "Gray"],
    size: ["S", "M", "L"],
  },
  {
    name: "3 Pair",
    price: "DKK 528.00",
    discount: "60% OFF",
    colors: ["Black", "White", "Gray"],
    size: ["S", "M", "L"],
  },
];

const productContainer = document.getElementById("product-container");

productData.forEach((product, index) => {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const radioLabel = document.createElement("label");
  radioLabel.classList.add("radio-container");

  const radioInput = document.createElement("input");
  radioInput.type = "radio";
  radioInput.classList.add("radio");
  radioInput.name = "option";
  radioInput.value = `option${index}`;

  radioInput.addEventListener("click", () => toggleDropdown(index));
  radioInput.addEventListener("click", () => toggleDropdown1(index));

  const inlineContent = document.createElement("div");
  inlineContent.classList.add("inline-content");

  const productNameElement = document.createElement("p");
  productNameElement.classList.add("product-name");
  productNameElement.textContent = product.name;

  const productPriceElement = document.createElement("p");
  productNameElement.classList.add("product-price");
  productPriceElement.textContent = product.price;

  const discountContent = document.createElement("div");
  discountContent.classList.add("discount-content");

  const productdiscountElement = document.createElement("p");
  productdiscountElement.textContent = product.discount;

  const colorDropdown = document.createElement("select");
  colorDropdown.classList.add("dropdown-value", "hidden");
  colorDropdown.innerHTML = "<label>Color</label>";

  product.colors.forEach((color) => {
    const colorOption = document.createElement("option");
    colorOption.value = color;
    colorOption.textContent = color;
    colorDropdown.appendChild(colorOption);
  });

  inlineContent.appendChild(productNameElement);
  inlineContent.appendChild(productPriceElement);
  discountContent.appendChild(productdiscountElement);
  inlineContent.appendChild(colorDropdown);

  const sizeDropdown = document.createElement("select");
  sizeDropdown.classList.add("dropdown-value1", "hidden");
  sizeDropdown.innerHTML = '<option value="default">Size</option>';

  product.size.forEach((size) => {
    const sizeOption = document.createElement("option");
    sizeOption.value = size;
    sizeOption.textContent = size;
    sizeDropdown.appendChild(sizeOption);
  });

  inlineContent.appendChild(productNameElement);
  inlineContent.appendChild(productPriceElement);
  discountContent.appendChild(productdiscountElement);
  inlineContent.appendChild(sizeDropdown);

  radioLabel.appendChild(radioInput);
  radioLabel.appendChild(inlineContent);
  radioLabel.appendChild(discountContent);
  productCard.appendChild(radioLabel);

  productContainer.appendChild(productCard);
});

function toggleDropdown(index) {
  const colorDropdown = document.querySelectorAll(".dropdown-value")[index];
  colorDropdown.classList.toggle("hidden");
}

function toggleDropdown1(index) {
  const sizeDropdown = document.querySelectorAll(".dropdown-value1")[index];
  sizeDropdown.classList.toggle("hidden");
}
