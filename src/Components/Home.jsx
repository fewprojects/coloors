import CardList from './CardList'
import useFetch from './useFetch'
import Header from "./Generic/Header";

function Home() {
    const { data: cards, isPending, error } = useFetch('http://localhost:8000/cards')
    return (
        <div>
            <Header />
        
            <div className="home container-980">
                <div className='cards'>
                    {error && <div>{error}</div>}
                    {isPending && <div className="flex-c-m">Loading...</div>}
                    {
                        cards && <CardList cards={cards} />
                    }
               
                </div>
            </div>
        </div>
    );
}

export default Home;