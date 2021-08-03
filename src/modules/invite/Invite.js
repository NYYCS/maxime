const Invite = () => {
  return (
    <div className="flex flex-row w-full px-2 py-4 border border-opacity-50 rounded md:px-4">
      <span className="flex flex-col px-2">
        <div className="flex text-xs text-gray-300 md:text-base font-grotesk">Created on</div>
        <div className="flex text-xs text-white md:text-base font-grotesk">28/05/2021</div>
      </span>
      <span className="flex flex-col flex-1 px-2 md:flex-initial md:w-80">
        <div className="flex text-xs text-gray-300 md:text-base font-grotesk">Status</div>
        <div className="flex text-xs text-white md:text-base font-grotesk">• Claimed</div>
      </span>
      <span className="flex flex-row items-center px-2">
        <span className="px-2 text-base transition-all opacity-50 md:text-2xl material-icons-outlined hover:opacity-100">
          delete
        </span>
        <span className="text-base transition-all opacity-50 md:text-2xl material-icons-outlined hover:opacity-100">
          share
        </span>
      </span>
    </div>
  );
}

export default Invite
