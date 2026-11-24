
import React, { useState, useEffect, useRef } from 'react'
import { User2Icon, LogOut } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const user = { name: "Akash Mondal" }
    const navigate = useNavigate()

    const [showDropdown, setShowDropdown] = useState(false)
    const dropdownRef = useRef(null)

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!dropdownRef.current?.contains(e.target)) {
                setShowDropdown(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    // Logout function
    const logoutUser = () => {
        navigate("/")
    }

    return (
        <div className="shadow bg-white">
            <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5 text-slate-800">

                {/* Logo */}
                <Link to="/">
                    <img
                        src="/logo.svg"
                        alt="logo"
                        className="h-11 w-auto"
                    />
                </Link>

                {/* User Section */}
                <div className="relative flex items-center gap-2 sm:gap-3" ref={dropdownRef}>

                    {/* Username - Hidden on mobile */}
                    <div className="hidden sm:flex items-center gap-2">
                        <User2Icon size={20} />
                        <p className="text-lg font-medium text-slate-700">
                         {user?.name}
                        </p>
                    </div>

                    {/* Logout Icon */}
                    <button
                        onClick={() => setShowDropdown(!showDropdown)}
                        className="flex items-center justify-center p-2 rounded-full hover:bg-orange-200 transition-all"
                        aria-label="Open logout menu"
                    >
                        <LogOut size={24} />
                    </button>

                    {/* Dropdown */}
                    {showDropdown && (
                        <div className="absolute right-0 top-12 w-48 bg-white shadow-lg border border-orange-200 rounded-lg p-3 z-50">
                            <button
                                onClick={logoutUser}
                                className="flex items-center gap-2 w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-all"
                            >
                                <LogOut size={17} />
                                Logout
                            </button>

                        </div>
                    )}

                </div>

            </nav>
        </div>
    )
}

export default Navbar
