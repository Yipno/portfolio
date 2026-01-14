import { Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //TODO Logique d'envoi du formulaire ici
    console.log('Form submitted:', { name, email, message });

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div
      id='contact'
      className='pt-24 w-11/12 min-h-[calc(100vh-6rem)] flex flex-col items-center bg-bg'>
      <div>
        <p className='font-mono text-primary'>// Work together</p>
        <h2 className='font-title text-text text-6xl pb-4'>Contact</h2>
      </div>
      <div className='flex w-2/3 mt-8 gap-8'>
        <div className='w-1/2 flex px-1 flex-col justify-start gap-6'>
          <div className='border border-border w-full h-30 rounded-2xl flex px-6 gap-6 items-center'>
            <div className='rounded-xl bg-primary/50'>
              <Mail className='m-4 h-8 w-8 text-text' />
            </div>
            <div className='flex flex-col justify-center text-left'>
              <p className='text-text/60'>Email</p>
              <p className='text-primary font-medium'>aubrysorianogamard@gmail.com</p>
            </div>
          </div>
          <div className='border border-border w-full h-30 rounded-2xl px-6 gap-6 flex items-center'>
            <div className='rounded-xl bg-primary/50'>
              <MapPin className='m-4 h-8 w-8 text-text' />
            </div>
            <div className='flex flex-col justify-center text-left'>
              <p className='text-text/60'>Location</p>
              <p className='text-text font-medium'>Saint-Paul, La Réunion, France</p>
            </div>
          </div>
          <div className='border border-border w-full flex-1 rounded-2xl flex'></div>
        </div>
        <form
          id='contact-form'
          onSubmit={handleSubmit}
          className='border border-border px-8 py-4 rounded-2xl w-1/2 flex flex-col items-start'>
          <label htmlFor='name' className='text-left'>
            Votre Nom
          </label>
          <input
            id='name'
            name='name'
            type='text'
            placeholder='John Doe'
            onChange={e => setName(e.target.value)}
            value={name}
            className='border border-border w-full h-14 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary'
          />
          <label htmlFor='email' className='text-left'>
            Votre email
          </label>
          <input
            id='email'
            name='email'
            type='email'
            placeholder='email@exemple.com'
            onChange={e => setEmail(e.target.value)}
            value={email}
            className='border border-border w-full h-14 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary'
          />
          <label htmlFor='message' className='text-left'>
            Votre message
          </label>
          <textarea
            id='message'
            name='message'
            rows={5}
            placeholder='Discutons de votre projet...'
            onChange={e => setMessage(e.target.value)}
            value={message}
            className='border border-border w-full rounded-lg px-4 py-2 mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary'
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
