const PostItem = (post) => {
    return (`
        <li class="list-group-item pt-3">
            <div class="row">
                <div class="col-1">
                    <img class="wd-round-50" width="50px" height="50px" src=${post.avatarIcon}/>
                </div>
                <div class="col-11">
                    <div class="ps-1">
                        <div class="row">
                            <div class="col-10 ms-1">
                                <span class="wd-author"><strong>${post.userName}</strong></span>
                                <i class="fa fa-check-circle"></i>
                                <span class="wd-handle wd-gray-text">@${post.handle}</span>
                                <span class="wd-time wd-gray-text">. ${post.time}</span>                                
                            </div>
                            <div class="col-1 ms-4">
                                <i class="fa-solid fa-ellipsis wd-float-left"></i>
                            </div>
                        </div>
                    </div>
                    <div class="ps-1">
                        <span>${post.title}</span>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-1"></div>
                
                <div class="col-11">
                    <div class="card mt-4 border-secondary" style="width: 100%;">
                        <img src=${post.image} class="card-img-top rounded-top" alt="..."/>
                        ${post.contentTitle === "" ? '': `
                            <div class="card-body">
                                <span class="card-title" style="font-size: 14pt;">${post.contentTitle}</span>
                                <p class="card-text wd-topic wd-gray-text">${post.content}</p>                
                            </div>
                            `}
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-1"></div>
                <div class="col-11">
                    <div class="ms-2 row">
                        <div class="p-2 pe-4 wd-float-left col-3">
                            <a class="wd-tabs-link wd-no-underline wd-gray-text" href="#"><i class="me-2 fa-regular fa-comment"></i>${post.comments}</a>
                        </div>
                        <div class="p-2 pe-4 wd-float-left col-3">
                            <a class="wd-tabs-link wd-no-underline wd-gray-text" href="#"><i class='me-2 fa fa-retweet'></i>${post.retuits}</a>
                        </div>
                        <div class="p-2 pe-4 wd-float-left col-3">
                            <a class="wd-tabs-link wd-no-underline wd-gray-text" href="#"><i class="me-2 fa-solid fa-heart"></i>${post.likes}</a>
                        </div>
                        <div class="p-2 pe-4 wd-float-left col-3">
                            <a class="wd-tabs-link wd-no-underline wd-gray-text" href="#"><i class="me-2 fa-solid fa-arrow-up-from-bracket"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    `)
}

export default PostItem;