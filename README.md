# react-native-pure-button

pure button, without any style.

## Installation

```shell
npm install --save react-native-pure-button
```

## Example

```javascript
import Button from 'react-native-pure-button'

class Example extends Component {

    render() {
        return (
            <Button
                disabled={boolean}
                style={...}
                textStyle={...}
                activeOpacity={number}
                disabledStyle={...}
                disabledTextStyle={...}
                disabledActiveOpacity={number}
                onPress={}
                onLongPress={}
            >
                hello world
            </Button>
        )
    }
}
```