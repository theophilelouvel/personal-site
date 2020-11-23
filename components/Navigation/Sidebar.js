import NavLinks from './NavLinks';
import Social from './Social'
import RepoButton from './RepoButton'

export default function Sidebar() {
    return (
        <div className="hidden w-screen flex-1 md:flex flex-col md:w-64 overflow-y-auto h-screen bg-white">
            <Social />
            <NavLinks />
            <div className="mx-auto my-10">
                <RepoButton />
            </div>
        </div >
    )
}