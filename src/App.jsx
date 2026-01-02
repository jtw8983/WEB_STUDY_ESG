import { useState } from "react";

const App = () => {
    // var [a,setA] = useState("A") // 배열이 전달된다(잘 사용 X)
    // let [b,setB] = useState("B") // 배열이 전달된다(잘 사용 X)
    //const [c,setC] = useState("C") // 배열이 전달된다, var, let은 값이 바뀌기 때문에 무조건 const로 사용해야함=> const만이 react state 사용해야함 앞의 c 변수를 control 못하니까 setC가 control 해야하는 상황=> useState 동작의 큰 의미!

    //console.log("App 호출 됨")
    // const fn1 = () => console.log("fn1")
    // const fn2 = () => console.log("fn2")


    // const event = () =>{
    //     console.log(1,a)
    //     setA("A") // 1, 2 실행 된 후 App이 호출됨. 어떤 값을 적용했을 때 이 함수는 항상 늦게 실행된다고 보면 됨.
    //     if(a === "AA") return
    //     fn1()
    //     console.log(2,a)
    //     fn2() // 일반 함수는 useState와 다르게 위-> 아래로 차례대로 실행함
    //     console.log(3) 

    //     //setA("AA")
    //     //if(a === "AA") return 이렇게 같이 쓰면 안된다. 한번 눌렀을 떄 바로 적용이 되는 것이 아니라 두번 눌러야 실행되기 때문에.
    // }

    //const [c,setC] = useState({"name":"","desc":""})
    //위가 어려우면(객체가 머리속에 자리잡히지 않을 때)
    const[name,setName]=useState("")
    const[desc,setDesc]=useState("")


    const event = (e) => {
        // console.log(e.target)
        // console.log(e.target.name)
        // console.log(e.target.value)
        // setC({...c, [e.target.name]:e.target.value}) //...cs는 {c.name: c.value} 와 같은 것

        const data ={name, dsec}
        console.log(data)
        
    }

    return  (
        <>
            {/* <input type = "text" value={c.name} 
                    name="name" onChange={event} />
            <input type = "text" value={c.desc}
                    name="name" onChange={event} /> */}
            <input type = "text" value={name} 
                    name="name" onChange={e=>setName(e.target.value)} />
            <input type = "text" value={desc}
                    name="name" onChange={e=>setDesc(e.target.value)} />
            <button type="button" onClick={event}>합치기</button>
            
            {/* <p>{a}</p>
            <p>{b}</p>
            <p>{c}</p> */}
        </>
    )
}
export default App