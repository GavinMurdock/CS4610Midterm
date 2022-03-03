export const User = ({ user }) => {
  const name = user.name;
  const email = user.email;
  const isAdmin = user.isAdmin;

  return (
    <div className="spaced">
      <div className={isAdmin ? 'admin' : ''}>{name}</div>
      <div>{email}</div>
    </div>
  );
};
