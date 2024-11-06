import Navbar from "../Elements/Navbar.jsx";
import Footer from "../Elements/Footer.jsx";
import OrganisationCard from "../Elements/OrganisationCard.jsx";
import ProfileView from "../Elements/ProfileView.jsx";

function Profile() {
    return (
        <>
            <Navbar/>
            <div className="flex bg-white items-center justify-center min-h-screen ">
                <div className="w-2/3 h-max bg-neutral-light rounded-lg shadow-2xl flex" id="tutaj">
                    <div className="w-1/3 bg-primary p-4 flex flex-col items-center rounded-tl-xl rounded-bl-xl text-white">
                       <ProfileView me={true}/>
                    </div>
                    <div className="w-2/3 p-4 rounded-lg">
                        <h1 className="text-center text-primary text-4xl font-bold">Organizacje</h1>
                        <div className="grid grid-cols-2 mt-4">
                            <OrganisationCard title="Organizacja X" img="https://www.traveldailynews.com/wp-content/uploads/2023/01/79521.jpg" status="Członek"/>
                            <OrganisationCard title="Organizacja X" img="https://www.traveldailynews.com/wp-content/uploads/2023/01/79521.jpg" status="Członek"/>
                            <OrganisationCard title="Organizacja X" img="https://www.traveldailynews.com/wp-content/uploads/2023/01/79521.jpg" status="Członek"/>
                            <OrganisationCard title="Organizacja X" img="https://www.traveldailynews.com/wp-content/uploads/2023/01/79521.jpg" status="Członek"/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Profile;
