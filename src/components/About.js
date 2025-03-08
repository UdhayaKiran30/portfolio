import AboutImg from '../assets/about.png';

export default function About() {
    const config = {
        line1: 'A pre-final Computer Science student with good knowledge in web development.',
        line2: 'Passionate about learning and exploring new technologies.',
        line3: 'Developed a real-time simulation project as internship, delivering dynamic and user-focused solutions.',
        line4: 'Programming Languages : Java 1.8, C, Python, SQL, C++. </br> Web Technologies : HTML, CSS, JavaScript. </br> IDE : NetBeans, Visual Studio Code (VS Code). </br> Frameworks and tools :  Jupyter notebook, Wordpress, Figma.'
    }

    return <section id='about' className='flex flex-col md:flex-row bg-primary px-5'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-[#8a2be2] mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='p-3'>{config.line1}</p>
                <p className='p-3'>{config.line2}</p>
                <p className='p-3'>{config.line3}</p>
                <p className='p-3'dangerouslySetInnerHTML={{ __html: config.line4 }}/>
            </div>
        </div>
    </section>
}