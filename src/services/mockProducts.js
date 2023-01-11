const dbProductos = [
  {
    id: 1,
    title: "Carnaval en Purmamarca + Tilcara.",
    category: "Jujuy",
    stock: 25,
    imgurl:"https://i.imgur.com/vsMtuvD.png",
    price: 140,
    detail: "Para disfrutar a pleno en la Quebrada de Humahuaca, visitarás los pueblos más carnavaleros: Purmamarca y Tilcara, en donde nuestro guía los invitará a la fiesta, comparsas y bailes con la gente local y turistas que llegan de todo el mundo para un evento único.",
  },
  {
    id: 2,
    title: "Cafayate, Valles Calchaquíes",
    category: "Salta",
    stock: 30,
    imgurl: "https://i.imgur.com/sJlsqLy.png",
    price: 98.10,
    detail:"Un paseo por una quebrada rojiza, donde cada formación geológica tallada por el viento y el agua nos regala hermosas postales de la precordillera, una antesala más que merecida para Cafayate, corazón del Valle Calchaquí donde siempre brilla el sol y te espera el mejor vino de altura.",
  },
  {
    id: 3,
    title: "Salinas Grandes + Purmamarca",
    category: "Jujuy",
    stock: 20,
    imgurl: "https://i.imgur.com/FTPbW69.png",
    price: 133.34,
    detail:"Un paseo de altura que nos lleva a conocer el salar más visitado del Norte Argentino, atravesando los pueblos más pintorescos de la zona. Deleita tu espíritu aventurero con los paisajes más llamativos de la Puna Argentina.",
  },
  {
    id: 4,
    title: "Quebrada de Humahuaca",
    category: "Salta",
    stock: 40,
    imgurl: "https://i.imgur.com/0ktdtF5.png",
    price: 121.91,
    detail:"Un paseo por una quebrada imponente, donde predominan los colores en los cerros, gracias a miles de años de oxidación de los minerales en ellos. Los pueblos, paisajes, la cultura y su gente son los principales protagonistas de esta excursión."
  },
  {
    id: 5,
    title: "Cataratas Argentinas",
    category: "Iguazú",
    stock: 30,
    imgurl: "https://i.imgur.com/KmhgYri.jpeg",
    price: 30,
    detail:"Del lado argentino se podrá caminar, literalmente, sobre las mismísimas cataratas. El recorrido es de aproximadamente 10 km, en cuyos tramos el uso del Tren Ecológico acorta las distancias, y las pasarelas acondicionadas permiten llegar a los mejores saltos de agua, dividiendo al recorrido en circuito Garganta del Diablo, Superior e Inferior."
  },
  {
    id: 6,
    title: "Cataratas Brasileras + Parque Das Aves",
    category: "Iguazú",
    stock: 28,
    imgurl: "https://i.imgur.com/JNRIrH8.jpeg",
    price: 64,
    detail:"Una nueva y maravillosa vista de las imponentes Cataratas del Iguazù, esta vez del lado del vecino país Brasil donde se puede apreciar toda su belleza natural y podràs conseguir esa foto panorámica tan especial que estabas buscando."
  },
  {
    id: 7,
    title: "Tafí del valle + Ruinas de Quilmes",
    category: "Tucuman",
    stock: 10,
    imgurl: "https://i.imgur.com/Yt2YI2v.jpeg",
    price: 113.10,
    detail:"Una visita a la ciudad de la magnífica entrada, así catalogada por los indígenas diaguita."
  },
  {
    id: 8,
    title: "Paisajes y Yungas",
    category: "Tucumán",
    stock: 15,
    imgurl: "https://i.imgur.com/AMklElu.png",
    price: 53.67,
    detail:"Realizamos un recorrido que nos llevará dentro en las Yungas Tucumanas."
  },
  {
    id: 9,
    title: "Iruya, Purmamarca o Tilcara",
    category: "Jujuy",
    stock: 20,
    imgurl: "https://i.imgur.com/bLs99oX.jpeg",
    price: 150,
    detail:"Déjate sorprender por los valles de altura del norte de Argentina con esta excursión que te permitirá conocer pintorescos pueblos como Purmamarca, Humahuaca e Iruya. con su gran historia y cultura ¡Te sorprenderán!"
  },
  {
    id: 10,
    title: "Cachi, Valles Calchaquíes",
    category: "Salta",
    stock: 35,
    imgurl: "https://i.imgur.com/2JA6qG8.jpeg",
    price: 100.95,
    detail:"Una propuesta para recorrer paisajes majestuosos, viajar al pasado y disfrutar de la tranquilidad que un pueblo vallisto, como Cachi, nos puede brindar. Viajarás por rutas escénicas (Quebrada de Escoipe y Cuesta del Obispo) que junto con el encantador destino, forman un combo cautivante.",
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