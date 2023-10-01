import Image from 'next/image';
import React from 'react';

function DesignerClothes() {
  const cardsData = [
    {
      title: 'Accessories',
      bg: 'bg-[#D3E2D7]',
      desc: 'Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats.',
      img: 'https://s3-alpha-sig.figma.com/img/5ba1/82dd/1d66423d315f71d45aa9671456de3e13?Expires=1696809600&Signature=XzYYfj1l3Zab6DuSCwYhlvoeQK7X7QKItT5kjJLdYdAAUVk-c5gRTJIAzbsLjQejcNCbcA5CTtMBpln48u0CeDYhkrRdilepw~Xo9jxyHcx8fka1u8YumYU--iRTv6KYOMHT1fEOjltZtK~B9~G1z8PPG~5WVqqmze8i7whmuphjUD8lXB3aclUi3B-1r7Ip32qMcLC7hqi-RPgI3UHT2yO39x~I66KHwYV8hBD0f0JT7cZvA3f3Tno~r6q6Rc1Fq2tqXLDGl4TCsAAVBzsBj8TBHO2eNVRiIVzF~ISkuORMU~53RHwdMUmPie6DMrVYUuVntlsHd5K-VYYlGqfAnA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      title: 'Dresses',
      bg: 'bg-[#EAEAEC]',
      desc: 'Explore a stunning range of designer dresses, including evening gowns and chic day dresses.',
      img: 'https://s3-alpha-sig.figma.com/img/0abc/ae17/3bb99ea68eed17f45dbb3902e53c2861?Expires=1696809600&Signature=butVKU3nTCgmdBupTl7wV5p8tbi1QgOOmh2LL1aaQbGX2MERP0I13EEPX8IgD6oSX506DY8MeGRwNlzjPAwSfrnJFEhajPzPYrJLyfIRD2O7Qx00xpFwFumlbHQ8YGAZlMRjewGJ~7BpYq6~9UOMHjym1Vu~4HpmKRg08fM-EbELo1TEVfYqQCeOpKR93ckTOaj7Of8GNmdayHPsZfYnAnmpcQp7dy3LBT5UBR7qqPYZxJnu~DQQuddljKsq5kjKBx2QeHm~CdEwO5-BZLwXMGEWi0kxRhgmDTHX0jrycMuT4ZsYxH4~3waR1ykt~cMm8ZIzADFvOKimoTMoH-9jFg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      title: 'Outerwear',
      bg: 'bg-[#DCDDDF]',
      desc: 'Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons.',
      img: 'https://s3-alpha-sig.figma.com/img/1291/5434/cd211cfeb2ac1ea6c89c2743990919f5?Expires=1696809600&Signature=Naz-0kFcsEL72afs7Vhv85wvJQpY7E~imz7EMar1expnMA7kdZUVUP0N4ZCewR38J3kE6sj8zMb3bNjvPHV5jsy6L2BGXlF-PHjMkilqw3DYwLsukjr0g3zwMjM3W0V0Xd~jJ8oGv7F4~cx7rmQyCSC8xriuODMMlwBM9RVrPr0usz9vlMP56PEPhuR7ZgxmAUIjF3jYRtr0UwClXwhhoWjhNIJcAZUJZ~V1FhnwHxmH7bHvsfVW58b4rNd6ucV38~cjVUYHmqIQZLlpQX6sAlvROHEbm32p29SHZKu9UEln3cXgDpmMp~PVqnGoAFxQk8D2JTW2HJQUr9F2BgskEw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
  ];

  return (
    <div className="w-11/12 mx-auto my-18 font-poppins">
      <div className="text-center">
        <h3 className="text-3xl lg:text-[50px] font-[500] text-secondary font-elephant">
          Designer Clothes For You
        </h3>
        <p className="py-1 lg:py-4 text-sm lg:text-[20px] lg:font-[500] text-prePrimary">
          Immerse yourself in the world of luxury fashion with our meticulously
          crafted designer clothes!
        </p>
      </div>
      <div className="my-5 overflow-x-auto  flex items-stretch mx-auto gap-5">
        {cardsData.map((item, i) => {
          return (
            <div className="min-w-[180px]  lg:flex-1" key={i}>
              <div className={`${item.bg} rounded-lg`}>
                <Image
                  src={item.img}
                  width={100}
                  height={100}
                  alt="card"
                  className="w-full h-[150px] lg:h-[400px] "
                />
              </div>
              <div className="text-center">
                <h4 className="lg:py-2 lg:text-[30px] text-[#373737] font-[600]">
                  {item.title}
                </h4>
                <p className="text-xs text-[#373737] lg:px-10">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DesignerClothes;
