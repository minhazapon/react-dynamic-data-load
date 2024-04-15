import { useLoaderData } from "react-router-dom";
import DataDetails from "./DataDetails";


const Post = () => {


    const data = useLoaderData();


    console.log(data);


    return (
        <div>

            <div>

              <h1>in this area loading data {data.length}  </h1>

            </div>

            <div className=" grid grid-cols-3 gap-10 ml-10 mr-10">

                 {
                    data.map( data => <DataDetails key={data.id} data={data}  ></DataDetails>  )

                 }


            </div>
            
        </div>
    );
};

export default Post;