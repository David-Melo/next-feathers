import React, {Fragment} from "react";

class Block extends React.Component {
    render() {
        return(
            <Fragment>

                {this.props.data.element === 'div' &&
                    <div className={this.props.data.class} dangerouslySetInnerHTML={{__html:this.props.data.content}} />
                }

                {this.props.data.element === 'h1' &&
                    <h1 className={this.props.data.class} dangerouslySetInnerHTML={{__html:this.props.data.content}} />
                }

                {this.props.data.element === 'h2' &&
                    <h2 className={this.props.data.class} dangerouslySetInnerHTML={{__html:this.props.data.content}} />
                }

            </Fragment>
        )
    }
}

export default Block;
