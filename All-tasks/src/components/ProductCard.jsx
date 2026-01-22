const ProductCard = ({
  image = "'/noProduct.png'",
  title = "No title available",
  price = 0,
  stock = "Out of stock",
}) => {
  return (
    <div>
      <div className="border w-50 h-82 hover:cursor-pointer  bg-white">
        <img
          className="w-full min-h-50 max-h-50"
          src={image}
          alt="product image"
        />
        <div className="flex flex-col gap-1 p-2.5">
          <h1 className="h-10 text-xl font-bold">{title}</h1>
          <h1 className="text-orange-500 text-lg">Rs.{price}</h1>
          <h1 className="text-blue-500 text-lg">Stock: {stock}</h1>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
