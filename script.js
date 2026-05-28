//search bar
const input = document.querySelector(".input");
input.addEventListener("input", () => {
  const value = input.value.toLowerCase();
  const filtered = phones.filter((phone) => {
    return (
      phone.brand.toLowerCase().includes(value) ||
      phone.model.toLowerCase().includes(value)
    );
  });
  if (filtered.length === 0) {
    phonesContainer.innerHTML = "<p class='error-msg'>No phones found</p>";
  } else {
    displayPhones(filtered, phonesContainer);
  }
});
//Brand selection
const selectBrand = document.getElementById("company");
selectBrand.addEventListener("change", () => {
  const selectedBrand = selectBrand.value;

  if (selectedBrand === "all") {
    displayPhones(phones, phonesContainer);
  } else {
    const filteredPhones = phones.filter((phone) => {
      return phone.brand === selectedBrand;
    });
    displayPhones(filteredPhones, phonesContainer);
  }
});
//categories filter
const categoriesFilter = document.querySelector(".categories-filter");
categoriesFilter.addEventListener("click", (e) => {
  const categoryItem = e.target.closest("li");
  if (!categoryItem) return;
  const selectedCategory = categoryItem.dataset.category;
  if (selectedCategory === "all") {
    displayPhones(phones, phonesContainer);
  } else {
    const filteredPhones = phones.filter((phone) => {
      return phone.category.includes(selectedCategory);
    });
    displayPhones(filteredPhones, phonesContainer);
  }
});
//checkbox
const checkboxes = document.querySelectorAll(".brand-check");
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const checkBrands = [];
    checkboxes.forEach((check) => {
      if (check.checked) {
        checkBrands.push(check.value);
      }
    });
    if (checkBrands.length === 0) {
      displayPhones(phones, phonesContainer);
      return;
    }
    const filteredPhones = phones.filter((phone) => {
      return checkBrands.includes(phone.brand);
    });
    displayPhones(filteredPhones, phonesContainer);
  });
});
//reset button
const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", () => {
  input.value = "";
  selectBrand.value = "all";
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
  displayPhones(phones, phonesContainer);
});
///menu button
const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");
const mainContent = document.querySelector(".main-content");
menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  sidebar.classList.toggle("active");
  menuBtn.classList.toggle("active");
});
document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
    sidebar.classList.remove("active");
    menuBtn.classList.remove("active");
  }
});
