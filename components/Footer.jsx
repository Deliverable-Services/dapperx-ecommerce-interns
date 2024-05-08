import Image from 'next/image';

import Logo from './Logo';

import { FOOTER_LINKS, SOCIAL_CONTACT_DETAILS } from '@/utils/constants';

const Footer = () => (
  <div className='w-full'>
    <div className='w-full bg-[#141311]  text-white px-10 py-16 flex md:flex-row flex-col md:gap-0 gap-5 border-b-2'>
      <div className='flex flex-col md:w-[30%] items-center md:items-start justify-center md:justify-start w-full gap-4 md:px-10 '>
        <div className='flex gap-3'>
          <Image
            src={'/logo.png'}
            alt=''
            width={720}
            height={1020}
            className='w-auto h-auto aspect-square'
          />
          <Logo />
        </div>

        <p className='text-lg flex text-center md:text-start'>
          Fashion: Where self expression meets creativity, embracing diversity
          and individuality.
        </p>
        <div className='flex flex-row items-center gap-5'>
          {SOCIAL_CONTACT_DETAILS.map((profile, index) => (
            <div key={index}>{profile.icon}</div>
          ))}
        </div>
      </div>

      <div className='flex md:flex-row flex-col md:w-[70%] w-full  justify-around items-center md:items-start md:gap-0 gap-10'>
        {FOOTER_LINKS.map((section, index) => (
          <div
            key={index}
            className='gap-3 flex flex-col items-center md:items-start'
          >
            <p className='font-bold text-xl text-green-600'>{section.title}</p>
            {section.links.map((subSection) => (
              <div
                key={subSection.id}
                className='flex flex-col justify-center items-center'
              >
                <p>{subSection.sublink}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
    <div className='w-full bg-[#141311]  text-white md:px-10 py-10 flex md:flex-row flex-col items-center md:justify-between justify-center md:gap-0 gap-5 text-lg'>
      <p>Privacy and policy</p>
      <p>Copyright Dapper X, All Rights Reserved.</p>
      <p>Terms & Conditions</p>
    </div>
  </div>
);

export default Footer;






