import Marquee from 'react-fast-marquee';

const MarqueeSlider = ({ items }) => (
  <Marquee className='bg-slate flex flex-row w-full my-12 '>
    {items.map((item, index) => (
      <div
        key={index}
        className=' flex sm:text-3xl text-xl px-3 py-6 gap-5 font-semibold items-center justify-evenly'
      >
        <p>{item.title}</p>
        <span>{item.icon}</span>
      </div>
    ))}
  </Marquee>
);

export default MarqueeSlider;
