//발생할 수 있는 타입이 여러개 일떄

{
    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction: Direction) {
        console.log(direction);
    }
    move('down');

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 16;

    type SuccessState = {
        response : {
            body: string;
        }
    }

    type FailState {
        reason : string;
    }
    
    type LoginState = SuccessState | FailState

    function login(): LoginState {
        return {
            response: {
                body: 'logged in!'
            }
        }
    }

    //printLoginState(state : LoginState)
    //success -> 

    function printLoginState(state: LoginState) {
        if('response' in state) {
            console.log(state.response.body);
        } else {
            console.log(state.reason);
        }
    }
}