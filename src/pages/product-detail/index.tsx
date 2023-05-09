
import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"
import { IProduct, RawCartItem } from "../../Types";
import axios from "../../apis/axios";
import Text from "../../components/Text";
import Button from "../../components/Button";
import useGlobalStore from "../../Store";
import toast from "react-hot-toast"

const ProductDetail = () => {

  const [products, setProducts] = useState<IProduct[]>([]);
  const {id} = useParams();
  const {addToCartItem, cart} = useGlobalStore();
  console.log("Cart Items",cart);

  const getProducts = async() => {
    try{
      const result = await axios.get(`products/${id}`);
      setProducts(result.data)
      

    } catch(err) {
      console.log(err);
      throw(err)
    }
  }

  useEffect(() => {
    getProducts();

  },[])

  return (
    <section className=" mt-[82px]">
      <div className="grid grid-cols-2 gap-10 mb-[180px] mx-[50px]">
        <div className="">
          <img src={products?.image} alt="image" className="aspect-[0.9] h-[618px] object-cover rounded-[15px]"/>

        </div>
        <div>
          <Text variant="heading-one">{products?.name}</Text>
          <Text variant="subheading-two" className="my-[7px]">${products?.price}</Text>
          <Text variant="body-two" className="mb-[10px]">{products?.description}</Text>
          <Button size="small" 
          className="mt-[15px]"
          onClick={() => {
            if(!products) return
            const cartItem: RawCartItem = {
              name: products?.name,
              image: products?.image,
              price: products?.price,
              product: products?._id
            }
            addToCartItem({
              ...cartItem
            })
            toast.success("Item Added to cart")

          }}
          >Add to cart</Button>
        </div>

      </div>

      <div className="h-[750px] mb-[100px] overflow-hidden">
        <img className="h-[622px] object-cover w-full" src="https://images.pexels.com/photos/3450887/pexels-photo-3450887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image"
        height={622}

        />
        
			</div>
		</section>
	);
};



export default ProductDetail