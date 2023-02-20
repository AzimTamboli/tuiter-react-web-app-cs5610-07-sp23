import PostList from "../PostList/PostList.js";
import ExploreComponent from "../ExploreScreen/ExploreComponent.js";
import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

(function ($) {
    $('#wd-explore').append(`
       <div class="row mt-3">
          <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2">
            ${NavigationSidebar('home')}
          </div>
          <div class="pt-2 col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10">
            ${PostList()}
          </div>
          <div class="col-xxl-4 col-xl-4 col-lg-4 d-xxl-block d-xl-block d-lg-block d-md-none d-sm-none">
            ${PostSummaryList("60px", "60px")}
          </div>
       </div>
    `);
})($);