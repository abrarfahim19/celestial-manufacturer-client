import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <>
            <footer className="bg-slate-300 p-5 bottom-0 w-full">
                <div>
                    <p className="text-center text-2xl text-blue-500">
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-facebook"></i>

                    </p>
                </div>
                <p className="text-center text-md"> Copyright © {date} Celestial Manufacturer </p>
            </footer>
        </>
    );
};

export default Footer;
