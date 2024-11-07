import {Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/20/solid/index.js";
import React from "react";

export default function FaqElement ({question, answer, open}) {
    return(
        <Disclosure as="div" className="py-3 px-6" defaultOpen={open}>
            <DisclosureButton className="group flex w-full items-center justify-between">
                            <span className="text-sm/6 font-medium text-primary-dark group-data-[hover]:text-primary-dark/80">
                                {question}
                            </span>
                <ChevronDownIcon
                    className="size-5 fill-primary-dark/60 group-data-[hover]:fill-primary-dark/50 group-data-[open]:rotate-180"/>
            </DisclosureButton>
            <DisclosurePanel className="mt-2 text-sm/5 text-primary-dark">
                {answer}
            </DisclosurePanel>
        </Disclosure>
    )
}