### 리액트 컴포넌트 성능 최적화
[todo-app](https://github.com/YINAKIM/react03-todo-app) 을 활용하여 컴포넌트 최적화하기

1. 많은 데이터 렌더링 하기   
2. 크롬 개발자도구를 통한 성능 모니터링 - 느려지는 원인 분석
3. React.memo를 사용, 컴포넌트 리렌더링 성능 최적화
4. onToggle, onRemove가 새로워지는 현상 방지
5. ***불변성의 중요성***
6. react-virtualized사용한 렌더링 최적화


## 리액트 컴포넌트 성능 최적화 대원칙
>* 많은 컴포넌트가 C,U,D될 때 지연발생을 줄인다.
>* 불필요한 렌더링을 없앤다.(클라이언트 자원을 효율적으로 사용하도록 함)


## 모니터링하기 
- 리액트 ~v16 : User Timing API사용하여 모니터링
- 리액트 v17~ : React DevTools 사용하여 모니터링

1. Performance탭 ) JS Heap사용량 확인가능
2. React DevTools의 Profiles 탭 

## 리액트 컴포넌트가 리렌더링 되는 상황
1. 자신이 전달받은 props가 변경될 때 →부모컴포넌트의 state가 변경된 것
2. 자신의 state가 바뀔 때
3. 부모컴포넌트가 리렌더링될 때

   → state가 바뀌지 않았더라도 리렌더링될 수 있음, 할머니의 state가 바뀌었나?

   → 리액트 라이프사이클에서 shouldComponentUpdate가 실행되는 순간들?
   >shouldComponentUpdate(nextProps, nextState)
   props또는 state가 새로운 값으로 갱신되어서 렌더링이 발생하기 직전에 호출됨


4. forceUpdate 함수가 실행될 때