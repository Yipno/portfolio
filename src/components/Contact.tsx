import { Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .send('service_zwd12e4', 'template_d6a45om', {
        name,
        email,
        message,
      })
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch(err => {
        console.log('FAILED...', err);
      });

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div
      id='contact'
      className='pt-24 w-full min-h-[calc(100vh-6rem)] flex flex-col items-center pattern-col'>
      {/* Entete */}
      <div className='flex justify-center border-y border-border w-full'>
        <div className='text-left bg-bg border-x border-border'>
          <p className='border-b border-border font-mono font-light text-xs text-primary px-2 pt-1'>
            // Let's Work Together
          </p>
          <h2 className='font-title text-6xl px-2 -mb-1.5'>Contact</h2>
        </div>
      </div>
      {/* Contenu */}
      <div className='flex w-4/5 max-w-4xl my-4 gap-8'>
        {/* Gauche */}
        <div className='w-1/2 flex px-1 flex-col justify-start gap-6'>
          <div className='bg-bg border border-border w-full h-30 rounded-2xl flex px-6 gap-6 items-center'>
            <div className='rounded-xl bg-white shadow-[inset_0_2px_6px_rgba(0,0,0,0.25),inset_0_-2px_4px_rgba(255,255,255,0.05)]'>
              <Mail className='m-4 h-8 w-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]' />
            </div>
            <div className='flex flex-col justify-center text-left'>
              <p className='text-text/60 text-sm'>Email</p>
              <a
                href='mailto:aubrygamard.dev@gmail.com'
                className='text-primary font-medium hover:underline'>
                aubrygamard.dev@gmail.com
              </a>
            </div>
          </div>
          <div className='bg-bg border border-border w-full h-30 rounded-2xl px-6 gap-6 flex items-center'>
            <div className='rounded-xl bg-white shadow-[inset_0_2px_6px_rgba(0,0,0,0.25),inset_0_-2px_4px_rgba(255,255,255,0.05)]'>
              <MapPin className='m-4 h-8 w-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]' />
            </div>
            <div className='flex flex-col justify-center text-left'>
              <p className='text-text/60 text-sm'>Location</p>
              <p className='font-medium'>Saint-Paul, La Réunion, France</p>
            </div>
          </div>
          <div className='bg-bg border border-border w-full flex-1 rounded-2xl flex'></div>
        </div>
        {/* Droite */}
        <form
          id='contact-form'
          onSubmit={handleSubmit}
          className='bg-bg border border-border px-8 py-4 rounded-2xl w-1/2 flex flex-col items-start'>
          <label htmlFor='name' className='text-left text-sm'>
            Votre Nom
          </label>
          <input
            id='name'
            name='name'
            type='text'
            placeholder='John Doe'
            onChange={e => setName(e.target.value)}
            value={name}
            className='bg-white border border-border w-full h-12 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary'
          />
          <label htmlFor='email' className='text-left text-sm'>
            Votre email
          </label>
          <input
            id='email'
            name='email'
            type='email'
            placeholder='email@exemple.com'
            onChange={e => setEmail(e.target.value)}
            value={email}
            className='bg-white border border-border w-full h-12 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary'
          />
          <label htmlFor='message' className='text-left text-sm'>
            Votre message
          </label>
          <textarea
            id='message'
            name='message'
            rows={5}
            placeholder='Discutons de votre projet...'
            onChange={e => setMessage(e.target.value)}
            value={message}
            className='bg-white border border-border w-full rounded-lg px-4 py-2 mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary'
          />
          <button
            id='submit-button'
            type='submit'
            className='w-full h-14 my-4 bg-primary text-bg font-medium px-6 py-3 rounded-full hover:cursor-pointer hover:shadow-md hover:shadow-primary hover:-translate-y-1 active:translate-y-1 hover:duration-250 ease-in-out'>
            <Send className='inline mr-2' /> Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
