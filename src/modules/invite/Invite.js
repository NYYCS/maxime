
function Invite({ invite }) {
  return (
    <div className="flex flex-row w-full gap-8 p-4 border rounded">
      <span className="flex flex-col">
        <div className="text-xs md:text-sm">Created on</div>
        <div className="text-xs md:text-sm">{new Date(invite.created_on).toLocaleDateString("en-gb", {day: "numeric", month: "numeric", year: "numeric"})}</div>
      </span>
      <span className="flex flex-col">
        <div className="text-xs md:text-sm">Status</div>
        <div className="text-xs md:text-sm">{invite.status}</div>
      </span>
      <span className="flex flex-col flex-1">
        <div className="text-xs md:text-sm">Hash</div>
        <div className="text-xs md:text-sm">{invite.hash}</div>
      </span>
      <span className="flex flex-row items-center gap-4">
        <span className="text-sm transition-all opacity-50 md:text-base material-icons-outlined hover:opacity-100" 
          onClick={() => {
            navigator.share({ url: `https://localhost:3000/${invite.hash}` });
          }}>
          share
        </span>
      </span>
    </div>
  )
}

export default Invite;
