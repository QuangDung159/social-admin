export const TopBarMessageItem = ({ messageItem }: any) => {
  return (
    <a className="dropdown-item d-flex align-items-center" href="#">
      <div className="dropdown-list-image mr-3">
        <img className="rounded-circle" src={messageItem.imgUrl} alt="..." />
        <div className="status-indicator bg-success" />
      </div>
      <div className="font-weight-bold">
        <div className="text-truncate">{messageItem.content}</div>
        <div className="small text-gray-500">{messageItem.sender} · 58m</div>
      </div>
    </a>
  );
};
