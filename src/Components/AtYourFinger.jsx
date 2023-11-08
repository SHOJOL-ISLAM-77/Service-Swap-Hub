import { AiOutlineCheck } from "react-icons/ai";


const AtYourFinger = () => {
    return (
        <div className="mx-2 my-20 bg-[#F9FAFB]">
            <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center gap-8'>
                <div>
                    <img className="mb-6 xl:mb-0" src="https://assets.taskrabbit.com/v3/assets/homepage/tasker2-desktop.jpg" alt="" />
                </div>
                <div >
                    <h4 className="text-4xl font-bold">A go-to team at your fingertips</h4>
                    <p className="my-3 font-bold">Build your team of local, <br />background-checked Taskers to help with — and for — life. <br /> Whatever you need, they’ve got it covered.</p>
                    <div className="flex flex-col space-y-2">
                        <p className="font-bold"><AiOutlineCheck className="inline text-lg mr-2 font-bold" /> Compare Tasker reviews, ratings, and prices</p>
                        <p className="font-bold"><AiOutlineCheck className="inline text-lg mr-2 font-bold" /> Choose and connect with the best person for the job</p>
                        <p className="font-bold"><AiOutlineCheck className="inline text-lg mr-2 font-bold" /> Save your favorites to book again and again</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AtYourFinger;