

const SingleProject = ({ project }) => {
    const { name, description, features, technologies_used, github_url, live_demo_url } = project;
    console.log(features)

    return (
        <div className="card card-compact bg-TextWhite shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-textYallow">{name}</h2>
                <p className="text-textBlack">{description}</p>
                <div className="flex gap-3">
                    {technologies_used.map((items, inx) => <div className="border-2 p-3 rounded-md text-textBlack border-textYallow   bg-none" key={inx}>
                        {items}
                    </div>)}

                </div>
                <h3 className="text-textBlack"><span className="text-textYallow text-xl font-bold"> Live link: </span> {live_demo_url}</h3>
                <h3 className="text-textBlack"><span className="text-textYallow text-xl font-bold"> Github Repo Link : </span> {github_url}</h3>
            </div>
        </div>
    );
};

export default SingleProject;