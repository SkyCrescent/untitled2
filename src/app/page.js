
import Barre from './component/Barre'
import Pied from "./component/Pied"
import Image from "next/Image"
import ImageSrc from "../../public/photo_2023-09-04_10-16-33.jpg";
import ImageSrc2 from "../../public/security_checked_125px.png"
import ImageSrc3 from "../../public/Heart Puzzle_125px.png"
import ImageSrc4 from "../../public/online_125px.png"
import ImageSrc5 from "../../public/customer_support_125px.png"
import ImageSrc6 from "../../public/photo_2023-09-04_10-17-31.jpg"
import ImageSrc7 from "../../public/Sans titre-5.png"
import ImageSrc8 from "../../public/callback_125px.png"
import ImageSrc9 from "../../public/Sans titre-6.png"
import ImageSrc10 from "../../public/right2_filled_125px.png"
import ImageSrc11 from "../../public/infinity_125px.png"
import ImageScr12 from "../../public/time_125px.png"
import ImageSrc13 from "../../public/calendar_125px.png"
import  Medecin from "../../public/09046738982-web-tete.jpg"
import Sang from "../../public/3428e19567_102386_prise-sang-jeun.jpg"
import  visage from "../../public/téléchargement.jpeg"
import homme from "../../public/istockphoto-1254062265-612x612.jpg"
import  bebe from "../../public/Félicitations-pour-la-naissance-dun-bébé-e1583423886996.jpg"
import Malad from "../../public/photo_2023-09-04_10-16-43.jpg"
import Corona from "../../public/photo_2023-09-04_10-17-01.jpg"
export default function Home() {
  return (
        <>
            <Barre/>
            <div className=" h-full   flex flex-row py-6">
                        <div className=" mx-16 w-96 leading-5">
                                <h1 className="text-sm  font-semibold my-9 leading-4">STAY STRONG, LIVE LONG.</h1>
                                <h1 className="text-4xl font-black w-1/127 py-0 leading-tight -my-6"><span className="font-normal text-blue-600 underline underline-offset-1 shadow-blue-300">Take care</span>  of your body and it will take care of <span className="font-normal text-blue-600 underline underline-offset-1" >you</span>.</h1>
                                <div className="text-sm py-10 ">Lorem ipsum dolor sit amet,consectetur adpiscing ellit,blandit feuglat viverra est suspendisse porta tortor commodo,tellus.Neque.  </div>
                                <div className="-py-3 -mx-1 ">
                                    <button className="bg-blue-500 text-white text-xs my-3 px-3 mx-3 rounded-3xl h-10 w-40 shadow-md shadow-blue-600 "> Get Appartement</button>
                                    <button className="border border-blue-600 text-blue-600 text-xs my-3 px-3 mx-3 rounded-3xl h-10 w-32 font-medium "> View Profile</button>
                                </div>
                        </div>
                <div  className=" w-auto h-full ml-20  ">
                    <img
                        className=" "
                        src={ImageSrc.src}
                        height={950}
                        width={750}
                        alt="Nfc"
                    />
                </div>
            </div>
            <div className=" h-auto my-6 justify-center ">
                <h1 className=" text-center text-3xl font-bold ">My Skill <span className="text-blue-500 underline">depends</span>  on work </h1>
                    <div className="text-sm font-normal text-center my-3 ">
                        <h1 >Lorem Ipsum dolor sit amet,consectetur adpiscing ellit,blandit feuglat viverra </h1>
                        <h1 >est suspendisse porta tortor commodo,tellus.Neque. </h1>
                    </div>
            </div>
                    <div className="flex flex-row justify-between max-w-4xl h-auto my-2 mx-auto ">
                           <div className="bg-orange-50 h-64 w-48 rounded-xl ">
                               <div className="flex flex-col  mx-auto my-5 rounded-full  py-3 items-center bg-orange-600 h-24 w-24">
                                           <img
                                               className=" mx-auto py-2  "
                                               src={ImageSrc2.src}
                                               height={50}
                                               width={55}
                                               alt="Nfc"
                                           />
                               </div>
                                      <div className="mx-auto  text-center py-4 w-40 ">
                                          <h1 className=" py-1 font-serif font-bold">Patient Safety</h1>
                                          <h1 className="text-center py-1 text-xs ">feugiat vivera est suspends porta tortor commodo</h1>
                                      </div>
                           </div>
                                <div className="bg-orange-50   h-64 w-48 rounded-xl ">
                                    <div className="flex flex-col  mx-auto my-5 rounded-full  py-3 items-center bg-yellow-700 h-24 w-24">
                                        <img
                                            className=" mx-auto py-2  "
                                            src={ImageSrc3.src}
                                            height={50}
                                            width={55}
                                            alt="Nfc"
                                        />
                                    </div>
                                    <div className="mx-auto  text-center py-4 w-40 ">
                                        <h1 className=" py-1 font-serif font-bold">Well Cared</h1>
                                        <h1 className="text-center py-1 text-xs ">feugiat vivera est suspends porta tortor commodo</h1>
                                    </div>
                                </div>
                        <div className="bg-green-50   h-64 w-48 rounded-xl ">
                            <div className="flex flex-col  mx-auto my-5 rounded-full  py-3 items-center bg-green-700 h-24 w-24">
                                <img
                                    className=" mx-auto py-2  "
                                    src={ImageSrc4.src}
                                    height={50}
                                    width={55}
                                    alt="Nfc"
                                />
                            </div>
                            <div className="mx-auto  text-center py-4 w-40 ">
                                <h1 className=" py-1 font-serif font-bold">24/7  Service</h1>
                                <h1 className="text-center py-1 text-xs ">feugiat vivera est suspends porta tortor commodo</h1>
                            </div>
                        </div>
                        <div className="bg-sky-50   h-64 w-48 rounded-xl ">
                            <div className="flex flex-col  mx-auto my-5 rounded-full  py-3 items-center bg-green-700 h-24 w-24">
                                <img
                                    className=" mx-auto py-2  "
                                    src={ImageSrc5.src}
                                    height={50}
                                    width={55}
                                    alt="Nfc"
                                />
                            </div>
                            <div className="mx-auto  text-center py-4 w-40 ">
                                <h1 className=" py-1 font-serif font-bold">Online Support</h1>
                                <h1 className="text-center py-1 text-xs ">feugiat vivera est suspends porta tortor commodo</h1>
                            </div>
                        </div>
                    </div>

                    <div className=" h-full   flex flex-row ">
                        <div  className="flex flex-col -space-y-16  h-full  ">
                            <img
                                className=" my-1 mx-24 z-10 shadow-lg shadow-blue-300 h-72 max-w-xl rounded-xl"
                                src={ImageSrc6.src}
                                height={650}
                                width={670}
                                alt="Nfc"
                            />
                            <div className="bg-white z-40 my-36  mx-60 max-w-sm h-36 border border-blue-100 shadow-lg shadow-sky-100   rounded-xl " >
                                <div className=" my-3 text-xs font-bold ">
                                    <h1 className="text-sky-500 mx-2">Dr. Klara Callconi</h1>
                                    <div className=" mx-64 -my-4 h-full max-w-3xl ">
                                        <h1 className="">Ratting: <img
                                            className=" w-16 h-4 mb-1  -my-4 max-w-xl  mx-12"
                                            src={ImageSrc7.src}
                                            height={10}
                                            width={73}
                                            alt="Nfc" />
                                        </h1>
                                    </div>
                                            <div className="font-normal mx-2 my-8 w-60 text-xs " >
                                                <h1>Lorem ipsum dolor sit amet,consectetur adpiscing ellit,blandit feuglat viverra est suspendisse porta tortor commodo.</h1>
                                            </div>
                                        <h1 className="flex  mx-2 -my-4 "><img
                                            className=" w-4 h-4 mb-1 "
                                            src={ImageSrc8.src}
                                            height={6}
                                            width={50}
                                            alt="Nfc" />
                                                            <div className="my-0">
                                                            +33 012924 1804 487
                                                            </div>
                                        </h1>
                                    <div className="mx-56 -my-24 -space-y-16">
                                        <img
                                            className=" z-0 w-20 h-20 mb-14  -my-12 max-w-xl  mx-12"
                                            src={ImageSrc9.src}
                                            height={180}
                                            width={713}
                                            alt="Nfc" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" max-w-7xl -mx-36 ">
                            <h1 className="text-sm  font-semibold my-1 py-2 leading-loose">ABOUT ME.</h1>
                            <div className="w-96 pt-1 leading-4">
                                <h1 className="text-4xl  w-1/127 "> I'm Dr. Kierra Calzoni   </h1>
                                <h1 className="text-4xl font-bold w-1/127" >Actually,I love ta care  <span className="text-blue-600 underline underline-offset-4 shadow-blue-300 font-bold">Patient</span>. </h1>
                            </div>
                            <div className="max-w-lg py-6 ">
                                <div className="text-sm leading-4 ">Lorem ipsum dolor sit amet,consectetur adpiscing ellit.Tempor proin id aliquet lacinia vulpatate mon,Rhoncus.</div>
                                <div className="text-sm py-2">Blandit deugia wi werra est <span className="underline" >Suspendisse porta </span> tortor commodo.  </div>
                                <div className="text-sm leading-4  "> <span className="underline" >Tempor proin </span> id aliquest lacinia wulputate non.Rhoncus,blandit teuglat wiverraest suspendisse porta tortor commodo,tetus Negue.  </div>
                            </div>
                            <div className="py-1">
                                <button className="bg-blue-500 text-white text-xs my-1 px-3 mx-1 rounded-3xl h-10 w-24 ">Let's Talk</button>
                            </div>
                        </div>
                    </div>
            <div className=" h-full  my-6  flex flex-row ">
                <div className=" max-w-sm mx-48 ">
                    <h1 className="text-sm  font-semibold my-1 py-2 leading-loose">SCHEDULE</h1>
                    <div className="w-96 pt-1 leading-4">
                        <h1 className="text-2xl  w-1/127 ">let's See <span className="font-black" >my schedule</span>  </h1>
                        <h1 className="text-2xl font-black w-1/127" >time!When i <span className="text-blue-600 underline underline-offset-4 shadow-blue-300 font-black">Free</span>. </h1>
                    </div>
                    <div className="max-w-lg py-3 ">
                        <div className="text-xs flex font-bold "> <img
                            className="w-3 h-3 mb-3"
                            src={ImageSrc10.src}
                            height={6}
                            width={40}
                            alt="Nfc" />
                            Lorem ipsum dolor sit amet,consectetur adpiscing ellit.</div>
                        <div className="text-xs -my-1 leading-4">Blandit deugia wi werra est Suspendisse porta tortor commodo.id aliquest lacinia wulputate non.  </div>
                        <div className="text-lg font-bold py-5 "> Medical check-up reviews: </div>
                    </div>
                    <div className="space-y-0 -my-7">
                        <div className="grid grid-cols-2 ">
                            <div className=" flex w-36 ">
                                <img
                                    className=" w-4 h-5 py-1  mx-1 "
                                    src={ImageSrc11.src}
                                    height={50}
                                    width={50}
                                    alt="Nfc" />
                                <h1 className="flex text-xs mx-0 py-1 "> Blandit deugia bolor  </h1>
                            </div>
                            <div className=" flex -mx-10  w-44 ">
                                <img
                                    className=" w-4 h-5 py-1  mx-1 "
                                    src={ImageSrc11.src}
                                    height={50}
                                    width={50}
                                    alt="Nfc" />
                                <h1 className="flex text-xs mx-0 py-1 "> consectetur adpiscing  </h1>
                            </div>
                        </div>
                        <div className=" grid grid-cols-2 ">
                            <div className=" flex  w-36 ">
                                <img
                                    className=" w-4 h-5 py-1 mx-1 "
                                    src={ImageSrc11.src}
                                    height={50}
                                    width={50}
                                    alt="Nfc" />
                                <h1 className="flex text-xs mx-0 py-1 ">  Lorem ipsum dolor  </h1>
                            </div>
                            <div className=" flex -mx-10 w-44">
                                <img
                                    className=" w-4 h-5 py-1 mx-1 "
                                    src={ImageSrc11.src}
                                    height={50}
                                    width={50}
                                    alt="Nfc" />
                                <h1 className="flex text-xs mx-0 py-1 "> Suspendisse porta  </h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div  className="flex flex-col -space-y-24  h-xl w-auto -mx-60   ">
                    <img
                        className=" my-1 border border-gray-400 shadow-lg shadow-gray-700 mx-16 z-10 h-64 w-96 rounded-lg"
                        src={Malad.src}
                        height={650}
                        width={670}
                        alt="Nfc"
                    />
                    <div className="bg-gray-50 z-40 border border-gray-300 shadow-lg shadow-gray-700 mx-28 w-80 h-36  rounded-xl " >
                        <div className=" my-5 text-xs font-bold ">
                            <h1 className="text-orange-500 mx-8 text-center">Get a rencontre</h1>
                        </div>
                        <div className="flex grid-cols-3" >
                            <div className=" h-12 w-22 mx-5  -my-3 " >
                                <div className="flex text-xs  ">
                                    <img
                                        className="  h-5 max-w-xs rounded-lg"
                                        src={ImageSrc13.src}
                                        height={20}
                                        width={20}
                                        alt="Nfc"

                                    />
                                    <h1 className="my-0">Date</h1>
                                </div>
                                <div className="text-xs font-black -py-4">3-06-23:</div>
                            </div>
                            <div className=" h-12 w-22 mx-5  -my-3 " >
                                        <div className="flex text-xs  ">
                                                <img
                                                    className="  h-4 max-w-xs rounded-lg"
                                                    src={ImageScr12.src}
                                                    height={4}
                                                    width={14}
                                                    alt="Nfc"

                                                />
                                            <h1 className="my-0">Time</h1>
                                        </div>
                                        <div className="text-xs font-black">11H00 PM</div>
                            </div>
                                    <div className="   h-10 w-20 mx-3  -my-3 " >
                                            <div className="flex text-xs  ">
                                                    <img
                                                        className="  h-4 max-w-xs rounded-lg"
                                                        src={ImageScr12.src}
                                                        height={4}
                                                        width={14}
                                                        alt="Nfc"
                                                    />
                                                <h1 className="-my-0">Lorem</h1>
                                            </div>
                                        <div className="text-xs font-black">Com Bresil:</div>
                                    </div>

                        </div>
                            <div className="py-4 flex justify-center " >
                                <button className=" bg-blue-500 h-8 px-6 w-52  rounded-3xl text-white">Gonow</button>
                            </div>

                    </div>
                </div>
            </div>

            <div className="text-4xl font-bold w-1/127 text-center py-11">
                    Let's see what <span className="text-blue-600 underline">patient</span> says!
            </div>
            <div className=" max-h-96 bg-no-repeat   bg-cover  bg-[url('../../public/photo_2023-09-04_10-17-25.jpg')] "   >
                <div className="-space-y-12 px-96">
                    <div className=" py-16 mx-96  text-xs w-96  ">
                        <h1 className=" text-xs leading-3"> Blandit deugia wi werra est Suspendisse porta tortor commodo.id aliquest lacinia wulputate non.feugiat vivera est suspends porta tortor commodo</h1>
                        <h1 className=" text-xs font-bold py-4 "> JUSTIN LUBIN</h1>
                        <h1 className=" text-xs  py-3"> Director</h1>
                    </div>
                </div>

            </div>

            <div className="text-4xl font-bold w-1/127 text-center py-11">
                Let's see Our <span className="text-blue-600 underline">latest</span> news
            </div>
            <div className=" h-full   flex flex-row">
                <div  className="flex flex-col -space-y-16  h-full  ">
                    <img
                        className=" my-1 mx-20  h-72 max-w-lg rounded-lg"
                        src={Corona.src}
                        height={650}
                        width={670}
                        alt="Nfc"
                    />
                    <div className=" flex my-16">
                                    <h1 className="flex  mx-6 my-16  ">
                                        <div className="rounded-full mx-14 my-1 items-center bg-black h-3 w-3"></div>
                                        <div className="-mx-12 my-1 text-xs ">By Martin Cury</div>
                                    </h1>
                                    <h1 className="flex  mx-36 my-16  ">
                                        <img
                                            className=" my-1 mx-14 z-10  h-400 max-w-lg rounded-lg"
                                            src={ImageSrc13.src}
                                            height={23}
                                            width={23}
                                            alt="Nfc"
                                        />
                                        <div className="-mx-12 my-1 py-1 text-xs ">21-12-2005</div>
                                    </h1>
                    </div>
                                <div className="text-xl font-bold w-6 -py-11 px-96 -ml-6">
                                    <h1 className="-ml-72 w-80 ">Join me and respectfully fight COVID missinformation.</h1>
                                </div>
                    <div className=" py-20 leading-4 mx-20">
                        <div className="text-xs -ml-1 w-96 ">Lorem ipsum dolor sit amet,consectetur adpiscing ellit.Tempor proin id aliquet lacinia vulpatate mon,Rhoncus.Blandit deugia wi werra est Suspendisse  </div>
                        <div className="text-xs -ml-1 w-96 py-3 ">Tempor proin id aliquest lacinia wulputate non.Rhoncus,blandit teuglat wiverraest suspendisse porta tortor commodo,tetus Negue.Blandit deugia wi werra est Suspendisse  </div>
                    </div>
                </div>
                <div className=" max-w-7xl -mx-28  ">
                            <div className="flex justify-between">
                                <h1 className="text-sm  font-semibold my-1 py-2 leading-loose"><span className="border-b-2 border-orange-500">Latest News :</span></h1>
                                <h1 className="text-sm mx-12 font-semibold my-1 py-2 leading-loose">View all </h1>

                            </div>
                    <div className="w-96 pt-1 leading-4 flex">
                        <div  className="flex flex-col -space-y-16  h-full w-32 border border-white ">
                            <img
                                className=" my-1 mx-1   h-20 w-28 rounded shadow-sm shadow-gray-600"
                                src={Medecin.src}
                                height={650}
                                width={670}
                                alt="Nfc"
                            />
                        </div>
                                   <div className=" -mx-0 w-56 ">
                                       <div  className=" -space-y-16  mx-6 h-auto w-56 ">
                                           <h1 className="text-xl font-bold">I'm cated anti-science I'm just an early</h1>
                                       </div>
                                       <div className=" mx-6 my-3">
                                           <div className="text-xs text-red-700 font-bold">Read More.</div>
                                       </div>
                                   </div>
                        </div>
                                <div className="w-96 pt-1 leading-4  flex">
                                            <div  className="flex flex-col -space-y-16  h-full w-32 border border-white ">
                                                <img
                                                    className=" my-1 mx-1  h-20 w-28 rounded  shadow-sm shadow-gray-600"
                                                    src={Sang.src}
                                                    height={650}
                                                    width={670}
                                                    alt="Nfc"
                                                />
                                            </div>
                                            <div className=" -mx-0 w-56 ">
                                                <div  className=" -space-y-16  mx-6 h-auto w-56  ">
                                                    <h1 className="text-xl font-bold">Burnout and bias?Or medical...</h1>
                                                </div>
                                                <div className=" mx-6 my-3">
                                                    <div className="text-xs text-red-700 font-bold">Read More.</div>
                                                </div>
                                            </div>
                                </div>
                                        <div className="w-96 pt-1 leading-4  flex">
                                            <div  className="flex flex-col -space-y-16  h-full w-32  ">
                                                <img
                                                    className=" my-1 mx-1 h-20 w-28 rounded  shadow-sm shadow-gray-600"
                                                    src={visage.src}
                                                    height={650}
                                                    width={670}
                                                    alt="Nfc"
                                                />
                                            </div>
                                            <div className=" -mx-0 w-56 ">
                                                <div  className=" -space-y-16  mx-6 h-auto w-56  ">
                                                    <h1 className="text-xl font-bold">Heatly Living with Graves Disases</h1>
                                                </div>
                                                <div className="  mx-6 my-3">
                                                    <div className="text-xs text-red-700 font-bold">Read More.</div>
                                                </div>
                                            </div>
                                        </div>
                    <div className="max-w-lg py-6 leading-4 ">
                        <div className="text-xs  font-bold"> <span className="border-b-2 border-orange-500">Coming Soon.</span></div>
                        <div  className="flex flex-row space-x-5  h-full w-72 border border-white my-5 ">
                            <img
                                className=" my-1 mx-1   h-20 w-28 rounded  shadow-sm shadow-gray-600"
                                src={homme.src}
                                height={650}
                                width={670}
                                alt="Nfc"
                            />
                            <img
                                className=" my-1 mx-1 h-20 w-28 rounded  shadow-sm shadow-gray-600"
                                src={bebe.src}
                                height={650}
                                width={670}
                                alt="Nfc"
                            />
                        </div>
                    </div>
                </div>
            </div>



           <Pied/>
        </>
     )
}
