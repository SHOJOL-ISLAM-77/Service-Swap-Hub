

const GetInspired = () => {
    return (
        <div className="container my-10 mx-auto">
            <h4 className="text-4xl font-bold">Everyday life made easier</h4>
            <p className="font-bold my-4">Explore tips, home tours, and Tasker stories.</p>
            <div className="grid lg:grid-cols-4 items-center justify-between gap-1">
                <div className="col-span-1 lg:col-span-3 ">
                    <img src="https://assets.taskrabbit.com/v3/assets/homepage/tasker-stories@1094w.jpg" alt="" />
                </div>
                <div className=" bg-[#F9FAFB] h-full flex justify-center items-center">
                    <div className="p-4">
                        <p className="text-lg my-2 font-bold">Tasker Stories</p>
                        <p className="font-semibold">See the stories of Taskers who have helped make everyday life easier for people around the world.</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="bt-[#F9FAFB]">
                        <img src="https://assets.taskrabbit.com/v3/assets/homepage/french-tour@524w.jpg" alt="" />
                        <p className="my-4 font-bold">Tour a French Chateau Inspired Post-Breakup Sanctuary</p>
                    </div>
                    <div className="bt-[#F9FAFB]">
                        <img src="https://assets.taskrabbit.com/v3/assets/homepage/maximize-any-tiny-space@522w.jpg" alt="" />
                        <p className="my-4 font-bold">21 Subtle Ways to Maximize Any Tiny Space</p>
                    </div>
                    <div className="bt-[#F9FAFB]">
                        <img src="https://assets.taskrabbit.com/v3/assets/homepage/handywomen-of-taskrabbit@524w.jpg" alt="" />
                        <p className="my-4 font-bold">Meet the Handywomen of TaskRabbit</p>
                    </div>
            </div>
        </div>
    );
};

export default GetInspired;