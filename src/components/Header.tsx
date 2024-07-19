import React from "react";

export default function Header() {
  return (
    <div>
      <div className="shadow-lg p-3 mb-5 bg-body rounded">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/">หลักสูตรรัฐประศาสนศาสตร์</a>
            </li>
            <li>
              <a href="/">หน้าหลัก</a>
            </li>
            <li>
              <a href="/about">เกี่ยวกับ</a>
            </li>
            <li>
              <a href="/ai">AI ตรวจวินิจฉัยโรค</a>
            </li>
            <li>
              <a href="#">การจัดลำดับในกลุ่มประเทศ AEC</a>
            </li>
            <li>
              <a href="#">การประเมินยุทธศาสตร์ชาติ</a>
            </li>
            <li>
              <a href="#">ติดต่อ</a>
            </li>
            {/* <li>
              <details>
                <summary></summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li> */}
            <li>
              <a></a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary mx-2">LogIn</a>
          <a className="btn btn-primary">SignUp</a>
        </div>
      </div>
    </div>
  );
}
