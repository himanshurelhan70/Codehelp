import React, { useState } from 'react'

export default function Form() {

    const [formData, setFormData] = useState({
        firstName : "",
        lastName : "",
        email : "",
        country : "india",
        streetAddress : "",
        city : "",
        state : "",
        zipCode : "",
        comments: true,
        candidates: false,
        offers: false,
        pushNotifications : ""
      
    });

    function inputChangeHandler(event){
        const {name, type, value, checked} = event.target;

        setFormData(prevState => {
            return({
                ...prevState,
                [name] : type === 'checkbox' ? checked : value
            })
        });
    }

    function submitHandler(event){
        event.preventDefault();
        console.log(formData);

        let data = Object.keys(formData).map((key) => `${key} = ${formData[key]}`);
        // join() returns an array as a string
        data = data.join(" \n");
        alert(data);
    }

  return (
    <form 
    action="" 
    onSubmit={submitHandler}
    className="md:w-1/2 md:max-w-[1000px] rounded-md p-[30px] mx-auto flex flex-col gap-2 shadow-md">
        {/* first name */}
        <div>
            <label 
            htmlFor="firstName"
            className='font-medium text-sm'>First name</label>

            <input 
            type='text'
            placeholder='Himanshu' 
            id='firstName'
            name='firstName'
            onChange={inputChangeHandler}
            value={formData.firstName}
            className='w-full border border-blue-400 rounded-md p-2 mt-2'
            required
            />
        </div>

        {/* last name */}
        <div>
            <label 
            htmlFor="lastName"
            className='font-medium text-sm'>Last name</label>

            <input 
            type='text'
            placeholder='Relhan' 
            id='lastName'
            name='lastName'
            onChange={inputChangeHandler}
            value={formData.lastName}
            className='w-full border border-blue-400 rounded-md p-2 mt-2'
            required
            />
        </div>

        {/* email */}
        <div>
            <label 
            htmlFor="email"
            className='font-medium text-sm'>Email address</label>

            <input 
            type="email" 
            placeholder='himanshurelhan70@gmail.com' 
            id='email'
            name="email"
            onChange={inputChangeHandler}
            value={formData.email}
            className='w-full border border-blue-400 rounded-md p-2 mt-2'
            required
            />
        </div>

        {/* country  - dropdown*/}
        <div>
            <label 
            htmlFor="country"
            className='font-medium text-sm'>Country</label>

            <select 
            name="country" 
            id="country"
            value={formData.country}
            onChange={inputChangeHandler}
            className='w-full border border-blue-400 rounded-md p-2 mt-2'
            required
            >
                <option value="india">India</option>
                <option value="united states">United States</option>
                <option value="canada">Canada</option>
                <option value="mexico">Mexico</option>
            </select>
        </div>

        {/* street address  */}
        <div>
            <label 
            htmlFor="streetAddress"
            className='font-medium text-sm'>Street address</label>

            <textarea 
            name="streetAddress" 
            id="streetAddress"
            placeholder='1234 Main St'
            onChange={inputChangeHandler}
            value={formData.address}
            className='w-full border border-blue-400 rounded-md p-2 mt-2'
            required
            >
            </textarea>
        </div>

        {/* city */}
        <div>
            <label 
            htmlFor="city"
            className='font-medium text-sm'>City</label>

            <input 
            type="text" 
            id='city'
            name='city'
            placeholder='Rohtak'
            onChange={inputChangeHandler}
            value={formData.city}
            className='w-full border border-blue-400 rounded-md p-2 mt-2'
            required
            />
        </div>

        {/* state */}
        <div>
            <label 
            htmlFor="state"
            className='font-medium text-sm'>State / Province</label>

            <input 
            type="text" 
            id='state'
            name='state'
            placeholder='Haryana'
            onChange={inputChangeHandler}
            value={formData.state}
            className='w-full border border-blue-400 rounded-md p-2 mt-2'
            required
            />
        </div>

        {/* zip code */}
        <div>
            <label 
            htmlFor="zipCode"
            className='font-medium text-sm'>ZIP / Postal code</label>
            
            <input 
            type="number" 
            id='zipCode'
            name='zipCode'
            placeholder='124001'
            onChange={inputChangeHandler}
            value={formData.zipCode}
            className='w-full border border-blue-400 rounded-md p-2 mt-2'
            required
            />
        </div>

        {/* by mail - checkbox */}
        <div className='mb-4'>
            {/* fieldset and legend */}
            <label className='font-medium text-sm'>By Email</label>

            <div className='flex items-start gap-4 mt-2'>
                <div>
                    <input 
                    type="checkbox" 
                    id='comments'
                    name='comments'
                    onChange={inputChangeHandler}
                    checked={formData.comments}
                    className='w-4 h-4 mt-[6px]'
                    />
                </div>
                <div>
                    <label htmlFor="comments"  className='font-medium text-sm'>Comments</label>
                    <p className='text-sm text-gray-500'>Get notified when someones posts a comment on a posting.</p>
                </div>
            </div>

            <div className='flex items-start gap-4 mt-2'>
                <div>
                    <input 
                        type="checkbox" 
                        id='candidates'
                        name='candidates'
                        onChange={inputChangeHandler}
                        checked={formData.candidates}
                        className='w-4 h-4 mt-[6px]'
                        />
                </div>
                <div>
                    <label htmlFor="candidates" className='font-medium text-sm'>Candidates</label>
                    <p className='text-sm text-gray-500'>Get notified when a candidate applies for a job.</p>
                </div>
            </div>

            <div className='flex items-start gap-4 mt-2'>
                <div>
                    <input 
                    type="checkbox" 
                    id='offers'
                    name='offers'
                    onChange={inputChangeHandler}
                    checked={formData.offers}
                    className='w-4 h-4 mt-[6px]'
                    />
                </div>
                <div>
                    <label htmlFor="offers" className='font-medium text-sm'>Offers</label>
                    <p className='text-sm text-gray-500'>Get notified when a candidate accepts or rejects an offer.</p>
                </div>
            </div>
        </div>

        {/* push notification - radio */}
        <div className='mb-4'>
            <label className='font-medium text-sm'>Push Notifications</label>
            <p className='text-sm text-gray-500'>These are delivered via SMS to your mobile phone.</p>

            <div className='flex gap-4 items-center mt-2'>
                <input 
                type="radio" 
                id='radio1'
                name="pushNotifications" 
                value="everything"
                onChange={inputChangeHandler} 
                className='w-4 h-4'
                />
                <label htmlFor="radio1"  className='font-medium text-sm'>Everything</label>
            </div>

            <div className='flex gap-4 items-center mt-2'>
                <input 
                type="radio" 
                id='radio2'
                name="pushNotifications" 
                value="Same as email"
                onChange={inputChangeHandler} 
                className='w-4 h-4'
                />
                <label htmlFor="radio2"  className='font-medium text-sm'>Same as email</label>
            </div>

           <div className='flex gap-4 items-center mt-2'>
                <input 
                type="radio" 
                id='radio3'
                name="pushNotifications" 
                value="No push notifications"
                onChange={inputChangeHandler} 
                className='w-4 h-4'
                />
                <label htmlFor="radio3"  className='font-medium text-sm'>No push notifications</label>
            </div>
        </div>
        
        {/* submit button */}
        <button 
        className='bg-blue-500 font-medium text-white py-2 px-4 rounded-md hover:bg-blue-600
        transition-all duration-200' 
        type='submit'>
        Save
        </button>
    </form>
  )
}
