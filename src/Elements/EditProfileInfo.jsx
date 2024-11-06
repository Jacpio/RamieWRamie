function EditProfileInfo() {
    return (
        <form className="mt-4 space-y-4 flex flex-col p-4">
            <div>
                <label className="block text-sm font-medium text-primary mb-2">Zdjęcie:</label>
                <input type="file" />
            </div>
            <div>
                <label className="block text-sm font-medium text-primary mb-2">Imię i nazwisko:</label>
                <input type="text" value="Jan Kowalski" disabled
                       className="mt-1 block w-full rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"/>
            </div>
            <div>
                <label className="block text-sm font-medium text-primary mb-2">Opis:</label>
                <textarea
                    className="border-primary border-solid border-2mt-1 block w-full rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                    rows={4} placeholder="Wprowadź opis..."></textarea>
            </div>
            <div>
                <label className="block text-sm font-medium text-primary mb-2">Kontakt: (opcjonalnie)</label>
                <input type="Email:"
                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                       placeholder="Email"/>
                <input type="tel" placeholder="Telefon:"
                       className="mt-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"/>
            </div>
            <div className="flex justify-center">
                <button type="submit"
                        className="flex items-center justify-center rounded-md border-primary border-2 px-5 py-2.5 text-center text-sm font-medium text-primary hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primay">Zapisz
                </button>
            </div>
        </form>
    );
}

export default EditProfileInfo;
