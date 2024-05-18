import React from 'react'
import Navbar from './Navbar'

const About = () => {
    return (
        <>
            <Navbar />
            <div className="about p-9">
                <h1 className='font-bold text-center text-2xl font-mono'>About Us</h1>
                <hr className='md:w-1/4 w-full md:mx-auto'/>
                <div className="content md:w-1/2 w-full md:mx-auto my-5">
                    Welcome to iTodo!
                    <br /><br />
                    We are a team of passionate individuals dedicated to helping you manage your tasks and achieve your goals. Our mission is to provide a simple, intuitive, and powerful Todo manager that fits seamlessly into your daily life.
                    <br /><br />
                    iTodo was born out of a desire to create a better way to manage tasks. We believe that everyone should have access to a tool that helps them stay organized, focused, and productive.
                    <br /><br />
                    At iTodo, we believe that simplicity is key. That's why our platform is easy to use, even for those who are new to Todo managers. We've stripped away the clutter and focused on what really matters: helping you get things done.
                    <br /><br />
                    We're proud of what we've built, but we're not done yet. We're constantly working to improve our platform and add new features that will help our users even more. We're committed to listening to our users and incorporating their feedback into our product development process.
                    <br /><br />
                    Thank you for choosing iTodo. We're excited to help you manage your tasks and achieve your goals.
                    <br /><br />
                    Sincerely, The iTodo Team
                    <br /><br />
                    P.S. If you have any questions or feedback, please don't hesitate to contact us. We'd love to hear from you!
                </div>
            </div>
        </>
    )
}

export default About