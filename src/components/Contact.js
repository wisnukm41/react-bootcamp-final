import React, { useRef, useState } from 'react'

export default function Contact() {
    // menggunakan  useRef
    const email = useRef();
    const message = useRef();

    // menngunakan useState
    const [msg, setmsg] = useState(false);

    // fungsi yang akan dijalankan jika tombol kirim ditekan
    const send = () => {
        if (email.current.value !== '' && message.current.value !== '') {
            email.current.value = ''
            message.current.value = ''
            setmsg(true)
        }
    }

    return (
        <div className='contact'>
            <h2>Contact</h2>
            {msg && <div>Pesan Terkirim!</div>}
            {/* uncontroller form component */}
            <div className='input'>
                <input type='text' placeholder='Email' ref={email} />
            </div>
            <div className='input'>
                <textarea placeholder='Message' ref={message} />
            </div>
            <button className='btn-contant' onClick={send}>Kirim</button>
        </div>
    )
}
