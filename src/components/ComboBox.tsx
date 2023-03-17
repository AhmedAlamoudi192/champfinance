import { useState } from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const companies = [
    { id: 1, name: 'Takween' },
    { id: 2, name: 'Elm' },
    { id: 3, name: 'Aramco' },
    { id: 4, name: 'Alrajhi' },
    { id: 5, name: 'Alrajhi' },
    // More companies...
] as const

export function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Combox() {
    const [query, setQuery] = useState('')
    const [selectedCompany, setSelectedCompany] = useState(companies[0])

    const filteredCompanies =
        query === ''
            ? companies
            : companies.filter((c) => {
                return c.name.toLowerCase().includes(query.toLowerCase())
            })

    return (
        <>
            <Combobox as="div" value={selectedCompany} onChange={setSelectedCompany} className="mb-4">
                <Combobox.Label className="block text-sm font-medium leading-6 text-gray-900">Search for a Company</Combobox.Label>
                <div className="relative mt-2">
                    <Combobox.Input
                        className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(event) => setQuery(event.target.value)}
                        displayValue={(person) => person?.name}
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Combobox.Button>

                    {filteredCompanies.length > 0 && (
                        <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {filteredCompanies.map((company) => (
                                <Combobox.Option
                                    key={company.id}
                                    value={company}
                                    className={({ active }) =>
                                        classNames(
                                            'relative cursor-default select-none py-2 pl-3 pr-9',
                                            active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                                        )
                                    }
                                >
                                    {({ active, selected }) => (
                                        <>
                                            <span className={classNames('block truncate', selected && 'font-semibold')}>{company.name}</span>

                                            {selected && (
                                                <span
                                                    className={classNames(
                                                        'absolute inset-y-0 right-0 flex items-center pr-4',
                                                        active ? 'text-white' : 'text-indigo-600'
                                                    )}
                                                >
                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                            )}
                                        </>
                                    )}
                                </Combobox.Option>
                            ))}
                        </Combobox.Options>
                    )}
                </div>
            </Combobox>

            <Link
                className="rounded-md bg-indigo-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" href={`/conversation/?company=${selectedCompany.name.toLowerCase()}`}         >
                Tell me about the company
            </Link>

        </>
    )
}
