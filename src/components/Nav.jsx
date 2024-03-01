'use client'
import { HomeIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Nav() {

    const router = useRouter()

    // need to write function to switch the current booleans
  
    const navigation = [
      {name: 'Dashboard', href: '/', icon: HomeIcon, current:true},
      {name: 'Sentence Reverse', href: '/sentence-reverse', icon: HomeIcon, current:false}
    ]
    
    function classNames(...classes) {
      return classes.filter(Boolean).join(' ')
    }

    return (
      <nav>
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 pl-6 pr-8 py-8 min-h-screen">
              <div className="flex flex-1 flex-col">
                  <ul role="list" className="-mx-2 space-y-1">
                      {navigation.map((item) => (
                          <li key={item.name}>
                              <Link 
                                  href={item.href}
                                  className={classNames(
                                    item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}
                              >
                                <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                {item.name}
                              </Link>
                          </li>
                      ))}
                  </ul>
              </div>
          </div>
      </nav>
    )
}