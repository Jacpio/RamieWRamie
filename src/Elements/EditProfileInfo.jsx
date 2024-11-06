import {useState} from "react";

function EditProfileInfo() {
    const [fileName, setFileName] = useState("");

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) setFileName(file.name);
        else setFileName("");
    };
    return (
        <form className="mt-4 0 space-y-4 flex flex-col p-4">
            <div className="flex justify-between">
                <div className="flex-col p-4">
                    <label
                        className="flex bg-white flex-col items-center w-full p-4 border-2 border-dashed border-blue-500 rounded-lg cursor-pointer hover:bg-blue-50">
                        <span className="mb-2 text-sm text-gray-600">Kliknij, aby wybrać zdjęcie profilowe</span>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="hidden"
                        />
                        <button
                            className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
                            type="button"
                        >
                            Wybierz plik
                        </button>
                    </label>
                    {fileName && (
                        <span className="mt-2 text-sm text-gray-600">
          Wybrano plik: <strong>{fileName}</strong>
        </span>
                    )}
                </div>
                <div className="w-2/4">
                    <label className="block text-sm font-medium text-primary mb-2">Imię</label>
                    <input type="text" value="Jan" disabled
                           className="bg-white p-2 mt-1 block w-full rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"/>
                    <label className="block text-sm font-medium text-primary mb-2">Nazwisko</label>
                    <input type="text" value="Kowalski" disabled
                           className="bg-white p-2 mt-1 block w-full rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"/>
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-primary mb-2">Opis</label>
                <textarea
                    className="p-2 border-primary border-solid border-2mt-1 block w-full rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                    rows={4} placeholder="Wprowadź opis..."></textarea>
            </div>
            <div>
            <label className="block text-sm font-medium text-primary mb-2">Kontakt: (opcjonalnie)</label>
                <input type="Email"
                       className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                       placeholder="Email"/>
                <input type="tel" placeholder="Telefon"
                       className="mt-4 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"/>
            </div>
            <div className="flex justify-center">
                <button type="submit"
                        className="flex items-center justify-center rounded-md border-primary border-2 px-5 py-2.5 text-center text-sm font-medium text-primary hover:bg-primary-dark hover:border-primary-dark hover:text-white transition focus:outline-none focus:ring-4 focus:ring-primay">Zapisz
                </button>
            </div>
        </form>
    );
}

export default EditProfileInfo;
