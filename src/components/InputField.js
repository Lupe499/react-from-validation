import React from 'react'
export default function InputField({name, type, placeholder, label, register, required}) {
    return (
        <div className="inputGroup">
            <label htmlFor={name}>{label}</label>
            {type === "textarea" && <textarea
            id={name} 
            placeholder={placeholder}
            {...register(name)} 
            ></textarea>}


            {type !== "textarea" && <input 
            type={type} 
            id={name} 
            placeholder={placeholder}
            {...register(name)} 
            />}

        </div>
    )
}
