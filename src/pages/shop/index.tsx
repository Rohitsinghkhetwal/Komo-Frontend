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
      <section className="relative w-full h-[800px] flex items-end ">
        <img
          className="absolute -z-10 object-cover aspect-[1.6] -top-[103px]"
          src="https://res.cloudinary.com/dikpmkuiw/image/upload/v1681526232/komorebi-development/young-person-wearing-hoodie-mockup_2_1_bhc6x9.png"
          alt="image"
        />

        <div className="mx-[50px] mb-20">
          <Text variant="heading-three">Latest hoodies style online</Text>
          <Text variant="body-two">Suit your unique preference</Text>
        </div>
      </section>
      <section className="mx-[50px] bg-white ">
        <Text variant="heading-one" className="mt-[82px]">
          Experience comfort and style
        </Text>
        <Text variant="body-two" className="mb-[80px]">
          Perfect blend of comfort, style, quality and materials
        </Text>
        <div className="grid grid-cols-3 gap-[38px] mb-[180px]">
          {products.map((items) => {
            return (
              <div className="" key={items._id}>
                <Link to ={`/shop/${items._id}`}>
                  <div className="rounded-[20px]">
                    <img
                      src={items.image}
                      width={368}
                      height={365}
                      alt="image"
                      className="w-[368px] h-[350px] rounded-[20px]"
                    />
                  </div>
                </Link>
                <Text variant="heading-three" className="mt-7 mb-2">
                  {items.name}
                </Text>
                <Text variant="body-three" className="">
                  ${items.price}
                </Text>
                <Button
                  size="small"
                  className="mt-7 "
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
