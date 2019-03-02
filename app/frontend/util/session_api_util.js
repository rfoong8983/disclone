// variable destructuring, it assigns the variable
// to a key of user returning => user: {contents of user}
// {user: {name:"a"}}

export const signup = (user) => (
    $.ajax({
        method: "POST",
        url: `/api/users`,
        data: { user }
    })
);

// { user } assigns object e.g., {em:"a@a.com", pw:"1234"}
// and assigns obj to user: obj...
// previously, we structured objects in the form 
// <input name="user[username]"/>

export const login = (user) => (
    $.ajax({
        method: "POST",
        url: `/api/session`,
        data: { user }
    })
);

// ajax calls replace name="user[username]"
// <input name="user[username]"/>


export const logout = () => (
    $.ajax({
        method: "DELETE",
        url: `/api/session`
    })
);