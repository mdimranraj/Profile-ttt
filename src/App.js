import "./App.css";
import NumberText from "./components/NumberText";
import Post from "./components/Post";
import { profile } from "./data/profile";
import Head from "./components/Head";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Head profile={profile} />{" "}
      <div className="postsTabContainer">
        <div className="postsTab"> {`${profile.posts.length}  Posts`} </div>{" "}
        {profile.posts.map((eachpost) => {
          return <Post post={eachpost} id={profile.id} />;
        })}{" "}
      </div>{" "}
      <Footer />
    </div>
  );
}

export default App;
