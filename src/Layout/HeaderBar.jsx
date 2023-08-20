//사이드 이펙트 , hook 사용 못함 ㅜ

function HeaderBar(){
    let navbar = ["메일", "카페", "블로그" , "쇼핑" , "뉴스" , "증권" , "부동산" , "지도" , "웹툰"];


    return(
        <div className="w-auto h-64  flex flex-col">
            <div className="w-full h-16  flex justify-between">
                <div className="w-28 h-full  flex justify-around items-center">
                    <img src="./../assets/react.svg" alt="" className="w-10 h-10"/>
                    <img src="./../assets/react.svg" alt="" className="w-10 h-10"/>
                </div>
                <div className="w-28 h-full  flex justify-around items-center">
                    <img src="./../assets/react.svg" alt="" className="w-10 h-10"/>
                    <img src="./../assets/react.svg" alt="" className="w-10 h-10"/>
                </div>
                {/* <div className=""></div> */}
            </div>
             <div className="w-full h-16 bg-white flex justify-center items-center">
                <input type="search" name="" id="" className="border-green-500 border-solid border-1 h-14 rounded-full w-1/2 hover:drop-shadow-lg focus:outline-none"/>
                {/* 검색창 onClick도 구현하고 싶었는데 아쉬움 */}
                {/* 가상키보드 뜨는 기능, 검색창 왼 쪽에 로고있고, 로고 오른쪽 부터 input들어가는 기능 */}
                {/* onClick으로 들어가면 검색창 Layout바뀌면서 최근검색어 뜨는 기능 */}
                {/* 어떻게 하는거지... */}
            </div>
            <div className="w-full h-24 flex justify-center items-center gap-8">
                {navbar.map((item)=>(
                    <div className="flex flex-col justify-center items-center">
                        <img src="./../assets/react.svg" alt="" className="w-8 h-8" />
                        {/* 만약 이미지파일이 여러개라면, map으로 넣으려고 할 때 어떻게 넣어줘야할까? */}
                        <figcaption>{item}</figcaption>
                    </div>
                ))}
                {/* <div>
                    <img src="./../assets/react.svg" alt="" className="w-10 h-10" />
                    <figcaption>메일</figcaption>
                </div> */}
                
                {/*<p className="">상품 전체 보기</p>
                <p>Q&A</p>
                <p>도움말</p>
                <p>내 정보</p>*/}
            </div> 
            

        </div>
    )
}

export default HeaderBar;