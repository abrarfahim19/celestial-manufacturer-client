import React from "react";

const MyPortfolio = () => {
    return (
        <div>
            <h2 className="text-center mx-5 text-5xl font-semibold text-primary mt-10">
                IM Abrar
            </h2>
            <div className="self-start">
                <p className="mx-32 text-2xl mt-5">
                   I have studied Applied Mathematics in Noakhali Science And Technology University. I am currently exploring the career opertunity of Web Based Solution.
                </p>
                <p className="mx-32 text-xl mt-5">
                   My Carreer Interest:
                   <ul>
                       <li className="mx-10">Machine Learning</li>
                       <li className="mx-10">Data Science</li>
                       <li className="mx-10">Web Devlopment</li>
                   </ul>
                </p>
                <p className="mx-32 text-xl mt-5">
                   Some of My Diverse Project
                   <ol>
                       <li className="mx-10">Web Scrping With Scrapy: <span className="text-primary"> <a href="https://github.com/abrarfahim19/Web_Scraping">Explore the power of Scrapy</a></span> </li>
                       <li className="mx-10">Scrapping Linked In Profile With Beautiful Soup: <span className="text-primary"> <a href="https://www.youtube.com/watch?v=dJgOm0E81P8">Project Youtube LInk</a></span> </li>
                       <li className="mx-10">Data Science Team Site: <span className="text-primary"> <a href="https://atoshi.solutions">Explore the power of Scrapy</a></span></li>
                   </ol>
                </p>

                
            </div>
        </div>
    );
};

export default MyPortfolio;
