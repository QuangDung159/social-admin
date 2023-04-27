export const UserItemRow = ({ userItem }: any) => {
  return (
    <tr>
      <td>
        <img
          className="rounded-circle"
          style={{ width: "2rem" }}
          src={userItem.avatar}
          alt="..."
        />
      </td>
      <td>{userItem.first_name}</td>
      <td>{userItem.last_name}</td>
      <td>{userItem.email}</td>
    </tr>
  );
};
