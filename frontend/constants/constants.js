let API_ROOT;
let API_WS_ROOT;

if (process.env.NODE_ENV !== 'production') {
    API_ROOT = 'http://localhost:3000';
    API_WS_ROOT = 'ws://localhost:3000/cable';
} else {
    API_ROOT = 'http://disclone-rf.herokuapp.com';
    API_WS_ROOT = 'ws://disclone-rf.herokuapp.com/cable';
}
// export const API_ROOT = 'http://localhost:3000';
// export const API_WS_ROOT = 'ws://localhost:3000/cable';


const HEADERS = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
};

module.exports = { API_ROOT, API_WS_ROOT, HEADERS };