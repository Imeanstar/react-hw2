import HeaderBar from "./Layout/HeaderBar";
import Imsi from "./Layout/Imsi";
import FooterBar from "./Layout/FooterBar";
// import Imsi from './Layout/Imsi';



function App(){
    return (
        <div className="App mx-28">
            {/* <RouterProvider router="{router}"></RouterProvider> */}
            <HeaderBar />
            <Imsi />
            <FooterBar />
        </div>
    )

}

export default App;