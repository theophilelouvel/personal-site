import { DiGithubBadge } from "react-icons/di";

export default function RepoButton() {
    return (
        <a href="https://github.com/theophilelouvel/personal-site" target="_blank" >
            <button className="btn-blue items-center flex pr-6 divide-x focus:outline-none">
                <div className="-pl-2 pr-2">
                    <DiGithubBadge size="22px" />
                </div>
                <p className="pl-2">
                    Repository
                </p>
            </button>
        </a>
    )
}