import {useNavigate} from "react-router-dom"
import Button from "../../components/Button"
import Text from "../../components/Text"
import Icon from "../../components/icons"
import { useState,useEffect } from "react"
import { IProduct } from "../../Types"
import axios from "../../apis/axios"


const Home = () => {
  
  const navigate = useNavigate();
  const [products, setProducts] = useState<IProduct[]>([]);

  const getProducts = async() => {
    try{
      const response = await axios.get("/products/items");
      setProducts(response.data)
    }catch(err) {
      console.log(`Something went wrong `, err);
      throw(err);

    }

  }

  useEffect(() => {
    getProducts();

  },[])
  
  const nevigateHandler = () => {
    navigate("/shop")
  }

  return (
   <section className='relative'>
    <div className="relative min-h-[70vh] md:min-h-[85vh] flex items-end overflow-hidden">
      <img className='absolute inset-0 w-full h-full object-cover -z-10' src='https://res.cloudinary.com/dikpmkuiw/image/upload/v1681360256/komorebi-development/komorebi-img1_zcqdeh.png' alt="Hero"/>

      <div className="container-page pb-20 md:pb-28">
        <Text variant="heading-two">HOODIE HEAVEN</Text>
        <Button onClick={nevigateHandler} className="mt-6">
          <span className="flex items-center">
            <Icon name="arrow-small-right"/>
            <span className="ml-2">Shop now</span>
          </span>
        </Button>
      </div>
    </div>
    
      <div className="container-page grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-16">
        {
          products.slice(0, 3).map((productItems) => {
            return (
              <div key={productItems._id} className="group">
                <Text variant="heading-four" className="text-center">{productItems.name}</Text>
                <div className="my-4 rounded-2xl overflow-hidden shadow-card bg-white">
                  <img width={368}
                    height={368}
                    className="w-full aspect-square object-cover transition-transform duration-300 ease-out-expo group-hover:scale-[1.03]"
                    src={productItems.image}
                    alt={productItems.name}/>
                </div>
                <div className="flex justify-center">
                  <Button className="flex items-center" onClick={nevigateHandler}>
                    <Icon name="arrow-small-right"/>
                    <span className="ml-2">Shop now</span>
                  </Button>
                </div>
              </div>
            )
          })
        }

      </div>
      <div className="container-page mt-20 md:mt-28 max-w-3xl">
        <Text variant="heading-one">Komorebi Hoodie</Text>
        <Text variant="body-two" className="mt-4"> Our Hoodies are crafted from high quality materials and are designed to be both comfortable and stylish. We believ that fashion should be functional, and our hoodies are the perfect combination of both. whether you are looking for something cozy to wear around the house of the statement piece to make statement out of the world. we have you covered </Text>

      </div>
      <div className="container-page mt-10 md:mt-16 mb-24 relative">
        <div className="rounded-2xl overflow-hidden">
          <img className="w-full h-[360px] md:h-[560px] object-cover"
            src="https://images.pexels.com/photos/1710747/pexels-photo-1710747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Lifestyle"
          />
        </div>
        <div className="absolute inset-x-0 -bottom-6 flex justify-center">
          <Button className="">
            <span className="flex items-center">
                <Icon name="arrow-small-right"/>
                <span className="ml-2">Learn more</span>
            </span>
          </Button>
        </div>
      </div>
   </section>
  )
}

export default Home
