import NavigationSidebar from "../navigation-sidebar";
import ExploreComponent from "../explore";
import PostList from "../PostList2";
import PostList2 from "../PostList2";

const home = () => {

    return (

       /* <div className="row mt-2">
            <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2">
                {<NavigationSidebar active="home"/>}
                <h1>Hello</h1>
            </div>
            <div className="pt-2 col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10">
                {<PostList/>}
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 d-xxl-block d-xl-block d-lg-block d-md-none d-sm-none">
                {<ExploreComponent/>}
            </div>
        </div>*/
        <div>
            <PostList2/>
        </div>

        /*
        <>
            {<PostList/>}
        </>

         */
    );

}

export default home;