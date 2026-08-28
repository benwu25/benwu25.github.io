import { Link } from 'react-router'
import { isMobile } from 'react-device-detect'
import bin from '/src/assets/DSC01012.jpeg'
import dragon from '/src/assets/LLVMWyvernSmall.png'
import egg from '/src/assets/GNU_Compiler_Collection_logo.svg.png'
import clickhouse from '/src/assets/ClickHouse.jpg'
import linux from '/src/assets/tux.png'
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
              <b className="text-[30px]">Benjamin Wu</b>
            </div>

            <div>
              <a className="underline ml-[0.2%] text-[12px]" href="mailto:benjamin.wu37@gmail.com">Email</a>
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
              <img src={bin} className="h-50 -ml-[300%]"></img>
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


      {/*<div className="ml-[6.65%] flex">*/}
      <div className="ml-[1.6825%] flex">
        <div>

          <div>
            <b className="text-[40px]">Benjamin Wu</b>
          </div>

          <div>
            <a className="underline ml-[0.2%]" href="mailto:benjamin.wu37@gmail.com">Email</a>
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

          {/*<div>
            <Link className="underline ml-[0.85%]" to="/contributions">Open source contributions</Link>
          </div>*/}

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

      {/* START INLINE */}

      <div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="ml-[1.6825%]">
          <b className="text-[40px]">Open Source Work</b>
        </div>

        <br></br>


        <div className="max-w-180 text-[13px] ml-[1.6825%]">
          LLVM is a set of compiler and toolchain technologies that can be used to develop a frontend for any programming language and a backend for any instruction set architecture. It is written primarily in C++ and is maintained by an active community of developers across a wide variety of open source organizations and companies, such as Google, Red Hat, Igalia, Apple, AMD, NVIDIA, and many more.
        </div>

        <br></br>
        <br></br>

        {/* START LLVM */}

        <a href="https://llvm.org">
          <img src={dragon} className="h-25 ml-[3.365%]"></img>
        </a>

        <div>
          <a className="font-bold text-[20px] ml-[3.365%]" href="https://llvm.org/">LLVM</a>
          <a className="ml-[0.5%]">(</a>
          <a className="underline" href="https://github.com/llvm/llvm-project">40k stars on GitHub</a>
          <a>)</a>
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
            <a className="underline" href="https://github.com/llvm/llvm-project/pull/160783">[MLIR][CF] Avoid collapsing blocks which participate in cycles</a>
          </li>

          <ul className="list-disc ml-6">
            <li>
              <a className="underline" href="https://github.com/llvm/llvm-project/issues/159743">Resolved issue 159473</a>
            </li>
          </ul>

        </ul>

        {/* END LLVM */}

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="max-w-180 text-[13px] ml-[1.6825%]">
        The GNU Compiler Collection (GCC) includes front ends for C (gcc), C++ <br></br>(g++), Objective-C, Objective-C++, Fortran, Ada, Go, D, Modula-2, COBOL, Rust (gccrs), and Algol 68 as well as libraries for thse languages (libstdc++, ...). It is written primarily in C and C++ and is a stable yet actively maintained project. It is the primary compiler toolchain used across many Linux systems and distributions.
        </div>

        <br></br>
        <br></br>

        {/* START GCC */}

        <a href="https://gcc.gnu.org">
          <img src={egg} className="h-30 ml-[3.365%]"></img>
        </a>

        <div>
          <a className="font-bold text-[20px] ml-[3.365%]" href="https://gcc.gnu.org/">GCC</a>
          <a className="ml-[0.5%]">(</a>
          <a className="underline" href="https://forge.sourceware.org/gcc/gcc-TEST">Online repo</a>
          <a>)</a>
        </div>

        <ul className="list-disc ml-[4.8%]">

          <li>
            <a className="underline" href="https://gcc.gnu.org/git/?p=gcc.git;a=commitdiff;h=356250630abd876ae592bc3d2b4cc171bc834b79">middle end: Fix typo in gimple.h</a>
          </li>

          <li className="">
            <a className="underline" href="https://gcc.gnu.org/git/?p=gcc.git;a=commitdiff;h=236633fd74706f11044ea51306775a43c294da57">c++: Fix typo in comment</a>
          </li>

          <li className="">
            <a className="underline" href="https://forge.sourceware.org/gcc/gcc-test/commit/54bf72ebfe983c611673bcc4368b5834773fcc7d">c++: Fix ICE on mangling invalid compound requirement</a>
          </li>

          <ul className="list-disc ml-6">
            <li>
              <a className="underline" href="https://gcc.gnu.org/bugzilla/show_bug.cgi?id=120618">Resolved bug 120618</a>
            </li>
          </ul>

          <li>
            <a className="underline" href="https://forge.sourceware.org/gcc/gcc-test/commit/52d702d72afa0ade8edfff144b45539495e4d408">libstdc++: fix element construction in std::deque::emplace</a>
          </li>

          <ul className="list-disc ml-6">
            <li>
              <a className="underline" href="https://gcc.gnu.org/bugzilla/show_bug.cgi?id=118087">Resolved bug 118087</a>
            </li>
          </ul>

          <li>
            <a className="underline" href="https://forge.sourceware.org/gcc/gcc-TEST/commit/0ee1ade8fafd92c95c1318f9207dbf1ce203ca61">c++: clear in_declarator_p before parsing a lambda [PR121443]</a>
          </li>

          <ul className="list-disc ml-6">
            <li>
              <a className="underline" href="https://gcc.gnu.org/bugzilla/show_bug.cgi?id=121443">Resolved bug 121443</a>
            </li>
          </ul>

        </ul>

        {/* END GCC */}

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="max-w-180 text-[13px] ml-[1.6825%]">
        The Linux kernel! Free and open source kernel used in phones, desktops, servers,<br></br>embedded devices, etc.
        </div>

        <br></br>
        <br></br>

        {/* START LINUX */}

        <a href="https://www.kernel.org/">
          <img src={linux} className="mb-[8px] ml-[3.365%]"></img>
        </a>

        <div>
          <a className="font-bold text-[20px] ml-[3.365%]" href="https://git.kernel.org/">Linux</a>
          <a className="ml-[0.5%]">(</a>
          <a className="underline" href="https://github.com/torvalds/linux">245k stars on GitHub</a>
          <a>)</a>
        </div>

        <ul className="list-disc ml-[4.8%]">

          <li>
            <a className="underline" href="https://git.kernel.org/pub/scm/linux/kernel/git/vfs/vfs.git/commit/?id=7c7fe554f40a">docs: fix grammatical error in iomap docs</a>
          </li>

        </ul>

        {/* END LINUX */}

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="max-w-180 text-[13px] ml-[1.6825%]">
        ClickHouse is a high-performance, column-oriented, distributed SQL database <br></br>management system (DBMS) for online analytical processing (OLAP). It is <br></br>written primarily in C++ and is maintained by ClickHouse, Inc. with the <br></br>database engine code hosted on GitHub.
        </div>

        <br></br>
        <br></br>


        {/* START CLICKHOUSE */}

        <a href="https://clickhouse.com">
          <img src={clickhouse} className="mb-[8px] ml-[3.365%]"></img>
        </a>

        <div>
          <a className="font-bold text-[20px] ml-[3.365%]" href="https://clickhouse.com">ClickHouse</a>
          <a className="ml-[0.5%]">(</a>
          <a className="underline" href="https://github.com/ClickHouse/ClickHouse">49.5k stars on GitHub</a>
          <a>)</a>
        </div>

        <ul className="list-disc ml-[4.8%]">

          <li>
            <a className="underline" href="https://github.com/ClickHouse/ClickHouse/pull/96262">Fix typo in developer instructions</a>
          </li>

        </ul>

        {/* END CLICKHOUSE */}


        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

      </div>

      {/* END INLINE */}



      <br></br>
      <br></br>
      <br></br>
      <br></br>

    </div>
  )
}
