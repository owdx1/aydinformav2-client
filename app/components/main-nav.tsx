"use client"
import { cn } from '@/lib/utils'
import { Category } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface MainNavProps {
  data: Category[]
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {

  const pathname = usePathname()
  
  const routes = data.map((route: any) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`
  }))


  return (
    <div className="mx-6 items-center flex space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link key={route.href} href={route.href} className={cn(
          "text-sm font-medium transition-colors hover:text-black",
          route.active ? "text-black" : "text-neutral-500" 
        )}>
          {route.label}
        </Link>
      ))}
    </div>
  )
}

export default MainNav