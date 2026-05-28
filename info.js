const phones = [
  {
    id: 1,
    brand: "Samsung",
    model: "Galaxy A54 5G",
    category: ["students", "battery"],
    price: 24999,
    image: "samsung.png",
    specs: {
      ram: "8GB",
      storage: "128GB",
      battery: "5000mAh",
      camera: "50MP",
      processor: "Exynos 1380",
      display: "6.4 AMOLED",
    },
  },

  {
    id: 2,
    brand: "Apple",
    model: "iPhone 13",
    category: ["camera", "work"],
    price: 59999,
    image: "apple.png",
    specs: {
      ram: "4GB",
      storage: "128GB",
      battery: "3240mAh",
      camera: "12MP",
      processor: "A15 Bionic",
      display: "6.1 Super Retina",
    },
  },

  {
    id: 3,
    brand: "OnePlus",
    model: "Nord 3 5G",
    category: ["gaming", "battery"],
    price: 33999,
    image: "one.png",
    specs: {
      ram: "8GB",
      storage: "128GB",
      battery: "5000mAh",
      camera: "50MP",
      processor: "Dimensity 9000",
      display: "6.74 AMOLED",
    },
  },

  {
    id: 4,
    brand: "Xiaomi",
    model: "Redmi Note 12 Pro",
    category: ["students", "camera"],
    price: 19999,
    image: "redmi.png",
    specs: {
      ram: "6GB",
      storage: "128GB",
      battery: "5000mAh",
      camera: "50MP",
      processor: "Dimensity 1080",
      display: "6.67 AMOLED",
    },
  },

  {
    id: 5,
    brand: "OnePlus",
    model: "Nord 3 5G",
    category: ["gaming", "battery"],
    price: 33999,
    image: "one.png",
    specs: {
      ram: "8GB",
      storage: "128GB",
      battery: "5000mAh",
      camera: "50MP",
      processor: "Dimensity 9000",
      display: "6.74 AMOLED",
    },
  },

  {
    id: 6,
    brand: "Realme",
    model: "Realme Narzo 60",
    category: ["students", "battery"],
    price: 17999,
    image: "realme.png",
    specs: {
      ram: "8GB",
      storage: "128GB",
      battery: "5000mAh",
      camera: "64MP",
      processor: "Dimensity 6020",
      display: "6.43 AMOLED",
    },
  },

  {
    id: 7,
    brand: "iQOO",
    model: "iQOO Neo 7",
    category: ["gaming"],
    price: 29999,
    image: "iq.png",
    specs: {
      ram: "12GB",
      storage: "256GB",
      battery: "5000mAh",
      camera: "64MP",
      processor: "Dimensity 8200",
      display: "6.78 AMOLED",
    },
  },

  {
    id: 8,
    brand: "Vivo",
    model: "Vivo V29",
    category: ["camera"],
    price: 32999,
    image: "vivo.png",
    specs: {
      ram: "8GB",
      storage: "256GB",
      battery: "4600mAh",
      camera: "50MP",
      processor: "Snapdragon 778G",
      display: "6.78 AMOLED",
    },
  },

  {
    id: 9,
    brand: "Oppo",
    model: "Oppo Reno 10",
    category: ["camera", "work"],
    price: 38999,
    image: "oppo.png",
    specs: {
      ram: "12GB",
      storage: "256GB",
      battery: "4700mAh",
      camera: "64MP",
      processor: "Snapdragon 778G",
      display: "6.7 AMOLED",
    },
  },
];

const phonesContainer = document.querySelector(".phones-container");
function displayPhones(phoneArray, phoneContainer) {
  phoneContainer.innerHTML = "";
  phoneArray.forEach((phone) => {
    const card = document.createElement("div");
    card.className = "card";
    //destructuring
    const { brand, model, price, image, specs } = phone;
    card.innerHTML = `
  <div class="card-top">

    <div class="img-section">
      <img src="${image}" alt="${model}" class="phone-img">
    </div>

    <div class="details-section">

      <div class="card-icons">
      <i class="fa-regular fa-heart wishlist-icon" data-id="${phone.id}"></i>
        <i class="fa-solid fa-cart-shopping cartlist-icon" data-id="${phone.id}"></i>
      </div>

      <h2>${brand}</h2>

      <h3>${model}</h3>

      <div class="spec">
        <i class="fa-solid fa-memory"></i>
        ${specs.ram}
      </div>

      <div class="spec">
        <i class="fa-solid fa-camera"></i>
        ${specs.camera}
      </div>

      <div class="spec">
        <i class="fa-solid fa-battery-full"></i>
        ${specs.battery}
      </div>

    </div>

  </div>

  <div class="bottom-section">

    <p class="price">₹${price}</p>

    <button class="details-btn" data-id="${phone.id}">
      View Details
    </button>

  </div>
`;
    phoneContainer.appendChild(card);
  });
}
displayPhones(phones, phonesContainer);

//view button
// View Details
let currentOpenPhone = null;
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("details-btn")) {
    const id = Number(e.target.dataset.id);

    const selectedPhone = phones.find((phone) => phone.id === id);
    currentOpenPhone = selectedPhone;
    const phoneDetails = document.getElementById("phoneDetails");

    document.getElementById("detailsImage").src = selectedPhone.image;

    document.getElementById("detailsTitle").textContent =
      `${selectedPhone.brand} ${selectedPhone.model}`;

    document.getElementById("detailsPrice").textContent =
      `₹${selectedPhone.price}`;

    document.getElementById("detailsRam").textContent =
      `RAM : ${selectedPhone.specs.ram}`;

    document.getElementById("detailsStorage").textContent =
      `Storage : ${selectedPhone.specs.storage}`;

    document.getElementById("detailsBattery").textContent =
      `Battery : ${selectedPhone.specs.battery}`;

    document.getElementById("detailsCamera").textContent =
      `Camera : ${selectedPhone.specs.camera}`;

    document.getElementById("detailsProcessor").textContent =
      `Processor : ${selectedPhone.specs.processor}`;

    document.getElementById("detailsDisplay").textContent =
      `Display : ${selectedPhone.specs.display}`;

    // Show popup
    phoneDetails.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
});
//close button
const closeBtn = document.getElementById("closeBtn");

closeBtn.addEventListener("click", () => {
  document.getElementById("phoneDetails").style.display = "none";
  document.body.style.overflow = "auto";
  currentOpenPhone = null;
});
// Close modal when clicking outside
document.getElementById("phoneDetails").addEventListener("click", (e) => {
  if (e.target.id === "phoneDetails") {
    e.target.style.display = "none";
    document.body.style.overflow = "auto";
    currentOpenPhone = null;
  }
});
//wishlist
let wishlist = [];
function updateWishCount() {
  const wishCount = document.querySelector(".wish-count");
  wishCount.textContent = wishlist.length;
  if (wishlist.length > 0) {
    wishCount.style.display = "block";
  } else {
    wishCount.style.display = "none";
  }
}
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("wishlist-icon")) {
    const icon = e.target;
    const phoneId = Number(icon.dataset.id);
    const selectedItem = phones.find((item) => phoneId === item.id);
    const alreadyExists = wishlist.find((item) => item.id === phoneId);
    if (alreadyExists) {
      wishlist = wishlist.filter((item) => item.id !== phoneId);
      icon.classList.remove("fa-solid");
      icon.classList.add("fa-regular");
      icon.style.color = "#666";
    } else {
      wishlist.push(selectedItem);
      icon.classList.remove("fa-regular");
      icon.classList.add("fa-solid");
      icon.style.color = "red";
    }
    updateWishCount();
  }
});
const wishlistBox = document.querySelector(".wish-container");
wishlistBox.addEventListener("click", (e) => {
  e.stopPropagation();
  const heroBox = document.querySelector(".box");
  heroBox.style.display = "none";
  phonesContainer.style.display = "none";

  const oldWishlist = document.querySelector(".wishlist-page");
  if (oldWishlist) {
    oldWishlist.remove();
  }

  const wishlistPage = document.createElement("div");
  wishlistPage.className = "wishlist-page";
  wishlistPage.innerHTML = `
  
    <button class="back-btn">
      ← Back To Home
    </button>

    <h1 class="wish-heading">
      Wishlist ❤️
    </h1>

    <div class="wishlist-items"></div>

  `;
  document.querySelector(".main-content").appendChild(wishlistPage);
  const wishlistItems = wishlistPage.querySelector(".wishlist-items");
  if (wishlist.length === 0) {
    wishlistItems.innerHTML = `

      <h2 class="empty-msg">
        No items in wishlist 💔
      </h2>

    `;

    return;
  }
  displayPhones(wishlist, wishlistItems);
  // Add remove from wishlist functionality
  wishlistItems.querySelectorAll(".wishlist-icon").forEach((icon) => {
    icon.addEventListener("click", (e) => {
      e.stopPropagation();
      const phoneId = Number(icon.dataset.id);
      wishlist = wishlist.filter((item) => item.id !== phoneId);
      updateWishlistCount();

      if (wishlist.length === 0) {
        wishlistItems.innerHTML = `
          <h2 class="empty-msg">
            <i class="fa-regular fa-heart"></i> No items in wishlist
          </h2>
        `;
      } else {
        displayPhones(wishlist, wishlistItems);
      }
    });
  });
});

//CartItems
let cartlist = [];
function updateCartCount() {
  const cartCount = document.querySelector(".cart-count");
  cartCount.textContent = cartlist.length;
  if (cartlist.length > 0) {
    cartCount.style.display = "block";
  } else {
    cartCount.style.display = "none";
  }
}
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("cartlist-icon")) {
    const icon = e.target;
    const phoneId = Number(icon.dataset.id);
    const selectedItem = phones.find((item) => phoneId === item.id);
    const alreadyExists = cartlist.find((item) => item.id === phoneId);
    if (alreadyExists) {
      cartlist = cartlist.filter((item) => item.id !== phoneId);
      icon.style.color = "#666";
    } else {
      cartlist.push(selectedItem);
      icon.style.color = "blue";
    }
    updateCartCount();
  }
});
// Add to cart button in details modal
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-cart-btn") && currentOpenPhone) {
    const alreadyExists = cartlist.find(
      (item) => item.id === currentOpenPhone.id,
    );
    if (!alreadyExists) {
      cartlist.push(currentOpenPhone);
      updateCartCount();
      alert("Added to cart!");
    } else {
      alert("Already in cart!");
    }
  }

  if (e.target.classList.contains("buy-now-btn") && currentOpenPhone) {
    alert(`Buying: ${currentOpenPhone.brand} ${currentOpenPhone.model}`);
  }
});
const cartlistBox = document.querySelector(".cart-container");
cartlistBox.addEventListener("click", (e) => {
  e.stopPropagation();
  const heroBox = document.querySelector(".box");
  heroBox.style.display = "none";
  phonesContainer.style.display = "none";

  const oldWishlist = document.querySelector(".cartlist-page");
  if (oldWishlist) {
    oldWishlist.remove();
  }

  const cartlistPage = document.createElement("div");
  cartlistPage.className = "cartlist-page";
  cartlistPage.innerHTML = `

    <button class="back-btn">
      ← Back To Home
    </button>

    <h1 class="cart-heading">
      Cart 🛒
    </h1>

    <div class="cartlist-items"></div>
  `;
  document.querySelector(".main-content").appendChild(cartlistPage);
  const cartlistItems = cartlistPage.querySelector(".cartlist-items");
  if (cartlist.length === 0) {
    cartlistItems.innerHTML = `

      <h2 class="empty-msg">
        No items in cartlist 🛒
      </h2>

    `;

    return;
  }
  displayPhones(cartlist, cartlistItems);
  // Add remove from cart functionality
  cartlistItems.querySelectorAll(".cartlist-icon").forEach((icon) => {
    icon.addEventListener("click", (e) => {
      e.stopPropagation();
      const phoneId = Number(icon.dataset.id);
      cartlist = cartlist.filter((item) => item.id !== phoneId);
      updateCartCount();

      if (cartlist.length === 0) {
        cartlistItems.innerHTML = `
          <h2 class="empty-msg">
            <i class="fa-solid fa-cart-shopping"></i> No items in cart
          </h2>
        `;
      } else {
        displayPhones(cartlist, cartlistItems);
      }
    });
  });
});
//back-button
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("back-btn")) {
    document.querySelector(".box").style.display = "flex";
    phonesContainer.style.display = "grid";
    const wishlistPage = document.querySelector(".wishlist-page");
    if (wishlistPage) {
      wishlistPage.remove();
    }
    const cartlistPage = document.querySelector(".cartlist-page");
    if (cartlistPage) {
      cartlistPage.remove();
    }
  }
});

// Escape key to close modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const phoneDetails = document.getElementById("phoneDetails");
    if (phoneDetails.style.display === "flex") {
      phoneDetails.style.display = "none";
      document.body.style.overflow = "auto";
      currentOpenPhone = null;
    }
  }
});

// Responsive sidebar toggle on window resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    sidebar.classList.remove("active");
    menuBtn.classList.remove("active");
  }
});
