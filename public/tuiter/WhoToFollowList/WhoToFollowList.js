import who from './who.js';
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return (`
        <div class="list-group">
            <div class="list-group-item list-group-item-action">
                <b>Who to follow</b>
            </div>
            
            ${who.map(item => {
                return(WhoToFollowListItem(item));
            }).join('')
            }
                    
        </div>
    `)
}

export default WhoToFollowList;