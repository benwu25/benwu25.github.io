import { Link } from 'react-router';
import './App.css'

export default function App() {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div>
        <b className="ml-[6.65%] text-[40px]">Ben Wu</b>
      </div>

      <div>
        <a className="underline ml-[6.85%]" href="mailto:bwu25@cs.washington.edu">Email</a>
      </div>
      <div>
        <a className="underline ml-[6.85%]" href="https://www.linkedin.com/in/benwu25">LinkedIn</a>
      </div>
      <div>
        <a className="underline ml-[6.85%]" href="https://github.com/benwu25">GitHub</a>
      </div>

      <br></br>
      <br></br>
      <br></br>

      <div>
        <b className="text-[20px] ml-[7.5%]">About:</b>
      </div>

      <div>
        <div className="text-3x1 ml-[7.5%]">Hi, I'm Ben. I am an undergraduate student at the University of Washington - Seattle studying computer engineering in the Paul G. Allen School.</div>
      </div>

      <div>
        <div className="text-3x1 ml-[7.5%]">Outside of school, I enjoy building, reading, using, and contributing to open source software. LLVM and GCC are the main projects I spend time working with.</div>
      </div>

      <br></br>
      <br></br>

      <div>
        <Link className="underline ml-[7.5%]" to="/contributions">Open source contributions</Link>
      </div>

    </div>
  )
}
