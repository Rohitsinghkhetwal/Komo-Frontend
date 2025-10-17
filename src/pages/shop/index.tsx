import {  IProduct, RawCartItem } from "../../Types";
import { useEffect, useState } from "react";
import Text from "../../components/Text";
import axios from "../../apis/axios";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import useGlobalStore from "../../Store";
import { toast } from "react-hot-toast";

const Shop = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const {  addToCartItem } = useGlobalStore();

  const getProducts = async () => {
    try {
      const result = await axios.get("/products/items");
      setProducts(result.data);
    } catch (error) {
      console.log("Something went wrong____!", error);
      throw error;
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <section className="relative w-full min-h-[420px] md:min-h-[520px] flex items-end overflow-hidden">
        <img
          className="absolute inset-0 -z-10 object-cover w-full h-full"
          src="https://res.cloudinary.com/dikpmkuiw/image/upload/v1681526232/komorebi-development/young-person-wearing-hoodie-mockup_2_1_bhc6x9.png"
          alt="Shop hero"
        />

        <div className="container-page mb-10 md:mb-16">
          <Text variant="heading-three">Latest hoodies style online</Text>
          <Text variant="body-two">Suit your unique preference</Text>
        </div>
      </section>
      <section className="container-page bg-white">
        <Text variant="heading-one" className="mt-14">Experience comfort and style</Text>
        <Text variant="body-two" className="mb-12">Perfect blend of comfort, style, quality and materials</Text>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-24">
          {products.map((items) => {
            return (
              <div className="group" key={items._id}>
                <Link to ={`/shop/${items._id}`}>
                  <div className="rounded-2xl overflow-hidden shadow-card bg-white">
                    <img
                      src={items.image}
                      width={368}
                      height={365}
                      alt={items.name}
                      className="w-full aspect-square object-cover transition-transform duration-300 ease-out-expo group-hover:scale-[1.03]"
                    />
                  </div>
                </Link>
                <div className="flex items-center justify-between mt-4">
                  <Text variant="heading-four">{items.name}</Text>
                  <Text variant="body-three">${items.price}</Text>
                </div>
                <Button
                  size="small"
                  className="mt-4 w-full"
                  onClick={() => {
                    const cartItem : RawCartItem= {
                      name: items.name,
                      price: items.price,
                      image: items.image,
                      product: items._id
                    }

                    addToCartItem(cartItem);
                    toast.success("Item added sucessfully.")
                  }}
                >
                  Add to Cart
                </Button>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Shop;
