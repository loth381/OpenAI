

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='flex flex-col items-center justify-center w-full'>
      <nav className='flex items-center justify-between w-full pt-3 mb-10'>
        <img src={logo} alt='sumz_logo' className='object-contain w-28' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/loth381/OpenAI", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
      Resumir artículos con <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'> 
Simplifique su lectura con Summize, un resumidor de artículos de código abierto
        que transforma artículos extensos en resúmenes claros y concisos
      </h2>
    </header>
  );
};

export default Hero;
