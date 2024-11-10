import Image from "next/image"
import pic2 from "../mahaD2.jpg"

export default function Main() {
    return (
<div className="parent flex flex-col md:flex-row items-center justify-between p-6">
  <div className="intro text-center md:text-left mb-6 md:mb-0">
    <h1 className="text-4xl sm:text-3xl md:text-4xl font-bold ">
      Hello, I am <br />
      <p className="name text-xl sm:text-4xl md:text-2xl  font-semibold">Mahad Usman</p>
    </h1>
  </div>
  <div className="image-container">
    <Image src={pic2} alt="aqq"  />
  </div>
</div>
    )
}


