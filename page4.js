import { __c, __p, __sC, __SYD, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.p4 = () =>{
    return __c(
        "div",
        {
            style:"height:700px;width:100%;display:flex;justify-content:center;background:transparent;margin-top:30px;border-bottom:4px solid #b1a16d;padding:5px;" + __sC['pages']() + "padding:20px;",
            id:"p4"
        },
        [
            __SYD.p4SubHeader()
        ],
        {
            type:"p4"
        }
    )
}

__SYD.p4SubHeader = () =>{
    return __c(
        "div",
        {
            style:`height:100%;width:100%;display:flex;align-items:center;gap:20px;flex-direction:${__p(["p4SubHeader" , "breakVal"],false) ? "row" : "row"}`
        },
        [
            __c(
                "div",
                {
                    style:`height:100%;width:${__p(["p4SubHeader" , "breakVal"],false) ? "100%" : "50%"};display:flex;justify-content:center;align-items:center;`
                },
                [
                    __SYD.p4_tab()
                ]
            ),
            __c(
                "div",
                {
                    style:`height:100%;width:50%;display:flex;flex-direction:column;gap:20px;background-image:url("./assets/p4_main.png");`
                },[],{genericStyle:["bg_fit"]}
            ),
        ],
        {
            createState:{
                stateName:"p4SubHeader",
                state:{
                    mobilePadState:false,
                    caTextSize:"16px",
                    breakVal:false
                }
            },
            mediaQuery:{
                query:[
                    {size:"<500px" , prop:{mobilePadState:true , caTextSize:"13px"}},
                    {size:"<1000px" , prop:{breakVal:true}}
                ],
                defState:{mobilePadState:false , caTextSize:"16px" , breakVal:false}
            }
        }
    )
}

__SYD.p4_tab = () =>{
    return __c(
        "div",
        {
            style:"height:100%;width:100%;padding:60px 20px;display:flex;flex-direction:column;gap:30px;border-radius:30px;background:transparent;",
        },
        [
            // __SYD.p4_text1(),
            // __SYD.p4_text2(),
            __c(
                "div",
                {
                    style:"height:fit-content;width:100%;display:flex;gap:30px;padding:10px 0px;flex-direction:column;"
                },
                [   
                    __SYD.p4_tab_el({title:"title text" , contents:["content 1" , "content 2"]}),
                    __SYD.p4_tab_el({title:"title text" , contents:["content 1" , "content 2"]}),
                    __SYD.p4_tab_el({title:"title text" , contents:["content 1" , "content 2"]})
                ]
            )

        ]
    )
}


__SYD.p4_text2 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text2.get() + "color:#ffffff;width:100%;text-align:center;"
        },
        [
            __c(
                "p",
                {},["about Extractor-91"]
            )
        ]
    )
}

__SYD.p4_tab_el = ({title , contents = []}) =>{
    return __c(
        "div",
        {
            style:`height:fit-content;min-height:100px;width:${__p(['p4SubHeader' , 'resize'], false) ? "100%" : "100%"};padding:25px 30px;border-radius:10px;display:flex;gap:16px;cursor:pointer;background: #43764d;flex-direction:column;gap:15px;border:2px solid #0B0A1D;`,
            class:"p4_tab"
        },
        [
            __c(
                "p",
                {
                    style:SYD_VAR.page3Text4.get() + "color:#ffffff;text-shadow:1px 1px 0px #000000;letter-spacing:1px;"
                },
                [
                    `${title}`
                ]
            ),
            __c(
                "ul",
                {
                    style:"display:flex;flex-direction:column;row-gap:8px;padding:0px 25px;list-style-type:square;"
                },
                [
                    ...(() =>{
                        const elArray = [];
                        contents.forEach(val =>{
                            elArray.push(
                                __c("li",{style:"font-size:18px;font-weight:900;color:#fff;"},[val])
                            )
                        })
                        return elArray
                    })()
                ]
            )
        ]
    )
}