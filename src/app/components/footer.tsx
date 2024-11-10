import { FaGithub } from 'react-icons/fa';
import Link from "next/link"
export default function Footer() {

    return (
        <div className="footer text-center mb-4">
            <ol className="h-items">
                <Link href="https://www.youtube.com/@MahadUsman "><li className="h1">Youtube</li></Link>
                <Link href="https://github.com/dashboard"><li className="h1">GitHub</li></Link>
            </ol>
        </div>
    )
}