import React from "react";

const Blog = () => {
    return (
        <div className="mx-24 my-5">
            <h1 className="text-center text-3xl text-primary font-bold">
                This is Blog
            </h1>
            <div className="card bg-slate-100 shadow p-4 mt-10 ">
                <h3 className="text-left text-gray-700 font-bold text-xl">
                What are the different ways to manage a state in a React application?
                </h3>
                <p className="text-xl font-semibold mt-3">
                There are four main types of state you need to properly manage in your React apps:
                    <ul>
                        <li className="mx-5 text-red-500">
                        1. Local state.
                        </li>
                        <li className="mx-5 text-red-500">
                        2. Global state.
                        </li>
                        <li className="mx-5 text-red-500">
                        3. Server state.
                        </li>
                        <li className="mx-5 text-red-500">
                        4. URL state.
                        </li>
                    </ul>
                </p>
            </div>
            <div className="card bg-slate-100 shadow p-4 mt-10 ">
                <h3 className="text-left text-gray-700 font-bold text-xl">
                    Why you do not set the state directly in React. For example,
                    if you have const{" "}
                    <span className="text-red-600">
                        [products, setProducts] = useState([])
                    </span>
                    . Why you do not set{" "}
                    <span className="text-red-600"> products = [...]</span>{" "}
                    instead, you use the setProducts
                </h3>
                <p className="text-xl font-semibold mt-3">
                    Because use state is a hook. Through the state we can drill
                    the setState prop into other component. And by this
                    technique we can set the value of the product in far more
                    flexible manner
                </p>
            </div>
            <div className="card bg-slate-100 shadow p-4 mt-10 ">
                <h3 className="text-left text-gray-700 font-bold text-xl">
                    What is a unit test? Why should write unit tests?
                </h3>
                <p className="text-xl font-semibold mt-3">
                    Unit tests are typically automated tests. It ensures that a
                    section of an application (known as the "unit") meets its
                    design and behaves as intended. <br />A unit could be an
                    entire module, but it is more commonly an individual
                    function or procedure
                </p>
            </div>
            <div className="card bg-slate-100 shadow p-4 mt-10 ">
                <h3 className="text-left text-gray-700 font-bold text-xl">
                    You have an array of products. Each product has a name,
                    price, description, etc. How will you implement a search to
                    find products by name?
                </h3>
                <p className="text-xl font-semibold mt-3">
                    We can do this by following method, <br /><br />
                    {`const[search, setSearch] = useState('')`}
                    <br />
                    {`const[product,setProduct] = useState([...])`}
                    <br />
                    {`useEffect(()=>{`}
                    <br />
                    {`setProduct(product.filter((event) => event.name === name))},[name])`}
                </p>
            </div>
            <div className="card bg-slate-100 shadow p-4 mt-10 ">
                <h3 className="text-left text-gray-700 font-bold text-xl">
                How will you improve the performance of a React Application?
                </h3>
                <p className="text-xl font-semibold mt-3">
                    3 Ways to improve React App performance
                    <ul>
                        <li className="mx-5 text-red-500">
                        Lazy loading images in React
                        </li>
                        <li className="mx-5 text-red-500">
                        Keeping component state local where necessary
                        </li>
                        <li className="mx-5 text-red-500">
                        Code-splitting in React using dynamic import()
                        </li>
                    </ul>
                </p>
            </div>
            
            <div className="card bg-slate-100 shadow p-4 mt-10 ">
                <h3 className="text-left text-gray-700 font-bold text-xl">
                How does prototypical inheritance work?
                </h3>
                <p className="text-xl font-semibold mt-3">
                Prototype-based programming is a style of object-oriented programming in which behaviour reuse (known as inheritance) is performed via a process of reusing existing objects that serve as prototypes. In programming, we often want to take something and extend it. For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it
                </p>
            </div>
            
        </div>
    );
};

export default Blog;
