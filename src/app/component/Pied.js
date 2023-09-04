import Link from "next/link"
import Image from "next/image"
import ImageSrc from "../../../public/Heart Puzzle_125px.png"
import ImageSrc8 from "../../../public/callback_125.png"
import ImageSrc2 from "../../../public/message_125px.png"
import ImageSrc4 from "../../../public/Sans titre-1.png"
import ImageSrc3 from "../../../public/Heart Puzzle_125px.png";
import Tele from "../../../public/Telegram.png"
import Face from "../../../public/Facebook Old_125px.png"
import What from "../../../public/whatsapp_125px.png"
import Insta from "../../../public/instagram_new_125px.png"
export default function Barre() {
    return(
        <div className=" bg-no-repeat   bg-cover  bg-[url('../../public/f97fe37e5f3e637a165af0444404a6df.jpg')] h-80">
                <div className=" flex flex-col  w-80 h-80 mx-32 ">
                    <img
                        className="my-6"
                        src={ImageSrc.src}
                        height={25}
                        width={25}
                        alt="Nfc"
                    />
                    <h1 className="mx-6 -my-12  font-black text-white">
                       CARE</h1>


                            <div className="text-white text-xs w-48">
                                <h1 className="my-16">Blandit deugia wi werra est Suspendisse porta </h1>
                            </div>
                    <div className=" w-52  -my-11 ">
                        <h1 className="flex "><img
                            className=" w-5 h-5 mb-1 "
                            src={ImageSrc8.src}
                            height={6}
                            width={50}
                            alt="Nfc" />
                            <div className="text-xs text-white font-bold my-0.5 mx-1">
                                +33 012924 1804 487
                            </div>
                        </h1>
                        <h1 className="flex "><img
                            className=" w-5 h-5 mb-1"
                            src={ImageSrc2.src}
                            height={6}
                            width={50}
                            alt="Nfc" />
                            <div className="text-xs text-white font-bold my-0.5 mx-2">
                                blanditdeugia@gmail.com
                            </div>
                        </h1>
                    </div>
                              <div className="flex -mx-0 space-x-3">
                                  <div className="" >
                                      <img
                                          className=" mx-0 h-8 w-8 my-14  "
                                          src={Tele.src}
                                          height={50}
                                          width={55}
                                          alt="Nfc"
                                      />
                                  </div>
                                  <div className="" >
                                      <img
                                          className=" mx-0 h-8 w-8 my-14  "
                                          src={Face.src}
                                          height={50}
                                          width={55}
                                          alt="Nfc"
                                      />
                                  </div>
                                  <div className="" >
                                      <img
                                          className=" mx-0 h-8 w-8 my-14  "
                                          src={What.src}
                                          height={50}
                                          width={55}
                                          alt="Nfc"
                                      />
                                  </div>
                                  <div className="" >
                                      <img
                                          className=" mx-0 h-8 w-8 my-14  "
                                          src={Insta.src}
                                          height={50}
                                          width={55}
                                          alt="Nfc"
                                      />
                                  </div>
                              </div>
                                    <div className="w-fit ">
                                        <h1 className="text-xs text-white font-bold ">@ Copyright 2001 ITari LOGO dll Mongol Reserved </h1>
                                    </div>

                    <div className="flex flex-col  w-20 h-60 mx-80 -my-72 ">
                                <div className=" flex flex-col  w-20 h-12 my-0 mx-0 ">
                                    <h1 className="mx-0 my-7  font-black text-white">
                                        Menu</h1>
                        </div>
                                <div className="flex flex-col text-white text-xs   my-3">
                                    <div className="my-3 space-y-2">
                                        <h1 >Home</h1>
                                        <h1>Work</h1>
                                        <h1>About</h1>
                                        <h1>Schedule</h1>
                                    </div>
                                </div>

                        <div className="-mx-8 my-2 ">
                            <div className="flex flex-col  w-36 h-60 mx-36 -my-48 ">
                                <div className=" flex flex-col w-84 h-12 my-0 mx-0 ">
                                    <h1 className="mx-0 my-7  font-black text-white">
                                        Usefulllink</h1>
                                </div>
                                <div className="flex flex-col text-white text-xs space-y-2  my-6">
                                    <h1>Privacy Policy</h1>
                                    <h1>Controle starding</h1>
                                    <h1>Purching Pollicy</h1>
                                    <h1>Terms & Condition</h1>
                                    <h1>Contact</h1>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                        <div className="mx-96 -my-72 ">
                            <div className="flex flex-col   h-60 ml-96 -my-80 w-80 ">
                                <div className=" flex flex-col  w-84 h-12 my-0 mx-0 ">
                                    <h1 className="mx-0 my-6  font-black text-white">
                                        Contact</h1>
                                </div>
                                <div className="flex flex-col text-white text-xs space-y-4  my-5 w-60">
                                    <h1 className="text-xs">Lorem ipsum dolor sit amet,consectetur </h1>
                                    <h1 className="text-xs w-80">Lorem ipsum dolor sit amet,consectetur adpiscing ellit,blandit feuglat viverra est suspendisse porta tortor commodo,tellus.Neque.</h1>
                                </div>
                                <div className="flex flex-col text-white text-xs  mx-0.5 my-1 w-40" >
                                    <div className="flex rounded-l-2xl w-56 h-7 text-white text-center ">
                                        <input type="mail" className="w-44 rounded-l-3xl text-white text-center bg-gray-400 placeholder-white focus:border-gray-50 "  placeholder='Enter your E-mail'/>
                                        <button className="rounded-r-3xl w-16 h-7 mx-0 bg-blue-500 ">
                                            <img
                                                className="-my-2 mx-4 w-5 "
                                                src={Tele.src}
                                                height={25}
                                                width={25}
                                                alt="Nfc"
                                            />
                                        </button>
                                    </div>

                                </div>
                            </div>

                        </div>
        </div>

    )
}