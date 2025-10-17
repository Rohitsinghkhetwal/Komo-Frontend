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
    <section className="container-page">
      <Text variant="heading-one" className="my-10 md:my-20">
        Shopping Cart
      </Text>
      <div className='space-y-10 md:space-y-16'>
      {
        cart.map((_items) => {
          return <div key={_items.id} className='flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-10'>
            <img
              src={_items.image}
              alt={_items.name}
              className="w-full max-w-md md:w-[320px] md:h-[320px] rounded-2xl object-cover shadow-card"
              width ={378}
              height={378}
            />

            <div className='flex flex-col w-full justify-between'>
              <div className='flex items-start justify-between gap-4'>
                <Text variant='subheading-three'>{_items.name}</Text>
                <Text variant='subheading-three'>${_items.price}</Text>
              </div>
              <div className='flex items-center mt-8 md:mt-24 gap-4'>
                <button onClick={() => {
                  removeFromCart(_items)
                  toast.error("Item removed successfully")
                }} className='w-9 h-9 rounded-md border border-silver flex items-center justify-center'>
                  <Icon name='minus-small'/>
                </button>
                <span className='min-w-[2ch] text-center'>{_items.quantity}</span>
                <button onClick={() => {
                  addToCartItem({
                    name: _items.name,
                    price: _items.price,
                    image: _items.image,
                    product: _items.product
                  })
                  toast.success("Item added sucessfully")
                }} className='w-9 h-9 rounded-md border border-silver flex items-center justify-center'>
                  <Icon name='plus-small'/>
                </button>
              </div>
            </div>
          </div>
        })

      }
      </div>
      <div className='my-10'>
        <div className="h-[1.5px] bg-black"></div>
      </div>
      <div className="flex items-center justify-between mb-10 md:mb-20" >
        <Text variant="subheading-two">Subtotal</Text>
        <Text variant="subheading-two">USD$ {CartTotal}</Text>
      </div>
      <Button className='mb-24 w-full' size='large' onClick={() => {
        Navigate("/checkout/shipping")
      }}>
        Proceed to checkout
      </Button>
    </section>
  )
}

export default Cart
