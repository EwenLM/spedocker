"use client"

import React, { use, useState } from 'react'
import Link from 'next/link'

export default function Nav() {


  return (
       <nav className='fixed w-full z-10'>
            <div className="navbar bg-base-100 shadow-sm">
              <div className="navbar-start">
                <div className="dropdown">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost lg:hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                      />{" "}
                    </svg>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                  >
                    <li>
                      <Link href={"/"}>A Propos</Link>
                    </li>
                    <li>
                      <Link href={"/"}>Services</Link>
                      <ul className="p-2">
                        <li>
                          <Link href={"/"}>Electricité</Link>
                        </li>
                        <li>
                          <Link href={"/"}>Plomberie</Link>
                        </li>
                        <li>
                          <Link href={"/"}>Chauffage</Link>
                        </li>
                        <li>
                          <Link href={"/"}>Domotique</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href={"/"}>Réalisation</Link>
                    </li>
                  </ul>
                </div>
                <a className="btn btn-ghost text-xl">SPE</a>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  <li>
                    <a>A Propos</a>
                  </li>
                  <li>
                    <details>
                      <summary>Services</summary>
                           <ul className="p-2">
                        <li>
                          <a>Electricité</a>
                        </li>
                        <li>
                          <a>Plomberie</a>
                        </li>
                        <li>
                          <a>Chauffage</a>
                        </li>
                        <li>
                          <a>Domotique</a>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <a>Réalisations</a>
                  </li>
                </ul>
              </div>
              <div className="navbar-end">
                <a className="btn">Contact</a>
              </div>
            </div>
          </nav>

  )
}
