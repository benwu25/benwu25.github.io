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
    
    
      <div className="flex">
        <div className="basis-1/15"></div>
        <b className="text-[40px] basis-12/15">Ben Wu</b>
      </div>

      <br></br>
      <br></br>

      <div className="flex">
        <div className="basis-3/40"></div>
        <b className="text-[20px]">About:</b>
      </div>


      <div className="flex">
        <div className="basis-3/40"></div>
        <div className="text-3x1">Hi, I'm Ben. I am an undergraduate student at the University of Washington - Seattle studying computer engineering in the Paul G. Allen School.</div>
      </div>

      <div className="flex">
        <div className="basis-3/40"></div>
        <div className="text-3x1">Outside of school, I enjoy building, reading, using, and contributing to open source software. LLVM and GCC are the main projects I spend time working with.</div>
      </div>

      <br></br>
      <br></br>

      <div className="flex">
        <div className="basis-3/40"></div>
        <Link className="underline" to="/contributions">Open source contributions</Link>
      </div>

    </div>
  )
}
