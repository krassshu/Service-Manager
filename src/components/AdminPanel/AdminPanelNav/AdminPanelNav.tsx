'use client'

import Link from "next/link";
import {usePathname} from "next/navigation";

export default function AdminPanelNav(){

    const currentPath = usePathname();
    const lastSegment = currentPath.split('/').pop();

    return (
        <div className="border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">

                <li className="me-2">
                    <Link href="/admin-panel/users"
                          className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg group ${
                              lastSegment === 'users'
                                  ? 'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500'
                                  : 'text-gray-600 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                          }`}
                          aria-current="page">
                        <svg className={`w-4 h-4 me-2 ${
                            lastSegment === 'users'
                                ? 'text-blue-600 dark:text-blue-500'
                                : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'
                        }`}
                             xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 21">
                            <path fillRule="evenodd"
                                  d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z"
                                  clipRule="evenodd"/>
                        </svg>
                        Users
                    </Link>
                </li>
                <li className="me-2">
                    <Link href="/admin-panel/settings"
                          className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg group ${
                              lastSegment === 'settings'
                                  ? 'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500'
                                  : 'text-gray-600 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                          }`}>
                        <svg
                            className={`w-4 h-4 me-2 ${
                                lastSegment === 'settings'
                                    ? 'text-blue-600 dark:text-blue-500'
                                    : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'
                            }`}
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 20 20">
                            <path
                                d="M5 11.424V1a1 1 0 1 0-2 0v10.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.228 3.228 0 0 0 0-6.152ZM19.25 14.5A3.243 3.243 0 0 0 17 11.424V1a1 1 0 0 0-2 0v10.424a3.227 3.227 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.243 3.243 0 0 0 2.25-3.076Zm-6-9A3.243 3.243 0 0 0 11 2.424V1a1 1 0 0 0-2 0v1.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0V8.576A3.243 3.243 0 0 0 13.25 5.5Z"/>
                        </svg>
                        Settings
                    </Link>
                </li>
                <li className="me-2">
                    <Link href="/admin-panel/protocol-schema"
                          className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg group ${
                              lastSegment === 'protocol-schema'
                                  ? 'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500'
                                  : 'text-gray-600 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                          }`}>
                        <svg
                            className={`w-4 h-4 me-2 ${
                                lastSegment === 'protocol-schema'
                                    ? 'text-blue-600 dark:text-blue-500'
                                    : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'
                            }`}
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 20 20">
                            <path
                                d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                        </svg>
                        Protocol Schema
                    </Link>
                </li>
                <li className="me-2">
                    <Link href="/admin-panel/database"
                          className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg group ${
                              lastSegment === 'database'
                                  ? 'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500'
                                  : 'text-gray-600 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                          }`}>
                        <svg
                            className={`w-4 h-4 me-2 ${
                                lastSegment === 'database'
                                    ? 'text-blue-600 dark:text-blue-500'
                                    : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'
                            }`}
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 21 22">
                            <path
                                d="M12 7.205c4.418 0 8-1.165 8-2.602C20 3.165 16.418 2 12 2S4 3.165 4 4.603c0 1.437 3.582 2.602 8 2.602ZM12 22c4.963 0 8-1.686 8-2.603v-4.404c-.052.032-.112.06-.165.09a7.75 7.75 0 0 1-.745.387c-.193.088-.394.173-.6.253-.063.024-.124.05-.189.073a18.934 18.934 0 0 1-6.3.998c-2.135.027-4.26-.31-6.3-.998-.065-.024-.126-.05-.189-.073a10.143 10.143 0 0 1-.852-.373 7.75 7.75 0 0 1-.493-.267c-.053-.03-.113-.058-.165-.09v4.404C4 20.315 7.037 22 12 22Zm7.09-13.928a9.91 9.91 0 0 1-.6.253c-.063.025-.124.05-.189.074a18.935 18.935 0 0 1-6.3.998c-2.135.027-4.26-.31-6.3-.998-.065-.024-.126-.05-.189-.074a10.163 10.163 0 0 1-.852-.372 7.816 7.816 0 0 1-.493-.268c-.055-.03-.115-.058-.167-.09V12c0 .917 3.037 2.603 8 2.603s8-1.686 8-2.603V7.596c-.052.031-.112.059-.165.09a7.816 7.816 0 0 1-.745.386Z"/>
                        </svg>
                        Menage Database
                    </Link>
                </li>
            </ul>
        </div>
    )
}