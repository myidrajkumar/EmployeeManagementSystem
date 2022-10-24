import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import Employee from './Employee';

const EmployeeList = () => {
  const navigate = useNavigate();

  const [isLoading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getAllEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchEmployees();
  }, []);

  const deleteEmployee = async (e, id) => {
    e.preventDefault();
    const response = await EmployeeService.deleteEmployee(id);
    const isDeleted = response.data.deleted;
    if (isDeleted) {
      setEmployees(employees.filter((each) => each.id !== id));
    }
    console.log(response);
  };

  return (
    <div className='container mx-auto my-8'>
      <div className='h-12'>
        <button
          className='rounded bg-slate-600 text-white px-6 py-2 font-semibold'
          onClick={() => navigate('/addEmployee')}
        >
          Add Employee
        </button>
      </div>
      <div className='flex shadow border-b'>
        <table className='min-w-full'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>
                First Name
              </th>
              <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>
                Last Name
              </th>
              <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>
                Email
              </th>
              <th className='text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>
                Actions
              </th>
            </tr>
          </thead>
          {!isLoading && (
            <tbody className='bg-white'>
              {employees.map((emp) => (
                <Employee
                  key={emp.id}
                  emp={emp}
                  deleteEmployee={deleteEmployee}
                />
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};
export default EmployeeList;
