import { useNavigate } from 'react-router-dom';

const Employee = ({
  emp: { firstName, lastName, email, id },
  deleteEmployee,
}) => {
  const navigate = useNavigate();
  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/editEmployee/${id}`);
  };

  return (
    <tr>
      <td className='text-left px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{firstName}</div>
      </td>
      <td className='text-left px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{lastName}</div>
      </td>
      <td className='text-left px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{email}</div>
      </td>
      <td className='text-right px-6 py-4 whitespace-nowrap font-medium text-sm'>
        <a
          onClick={(e) => editEmployee(e, id)}
          className='text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer'
        >
          Edit
        </a>
        <a
          onClick={(e) => deleteEmployee(e, id)}
          className='text-indigo-600 hover:text-indigo-800 hover:cursor-pointer'
        >
          Delete
        </a>
      </td>
    </tr>
  );
};
export default Employee;
