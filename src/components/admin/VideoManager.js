import React, {Component} from 'react'
import { Row, Col, Button, Icon, Layout, Affix} from "antd";
import VideoGrid from '../common/VideoGrid'
import NewVideoModal from './NewVideoModal'
const { Header, Content, Sider } = Layout;

class VideoManager extends Component {
    state = {
        newVideoModal: false,
    }
    render() {
        return (
            <div>
                <Row gutter={32} >
                    <Col span={18}>
                        <VideoGrid cols={3} videos={this.props.data}/>
                    </Col>
                    <Col span={6} >
                    <NewVideoModal visible={this.state.newVideoModal} close={() => this.setState({newVideoModal:false})} />
                        <Affix offsetTop={10}>
                            <Button onClick={() => this.setState({newVideoModal:true})} size="large" type="primary" style={{ marginBottom: 8 }} block>
                                Schedule Stream
                                <Icon type="sliders" theme="filled" />
                            </Button>
                            <Button size="large" type="dashed" style={{ marginBottom: 8 }} block>
                                Start Livestream
                                <Icon type="thunderbolt" theme="filled" /> 
                            </Button>
                        </Affix>
                    </Col>
                </Row>    
            </div>
        );
    }
}

export default VideoManager;
