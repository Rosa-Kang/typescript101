{
    type SuccessState = {
        result: 'success';
        response : {
            body: string;
        }
    }

    type FailState {
        result: 'fail';
        reason : string;
    }
    
    type LoginState = SuccessState | FailState

    function login(): LoginState {
          
        return {
            response: {
                result:'success',
                body: 'logged in!'
            }
        }
    }

    //printLoginState(state : LoginState)
    //success -> 

    function printLoginState(state: LoginState) {
        if(state.result === 'success') {
            console.log(state.response.body);
        } else {
            console.log(state.reason);
        }
    }
}