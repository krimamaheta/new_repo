"use client"

import React, { Suspense } from 'react'; 
import Profile from "./../../../public/home_image.jpeg"
//import "./../about/image.css"
//import Profile1 from "./../../../public/about1.png"
import Image from "next/image"
import { ImageList,ImageListItem } from '@mui/material';
import styles from './image.module.css';

 //import Link from "next/link";
// import { AnimationOnScroll } from "react-animate-on-scroll";
 const About=()=>{
   const data=[{name:"yagnopavit",id:1,src:"https://img.freepik.com/premium-photo/javanese-wedding-dress-wedding-ceremony-wedding-arch-wedding-moment-wedding-food_543567-2312.jpg?size=626&ext=jpg"},
   {name:"wedding",id:2,src:"https://img.freepik.com/free-photo/glam-perfect-setting-tableware-appliances_8353-9912.jpg?w=900&t=st=1710248765~exp=1710249365~hmac=02a5eb7cd3a75110b64180360e916c1817d865f14ee8a919df6abc03c8fe6dcb"},
    {name:"ring ceremony",id:3,src:"https://img.freepik.com/free-photo/white-daylight-illuminates-wooden-hangar-prepared-wedding_8353-788.jpg?w=900&t=st=1710248810~exp=1710249410~hmac=02d1a567eac58eab0f9eaee7824ebdf8b983c1d8b059370a4763fb2285c19674" },
  {name:"birthday celebration",id:4,src:"https://www.pexels.com/photo/a-kid-opening-a-present-at-a-party-7099957/"}];
    return(<div>
        about us page
        <div className={styles.image_container}>
        <Image src={Profile} width={900}  alt="home image"/>
        {/* <Image src={Profile} height={1300} width={1600} alt="home image"/> */}
        </div>
        <div>
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
  {data.map((item) => (
    <ImageListItem key={item.img}>
      <img
        // srcSet={`${item.src}`}
        src={`${item.src}`}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>
        {/* {data.map((item) => (
         <Image key={item.id} src={item.src} alt={item.name} width={500} height={1000}  />
        ))} */}
        </div>
        
    </div>)
 }
 export default About;
//  styles={{ width: '400px', height: '400px' }}import Image from "next/image";
// import { AnimationOnScroll } from "react-animation-on-scroll";


// const About = () => {
//     return (
//         <div>
//             <AnimationOnScroll animateIn="animate__zoomIn" duration={0.3}>
//                 <Image src="/home_image.jpeg" alt="Mask Image" width={1080} height={720} className="mask" />
//             </AnimationOnScroll>
//         </div>
//     );
// };

// export default About;