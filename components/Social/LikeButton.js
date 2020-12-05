import { FiStar } from "react-icons/fi"
import Tippy from '@tippyjs/react'

const iconColor = "text-coolgray-700"
const iconSize = 20
const iconPadding = "pr-8"

export default function LikeButton({ id }) {
  const incrementLikes = (id) => {

  }
  return <>
    <span className={iconPadding}>
      <Tippy content="Still working on that...">
        <button onClick={() => incrementLikes(id)} className="focus:outline-none">
          <FiStar size={iconSize} className={iconColor} />
        </button>
      </Tippy>
    </span>
  </>
}