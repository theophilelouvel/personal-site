import { DiGithubBadge } from "react-icons/di";

export default function RepoButton({ url }) {
  return (
    <a href={url} target="_blank" >
      <button className="btn bg-blue-500 hover:bg-blue-600 items-center flex pr-6 divide-x focus:outline-none">
        <div className="-ml-1 pr-2">
          <DiGithubBadge className="opacity-90" size="22px" />
        </div>
        <p className="pl-2 -mr-1 opacity-90">
          Repository
                </p>
      </button>
    </a>
  )
}