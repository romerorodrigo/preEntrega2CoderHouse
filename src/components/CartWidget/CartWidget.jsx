import cart from '../../assets/CartWidgetImg.svg'

export const CartWidget = ({qty}) =>  {
  return (
    <>
        <div>
            <img src={cart} alt='CartWidget' width="32" height="32"/>
            <strong>{qty}</strong>
        </div>
    </>
)
}