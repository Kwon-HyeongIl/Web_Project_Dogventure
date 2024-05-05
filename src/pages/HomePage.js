import ChatbotApp from "../components/ChatbotApp";
import Map from "../components/Map";
import { Container as MapDiv } from "react-naver-maps";

function MainPage() {
  return (
    <>
      <MapDiv
        style={{
          width: "100%",
          height: "600px",
        }}
      >
        <Map />
      </MapDiv>

      {/* <ChatbotApp /> */}
    </>
  );
}

export default MainPage;
