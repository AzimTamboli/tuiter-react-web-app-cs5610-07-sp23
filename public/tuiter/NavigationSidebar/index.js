const NavigationSidebar = (active) => {
    return(`
                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action">
                        <i class="fab fa-twitter"></i></a>
                    </a>
                    <a href="/tuiter/HomeScreen/index.html" class="list-group-item list-group-item-action ${active === 'home' ? ' active': ' '}">
                         <div class="row">
                             <div class = "col-xl-1">
                                <i class="fa fa-home" aria-hidden="true"></i>
                             </div>

                             <div class = "col-xl-10">
                                <label class = "d-none d-xxl-block d-xl-block">Home</label>
                             </div>
                         </div>
                    </a>
                    <a href="/tuiter/ExploreScreen/index.html" class="list-group-item list-group-item-action ${active === 'explore' ? ' active': ' '}">
                        <div class="row">
                            <div class = "col-xl-1">
                                <i class="fa fa-hashtag" aria-hidden="true"></i>
                            </div>

                            <div class = "col-xl-10">
                                <label class = "d-none d-xxl-block d-xl-block">Explore</label>
                            </div>
                        </div>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action ${active === 'notification' ? ' active': ' '}">
                        <div class="row">
                            <div class = "col-xl-1">
                                <i class="fa fa-bell"></i>
                            </div>

                            <div class = "col-xl-10">
                                <label class = "d-none d-xxl-block d-xl-block">Notifications</label>
                            </div>
                        </div>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action ${active === 'message' ? ' active': ' '}">
                        <div class="row">
                            <div class = "col-xl-1">
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                            </div>

                            <div class = "col-xl-10">
                                <label class = "d-none d-xxl-block d-xl-block">Messages</label>
                            </div>
                        </div>

                    </a>
                    <a href="#" class="list-group-item list-group-item-action ${active === 'bookmark' ? ' active': ' '}">
                        <div class="row">
                            <div class = "col-xl-1">
                                <i class="fa-solid fa-bookmark"></i>
                            </div>

                            <div class = "col-xl-10">
                                <label class = "d-none d-xxl-block d-xl-block">Bookmarks</label>
                            </div>
                        </div>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action ${active === 'list' ? ' active': ' '}">
                        <div class="row">
                            <div class = "col-xl-1">
                                <i class="fa-solid fa-list"></i>
                            </div>
                            <div class = "col-xl-10">
                                <label class = "d-none d-xxl-block d-xl-block">Lists</label>
                            </div>
                        </div>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action ${active === 'profile' ? ' active': ' '}">
                        <div class="row">
                            <div class = "col-xl-1">
                                <i class="fa fa-user" aria-hidden="true"></i>
                            </div>

                            <div class = "col-xl-10">
                                <label class = "d-none d-xxl-block d-xl-block">Profile</label>
                            </div>
                        </div>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action ${active === 'more' ? ' active': ' '}">
                        <div class="row">
                            <div class = "col-xl-1">
                                <i class="fa-solid fa-ellipsis"></i>
                            </div>
                            <div class = "col-xl-10">
                                <label class = "d-none d-xxl-block d-xl-block">More</label>
                            </div>
                        </div>
                    </a>

                </div>
                <div class="d-grid mt-2">
                    <a href="#" class="btn btn-primary btn-block rounded-pill">Tweet</a>
                </div>
`);
}
export default NavigationSidebar;