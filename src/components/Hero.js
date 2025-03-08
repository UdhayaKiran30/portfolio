import HeroImg from '../assets/hero.png'
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter} from "react-icons/ai";

export default function Hero() {
    const config = {
        subtitle: "A pre-final Computer Science student",
        social: {
            linkedin: 'https://www.linkedin.com/in/udhayakiran',
            github: 'https://github.com/UdhayaKiran30',
            twitter: ''
        }
    }

    return <section id='hero' className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center'>
        <div className='md:w-1/2 flex-col'>
            <h1 className="text-white text-6xl font-hero-font">Hi!, <br /> I'm Udhaya Kiran M V
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.linkedin} className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
                <a href={config.social.github} className='pr-5 hover:text-white'><AiOutlineGithub size={40}/></a>
                <a href={config.social.twitter} className='pr-5 hover:text-white'><AiOutlineTwitter size={40}/></a>
            </div>
        </div>
        <img className="md:w-1/3" src={HeroImg} />
    </section>
}