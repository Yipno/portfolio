const Skills = () => {
  return (
    <div id='skills' className='border pt-24 w-11/12 min-h-screen flex flex-col items-center'>
      <div className='text-left'>
        <p className='font-mono text-primary'>// Stuff I can do</p>
        <h2 className='font-title text-6xl pb-4'>Compétences & Technologies</h2>
      </div>
      <section className='w-10/12 border rounded-2xl overflow-hidden'>
        <div className='w-full p-4 flex justify-start bg-muted border-b border-border'>
          <div className='flex justify-evenly gap-2'>
            <div className='rounded-full bg-red-400 w-4 h-4'></div>
            <div className='rounded-full bg-yellow-300 w-4 h-4'></div>
            <div className='rounded-full bg-green-400 w-4 h-4'></div>
          </div>
          <p className='font-mono text-sm text-text ml-12'>skills.json</p>
        </div>
        <div className='w-full p-4 h-80 bg-bg text-left'>
          <div className='p-6 font-mono text-sm'>
            <pre className='text-muted-foreground'>
              <span className='text-primary'>{'{'}</span>
              {'\n'}
              {'  '}
              <span className='text-danger'>"developer"</span>:{' '}
              <span className='text-green-600 dark:text-green-400'>"John Doe"</span>,{'\n'}
              {'  '}
              <span className='text-danger'>"focus"</span>:{' '}
              <span className='text-green-600 dark:text-green-400'>"Full-Stack Development"</span>,
              {'\n'}
              {'  '}
              <span className='text-danger'>"passion"</span>:{' '}
              <span className='text-green-600 dark:text-green-400'>"Building great products"</span>,
              {'\n'}
              {'  '}
              <span className='text-danger'>"available"</span>:{' '}
              <span className='text-yellow-600 dark:text-yellow-400'>true</span>
              {'\n'}
              <span className='text-primary'>{'}'}</span>
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
