import React from 'react'

export default function page() {
    return (
        <div>
            <div className="container max-w-screen-xl h-window flex flex-col justify-center items-center">
                <div className='text-center'>
                    <h1>Contact</h1>
                    <p>Get in touch with us today</p>
                </div>
                <form className='mt-8' >

                    <div className='flex flex-col mt-4'>
                        <label className='text-md' >Name*</label>
                        <input className='lg:min-w-[650px] app-input' placeholder='Your Name' type="text" />
                    </div>
                    <div className='flex flex-col mt-4'>
                        <label className='text-md' >Your Email</label>
                        <input className='lg:min-w-[650px] app-input' placeholder='Your Email' type="text" />
                    </div>
                    <div className='flex flex-col mt-4'>
                        <label className='text-md' >Message</label>
                        <textarea className='lg:min-w-[650px] app-input' placeholder='Message' />
                    </div>
                    <div className='flex justify-center mt-4'>

                        <button type='submit' className='app-btn btn-primary'>Submit</button>
                    </div>

                </form>


            </div>

            <div className="container max-w-screen-xl">
                <div className="grid grid-cols-12 ">
                    <div className="col-span-6">
                        <h2>Location</h2>
                        <div className='mt-8'>
                            <h5>Address</h5>
                            <p>123 Main Street, City, Country</p>
                        </div>
                        <div className='mt-8'>
                            <h5>Hours</h5>
                            <p>Mon - Fri, 9am - 5pm</p>
                        </div>
                    </div>
                    <div className="col-span-6">

                        <iframe className="grid-map__frame" width="100%" height="350px" data-v-3b334315="" src="https://maps.google.com/maps?q=697 Hilltop Street, Springfield, MA, USA&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 mt-24'>
                    <div></div>
                    <div>
                        <h5 >Contacts</h5>
                        <p className='text-lg'>Abdullah@brslogistic.com</p>
                        <p className='text-lg'>+965 65831657</p>
                    </div>
                </div>
        </div>
    )
}
