import ResumeImg from '../assets/resume.jpg';

export default function Resume() {
    const config = {
        link: ''
    }

    return <section id='resume' className='flex flex-col md:flex-row bg-primary px-5'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end' >
            <img className="w-[300px]" src={ResumeImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-[#8a2be2] mb-5 w-[140px] font-bold'>Resume</h1>
                <p className='p-3'>You can view my resume <a className="btn" href={config.link}>Download</a></p>
            </div>
        </div>
    </section>
}