import SocialMedia from "./SocialMedia";

function App() {
  return (
    <div className="  py-4 static">
      <h1 className="capitalize text-3xl justify-self-center font-thin text-white pt-10">
        our <span className="font-bold">team</span>
      </h1>
      <div className="mt-28 grid lg:grid-cols-4 sm:grid-cols-2 gap-10 ">
        <div className=" content-center justify-items-center space-y-3 ">
          <img
            src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar3.png"
            class="max-w-full h-auto  rounded-full bg-gray-50 grayscale"
            alt="titleimage"
          />
          <h1 className="font-bold capitalize text-xl">kalkidan</h1>
          <p className="text-stone-400 font-thin">Founder CEO</p>
          <SocialMedia />
        </div>
        <div className=" content-center justify-items-center space-y-3 ">
          <img
            src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar1.png"
            class="max-w-full h-auto  rounded-full bg-gray-50 grayscale"
            alt="titleimage"
          />
          <h1 className="font-bold capitalize text-xl">mikail</h1>
          <p className="text-stone-400 font-thin">Marketing</p>
          <SocialMedia />
        </div>
        <div className=" content-center justify-items-center space-y-3 ">
          <img
            src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar2.png"
            class="max-w-full h-auto  rounded-full bg-gray-50 grayscale"
            alt="titleimage"
          />
          <h1 className="font-bold capitalize text-xl">chala</h1>
          <p className="text-stone-400 font-thin">Sales manager</p>
          <SocialMedia />
        </div>
        <div className=" content-center justify-items-center space-y-3">
          <img
            src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar3.png"
            class="max-w-full h-auto  rounded-full bg-gray-50 grayscale"
            alt="titleimage"
          />
          <h1 className="font-bold capitalize text-xl">Beza</h1>
          <p className="text-stone-400 font-thin">UI/UX Designer</p>
          <SocialMedia />
        </div>
      </div>
      <p className="text-black  absolute bottom-0 pb-4  place-content-center  flex place-self-center  w-full  ">
        This is a Team Section by ari_budin.
        <span className="underline"> Component details</span>
      </p>
    </div>
  );
}

export default App;
