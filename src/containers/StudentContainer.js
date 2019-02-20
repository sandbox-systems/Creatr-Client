import { Container } from "unstated";
import axios from "axios";
class StudentContainer extends Container {
  state = {
    videos: [],
    modal: {},
    isLoading: true,
    stream: null,
    messages: []
  };

  config = {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  };

  // getLiveStream = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:3000/api/v1/streams/");
  //     this.setState({
  //       liveStream:res.result,
  //       key:res.key
  //     })
  //   } catch (error) {

  //   }
  // }


  getData = async () => {
    try {
      this.setState({ isLoading: true });
      const res = await Promise.all([
        axios.get("/api/v1/videos", this.config),
        axios.get("/api/v1/streams", this.config),
        axios.get("/api/v1/content", this.config)
      ]);
      const [videosRes, streamRes, contentRes] = res;
      console.log(res);
      this.setState({
        videos: videosRes.data.result,
        content: contentRes.data.result,
        stream: streamRes.data.result,
        isLoading: false
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  addMessage = async (message, video=this.state.stream._id) => {
    try {
      const res = await axios.post("/api/v1/messages/", {video, message}, this.getConfig());

      console.log(res);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  getMessages = async (video=this.state.stream._id) => {
    try {
      // const res = await axios({
      //   method: 'get',
      //   url: '/api/v1/messages/',
      //   headers: this.getConfig().headers,
      //   data: {video}
      // });
      const res = await axios.get("/api/v1/messages/"+video, this.config);
      // this.getData()
      console.log(res);
      this.setState({messages:res.data.result})
      return res.data.result;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  getConfig = () => {
    return {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }
  }

}
export default StudentContainer;
