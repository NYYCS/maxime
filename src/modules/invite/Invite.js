
function Invite({}) {
  return (
    <div className="flex flex-row w-full gap-8 p-4 border rounded">
      <span className="flex flex-col">
        <div className="text-xs md:text-sm">Created on</div>
        <div className="text-xs md:text-sm">{}</div>
      </span>
      <span className="flex flex-col">
        <div className="text-xs md:text-sm">Status</div>
        <div className="text-xs md:text-sm">{}</div>
      </span>
      <span className="flex flex-col flex-1">
        <div className="text-xs md:text-sm">Claimed by</div>
        <div className="text-xs md:text-sm">{"None"}</div>
      </span>
      <span className="flex flex-row items-center gap-4">
        <span className="text-sm transition-all opacity-50 md:text-base material-icons-outlined hover:opacity-100">
          delete
        </span>
        <span className="text-sm transition-all opacity-50 md:text-base material-icons-outlined hover:opacity-100">
          share
        </span>
      </span>
    </div>
  )
}

export default Invite;
