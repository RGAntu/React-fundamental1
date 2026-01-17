import React from 'react';

const Form = () => {
    const handleForm = (e)=>{
        e.preventDefault();

        const Name = e.target.name.value;
        console.log(Name)

    }
    return (
        <div className='m-10 flex flex-col gap-5 justify-center items-center'>
            <form onSubmit={handleForm}>
                <input
                 type="text"
                 name='name'
                 placeholder='Your name'
                 className='border border-blue-300 p-2 mr-2'
                 />
            <button type='submit' className='bg-blue-500 text-white p-2 mt-2'>Submit</button>
            </form>
        </div>
    );
};

export default Form;