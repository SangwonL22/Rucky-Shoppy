import React from 'react';
import CartItem from '../components/CartItem';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaEquals } from 'react-icons/fa';
import PriceCard from '../components/PriceCard';
import Button from '../components/ui/Button';
import useCart from '../hooks/useCart';

const DISCOUNT = 10000;

export default function MyCart() {
  const {
    cartQuery: { isLoading, data: products },
  } = useCart();

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0
    );
  return (
    <section className='p-8 flex flex-col'>
      <p className='text-2xl text-center font-bold pb-4 border-b border-gray-300'>
        내 장바구니
      </p>
      {!hasProducts && (
        <p className='text-center font-bold text-2xl h-96 flex justify-center items-center'>
          장바구니가 비어있습니다.😥 좀 더 둘러봐주세요!
        </p>
      )}
      {hasProducts && (
        <>
          <ul className='border-b border-gray-300 mb-8 p-4 px-8'>
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
          </ul>
          <div className='flex justify-between items-center mb-6 px-2 md:px-8 lg:px-16'>
            <>
              <PriceCard text='상품 총액' price={totalPrice} />
              <BsFillPlusCircleFill className='shrink-0' />
              <PriceCard text='할인' price={DISCOUNT} />
              <FaEquals className='shrink-0' />
              <PriceCard text='총가격' price={totalPrice - DISCOUNT} />
            </>
          </div>
          <Button text='주문하기' />
          <h2 className='text-center text-2xl my-6'>
            GRAND OPEN 기념 만원 할인
          </h2>
        </>
      )}
    </section>
  );
}
