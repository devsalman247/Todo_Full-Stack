import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className="bg-sky-500 w-full mb-10 h-10 py-6 flex justify-center items-center gap-10 text-xl">
            <Link to='/' className="text-white hover:text-gray-800">Home</Link>
            <Link to='/signup' className="text-white hover:text-gray-800">Signup</Link>
            <Link to='/login' className="text-white hover:text-gray-800">Login</Link>
        </div>
    )
}

export default Nav;