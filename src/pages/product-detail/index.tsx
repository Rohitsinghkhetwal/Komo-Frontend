import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"
import { IProduct, RawCartItem } from "../../Types";
import axios from "../../apis/axios";
import Text from "../../components/Text";
import Button from "../../components/Button";
import useGlobalStore from "../../Store";
import toast from "react-hot-toast"

const ProductDetail = () => {
  const [products, setProducts] = useState<IProduct>();
  const {id} = useParams();
  const {addToCartItem} = useGlobalStore();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const result = await axios.get(`products/${id}`);
        setProducts(result.data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, [id])

  return (
    <section className="mt-10 md:mt-20">
      <div className="container-page grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mb-20">
        <div>
          <img src={products?.image} alt={products?.name || "Product image"} className="w-full max-h-[618px] aspect-square md:aspect-[0.9] object-cover rounded-2xl shadow-card"/>
        </div>
        <div>
          <Text variant="heading-one">{products?.name}</Text>
          <Text variant="subheading-two" className="my-2">${products?.price}</Text>
          <Text variant="body-two" className="mb-3">{products?.description}</Text>
          <Button size="small" className="mt-4"
            onClick={() => {
              if(!products) return
              const cartItem: RawCartItem = {
                name: products?.name,
                image: products?.image,
                price: products?.price,
                product: products?._id
              }
              addToCartItem({ ...cartItem })
              toast.success("Item Added to cart")
            }}
          >Add to cart</Button>
        </div>
      </div>

      <div className="container-page mb-24 overflow-hidden rounded-2xl">
        <img className="w-full h-[360px] md:h-[620px] object-cover" src="https://images.pexels.com/photos/3450887/pexels-photo-3450887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" height={622} />
      </div>
    </section>
  );
};

export default ProductDetail
