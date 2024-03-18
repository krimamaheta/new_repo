import Image from "next/image";
import Profile3 from "./../../public/home_image.jpeg"
import Pro from "./../../public/chair.jpeg"
import { Roboto } from 'next/font/google'
import Home1 from "./../../public/home1.png"
import About2 from "./../../public/about2.png"
import Birthday from "./../../public/birthday.jpeg"
import Thread from "./../../public/thread1.png"
import ring from "./../../public/ring1.png"
import wed1 from "./../../public/wed1.png"
//import Navbar from "./navigation"
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className={roboto.className}>
        We help our candidates plan and design unforgettable events and share with their guests so they can spend more time creating beautiful and lasting memories
      </div>
      <div className="image1">
        <Image src={Profile3} alt="home page" layout="responsive"/>  
      </div>

      <div className="i2 flex">
        <div className="flex-1 p-8">
          <h2>
            We’re here to take the vision and goals you have for the most important day of your lives and transform that into reality. So you can focus on creating beautiful lasting memories with your fiance and loved ones.
          </h2>
        </div>
        <div className="image2">
          <Image src={Pro} alt="wed image" height={200} width={200} layout="responsive"/>
        </div>
      </div>



      <div className="i2 flex">
      <div className="image2">
          <Image src={Home1} alt="wed image" layout="responsive" height={200} width={200}/>
        </div>
        <div className="flex-1 p-8">
          <h2>
            We’re here to take the vision and goals you have for the most important day of your lives and transform that into reality. So you can focus on creating beautiful lasting memories with your fiance and loved ones.
          </h2>
        </div>
      </div>


      <div className="i2 flex">
        <div className="flex-1 p-8">
          <h2>
            We’re here to take the vision and goals you have for the most important day of your lives and transform that into reality. So you can focus on creating beautiful lasting memories with your fiance and loved ones.
          </h2>
        </div>
        <div className="image2">
          <Image src={About2} alt="wed image" layout="responsive" />
        </div>
      </div>



      <div className="i2 flex">
      <div className="image2">
          <Image src={Birthday} alt="wed image" layout="responsive" />
        </div>
        <div className="flex-1 p-8">
          <h2>
            We’re here to take the vision and goals you have for the most important day of your lives and transform that into reality. So you can focus on creating beautiful lasting memories with your fiance and loved ones.
          </h2>
        </div>
      </div>

      <div className="i2 flex">
        <div className="flex-1 p-8">
          <h2>
            We’re here to take the vision and goals you have for the most important day of your lives and transform that into reality. So you can focus on creating beautiful lasting memories with your fiance and loved ones.
          </h2>
        </div>
        <div className="image2">
          <Image src={Thread} alt="wed image" layout="responsive"/>
        </div>
      </div>

      <div className="i2 flex">
      <div className="image2">
          <Image src={ring} alt="wed image" layout="responsive"/>
        </div>
        <div className="flex-1 p-8">
          <h2>
            We’re here to take the vision and goals you have for the most important day of your lives and transform that into reality. So you can focus on creating beautiful lasting memories with your fiance and loved ones.
          </h2>
        </div>
      </div>


      <div className="i2 flex">
        <div className="flex-1 p-8">
          <h2>
            We’re here to take the vision and goals you have for the most important day of your lives and transform that into reality. So you can focus on creating beautiful lasting memories with your fiance and loved ones.
          </h2>
        </div>
        <div className="image2">
          <Image src={wed1} alt="wed image" layout="responsive"/>
        </div>
      </div>

    
    </main>
  );
}