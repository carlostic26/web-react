import React from 'react';

interface Option {
    value: string;
    label: string;
}

interface SelectListProps {
    options: Option[];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectList({ options, onChange }: SelectListProps) {
    return (
        <div className="w-[90%] ml-0">
            <label htmlFor="selectList" className="block text-sm font-medium text-gray-700">
                Seleccionar servicio:
            </label>
            <select
                id="selectList"
                name="selectList"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                onChange={onChange}
            >
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
