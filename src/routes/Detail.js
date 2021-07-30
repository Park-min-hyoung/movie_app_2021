import React from 'react';

class Detail extends React.Component {
    componentDidMount() {
        // props에 전달 받은 정보들이 있는데 그 중에 location과 history를 사용(console.log 하면 볼 수 있음)
        const { location, history } = this.props;
        console.log(location.state);
         // 카드를 click 하면 문제 없는데 사용자가 임의의로 타이핑 후 들어오면 정보 전달이 안된다(Link를 통해 obj를 전달 받지 못해서)
        if(location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        if (location.state) {
            return <span>{location.state.title}</span>
        } else {
            return null;
        }
    } 
}

export default Detail;