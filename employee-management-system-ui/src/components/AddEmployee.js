import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({
      ...employee,
      [e.target.name]: value,
    });
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    const { id, ...empClone } = employee;
    EmployeeService.saveEmployee(empClone)
      .then((response) => navigate('/employees'))
      .catch((error) => console.log(error));
  };

  const reset = (e) => {
    e.preventDefault();
    setEmployee({
      id: '',
      firstName: '',
      lastName: '',
      email: '',
    });
  };
  return (
    <div className='flex max-w-2xl shadow border-b mx-auto'>
      <div className='px-8 py-8'>
        <div className='font-thin text-2xl tracking-wider'>
          <h1>Add New Employee</h1>
        </div>
        <div className='items-center justify-center h-14 w-full my-4'>
          <label
            htmlFor='firstName'
            className='block text-gray-600 text-sm font-normal'
          >
            First Name
          </label>
          <input
            type='text'
            className='h-10 w-96 border mt-2 px-2 py-2'
            id='firstName'
            name='firstName'
            value={employee.firstName}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='items-center justify-center h-14 w-full my-4'>
          <label
            htmlFor='lastName'
            className='block text-gray-600 text-sm font-normal'
          >
            Last Name
          </label>
          <input
            type='text'
            className='h-10 w-96 border mt-2 px-2 py-2'
            id='lastName'
            name='lastName'
            value={employee.lastName}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='items-center justify-center h-14 w-full my-4'>
          <label
            htmlFor='email'
            className='block text-gray-600 text-sm font-normal'
          >
            Email
          </label>
          <input
            type='email'
            className='h-10 w-96 border mt-2 px-2 py-2'
            id='email'
            name='email'
            value={employee.email}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
          <button
            onClick={saveEmployee}
            className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6'
          >
            Save
          </button>
          <button
            onClick={reset}
            className='rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6'
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddEmployee;
