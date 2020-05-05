import Header from './Header'
import Icon from "./Icon"
import Input from "./Input"

const Layout = (props) => (

    <div>
        {/* Header imports css from bootstrap */}
        <Header />
        <Icon />
        {/* Input renders upvote and downvote functionality */}
        <Input />
        {/* Render search functionality */}
        <div className="container">
            <div className="col-md-12 mt-5">
                {props.children}
            </div>
        </div>
    </div>
)

export default Layout;
