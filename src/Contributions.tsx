import { isMobile } from 'react-device-detect'
import './App.css'

export default function Contributions() {
  if (isMobile) {
    return (
      <div>

        <br></br>
        <br></br>

        <div>
          <b className="text-[20px] ml-[1%]">LLVM</b>
        </div>

          <ul className="list-disc ml-[8%]">

            <li>
              <a className="underline text-[10px]" href="https://github.com/llvm/llvm-project/pull/156962">[clang] Fix typo in comment</a>
            </li>

            <li>
              <a className="underline text-[10px]" href="https://github.com/llvm/llvm-project/pull/157782">[InstCombine] Fold min(X+1, Y) - min(X, Y) --&gt; zext X &lt; Y</a>
            </li>

            <ul className="list-disc ml-6">
              <li>
                <a className="underline text-[10px]" href="https://github.com/llvm/llvm-project/issues/157524">Resolved issue 157524</a>
              </li>
            </ul>

            <li>
              <a className="underline text-[10px]" href="https://github.com/llvm/llvm-project/pull/160783">In progress: [MLIR][CF] Avoid collapsing blocks which participate in cycles</a>
            </li>

            <ul className="list-disc ml-6">
              <li>
                <a className="underline text-[10px]" href="https://github.com/llvm/llvm-project/issues/159743">Resolved issue 159473</a>
              </li>
            </ul>

          </ul>

        <br></br>

        <div>
          <b className="text-[20px] ml-[1%]">GCC</b>
        </div>

          <ul className="list-disc list-outside ml-[8%]">
  
            <li>
              <a className="underline text-[10px]" href="https://gcc.gnu.org/git/?p=gcc.git;a=commitdiff;h=356250630abd876ae592bc3d2b4cc171bc834b79">middle end: Fix typo in gimple.h</a>
            </li>
  
            <li>
              <a className="underline text-[10px]" href="https://gcc.gnu.org/git/?p=gcc.git;a=commitdiff;h=236633fd74706f11044ea51306775a43c294da57">c++: Fix typo in comment</a>
            </li>
  
            <li>
              <a className="underline text-[10px]" href="https://forge.sourceware.org/gcc/gcc-mirror/commit/54bf72ebfe983c611673bcc4368b5834773fcc7d">c++: Fix ICE on mangling invalid compound requirement</a>
            </li>

            <ul className="list-disc ml-6">
              <li>
                <a className="underline text-[10px]" href="https://gcc.gnu.org/bugzilla/show_bug.cgi?id=120618">Resolved bug 120618</a>
              </li>
            </ul>

            <li>
              <a className="underline text-[10px]" href="https://forge.sourceware.org/gcc/gcc-mirror/commit/52d702d72afa0ade8edfff144b45539495e4d408">libstdc++: fix element construction in std::deque::emplace</a>
            </li>

            <ul className="list-disc ml-6">
              <li>
                <a className="underline text-[10px]" href="https://gcc.gnu.org/bugzilla/show_bug.cgi?id=118087">Resolved bug 118087</a>
              </li>
            </ul>

            <li>
              <a className="underline text-[10px]" href="https://gcc.gnu.org/bugzilla/show_bug.cgi?id=119745">In progress: [C++23] Implement P2438R2, basic_string::substr() &&</a>
            </li>

          </ul>

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

      <div>
        <b className="text-[20px] ml-[3.365%]">LLVM</b>
      </div>

      <ul className="list-disc ml-[4.8%]">

        <li>
          <a className="underline" href="https://github.com/llvm/llvm-project/pull/156962">[clang] Fix typo in comment</a>
        </li>

        <li>
          <a className="underline" href="https://github.com/llvm/llvm-project/pull/157782">[InstCombine] Fold min(X+1, Y) - min(X, Y) --&gt; zext X &lt; Y</a>
        </li>

        <ul className="list-disc ml-6">
          <li>
            <a className="underline" href="https://github.com/llvm/llvm-project/issues/157524">Resolved issue 157524</a>
          </li>
        </ul>

        <li>
          <a className="underline" href="https://github.com/llvm/llvm-project/pull/160783">In progress: [MLIR][CF] Avoid collapsing blocks which participate in cycles</a>
        </li>

        <ul className="list-disc ml-6">
          <li>
            <a className="underline" href="https://github.com/llvm/llvm-project/issues/159743">Resolved issue 159473</a>
          </li>
        </ul>

      </ul>

      <br></br>

      <div>
        <b className="text-[20px] ml-[3.365%]">GCC</b>
      </div>

      <ul className="list-disc ml-[4.8%]">

        <li>
          <a className="underline" href="https://gcc.gnu.org/git/?p=gcc.git;a=commitdiff;h=356250630abd876ae592bc3d2b4cc171bc834b79">middle end: Fix typo in gimple.h</a>
        </li>

        <li className="">
          <a className="underline" href="https://gcc.gnu.org/git/?p=gcc.git;a=commitdiff;h=236633fd74706f11044ea51306775a43c294da57">c++: Fix typo in comment</a>
        </li>

        <li className="">
          <a className="underline" href="https://forge.sourceware.org/gcc/gcc-mirror/commit/54bf72ebfe983c611673bcc4368b5834773fcc7d">c++: Fix ICE on mangling invalid compound requirement</a>
        </li>

        <ul className="list-disc ml-6">
          <li>
            <a className="underline" href="https://gcc.gnu.org/bugzilla/show_bug.cgi?id=120618">Resolved bug 120618</a>
          </li>
        </ul>

        <li>
          <a className="underline" href="https://forge.sourceware.org/gcc/gcc-mirror/commit/52d702d72afa0ade8edfff144b45539495e4d408">libstdc++: fix element construction in std::deque::emplace</a>
        </li>

        <ul className="list-disc ml-6">
          <li>
            <a className="underline" href="https://gcc.gnu.org/bugzilla/show_bug.cgi?id=118087">Resolved bug 118087</a>
          </li>
        </ul>

        <li>
          <a className="underline" href="https://gcc.gnu.org/bugzilla/show_bug.cgi?id=119745">In progress: [C++23] Implement P2438R2, basic_string::substr() &&</a>
        </li>

      </ul>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

    </div>
  )
}
