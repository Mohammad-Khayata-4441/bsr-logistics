import React from 'react'

export default function page() {
    return (
        <div>
            <section className='bg-white'>
                <div className="container max-w-screen-xl">
                    <div className='pt-24'>
                        <hr className='border-2 border-app-beige' />
                        <div className='grid grid-cols-2 mt-8 mb-32'>
                            <h2>Your</h2>
                            <p className='text-xl'>With a commitment to excellence and a focus on innovation, we take pride in being your trusted partner for all your logistics needs.</p>
                        </div>
                        <hr className='border-2 border-app-beige' />
                        <div className='grid grid-cols-2 mt-8 pb-32'>
                            <h2>Our</h2>
                            <div className='space-y-6'>

                                <div>
                                    <h5>Seamless Transportation, Efficient Supply Chain</h5>
                                    <p className='text-xl'>
                                        Timely and Secure Delivery
                                    </p>
                                </div>
                                <div>
                                    <h5>Customer Satisfaction</h5>
                                    <p className='text-xl'>
                                        Meeting Highest Industry Standards</p>
                                </div>
                                <div>
                                    <h5>Innovation and Excellence</h5>
                                    <p className='text-xl'>
                                        Trusted Logistics Partner</p>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="grid grid-cols-3">

                    <div className="text-center">
                        <h5 className='py-24'>

                            Seamless Transportation
                        </h5>

                    </div>
                    <div className="text-center">
                        <h5 className='py-24'>

                            Timely and Secure Delivery
                        </h5>

                    </div>
                    <div className="text-center">
                        <h5 className='py-24'>

                            Customer Satisfaction
                        </h5>

                    </div>

                </div>
                <div className='grid grid-cols-2'>
                    <div></div>
                    <div>
                        <h5 >Contacts</h5>
                        <p className='text-lg'>Abdullah@brslogistic.com</p>
                        <p className='text-lg'>+965 65831657</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
