import { AiOutlineCheck } from "react-icons/ai";
const EverydayLifeMade = () => {
    return (
        <div className="px-2 my-20 bg-[#F9FAFB]">
            <div className='container mx-auto flex flex-col-reverse lg:flex-row justify-between items-center'>
                <div>
                    <h4 className="text-4xl font-bold">Everyday life made easier</h4>
                    <p className="my-3 font-bold">When life gets busy, you don’t have to tackle it alone. <br /> Get time back for what you love without breaking the bank.</p>
                    <div className="flex flex-col space-y-2">
                        <p className="font-bold"><AiOutlineCheck className="inline text-lg mr-2 font-bold"/> Choose your Tasker by reviews, skills, and price</p>
                        <p className="font-bold"><AiOutlineCheck className="inline text-lg mr-2 font-bold"/> Schedule when it works for you — as early as today</p>
                        <p className="font-bold"><AiOutlineCheck className="inline text-lg mr-2 font-bold"/> Chat, pay, tip, and review all through one platform</p>
                    </div>
                </div>

                <div>
                    <img className="mb-6 xl:mb-0" src="https://assets.taskrabbit.com/v3/assets/homepage/tasker1-desktop.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default EverydayLifeMade;