import Link from "next/link"
import Image from "next/image"
import pic from "../picture.png"
export default function Navbar() {
    return (
        <div className="Header flex items-center justify-end h-auto sm:h-20 md:h-30 lg:h-30 flex-col sm:flex-row justify-between items-center">
            <div className="px-4 sm:px-5 md:px-10 text-center text">PortFolio</div>
                 <div className="h-items w-full sm:w-auto mb-4 sm:mb-0 flex-col sm:flex-row  space-y-3 sm:space-y-0 sm:space-x-5">
                    <Link href="./"><p className="h1">Home</p></Link>
                    <Link href="./project"><p className="h1">Projects</p></Link>
                    <Link href="./about"><p className="h1">About</p></Link>
                    <Link href="./contact"><p className="h1">Contact</p></Link>
                </div>
            </div>
        
    )
}