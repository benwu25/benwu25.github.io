import './App.css'

export default function Contributions() {

  return (
    <div>
    
      <br></br>
      <br></br>

      <div className="flex">
        <div className="basis-1/30"></div>
        <b className="text-[20px]">LLVM</b>
      </div>

      <ul className="list-disc list-inside ml-30">

        <li>
          <a href="https://github.com/llvm/llvm-project/pull/156962">[clang] Fix typo in comment</a>
        </li>

        <li>
          <a href="https://github.com/llvm/llvm-project/pull/157782">[InstCombine] Fold min(X+1, Y) - min(X, Y) --&gt; zext X &lt; Y</a>
          <ul className="list-disc list-inside ml-8">
            <li>
              <a href="https://github.com/llvm/llvm-project/issues/157524">Resolved issue 157524</a>
            </li>
          </ul>
        </li>

      </ul>

      <br></br>
      <div className="flex">
        <div className="basis-1/30"></div>
        <b className="text-[20px]">GCC</b>
      </div>

      <ul className="list-disc list-inside ml-30">

        <li>
          <a href="https://gcc.gnu.org/git/?p=gcc.git;a=commitdiff;h=356250630abd876ae592bc3d2b4cc171bc834b79">middle end: Fix typo in gimple.h</a>
        </li>

        <li>
          <a href="https://gcc.gnu.org/git/?p=gcc.git;a=commitdiff;h=236633fd74706f11044ea51306775a43c294da57">c++: Fix typo in comment</a>
        </li>

        <li>
          <a href="https://gcc.gnu.org/git/?p=gcc.git;a=commitdiff;h=54bf72ebfe983c611673bcc4368b5834773fcc7d">c++: Fix ICE on mangling invalid compound requirement</a>
          <ul className="list-disc list-inside ml-8">
            <li>
              <a href="https://gcc.gnu.org/bugzilla/show_bug.cgi?id=120618">Resolved bug 120618</a>
            </li>
          </ul>
        </li>

      </ul>

    </div>
  )
}
