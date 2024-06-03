import React, { useState } from 'react';

const AddNew = () => {
    const [inputVal, setInputVal] = useState('');
    const [isFormVisible, setIsFormVisible] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("inputVal: ", inputVal);
    };

    return (
        <div className='mt-3'>
            <button onClick={() => setIsFormVisible(true)} className='mb-3'>
                + Add New
            </button>

            {isFormVisible && (
                <form onSubmit={submitHandler} className='mt-3'>
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                            type="text"
                            name="username"
                            id="username"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Add new list"
                            value={inputVal}
                            onChange={(e) => setInputVal(e.target.value)}
                        />
                    </div>

                    <div className='mt-3 flex items-center justify-end gap-x-6'>
                        <button
                            type="button"
                            className="text-sm font-semibold leading-6 text-gray-900"
                            onClick={() => setIsFormVisible(false)}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default AddNew;
