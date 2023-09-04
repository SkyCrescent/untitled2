import Link from "next/link"
import Image from "next/image"
import ImageSrc from "../../../public/Heart Puzzle_120px.png"
export default function Barre() {
    return (
        <>
            <nav className= " w-full flex flex-row text-md justify-center items-center gap-3  ">
                <div className=" w-6 items-center">
                    <img
                        className="mx-20"
                        src={ImageSrc.src}
                        height={150}
                        width={90}
                        alt="Nfc"
                    />
                </div>
                    <h1 className="   p-3 m-8 text-blue-800 font-black"> CARE</h1>
                <div className="flex flex-col  font-bold mx-36 ">
                    <ul  className="   px-4 m-8 flex justify-content items-center flex-row gap-12 " >
                        <li className="active-h  hover:text-blue-500" ><Link href="/"> Home</Link></li>
                        <li className="hover:text-blue-500" > <Link href="/">Work</Link></li>
                        <li className="hover:text-blue-500 " id="barAnime">  <Link href="#"> About</Link></li>
                        <li className="hover:text-blue-500 " > <Link href="/">Schedule</Link></li>
                        <li className="hover:text-blue-500 " id="barAnime">  <Link href="#"> Reviews</Link></li>
                        <li className="hover:text-blue-500 " > <Link href="/">Blog</Link></li>
                    </ul>
                </div>
                <button className=" bg-blue-500 h-10 px-6 mx-3 min-w-fit  rounded-3xl text-white">Let's Talk</button>
            </nav>
        </>
    )

}