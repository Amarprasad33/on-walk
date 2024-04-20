export default function GroupHeader({
    groupTitle,
    groupInfoHeader,
    sideNavigation,
    actionBtn,
    actionBtnText
}) {
  return (
    <div id="container" className="pl-9 flex flex-col gap-2">
        <div id="title" className="flex gap-2 items-center">
            <div className="w-4 h-8 rounded bg-blue-700"></div>
            <div className="text-base font-medium text-blue-700">
                {groupTitle}
            </div>
        </div>
        <div id="header" className="flex flex-row items-center">
            <div className="text-2xl font-medium">{groupInfoHeader}</div>
            {
                sideNavigation && <div className="flex flex-row gap-2 ml-auto mr-28">
                    <button className="bg-[#F5F5F5] w-8 h-8 rounded-full flex items-center justify-center">cvl</button>
                    <button className="bg-[#F5F5F5] w-8 h-8 rounded-full flex items-center justify-center">cvr</button>
                </div>
            }
            {
                actionBtn && <div className="flex flex-row gap-2 ml-auto mr-28">
                    <button>{actionBtnText}</button>
                </div>
            }
        </div>
    </div>
  )
}