const dbProductos = [
  {
    id: 1,
    title: "Carnaval en Purmamarca + Tilcara.",
    category: "Jujuy",
    stock: 25,
    imgurl:"https://i.imgur.com/vsMtuvD.png",
    price: 140,
  },
  {
    id: 2,
    title: "Cafayate, Valles Calchaquíes",
    category: "Salta",
    stock: 30,
    imgurl: "https://i.imgur.com/sJlsqLy.png",
    price: 98.10,
  },
  {
    id: 3,
    title: "Salinas Grandes + Purmamarca",
    category: "Jujuy",
    stock: 20,
    imgurl: "https://i.imgur.com/FTPbW69.png",
    price: 133.34,
  },
  {
    id: 4,
    title: "Quebrada de Humahuaca",
    category: "Salta",
    stock: 40,
    imgurl: "https://i.imgur.com/0ktdtF5.png",
    price: 121.91,
  },
  {
    id: 5,
    title: "Cataratas Argentinas",
    category: "Iguazú",
    stock: 30,
    imgurl: "https://i.imgur.com/KmhgYri.jpeg",
    price: 30,
  },
  {
    id: 6,
    title: "Cataratas Brasileras + Parque Das Aves",
    category: "Iguazú",
    stock: 28,
    imgurl: "https://i.imgur.com/JNRIrH8.jpeg",
    price: 64,
  },
  {
    id: 7,
    title: "Tafí del valle + Ruinas de Quilmes",
    category: "Tucuman",
    stock: 10,
    imgurl: "https://i.imgur.com/Yt2YI2v.jpeg",
    price: 113.10,
  },
  {
    id: 8,
    title: "Paisajes y Yungas",
    category: "Tucumán",
    stock: 15,
    imgurl: "https://i.imgur.com/AMklElu.png",
    price: 53.67,
  },
  {
    id: 9,
    title: "Iruya, Purmamarca o Tilcara",
    category: "Jujuy",
    stock: 20,
    imgurl: "https://i.imgur.com/bLs99oX.jpeg",
    price: 150,
  },
  {
    id: 10,
    title: "Cachi, Valles Calchaquíes",
    category: "Salta",
    stock: 35,
    imgurl: "https://i.imgur.com/2JA6qG8.jpeg",
    price: 100.95,
  },
];
let priceARS = dbProductos.map(p => ({ ...p, price: p.price * 335 }));
     console.log(priceARS);

const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dbProductos);
      }, 2000);
    });
  };

  const getProduct = (idProduct) => {
    return new Promise((resolve, reject) => {
      const queryItem = dbProductos.find((item) => {
        return item.id === parseInt(idProduct);
      });
  
      setTimeout(() => {
        if (queryItem) resolve(queryItem);
        else reject("Intentá nuevamente");
      }, 2000);
    });
  };

  const getProductByCategory = (category) => {
    return new Promise((resolve, reject) => {
      let queryCategory = dbProductos.filter((item) => item.category === category);
  
      setTimeout(() => {
        resolve(queryCategory);
      }, 2000);
    });
  };

  
  export default getProducts;
  
  export { getProduct , getProductByCategory};