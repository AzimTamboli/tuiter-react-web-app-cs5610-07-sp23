const PostSummaryItem = (post, width, height) => {
        return (`
                 <div class="list-group-item list-group-item-action">

                        <div class="row">
                            <div class="col-sm-9 col-md-10">

                                <span class="wd-handle">${post.topic}</span>
                                <br>
                                <span><b>${post.userName}</b></span>
                                <i class="fa fa-check-circle"></i>
                                <span class="wd-handle">- ${post.time}</span>
                                <br>
                                <span><b>${post.title}</b></span>
                            </div>

                            <div class="col-sm-2">
                                <img class="wd-round" width=${width} height=${height} src=${post.image}>
                            </div>
                        </div>

                 </div>
        `)
}
export default PostSummaryItem;