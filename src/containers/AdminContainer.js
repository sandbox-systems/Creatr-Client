import { Container } from "unstated";
import axios from "axios";
class AdminContainer extends Container {
  constructor() {
    super()

    //this.getData()

    this.state = {
      current: "user",
      users: [],
      videos: [],
  
      isLoading: false,
      stream: null,
      streamkey: null
    };
  
  }



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
      this.setState({isLoading:true})
      const res = await Promise.all([
        axios.get("/api/v1/videos", this.getConfig()),
        axios.get("/api/v1/users", this.getConfig()),
        axios.get("/api/v1/streams", this.getConfig())
      ]);
      const [videosRes, usersRes, streamRes] = res;
      console.log(res)
      this.setState({
        users: usersRes.data.result,
        videos: videosRes.data.result,
        stream: streamRes.data.result,
        streamkey: streamRes.data.result,
        isLoading:false
      });
    } catch (error) {
      console.error("Error:", error);
    }
  }  
  startStream = async id => {
    try {
      const res = await axios({
        method: 'post',
        url: '/api/v1/streams/',
        headers: this.getConfig().headers,
        data: {id}
      });
      this.getData()
    } catch (error) {
      console.error("Error:", error);
    }
  };

  stopStream = async id => {
    try {
      console.log({id})
      const res = await axios({
        method: 'delete',
        url: '/api/v1/streams/',
        headers: this.getConfig().headers,
        data: {id}
      });
      this.getData()
    } catch (error) {
      console.error("Error:", error);
    }
  };

  addVideo = async formData => {
    try {
      const res = await axios.post("/api/v1/videos/", formData, this.getConfig());
      this.getData()
      console.log(res);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  deleteVideo = async id => {
    try {
      const res = await axios({
        method: 'delete',
        url: '/api/v1/videos/',
        headers: this.getConfig().headers,
        data: {id}
      });
      this.getData()
    } catch (error) {
      console.error("Error:", error);
    }
  };

  addContent = async formData => {
    try {
      const res = await axios.post("/api/v1/content/", formData, this.getConfig());
      this.getData()
      console.log(res);
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
export default AdminContainer;
