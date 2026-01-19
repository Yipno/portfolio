import { Mail, MapPin, Send, BriefcaseBusiness, Github, Linkedin } from 'lucide-react';
import { useEffect, useState } from 'react';
import emailjs from '@/lib/emailjs';
import { useInView } from 'react-intersection-observer';
import type { SectionId } from '@/App';

const Contact = ({ setActiveSection }: { setActiveSection: (id: SectionId) => void }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) setActiveSection('contact');
  }, [inView, setActiveSection]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading) return; // Prevent multiple submissions
    setIsLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name,
          email,
          message,
        },
      );
      alert('Message envoyé ! Merci 💌');
      setName('');
      setEmail('');
      setMessage('');
      setIsLoading(false);
    } catch (error) {
      alert("Erreur lors de l'envoi du message. Veuillez réessayer plus tard.");
      setIsLoading(false);
      console.error('Error sending email:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id='contact'
      ref={ref}
      className='pt-24 w-full min-h-[calc(100vh-6rem)] flex flex-col items-center'>
      {/* Entete */}
      <div className='flex justify-center border-y border-border w-full'>
        <div className='text-left bg-surface border-x border-border'>
          <p className='border-b border-border commentary-text dark:text-glow'>
            // Let's Work Together
          </p>
          <h2 className='bg-surface font-title text-6xl px-1 pt-1.5 leading-11'>Contact</h2>
        </div>
      </div>
      {/* Contenu */}
      <div className='w-full mt-4 border-y border-border flex flex-col items-center'>
        <p className='w-11/12 md:w-2/3 lg:w-1/2 bg-surface px-2 border-x border-border flex justify-center'>
          Discutons de votre projet ! Que vous ayez une idée à concrétiser ou que vous souhaitiez en
          savoir plus sur mes compétences, envoyez-moi un message !
        </p>
      </div>
      <div className='flex flex-col items-center md:items-stretch md:flex-row md:w-11/12 lg:w-4/5 max-w-4xl my-4 gap-2'>
        {/* Gauche */}
        <div className='w-11/12 md:w-1/2 flex flex-col md:justify-start gap-2'>
          <div className='bg-bg border border-border w-full h-30 rounded-2xl flex px-6 gap-6 items-center'>
            <div className='rounded-lg bg-surface shadow-[inset_0_2px_6px_rgba(0,0,0,0.35),inset_0_-2px_4px_rgba(255,255,255,0.05)] dark:shadow-[inset_0_0_14px_rgba(0,240,0,0.65),inset_0_-2px_4px_rgba(255,255,255,0.05)]'>
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
            <div className='rounded-lg bg-surface shadow-[inset_0_2px_6px_rgba(0,0,0,0.35),inset_0_-2px_4px_rgba(255,255,255,0.05)] dark:shadow-[inset_0_0_14px_rgba(0,240,0,0.65),inset_0_-2px_4px_rgba(255,255,255,0.05)]'>
              <MapPin className='m-4 h-8 w-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]' />
            </div>
            <div className='flex flex-col justify-center text-left'>
              <p className='text-text/60 text-sm'>Location</p>
              <p className='font-medium'>Saint-Paul, La Réunion, France</p>
            </div>
          </div>
          <div className='bg-bg border border-border w-full flex-1 rounded-2xl px-6 py-6'>
            <div className='mb-2 mr-6 rounded-lg bg-surface float-left shadow-[inset_0_2px_6px_rgba(0,0,0,0.35),inset_0_-2px_4px_rgba(255,255,255,0.05)] dark:shadow-[inset_0_0_14px_rgba(0,240,0,0.65),inset_0_-2px_4px_rgba(255,255,255,0.05)]'>
              <BriefcaseBusiness className='m-4 h-8 w-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]' />
            </div>
            <p className='text-left'>
              N'hésitez pas à me contacter pour discuter de vos projets, collaborations, missions
              freelance ou opportunités professionnelles. Je suis mobile et toujours ouvert à de
              nouvelles aventures et défis passionnants !
            </p>
            <div className='flex items-end justify-between gap-2 mt-2'>
              <a
                href='https://www.linkedin.com/in/aubry-gamard-1460a728a/'
                target='blank'
                aria-label='lien vers le profil linkedin'
                className='hover:cursor-pointer hover:text-primary hover:scale-120 ease-in-out duration-300 text-text flex justify-start items-end gap-1'>
                <Linkedin className='h-7 w-7' /> Linkedin
              </a>
              <a
                href='https://github.com/Yipno'
                target='blank'
                aria-label='lien vers le profil github'
                className='hover:cursor-pointer hover:text-primary hover:scale-120 ease-in-out duration-300 flex items-end gap-1'>
                <Github className='h-7 w-7' /> GitHub
              </a>
              <p className='text-right italic text-sm text-primary'>A bientôt !</p>
            </div>
          </div>
        </div>
        {/* Droite */}
        <form
          id='contact-form'
          onSubmit={handleSubmit}
          className='w-11/12 md:w-1/2 flex flex-col justify-center md:justify-start bg-bg border border-border px-6 py-4 rounded-2xl items-start'>
          <label htmlFor='name' className='text-left text-sm'>
            Votre Nom
          </label>
          <input
            id='name'
            name='name'
            type='text'
            disabled={isLoading}
            required
            placeholder='John Doe'
            onChange={e => setName(e.target.value)}
            value={name}
            className='bg-surface border border-border w-full h-12 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary'
          />
          <label htmlFor='email' className='text-left text-sm'>
            Votre email
          </label>
          <input
            id='email'
            name='email'
            type='email'
            disabled={isLoading}
            required
            placeholder='email@exemple.com'
            onChange={e => setEmail(e.target.value)}
            value={email}
            className='bg-surface border border-border w-full h-12 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary'
          />
          <label htmlFor='message' className='text-left text-sm'>
            Votre message
          </label>
          <textarea
            id='message'
            name='message'
            disabled={isLoading}
            required
            rows={5}
            placeholder='Discutons de votre projet...'
            onChange={e => setMessage(e.target.value)}
            value={message}
            className='bg-surface border border-border w-full rounded-lg px-4 py-2 mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary'
          />
          <button
            id='submit-button'
            type='submit'
            disabled={isLoading}
            aria-label='Envoyer un message'
            className={[
              'w-full h-14 my-4 bg-primary text-text font-title hover:text-bg text-2xl px-6 py-3 rounded-full dark:text-bg',
              isLoading ?
                'bg-muted/60 hover:cursor-not-allowed'
              : 'hover:cursor-pointer hover:bg-text hover:shadow-[0_0_14px] hover:shadow-text hover:scale-105 active:scale-95 hover:duration-250 ease-in-out',
            ].join(' ')}>
            <Send className='inline mr-2' />{' '}
            {isLoading ? 'Envoi en cours...' : 'Envoyez votre message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
