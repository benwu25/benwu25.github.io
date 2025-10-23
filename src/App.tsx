import { Link } from 'react-router'
import { isMobile } from 'react-device-detect'
import bin from '/src/assets/DSC01012.jpeg'
import './App.css'

export default function App() {
  if (isMobile) {
    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>


        <div className="ml-[1%] flex">

          <div>

            <div>
              <b className="text-[30px]">Ben Wu</b>
            </div>

            <div>
              <a className="underline ml-[0.2%] text-[12px]" href="mailto:bwu25@cs.washington.edu">Email</a>
            </div>

            <div>
              <a className="underline ml-[0.2%] text-[12px]" href="https://www.linkedin.com/in/benwu25">LinkedIn</a>
            </div>

            <div>
              <a className="underline ml-[0.2%] text-[12px]" href="https://github.com/benwu25">GitHub</a>
            </div>

            <div>
              <a className="underline ml-[0.2%] text-[12px]" href="https://leetcode.com/u/bwu25/">LeetCode</a>
            </div>

            <br></br>
            <br></br>
            <br></br>

            <div>
              <b className="text-[15px] ml-[0.85%]">About:</b>
            </div>

            <div className="max-w-180 text-[10px] ml-[0.85%]">
              Hi, I'm Ben. I am an undergraduate student at the University of Washington Seattle campus studying computer engineering in the Paul G. Allen School.
            </div>

            <br></br>

            <div className="max-w-180 text-[10px] ml-[0.85%]">
              Outside of school, I enjoy building, reading, using, and contributing to open source software. I am particularly interested in compiler toolchains, and I am spending a lot of my time learning and hacking inside of the LLVM project and the GNU Compiler Collection.
            </div>

            <br></br>
            <br></br>

            <div>
              <Link className="underline ml-[0.85%] text-[12px]" to="/contributions">Open source contributions</Link>
            </div>

          </div>

          <div>
            <a>
              <img src={bin} className="h-50 -ml-[200%]"></img>
            </a>
          </div>

        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

      </div>
    )

  }

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>


      <div className="ml-[6.65%] flex">

        <div>

          <div>
            <b className="text-[40px]">Ben Wu</b>
          </div>

          <div>
            <a className="underline ml-[0.2%]" href="mailto:bwu25@cs.washington.edu">Email</a>
          </div>

          <div>
            <a className="underline ml-[0.2%]" href="https://www.linkedin.com/in/benwu25">LinkedIn</a>
          </div>

          <div>
            <a className="underline ml-[0.2%]" href="https://github.com/benwu25">GitHub</a>
          </div>

          <div>
            <a className="underline ml-[0.2%]" href="https://leetcode.com/u/bwu25/">LeetCode</a>
          </div>

          <br></br>
          <br></br>
          <br></br>

          <div>
            <b className="text-[20px] ml-[0.85%]">About:</b>
          </div>

          <div className="max-w-180 text-3x1 ml-[0.85%]">
            Hi, I'm Ben. I am an undergraduate student at the University of Washington Seattle campus studying computer engineering in the Paul G. Allen School.
          </div>

          <br></br>

          <div className="max-w-180 text-3x1 ml-[0.85%]">
            Outside of school, I enjoy building, reading, using, and contributing to open source software. I am particularly interested in compiler toolchains, and I am spending a lot of my time learning and hacking inside of the LLVM project and the GNU Compiler Collection.
          </div>

          <br></br>
          <br></br>

          <div>
            <Link className="underline ml-[0.85%]" to="/contributions">Open source contributions</Link>
          </div>

        </div>

        <div>
          <a>
            <img src={bin} className="h-130 ml-[30%]"></img>
          </a>
        </div>

      </div>


      <br></br>
      <br></br>
      <br></br>
      <br></br>

    </div>
  )
}
