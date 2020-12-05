import NavLinks from './NavLinks';
import Social from './Social'
import SocialIcons from './SocialIcons'

export default function Sidebar() {
    return (
        <div className="hidden overflow-x-hidden fixed flex-1 md:flex flex-col md:w-64 overflow-y-auto h-screen bg-white">
            <Social />
            <NavLinks />
            <div className="mx-auto mb-10 mt-5">
                <SocialIcons />
            </div>
        </div >
    )
}