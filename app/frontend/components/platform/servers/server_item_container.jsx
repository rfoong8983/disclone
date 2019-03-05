import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { receiveCurrentServerId } from '../../../actions/ui_actions';
import { fetchChannels } from '../../../actions/channel_actions';
import ServerItem from './server_item';

// const functionalServerItem = ({ server, updateServerId }) => {
//     // debugger
//     return (
//         <div key={server.id} className={`servCo_server${server.id}`}>
//             <div key={server.id} draggable="true">
//                 {/* replace with next div with comment */}
//                 <div key={server.id} className={`servCo_innerListIcon${server.id}`}>
//                     {/* server & channel ids are hashed */}
//                     {/* <a aria-label = {`${server.server_name}`} href={`/channels/${server.id}/${server[server.id].channels.first}`}/></a> */}
//                     {/* <a aria-label="testChan" href={`/#/channels/${server.id}`} onClick={updateServerId(server.id)}> */}
//                     <a key={server.id} aria-label="testChan" href={`/#/channels/${server.id}`}>
//                         <div key={server.id} className="servCo_serverIcon">{server.server_name}</div>
//                     </a>

//                 </div>
//             </div>
//         </div>
//     );
// };

const msp = ({ session, entities: { users } }) => (
    {
        currentUser: users[session.id]
    }
);

const mdp = (dispatch) => (
    {
        receiveCurrentServerId: (serverId, alias) => dispatch(receiveCurrentServerId(serverId, alias)),
        fetchChannels: (serverId) => dispatch(fetchChannels(serverId))
    }
);

export default withRouter(connect(msp, mdp)(ServerItem));