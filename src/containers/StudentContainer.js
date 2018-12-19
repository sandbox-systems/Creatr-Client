import { Container } from "unstated";
import axios from "axios";
class StudentContainer extends Container {
  state = {
    videos: [],
    modal: {},
    isLoading: false,
    stream: null
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
        axios.get("http://localhost:3000/api/v1/videos", this.config),
        axios.get("http://localhost:3000/api/v1/streams", this.config)
      ]);
      const [videosRes, streamRes] = res;
      console.log(res);
      this.setState({
        videos: videosRes.data.result,
        stream: streamRes.data.result,
        isLoading: false
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
}
export default StudentContainer;
