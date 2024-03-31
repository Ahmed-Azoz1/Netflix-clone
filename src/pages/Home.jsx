import Main from "../components/Main/Main"
import Row from "../components/Main/Row"
import requests from "../Requests"
import { Helmet } from "react-helmet-async"

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Netflix-Clone</title>
                <meta name="description" content="Netflix-Clone"/>
            </Helmet>
            <Main />
            <Row rowID='1' title='UpComing' fetchURL={requests.requestUpcoming} />
            <Row rowID='2' title='Popular' fetchURL={requests.requestPopular} />
            <Row rowID='3' title='Trending' fetchURL={requests.requestUpcoming} />
            <Row rowID='4' title='Top Rated' fetchURL={requests.requestTopRated} />
            <Row rowID='5' title='Horror' fetchURL={requests.requestTrending} />
        </>
    )
}

export default Home