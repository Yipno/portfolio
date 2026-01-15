const Hero = () => {
  return (
    <div className='py-4 w-full min-h-screen flex justify-center pattern-col'>
      <section className='flex border-t border-border'>
        <div className='w-1/2 h-full flex flex-col justify-start text-left'>
          <p className='bg-bg font-mono text-primary border-b border-r border-border'>
            // Hello World
          </p>
          <h1 className='bg-bg border-b border-r border-border pt-3 pl-2 font-title font-bold text-9xl leading-23'>
            Aubry <br />
            <span className='text-primary'>Gamard</span>
          </h1>
          <div>
            <p className='bg-bg border-b border-r border-border pt-2 pl-2 text-text font-title text-4xl'>
              Développeur web et mobile fullstack.
            </p>
            <div className='w-full h-8 border-b border-r border-border' />
            <p className='bg-bg pt-0.5 pl-2 font-mono text-primary font-light text-xs leading-4 border-b border-r border-border'>
              // About Me
            </p>
            <p className='bg-bg pb-1 pl-2 font-sans text-3xl border-b border-r border-border'>
              Après plus de 15 années dans des environnements techniques exigents, j'utilise
              aujourd'hui mon expérience pour créer des applications fiables et robustes.
            </p>
          </div>
        </div>
        <div className='w-1/2 h-full'></div>
      </section>
    </div>
  );
};

export default Hero;
