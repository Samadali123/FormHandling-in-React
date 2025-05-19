import React from 'react';
import { useForm } from 'react-hook-form';

const Form2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
  // Simulating an API call
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log('Submitting the data:', data);
      resolve();
    }, 3000);
  });
};


  return (
    <div className="bg-white text-white w-screen h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">User Details</h2>

        <div className="flex flex-col">
          <label htmlFor="firstname" className="mb-1 text-sm text-gray-300">
            First Name
          </label>
          <input
            id="firstname"
            {...register('firstname', {
              required: 'First name is required',
              minLength: { value: 3, message: 'Minimum 3 characters required' },
            })}
            className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.firstname && (
            <span className="text-red-500 text-sm">{errors.firstname.message}</span>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="middlename" className="mb-1 text-sm text-gray-300">
            Middle Name
          </label>
          <input
            id="middlename"
            {...register('middlename', {
              required: 'Middle name is required',
              minLength: { value: 3, message: 'Minimum 3 characters required' },
              maxLength: { value: 5, message: 'Maximum 5 characters allowed' },
            })}
            className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.middlename && (
            <span className="text-red-500 text-sm">{errors.middlename.message}</span>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="lastname" className="mb-1 text-sm text-gray-300">
            Last Name
          </label>
          <input
            id="lastname"
            {...register('lastname', {
              required: 'Last name is required',
              minLength: { value: 3, message: 'Minimum 3 characters required' },
              maxLength: { value: 5, message: 'Maximum 5 characters allowed' },
            })}
            className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.lastname && (
            <span className="text-red-500 text-sm">{errors.lastname.message}</span>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 transition-colors py-2 rounded text-white font-semibold"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default Form2;
