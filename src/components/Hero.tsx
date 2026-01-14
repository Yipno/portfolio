const Hero = () => {
  return (
    <div className='pt-24 w-11/12  min-h-screen flex justify-center'>
      <section className='flex'>
        <div className='w-1/2 h-full flex flex-col justify-center text-left'>
          <p className='font-mono text-primary'>// Hello World</p>
          <h1 className='text-text py-2 font-title font-bold text-8xl leading-18'>
            Aubry <br />
            <span className='text-primary'>Gamard</span>
          </h1>
          <div className='pr-2'>
            <p className='pt-12 font-mono text-primary leading-4'>// About Me</p>
            <p className='text-text font-sans text-3xl'>
              Développeur web et mobile fullstack, en reconversion professionnelle.
            </p>
            <p className='my-4 text-text font-sans text-3xl'>
              Après plus de 15 années dans des environnements techniques exigents, j'utilise
              aujourd'hui mon expérience pour créer des applications fiables et robustes.
            </p>
          </div>
        </div>
        <div className='w-1/2 h-full border'></div>
      </section>
    </div>
  );
};

export default Hero;
