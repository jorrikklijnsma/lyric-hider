import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Disclosure, DisclosurePanel, DisclosureButton } from '@headlessui/react';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Lyric Tool', href: '/tool' },
  { name: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [currentPageName, setCurrentPageName] = React.useState(window.location.pathname);
  
  const isCurrentPage = (href) => {
    return currentPageName === href ? 'bg-violet-800 text-white' : 'text-gray-800 hover:bg-violet-700 hover:text-white';
  }

  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="hidden md:block">
                  <div className="flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setCurrentPageName(item.href)}
                        className={`${isCurrentPage(item.href)} px-3 py-2 rounded-md text-sm font-medium cursor-pointer`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <DisclosureButton className="bg-violet-800 inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-violet-800 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-800 hover:bg-violet-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}