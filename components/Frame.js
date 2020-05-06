
//creates a spotify player widget
class Frame extends React.Component {
    render(){

        return (
            <div align="center">
                <iframe src="https://open.spotify.com/embed/track/1gVCEnryJhkdQcuC0Kbvor"
                width="800" height="80" 
                frameBorder="0" 
                align="middle"
                allowtransparency="true" 
                allow="encrypted-media">
                </iframe>
            </div>
            )
    }
}

export default Frame;