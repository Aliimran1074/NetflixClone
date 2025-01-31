"use client";   //this line is neccessary to make page client side
import { useState } from 'react'
import style from '../contact/contact.module.css'
import { Mulish } from 'next/font/google'

const mulish = Mulish({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap',
})
export default function ContactForm() {

    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        message: ""
    })
    const [status,setStatus]=useState(null)
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUser((previousUser) => ({ ...previousUser, [name]: value }))
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const response = await fetch('/api/contact',{
                method:'POST',
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({
                    username:user.username,
                    email:user.email,
                    phone:user.phone,
                    message:user.message
                    })
                })
                if(response.status===200){
                    setUser({
                        username:'',
                        email:'',
                        phone:'',
                        message:''
                    })
                    setStatus('success')
                }else{
                        setStatus('error')
                    }
            }

        catch (error) {
            console.log(error)
        }
        
        }
    

    return (
        <>
            <form className={style.contact_form} onSubmit={handleSubmit}>
                <div className={style.input_field}>
                    <label htmlFor="username" className={style.label}>
                        Enter Your Name
                        <input type="text" name="username" id="username" placeholder='Enter your name Here' className={mulish.className}
                            value={user.username}
                            onChange={handleChange}
                            autoComplete='off'
                            required 
                        />
                    </label>
                </div>
                <div className={style.input_field} >
                    <label htmlFor="email" className={style.label}>
                        Enter Your Email
                        <input type="text" name="email" id="email" placeholder='Enter your Email Here' className={mulish.className}
                            value={user.email}
                            onChange={handleChange}
                            autoComplete='off'
                            required
                        />
                    </label>
                </div>

                <div className={style.input_field}>
                    <label htmlFor="phone" className={style.label}>
                        Enter Your Phone
                        <input type="number" name="phone" id="phone" placeholder='Enter your Phone Here' className={mulish.className}
                            value={user.phone}
                            onChange={handleChange}
                            autoComplete='off'
                            required
                       />
                    </label>
                </div>

                <div className={style.input_field}>
                    <label htmlFor="message" className={style.label}>
                        Enter Your Message
                        <textarea type="text" name="message" id="message" rows={6} placeholder='Enter your Message Here' className={mulish.className}
                            value={user.message}
                            onChange={handleChange}
                            autoComplete='off'
                            required
                        />
                    </label>
                </div>
                
                <div>
                    {status==='success' && <p className={style.success_msg}>Thank you for your message!</p>}
                    {status==='error' && <p className={style.error_msg}>There was an error submitting your message</p>}
                    <button type="submit" className={mulish.className}>Send Message </button>
                </div>

            </form>
        </> 
    )
}
