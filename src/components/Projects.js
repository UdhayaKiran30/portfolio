import websiteImg1 from '../assets/leaf-disease-detection.jpeg';
import websiteImg2 from '../assets/ecommerce-websites.jpg';
import websiteImg3 from '../assets/portfolio.jpg';

export default function Projects() {
    const config = {
        projects: [
            {
                image: websiteImg1,
                description: 'Developed a platform to detect the leaf disease and suggest remedies utilizing deep learning algorithm(CNN)',
                link: ''
            },
            {
                image: websiteImg2,
                description: ' Responsive e-commerce website frontend using HTML5, CSS and JavaScript.',
                link: ''
            },
            {
                image: websiteImg3,
                description: 'Developed a resposive profolio website using tailwind CSS',
                link: ''
            }
        ]
    }

    return <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-secondary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className='text-4xl border-b-4 border-[#6a0dad] mb-5 w-[140px] font-bold'>Projects</h1>
                <p>These are some of my best projects. I have build these with wed technologies.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                    <div className='relative'>
                        <img className='h-[200px] w-[400px]' src={project.image} />
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View project</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}