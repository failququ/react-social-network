import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        typingMode: false,
        status: this.props.status
    }


    enableTypingMode = () => {
        this.setState({
            typingMode: true
        })
    }

    disableTypingMode = () => {
        this.setState({
            typingMode: false
        })
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })

        this.props.updateUserStatus(this.state.status)
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.typingMode ?
                        <div>
                            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.disableTypingMode} value={this.state.status} />
                        </div> :
                        <div>
                            <span onClick={this.enableTypingMode}>{this.props.status || "No status..."}</span>
                        </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;