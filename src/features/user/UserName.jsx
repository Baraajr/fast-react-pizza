import { useSelector } from 'react-redux';

function UserName() {
  const user = useSelector((state) => state.user);
  const { username } = user;

  if (!username) return null;

  return (
    <div className='hidden text-sm font-semibold md:block'>{username}</div>
  );
}

export default UserName;
