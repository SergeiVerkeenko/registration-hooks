import { TextField, Button } from '@mui/material'
import style from './LoginPage.module.css'
import { useState } from "react"

function LoginPage() {
    const [form, setForm] = useState({ email: '', pwd: '' })
    function changeForm(event) {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    return (

        <div className={style['wrapper']}>
            <h1>LOGIN</h1>
            <div>
                <TextField onChange={changeForm} name='email' id="standard-basic" label="Email" variant="standard" />

            </div>
            <div>
                <TextField onChange={changeForm} name='pwd' type="password" id="standard-basic" label="password" variant="standard" />

            </div>
            <div>
                <Button onClick={()=>alert({form})} variant="outlined" >click</Button>

        </div>
        </div >
    )
}

export default LoginPage