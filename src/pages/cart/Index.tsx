import useGlobalStore from '../../Store'
import Text from '../../components/Text';
import Icon from '../../components/icons';
import { toast } from 'react-hot-toast';
import { getCartTotal } from '../../helper';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const { cart, addToCartItem, removeFromCart } = useGlobalStore();
  const CartTotal = getCartTotal(cart);
  const Navigate = useNavigate()
  return (
    <section className="mx-[50px]">
      <Text variant="heading-one" className="my-[82px]">
        Shopping Cart
      </Text>
      <div className='space-y-[100px]'>
      {
        cart.map((_items) => {
          return <div key={_items.id} className='flex items-start justify-between mx-[10px]'>
            
            <img
            src={_items.image}
            alt="image"
            className="w-[378px] h-[378px] rounded-[18px] mr-[46px]"
            width ={378}
            height={378}
            />
          

            
            <div className=' flex  flex-col w-full justify-between '>
              <div className='flex justify-between'>
              <Text variant='subheading-three'>{_items.name}</Text>
              <Text variant='subheading-three'>${_items.price}</Text>
              </div>
              <div className='flex items-center mt-[124px] space-x-7'>
                <button onClick={() => {
                  removeFromCart(_items)
                  toast.error("Item removed successfully")


                }}>
                <Icon name='minus-small'/>
                </button>
                <span>{_items.quantity}</span>
                <button onClick={() => {
                  addToCartItem({
                    name: _items.name,
                    price: _items.price,
                    image: _items.image,
                     product: _items.product
                  })
                  toast.success("Item added sucessfully")

                }}>
                <Icon name='plus-small'/>
                </button>

              </div>

            </div>
            

          </div>
        })

      }
      </div>
      <div className='my-[50px]'>
        <div className="border-[1.5px] border-black"></div>
      </div>
      <div className="flex items-center justify-between mb-[82px]" >
      <Text variant="subheading-two">Subtotal</Text>
      <Text variant="subheading-two">USD$ {CartTotal}</Text>
      </div>
      <Button className='mb-[180px] w-full' size='large' onClick={() => {
        Navigate("/checkout/shipping")
      }}>
        Proceed to checkout
      </Button>

      

    </section>
  )
}

export default Cart