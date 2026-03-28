import { getParam, loadHeaderFooter } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import ProductList from "./ProductList.mjs";
import { updateCartInventory } from "./cartCounter.mjs";
import Alert from "./Alert.mjs";

async function init() {
  // 1. Load the UI basics
  await loadHeaderFooter();
  updateCartInventory();

  // 2. Load Alerts (Protected by try/catch)
  try {
      const alertManager = new Alert();
      await alertManager.init(); 
      console.log("Alerts loaded successfully");
    } catch (err) {
      // If alerts fail, the code "catches" the error here and keeps going
      console.error("Alerts failed to load, but continuing to categories:", err);
    }
  

  // 3. Setup Product Listing
  const category = getParam("category");
  const dataSource = new ExternalServices();
  const element = document.querySelector(".product-list");

  // Only initialize if the element exists in your HTML
  if (element) {
    const productList = new ProductList(category, dataSource, element);
    productList.init();
  } else {
    console.error("Could not find .product-list element in the HTML! Check your index.html.");
  }
}

init();