/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector("#app");
/* //PROMESAS
window
  //Conectarnos al servidor
  .fetch(url)
  //Procesar la respuesta
  .then((respuesta) => respuesta.json())
  //Renderizar
  .then((responseJson) => {
    responseJson.data.forEach((element) => {
      console.log(element.name);
    });
  }); */

//INTL
const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
  }).format(price);

  return newPrice;
};
//ASYNC / AWAIT
async function getAvocados() {
  const response = await fetch(`${baseUrl}/api/avo`);
  const responseJson = await response.json();

  const allItems = [];

  responseJson.data.forEach((element) => {
    const itemContainer = document.createElement("div");
    itemContainer.className =
      "md:flex flex-col justify-center items-center bg-white rounded-lg p-4 hover:bg-yellow-50";
    //crear titulo
    const title = document.createElement("h2");
    title.textContent = element.name;
    title.className = "text-lg font-bold text-gray-500 ";
    //creat imagen
    const image = document.createElement("img");
    image.src = `${baseUrl}${element.image}`;
    image.className =
      "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";
    //crear precio
    const price = document.createElement("div");
    price.textContent = formatPrice(element.price);
    itemContainer.append(image, title, price);
    price.className = "text-gray-600";
    allItems.push(itemContainer);
  });

  appNode.append(...allItems);
}
getAvocados();
