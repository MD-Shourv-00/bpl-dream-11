import Shadow from "../assets/bg-shadow.png"
import bannerImg from '../assets/banner-main.png'

const Banner = () => {
    return (
        <div id="home" style={{ backgroundImage: `url(${Shadow})`}} className="bg-black bg-cover min-h-100 my-20 flex flex-col justify-center items-center gap-5 rounded-3xl text-white w-full max-w-7xl mx-auto font-sans h-136.25">

            <img src={bannerImg} className="w-62" alt="" />

            <p className="text-4xl font-sans font-bold">Assemble Your Ultimate Dream 11 Cricket Team</p>
            <p className="text-3xl text-[#B8B8B8]">Beyond Boundaries Beyond Limits</p>

            <button className="btn btn-outline btn-secondary">Claim Free Credit</button>

        </div>
    );
};

export default Banner;