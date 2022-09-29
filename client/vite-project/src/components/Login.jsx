import Nav from "./Nav";

function Login() {
  return (
    <>
      <Nav />
      <div className="w-1/3 m-auto h-94 mt-40 bg-sky-400 rounded p-4 text-xl">
        <div className="mb-2 text-center text-2xl">LOGIN</div>
        <div className=" flex flex-col gap-4">
          <label htmlFor="email">Enter Email :</label>
          <input type="email" name="Email" id="email" className="rounded p-1.5 focus:outline-none" required/>
          <label htmlFor="password">Enter Password :</label>
          <input type="password" name="" id="password" className="rounded p-1.5 focus:outline-none" required/>
          <button className="text-sky-800 mt-2 focus:outline-none">LOGIN</button>
        </div>
      </div>
    </>
  );
}

export default Login;
