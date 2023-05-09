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
      console.log(`response.data`, JSON.stringify(response.data, null ,2));
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
    <img className='absolute w-full min-h-screen object-cover -top-[102px] -z-10 mt-[-2px]' src='https://res.cloudinary.com/dikpmkuiw/image/upload/v1681360256/komorebi-development/komorebi-img1_zcqdeh.png' alt=""/>

    <div className="mx-[50px] min-h-screen flex flex-col justify-end pb-44 pl-20 items-start">
      <Text variant="heading-two">HOODIE HEAVEN</Text>
      <Button onClick={nevigateHandler} className="mt-7">
        <span className="flex ">
        <Icon name="arrow-small-right"/>
        <span className="ml-[10px]">Shop now</span>

        </span>
       
      </Button>

    </div>
    
      <div className="grid grid-cols-3 gap-[38px] mx-[50px] mt-[200px]">
        {
          products.slice(0, 3).map((productItems) => {
            return (<div key={productItems._id} className=" flex flex-col items-center justify-center">
              <Text variant="heading-three">{productItems.name}</Text>
              <div className=" my-[18px]">
              <img width={368}
              height={368}
              className="w-[368px] h-[368px] object-cover rounded-[18px]"
              src={productItems.image}
              alt="image"/>
              </div>
              <Button className="flex" onClick={nevigateHandler}>
                <Icon name="arrow-small-right"/>
                <span className="ml-[10px]">Shop now</span>
              </Button>
            </div>
            )
          })
        }

      </div>
      <div className="mt-[180px] mx-[50px] max-w-3xl">
        <Text variant="heading-one">Komorebi Hoodie</Text>
        <Text variant="body-two" className="mt-7"> Our Hoodies are crafted from high quality materials and are designed to be both comfortable and stylish. We believ that fashion should be functional, and our hoodies are the perfect combination of both. whether you are looking for something cozy to wear around the house of the statement piece to make statement out of the world. we have you covered </Text>

      </div>
      <div className="mt-[82px] mb-[180px] relative">
        <img className="h-[768px] aspect-[1.6] w-full object-cover"
        src="https://images.pexels.com/photos/1710747/pexels-photo-1710747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="image"
        />
          <Button className="absolute bottom-20 left-[45%]" >
            <span className="flex">
                <Icon name="arrow-small-right"/>
                <span className="ml-[10px]">Learn more</span>
            </span>
          </Button>

      </div>
    

   </section>
  )
}

export default Home