import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return (`
        <div class="row">
            <div class="col-11">
                <input class="wd-border wd-border-round wd-width-full p-2 ps-5 wd-background-grey wd-remove-border wd-text-color-black" type="text" placeholder="Search Tuiter"/>
            </div>
            <div class="col-1">
                <a class="wd-float-left wd-font-size" href="./explore-settings.html">
                    
                    <i class="fa fa-cog fa-2x" aria-hidden="true"></i>
                </a>
                <i class="fa-gear"></i>
            </div>
        </div>
        <ul class="nav nav-tabs mt-2">
            <li class="nav-item">
                <a class="nav-link active" href="#">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link d-sm-none d-xxl-block d-xl-block d-lg-block d-md-block" href="#">Entertainment</a>
            </li>
        </ul>

        <div>
            <img class="mt-1" width="100%" height="400px" src="../../images/spacex.png">
        </div>
        
        ${PostSummaryList("90px", "80px")}
        
    `)
}

export default ExploreComponent;