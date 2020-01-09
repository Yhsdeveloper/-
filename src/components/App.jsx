import React from "react";
import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3";
import yhs1 from "../yhs1.jpg";
import yhs2 from "../yhs2.jpg";
import yhs3 from "../yhs3.jpg";
import yhs4 from "../yhs4.jpg";
import ksh1 from "../ksh1.jpg";
import ksh2 from "../ksh2.jpg";
import ksh3 from "../ksh3.jpg";
import ksh4 from "../ksh4.jpg";
import hssh1 from "../hssh1.jpg";
import hssh2 from "../hssh2.jpg";
import hssh3 from "../hssh3.jpg";
import hssh4 from "../hssh4.jpg";
import hssh5 from "../hssh5.jpg";
import hssh6 from "../hssh6.jpg";
import hssh7 from "../hssh7.jpg";
import hssh8 from "../hssh8.jpg";
import seongsan from "../seongsan.jpg";
import haesuyokjang from "../haesuyokjang.jpg";
import namhae from "../namhae.jpg";
import tonAndMannerCafe from "../tonAndMannerCafe.jpg";
import ariatte from "../ariatte.jpg"
import cafeDela from "../cafeDela.jpg";
import heart from "../heart.png";
function App() {
    return (
        <div>
            {/* header */}
            <section id="header">
                {/* navbar */}
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="#">
                        HSSH
          </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item">
                                <a className="nav-link" href="#features_yhs">
                                    현수에게🤎
                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#features_ksh">
                                    승희에게💙
                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#features_with">
                                    서로에게💕
                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#withGo">
                                    같이가자💕
                </a>
                            </li>
                        </ul>
                    </div>
                </nav>


                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <h1 className="header_heading">사랑스러운 승희와 현수만의 웹 공간 🧡</h1>
                    </div>


                </div>


            </section>

            <section id="features">

                <p className="features_title">현뚜 승희 사진들💕</p>
                <p id="features_yhs" className="features_yhs">귀요미 뚜</p>
                <div className="row">

                    <Card
                        img={yhs1}
                        title={"핑크뮬리"}
                        content={"우리 여보랑 핑크뮬리 보러간날. 이렇게 자주 놀러다닌 곳이 없어서 기억에 손꼽는 장소^^"}
                    />
                    <Card
                        img={yhs2}
                        title={"유현뚜 죽은날"}
                        content={"이날 진짜 미술관 짱짱 좋았는데 음식도 맛있구 근데 나이렇게 술 못마시지 않는데 왜 죽어찌??라고 스스로 부정해봅니다.."}
                    />
                    <Card
                        img={yhs3}
                        title={"한강 간날"}
                        content={"우리 승희랑 마치 부부처럼 한강간날 나는 자켓입구 승희는 이쁜 분홍원피스 입구 놀러 간날 눈누난나"}

                    />
                    <Card
                        img={yhs4}
                        title={"대망의 크리뜨마뜨날"}
                        content={"뜽희랑 만나서 청계천 갔다가 유현뚜 멍츙이 때문에 에어팟 잃어버릴뻔하다가 저기 영등포 이뿐곳에서 사진찍어땅^*^ 한가지 아쉬운건 민망해서 제대로 찍고싶은곳에서 제대로 못찍엇떠 여보는 어딘지 알지 ㅎㅎ?"}
                    />
                </div>
                <p id="features_ksh" className="features_ksh">사랑스러운 씅</p>
                <div className="row">

                    <Card
                        img={ksh1}
                        title={"장소명이 자세히 기억안나요..하지만 이쁜이가 갔으니 이쁜곳이겠죠?"}
                        content={"우리 승희가 추천해줘서 같이 간곳 막상 갔는데 뭐 별거없어서 아쉽긴했지만 승희랑 함께여서 너무 좋았다 그리고 승희가 너무 헤매서 미안해하는 모습이 보였는데 나도 길몰랐으니까 쌤쌤이구 미안해하지 않아도 되었는데 바부 그냥 같이 함께여서 너무 좋았어 승희야🧡"}
                    />
                    <Card
                        img={ksh2}
                        title={"한강의 수많은 나무와 풀 그리고 물 그리고 사람들..그 한강에 있는 자연과 사람중에 가장 아름다웠던 강승희"}
                        content={"우리 승희랑 돗자리?도시락? 같이 카페에서 빌려서 간날. 승희가 삼각대 가져와서 사진 마구마구 찍을수 있어서 너무 좋았고 같이 한강 보이는 곳 앞에서 돗자리 펴놓고 얘기도 하고 누워 있기도 하고 뽀뽀도 하고 되게 사소했지만 너무 행복했던날 승희랑 이렇게 사소한거에 행복할수 있다는게 너무너무 사랑한다는거 아닐까?"}
                    />
                    <Card
                        img={ksh3}
                        title={"핑크뮬리가 승희인가?승희가 핑크뮬리인가?"}
                        content={"승희랑 함께 핑크뮬리 보러간날. 미안해 위에 현뚜 내용이랑 많이 중복되어서 ㅠㅠ그치만 서로에게 너무 좋은 여행(?)이어서 꼭 넣고싶었어. 이날도 나름 많이 걸었는데 그냥 승희랑 함께 승희가 좋아하는 핑크뮬리 봐서 좋았던 하루.이때 가물가물하는데 눈이 너무 불편했던 기억이 눈만 좀 더 편했더라면 아쉬움도 있구,, 사진도 사람 너무 많아서 민망해서 잘못찍어서 아쉽긴했지만 승희와 추억을 만들고 와서 너무 좋았다^.^"}
                    />
                    <Card
                        img={ksh4}
                        title={"결혼식 승희 축가 불렀대요"}
                        content={"우리 승희가 재룡삼촌님? 결혼이라고 하셔서 결혼식 구경도 하면서 축가도 부르러 간날 말은 안했지만 승희 노래 너무 잘헀고 너무 자랑스러웠고 내여자친구라서 너무 좋다. 넘넘 자랑스러웠다 같이 있진 못했고 영상으로만 봤지만 너무너무너무 자랑스러운 내 여자친구 사랑해💕"}
                    />

                </div>
                <p id="features_with" className="features_with">서로서로💕</p>
                <div className="row">

                    <Card2
                        img={hssh1}

                    />
                    <Card2
                        img={hssh2}
                    />
                    <Card2
                        img={hssh3}
                    />
                    <Card2
                        img={hssh4}
                    />
                    <Card2
                        img={hssh5}
                    />
                    <Card2
                        img={hssh6}
                    />
                    <Card2
                        img={hssh7}
                    />
                    <Card2
                        img={hssh8}
                    />
                </div>


            </section>
            <section id="withGo">
                <p className="withGo_paragraph">같이 가보면 좋을만한 곳👍</p>
                <div class="row">
                    <Card3
                        img={seongsan}
                        title={"성산일출봉"}
                        content={"제주도에 있는 성산일출봉이야 여보 꼭 한번 여기서 일출보고 싶어 내년엔 같이 가자 ^^ 자세한건 클릭해바!"}
                        href="http://www.wetravel.kr/bbs/board.php?bo_table=galeri&wr_id=18"
                    />
                    <Card3
                        img={haesuyokjang}
                        title={"꽃지해수욕장"}
                        content={"충남 태안에 있는 꽃지 해수욕장이래 너무 가보고싶지 이번년도 여름에 같이 갔으면 좋게따 펜션?도 잡구 헤헤헤 자세한건 역시나 클릭!"}
                        href="https://m.blog.naver.com/PostView.nhn?blogId=prince0198&logNo=221187780872&proxyReferer=https%3A%2F%2Fwww.google.com%2F"
                    />
                    <Card3
                        img={namhae}
                        title={"경상남도 남해 가천 다랭이마을"}
                        content={"남해에 있는 가천 다랭이 마을이래 한국에서 꼭 가봐야할곳으로 CNN에서 소개 되었대 여기도 가보자! 자세한건 역시나 클릭!"}
                        href={"https://jail6039.tistory.com/entry/CNN%EC%9D%B4-%EA%BC%AD-%EA%B0%80%EB%B4%90%EC%95%BC-%ED%95%A0-%EA%B3%B3%EC%9D%B4%EB%9D%BC%EB%8A%94-%EA%B0%80%EC%B2%9C-%EB%8B%A4%EB%9E%AD%EC%9D%B4-%EB%A7%88%EC%9D%84"}

                    />
                </div>
                <div class="row">
                    <Card3
                        img={tonAndMannerCafe}
                        title={"홍대 톤앤매너 카페"}
                        content={"이제부터 여보가 좋아하는 이뿐 카페 ~~ 홍대에 있는 톤앤매너라는 카페래 홍대에 있으니 언제든 갈수 있겠다! 자세한건 클릭^^"}
                        href={"https://m.blog.naver.com/PostView.nhn?blogId=ariel961014&logNo=221223959712&proxyReferer=https%3A%2F%2Fwww.google.com%2F"}
                    />

                    <Card3
                        img={ariatte}
                        title={"강남 역삼동 아리아떼 카페"}
                        content={"꽃들로 가득차 있는 카페래! 가격도 저렴하대 여기 가보자 ㅎㅎ 자세한건 역시나 클릭!"}
                        href={"https://m.blog.naver.com/graduatestory/221316393238"}
                    />
                    <Card3
                        img={cafeDela}
                        title={"잠실 석촌호수에 있는 브런치카페 Cafe de la Paix"}
                        content={"여기두 넘넘 이쁜것 같아 기회되면 가보자! 이외에 다른것도 많지만 헤헤 3개씩만^*^ 역시나 자세한건 클릭!"}
                        href={"https://m.blog.naver.com/PostView.nhn?blogId=pksorya&logNo=220765170778&proxyReferer=https%3A%2F%2Fwww.google.com%2F"}
                    />
                </div>
            </section>

            <footer>
                <figure>
                    <img src={heart} alt="" />

                </figure>
            </footer>
        </div>
    );
}

export default App;
