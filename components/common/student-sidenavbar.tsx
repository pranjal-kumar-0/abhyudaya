"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, User, GraduationCap } from 'lucide-react'

const StudentSideNavBar = () => {
  const pathname = usePathname()

  const navItems = [
    {
      icon: Home,
      label: 'Feed',
      href: '/student/feed',
      active: pathname === '/student/feed'
    },
    {
      icon: User,
      label: 'Profile',
      href: '/student/profile',
      active: pathname === '/student/profile'
    }
  ]

  return (
    <div className="w-20 h-screen bg-white border-r border-gray-200 flex flex-col items-center py-6 fixed left-0 top-0">
      {/* Logo */}
      <div className="mb-8">
        <div className="w-12 h-12 bg-gradient-to-br from-[#3b71ca] to-[#2c56a0] rounded-xl flex items-center justify-center shadow-lg">
          <GraduationCap size={24} className="text-white" />
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 flex flex-col gap-4">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-200 group ${
                item.active
                  ? 'bg-blue-50 text-[#3b71ca]'
                  : 'text-gray-400 hover:bg-gray-50 hover:text-gray-600'
              }`}
            >
              <Icon size={22} strokeWidth={2} />
              
              {/* Active Indicator */}
              {item.active && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#3b71ca] rounded-r-full" />
              )}

              {/* Tooltip */}
              <div className="absolute left-full ml-4 px-3 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50">
                {item.label}
                <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-900" />
              </div>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

export default StudentSideNavBar