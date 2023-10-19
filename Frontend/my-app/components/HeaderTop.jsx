import React from "react";

import {BsFacebook,BsInstagram,BsTwitter,BsLinkedin} from "react-icons/bs";

const HeaderTop = () => {
    return (
        <div className="border-b border-gray-200 hidden sm:block">
            <div className="container py-4">
                <div className="flex justify-between items-center">
                    <div className="hidden lg:flex gap-1">
                        {/*social media buttons*/ }
                        <div className="header_top_icon_wrapper">
                            <BsFacebook />
                        </div>
                        <div className="header_top_icon_wrapper">
                            <BsInstagram />
                        </div>
                        <div className="header_top_icon_wrapper">
                            <BsTwitter />
                        </div>
                        <div className="header_top_icon_wrapper">
                            <BsLinkedin />
                        </div>
                    </div>



                    <div className="test-gray-500 text-[12px]">
                        <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - $55
                    </div>
                </div>
            </div>
        </div>
        );
};

export default HeaderTop;