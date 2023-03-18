import { useState } from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'
import Link from 'next/link'
import { companyData } from '~/server/data'

export function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

type ComboxProps = {
    queryType: "balance_sheet_and_income_statement" | "fin_statement"
}

export default function Combox(props: ComboxProps) {
    const [query, setQuery] = useState('')
    const [selectedCompany, setSelectedCompany] = useState(companyData[0])

    const color = props.queryType === "fin_statement" ? "blue" : "indigo"

    // const filteredCompanies =
    //     query === ''
    //         ? companyData
    //         : companies.filter((c) => {
    //             return c.name.toLowerCase().includes(query.toLowerCase())
    //         })

    const filteredCompanies = companyData.filter((c) => {
        if (query === '') {
            return companyData
        }
        return c.companyName.toLowerCase().includes(query.toLowerCase())
    })

    return (
        <>
            <Combobox as="div" value={selectedCompany} onChange={setSelectedCompany} className="mb-4 w-full md:w-96">
                <Combobox.Label className={`block text-md font-medium leading-6 text-black-900`}>Select a Company</Combobox.Label>
                <div className="relative mt-2">
                    <Combobox.Input
                        className={`w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-${color}-900 font-bold shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-${color}-600 sm:text-sm sm:leading-6 opacity-75`}
                        onChange={(event) => setQuery(event.target.value)}
                        displayValue={(company) => company?.companyName}
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Combobox.Button>

                    {companyData.length > 0 && (
                        <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm opacity-95 font-bold">
                            {filteredCompanies.map((company, index) => (
                                <Combobox.Option
                                    key={index}
                                    value={company}
                                    className={({ active }) =>
                                        classNames(
                                            'relative cursor-default select-none py-2 pl-3 pr-9',
                                            active ? `bg-${color}-600 text-white` : 'text-gray-900'
                                        )
                                    }
                                >
                                    {({ active, selected }) => (
                                        <>
                                            <span className={classNames('block truncate', selected && 'font-semibold')}>{company.companyName}</span>

                                            {selected && (
                                                <span
                                                    className={classNames(
                                                        'absolute inset-y-0 right-0 flex items-center pr-4',
                                                        active ? 'text-white' : 'text-${color}-600'
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
                className={`rounded-md bg-${color}-600 py-2.5 px-3.5 text-center font-semibold text-white shadow-sm hover:bg-${color}-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${color}-600`} href={`/conversation/?company=${selectedCompany?.companyName}`}         >
                Summarize Latest Report
            </Link>

        </>
    )
}
