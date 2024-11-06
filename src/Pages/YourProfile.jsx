import Navbar from "../Elements/Navbar.jsx";
import Footer from "../Elements/Footer.jsx";
import ProfileView from "../Elements/ProfileView.jsx";
import EditProfileInfo from "../Elements/EditProfileInfo.jsx";

function YourProfile() {
    return (
        <>
            <Navbar/>
                <div className="flex items-center justify-center min-h-screen mt-4">
                    <div className="w-2/3 h-max bg-neutral-light rounded-lg shadow-2xl flex" id="tutaj">
                        <div className="pb-10 w-1/3 bg-primary p-4 flex flex-col items-center rounded-tl-xl rounded-bl-xl text-white">
                            <h1 className="text-white text-3xl mb-4">Profil</h1>
                            <ProfileView me={false}/>
                        </div>
                        <div className="bg-white/70 w-2/3 p-4 rounded-r-lg">
                            <h1 className="text-center text-primary  text-4xl font-bold">Edytuj swoje informacje</h1>
                            <EditProfileInfo/>
                        </div>
                    </div>
                </div>
            <Footer/>
        </>
    )
}

export default YourProfile;
