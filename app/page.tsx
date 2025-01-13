// import { createClient } from "@supabase/supabase-js";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      <div className="snap-start items-center justify-center h-screen flex-col flex">
        <h1 className="text-4xl">Welcome to file drop</h1>
        {/* <input type="file" name="file"></input> */}
        <button  className="flex items-center border border-white rounded-full p-2" >
          <Image src="google.svg" alt="Google logo" height={35} width={35} />
          <p className="">Login with google</p>
        </button>
      </div>
    </div>
  );
}
