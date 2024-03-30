import Main from "../components/Main/Main"
import Row from "../components/Main/Row"
import requests from "../Requests"

const Home = () => {
    return (
        <>
            <Main />
            <Row title='UpComing' fetchURL={requests.requestUpcoming} />
            <Row title='Popular' fetchURL={requests.requestPopular} />
            <Row title='Trending' fetchURL={requests.requestTrending} />
            <Row title='Top Rated' fetchURL={requests.requestTopRated} />
            <Row title='Horror' fetchURL={requests.requestHorror} />
        </>
    )
}

export default Home