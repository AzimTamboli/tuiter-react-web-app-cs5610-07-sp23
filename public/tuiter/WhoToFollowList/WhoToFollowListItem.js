
const WhoToFollowListItem = (who) => {
    return (
        `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-lg-2">
                    <img class="wd-round" width="50px" height="50px" src=${who.avatarIcon}>
                </div>
                <div class="col-lg-6 col-xl-7">
                    <span><b>${who.userName}</b></span>
                    <i class="fa fa-check-circle"></i>
                    <br>
                    <span class="wd-handle">@${who.handle}</span>
                </div>
                <div class="col-lg-4 col-xl-3">
                    <a href="#" class="btn btn-primary mt-2 rounded-pill">Follow</a>
                </div>
            </div>
         </div>
        `
    )
}
export default WhoToFollowListItem ;