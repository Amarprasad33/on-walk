export default function GroupHeader({
    groupTitle,
    groupInfoHeader,
    sideNavigation,
    actionBtn,
    actionBtnText
}) {
    return (
        <div id="container" className="flex flex-col gap-2">
            <div id="header" className="flex flex-row items-center">
                <div className="text-2xl font-medium mb-6">{groupInfoHeader}</div>
                {/* {
                    sideNavigation && <div className="flex flex-row gap-2 ml-auto mr-28">
                        <button className="bg-[#F5F5F5] w-8 h-8 rounded-full flex items-center justify-center">cvl</button>
                        <button className="bg-[#F5F5F5] w-8 h-8 rounded-full flex items-center justify-center">cvr</button>
                    </div>
                }
                {
                    actionBtn && <div className="flex flex-row gap-2 ml-auto mr-28">
                        <button>{actionBtnText}</button>
                    </div>
                } */}
            </div>
        </div>
    )
}