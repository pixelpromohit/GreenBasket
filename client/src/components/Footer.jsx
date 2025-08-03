import React from 'react'
import { assets, footerLinks } from '../assets/assets';

const Footer = () => {
    

    return (
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 mt-16 md:mt-24 bg-primary/10">
            <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-10 py-8 md:py-10 border-b border-gray-500/30 text-gray-500">
                <div>
                    <img className="w-28 md:w-32" src={assets.logo} alt='logo'/>
                    <p className="max-w-[410px] mt-4 md:mt-6 text-sm md:text-base">
                        We deliver fresh groceries and snacks straight to your
                        door. Trusted by thousands, we aim to make your shopping
                        experience simple and affordable.
                    </p>
                </div>
                <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-4 md:gap-5">
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-sm md:text-base text-gray-900 md:mb-5 mb-2">{section.title}</h3>
                            <ul className="text-xs md:text-sm space-y-1">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href={link.url} className="hover:underline transition">{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <p className="py-3 md:py-4 text-center text-xs md:text-sm lg:text-base text-gray-500/80">
                Copyright {new Date().getFullYear()} © GreenBasket.dev All Right Reserved.
            </p>
        </div>
    );
};

export default Footer;