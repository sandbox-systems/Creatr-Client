import { Container } from "unstated";
import axios from "axios";
class AdminContainer extends Container {
  state = {
    current: "user",
    users: [],
    videos: [],
    modal: {
      newVideoModal: false,
      updateVideoModal: false,
      startStreamModal: false,
    }
  };

  config = {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  };

  getData = async () => {
    try {
      const res = await Promise.all([
        axios.get("http://localhost:3000/api/v1/videos", this.config),
        axios.get("http://localhost:3000/api/v1/users", this.config)
      ]);
      const [videosRes, usersRes] = res;
      console.log(res)
      this.setState({
        users: usersRes.data.result,
        videos: videosRes.data.result
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  createVideo = async formData => {
    try {
      const res = await axios.post("/api/v1/videos/", formData, this.config);
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
        headers: this.config.headers,
        data: {id}
      });
      this.getData()
      console.log(res);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // openModal = async modalName => {
  //   const modal = {mod}
  //   this.setState(state => {
  //     return { :  true };
  //   });
  // };
}

export default AdminContainer;
