import React from 'react';
import { Description, Field, Input, Label } from '@headlessui/react'
import clsx from 'clsx'

export default function InputText({title, description, name, placeholder}) {
    return (
        <div className="w-full max-w-md px-4">
            <Field>
                <Label className="text-md font-medium text-secondary-dark">{title}</Label>
                <Description className="text-sm/6 text-primary">{description}</Description>
                <Input
                    className={clsx(
                        'mt-3 block w-full rounded-lg border-none bg-secondary/5 py-1.5 px-3 text-sm/6 text-secondary-dark',
                        'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-secondary-deeper/25'
                    )}
                    name={name}
                    placeholder={placeholder}
                />
            </Field>
        </div>
    )
}