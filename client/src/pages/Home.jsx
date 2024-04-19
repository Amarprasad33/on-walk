
export default function Home() {
    return (
        <main className="flex flex-col w-full border-slate-700" style={{'border': '1px solid red'}}>
            <nav className="relative flex gap-9" style={{'border': '1px solid blue'}}>
                {/* logo */}
                <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">L</div>
                {/* icon - locaiton */}
                <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">Loc</div>
                {/* menu */}
                <div className="flex gap-3">
                    <span>Home</span>
                    <span>Sign In</span>
                    <span>About</span>
                    <span>Contact</span>
                </div>

                {/* search group */}
                <div className="flex gap-4 ml-auto mr-28">
                    <input type="text" placeholder="What are you looking for?" />
                    <div>Wic</div>
                    <div>Cart</div>
                </div>
            </nav>
        </main>
    )
}