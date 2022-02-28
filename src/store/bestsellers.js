import { v4 as uuidv4 } from "uuid";

const bestsellers = {
  state: [
    {
      id: uuidv4(),
      imgUrl: "coffee-1.jpg",
      title: "Solimo Coffee Beans 2kg",
      price: 10.73,
    },
    {
      id: uuidv4(),
      imgUrl: "coffee-2.jpg",
      title: "Presto Coffee Beans 1kg",
      price: 15.99,
    },
    {
      id: uuidv4(),
      imgUrl: "coffee-3.jpg",
      title: "AROMISTICO Coffee 1kg",
      price: 6.99,
    },
  ],
};

export default bestsellers;
