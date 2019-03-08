# DISCLONE

[Live Demo](https://disclone-rf.herokuapp.com/#/)

Disclone, a Discord clone, is a real-time messaging service that allows users to create free servers and form communities around specific topics of interest.

## Current Features & Highlights

* Secure front-end to back-end user-authentication using BCrypt.
* Users can Create and join servers.
* A default server and channel are created on user sign-up.
* Conditional rendering of the create-a-server modal to display either the create or join server form.
* Object animation on home-page and 404.

### Create / Join Server Modal

The modal allows users to either create or join a server from one location. To achieve this, conditional formatting is used to update components depending on what action the user performs.

The component's local state is updated depending on the user's action. When the state is updated, the appropriate form is rendered.

```javascript
render() {
    return (
        <div className="mod_serverWrapper">
            <div className="mod_serverWrapper1">
                <div className="mod_serverWrapper2">

                    // this displays the header text if the user
                    // is at the modal home
                    {this.state.loc === 'main' ? <header 
                        className="mod_serverHeader boldFont" style={joinColor}
                    >
                        {this.headerText()}
                    </header> : ""}

                    // manageDisplay renders the back and submit buttons
                    // if the user is on the create or join form
                    {this.manageDisplay()}
                </div>
                {this.state.loc !== 'main' ? this.formSubmit() : ""}

                
            </div>

            // this renders text and an image specific to the modal home
            {this.state.loc === 'main' ? <div className="mod_createOrJoin medFont">or</div> : ""}
        </div>
    )
}
```

Conditional rendering was used to make the main render function easy to read and combine similar components into a singular and more adaptable component.

While this may add complexity to the components, it pays dividends in the ease it brings to debugging and styling as all displays related to the modal are centralized.

![Server Modal](https://media.giphy.com/media/63JznjgzG6hOdVaH1H/giphy.gif)


### Animations

@keyframes were used to alter CSS animations at specific times to determine their overall appearance.

```scss
    @keyframes pageNotFound_glitch {
    0% {transform: translate3d(0,140px,0);}
    10% {transform: translate3d(0,10px,0);}
    20% {transform: translate3d(0,160px,0);}
    30% {transform: translate3d(0,10px,0);}
    40% {transform: translate3d(0,1750px,0);}
    60% {transform: translate3d(0,15px,0);}
    70% {transform: translate3d(0,155px,0);}
    80% {transform: translate3d(0,17px,0);}
    90% {transform: translate3d(0,165px,0);}
    95% {transform: translate3d(0,20px,0);}
    100% {transform: translate3d(0,160px,0);}
}
```

![Home Animation](https://media.giphy.com/media/csRkbW4mbZ1Lr2d3Kf/giphy.gif)

![404 Animation](https://media.giphy.com/media/2ALbghihz1xVME3bR2/giphy.gif)

## Coming Soon!

*