# 네이버 메인페이지 구현

## 화면 구성
![image](https://github.com/Imeanstar/react-hw2/assets/81348938/586c0858-78f8-4e17-86b1-7fa3ac6010a6)
![image](https://github.com/Imeanstar/react-hw2/assets/81348938/9137bf59-f30b-4d0a-8ad6-a9bbd1230188)

별도로 이미지를 찾을 시간이 애매하여 우선은 assets에 있는 react.svg로 대체하였음. (로딩 안되어서 이미지 보이지않음)

--- 

## 아쉬운 점
- 아직 사이드 이펙트와 hook, 상태 에 대한 이해가 미진하여 해당 내용을 사용하지 못한점이 아쉬움. 플젝 때 잘 활용할 수 있을 지 동시에 걱정이 됨

- 검색창의 내용을 onClick으로 구현하고 싶었는데 아쉬움
    - 가상키보드 기능, 검색창 왼 쪽 로고와 로고 오른쪽부터 input
    - onClick으로 누르면 검색창 Layout 바뀌면서 최근 검색어
![image](https://github.com/Imeanstar/react-hw2/assets/81348938/8b451179-fb27-401a-9c4c-05309d6c9aaa)
![image](https://github.com/Imeanstar/react-hw2/assets/81348938/eaf92226-5196-4551-8e82-d4e402de5776)

- 현재는 image파일을 그냥 react.svg로 통일하여서 map으로 편하게 렌더링했는데, image파일을 모두 다르게 하면 어떤 방식으로 렌더링해야 할 지 잘 모르겠음