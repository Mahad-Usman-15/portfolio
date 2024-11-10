import Link from "next/link";
import Image from "next/image";
import pic1 from "@/app/images/pic1.png"
import pic2 from "@/app/images/pic2.png"
import pic3 from "@/app/images/pic3.png"
import pic4 from "@/app/images/pic4.png"
import pic5 from "@/app/images/pic5.png"
import pic6 from "@/app/images/pic6.png"
import pic7 from "@/app/images/pic7.png"
import { StaticImageData } from "next/image";
type Idata ={
    id:number
    title:string
    img:StaticImageData
githublink:string
}
let data :Idata[] = [
    {
        id: 0,
        title: "CLI ATM",
        img: pic1, 
        githublink: "https://github.com/Mahad-Usman-15/CLI-ATM"
    },
    {
        id: 1,
        title: "Currency Convertor",
        img: pic2,
        githublink: "https://github.com/Mahad-Usman-15/CurrencyConvertor"
    },
    {
        id: 2,
        title: "BMI Calculator",
        img: pic3,
        githublink: "https://github.com/Mahad-Usman-15/BMI-calculator"
    },
    {
        id: 3,
        title: "Blogging Website",
        img: pic4,
        githublink: "https://github.com/Mahad-Usman-15/Blogging-website"
    },
    {
        id: 4,
        title: "Todo List",
        img: pic5,
        githublink: "https://github.com/Mahad-Usman-15/TodoList"
    },
    {
        id: 5,
        title: "Number Guessing Game",
        img: pic6,
        githublink: "https://github.com/Mahad-Usman-15/NumberGuessingGame"
    },
    {
        id: 6,
        title: "Calculator",
        img:pic7,
        githublink: "https://github.com/Mahad-Usman-15/Calculator"
    }
];

export default function Projects() {
    return (
        <div className="Projects">

            {data.map((proj) => (

                <div key={proj.id} className="cards">
                    <Image
                        src={proj.img}
                        alt={proj.title}
                             
                        className="image"
                    />
                    <div className="heading">
                        <h1>{proj.title}</h1>
                    </div>
                    <div className="flex  items-center justify-center">
                        <Link href={proj.githublink}>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded button">
                                GitHub Link
                            </button>
                        </Link>
                    </div>
                </div>

            ))}

        </div>
    );
}
