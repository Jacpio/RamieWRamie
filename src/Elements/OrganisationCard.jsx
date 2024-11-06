import { FaArrowUpRightFromSquare } from "react-icons/fa6";

    const OrganisationCard = ({title, img, status}) => {
        return (
            <div
                className="relative m-10 flex w-4/5 w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                <a className="relative mx-3 mt-3 flex h-auto overflow-hidden rounded-xl" href="#">
                    <img className="object-cover"
                         src={img}
                         alt="product image"/>
                    <span
                        className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{status}</span>
                </a>
                <div className="mt-4 px-5 pb-5 mb-4">
                    <a href="#">
                        <h5 className="text-xl tracking-tight text-slate-900">{title}</h5>
                    </a>
                    <div className="mt-4">
                    <a href="#"
                       className="flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primay">
                        <FaArrowUpRightFromSquare className={"mr-2"} />
                        Zobacz organizację</a
                    >
                    </div>
                </div>
            </div>

        )
    }

    export default OrganisationCard;
