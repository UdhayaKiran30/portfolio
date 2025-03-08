
export default function Contact() {
    const config = {
        email: 'gmailaccount@gmail.com',
        phone: '+1234567890'
    }

    return <section id='contact' className='flex flex-col text-white bg-secondary px-5 py-32'>
        <div className='flex flex-col items-center'>
                <h1 className='text-4xl border-b-4 border-[#6a0dad] mb-5 w-[140px] font-bold'>Contact</h1>
                <p className='p-3'>If you want to discuss more in detail, please Contact me.</p>
                <p className='py-2'><span className='font-bold'>Email :</span>{config.email}</p>
                <p className='py-2'><span className='font-bold'>Phone :</span>{config.phone}</p>
        </div>
    </section>
}