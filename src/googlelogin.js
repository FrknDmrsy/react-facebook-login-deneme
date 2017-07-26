import React from 'react';
import GoogleLogin from 'react-google-login';

class Google_Login extends React.Component{

    responseGoogle = (response) => {
        console.log(response);
        //console.log(''response.profileObj.email)
    }

    render () {
        return (
            <div>
                <GoogleLogin
                    clientId="41493144326-5jqgcdf47foaml3orktsjdq8g6hh8dll.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    scope='https://www.googleapis.com/auth/admin.directory.resource.calendar'
                />
            </div>
        );
    }

}

export default Google_Login;