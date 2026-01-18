// import React, { useRef } from 'react';
import React, { useState } from 'react';
import LiftUp from './LiftUp';

const Form = () => {
    // const handleForm = (e)=>{
    //     e.preventDefault();

    //     const Name = e.target.name.value;
    //     console.log(Name)

    // }

    // useRef 
    // const buttonRef = useRef(null)

    // const handleClick = () => {
    //     alert("I am clicked")
    // }



const [name, setName] = useState('');
const [text, setText] = useState('')

const handleOnChange = (e) => {
 e.preventDefault();
}

// console.log(name)


console.log(text)

    return (
        <div className='m-10 flex flex-col gap-5 justify-center items-center'>

            {/* form  */}
            {/* <form onSubmit={handleForm}>
                <input
                 type="text"
                 name='name'
                 placeholder='Your name'
                 className='border border-blue-300 p-2 mr-2'
                 />
            <button type='submit' className='bg-blue-500 text-white p-2 mt-2'>Submit</button>
            </form> */}


            {/* useRef  */}
            {/* <input
                 type="text"
                 ref={buttonRef}
                 placeholder='Your name'
                 className='border border-blue-300 p-2 mr-2'
                 />

            <button onClick={handleClick} className='bg-blue-500 text-white p-2 mt-2'>Click ME</button> */}

            {/* keyUp */}

            <form onSubmit={handleOnChange}>
                <input
                 type="text"
                 name='name'
                 value={name}
                 onChange={(e) => setName(e.target.value)}
                 placeholder='Your name'
                 className='border border-blue-300 p-2 mr-2'
                 />
            <button type='submit'  className='bg-blue-500 text-white p-2 mt-2'>Submit</button>
            </form>
            <p className='bg-amber-100'>{name}</p>



            <div>
                <LiftUp setText={setText} ></LiftUp>
            </div>




        </div>
    );
};

export default Form;