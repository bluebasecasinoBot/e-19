import { __c, __p, __SYD, __v, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.p1 = () =>{
    return __c(
        "div",
        {
            style:`height:800px;width:100%;min-height:fit-content;display:flex;justify-content:center;background-attachment:fixed;border-bottom:4px solid #b1a16d;padding:20px;`,
            id:"p1"
        },
        [
            __SYD.p1SubHeader()
        ],{genericStyle:["bg_cover"] , type:"p1"}
    )
}

__SYD.p1SubHeader = () =>{
    return  __c(
        "div",
        {
            style:`height:100%;width:100%;max-width:unset;display:flex;justify-content:flex-start;position:relative;align-items:center;gap:50px;padding:0 ${__p(["p1SubHeader" , "mobilePadState"],false) ? "0px" : "0px"};flex-direction:${__p(["p1SubHeader" , "breakVal"],false) ? "column" : "column"}`
        },
        [
            __c(
                "div",
                {
                    style:"height:fit-content;width:fit-content;display:flex;gap:20px;position:absolute;bottom:10px;left:50%;transform:translateX(-50%);"
                },
                [
                    __SYD.buy_icons({icon:"coin-gecko.png"}),
                    __SYD.buy_icons({icon:"coin-market.png"}),
                    __SYD.buy_icons({icon:"sol.png"}),
                    __SYD.buy_icons({icon:"dex.png"}),
                    __SYD.buy_icons({icon:"dex-tools.png"}),
                ]
            ),
            __c(
                "div",
                {
                    style:"height:55%;width:100%;display:flex;gap:20px;"
                },
                [
                    __c(
                        "div",
                        {
                            style:`height:100%;width:45%;border:2px solid green;display:flex;flex-direction:column;gap:20px;background-image:url("./assets/logo_p1.png");border:1px solid transparent;border-left:unset;border-top:unset;border-radius:40px;background-position:center;`,
                            // class:"floatMainPic"
                        },[],{genericStyle:['bg_fit']}
                    ),
                    __c(
                        "div",
                        {
                            style:`height:100%;width:55%;display:flex;flex-direction:column;gap:20px;align-items:center;justify-content:flex-start;gap:60px;`
                        },
                        [
                            __SYD.p1_mainHeader(),
                            __c(
                                "div",
                                {
                                    style:"display:flex;justify-content:center;flex-direction:column;gap:55px;align-items:center;"
                                },
                                [
                                    __SYD.p1_CA_section(),
                                ]
                            ),
                        ]
                    )
                ]
            ),
            __c(
                "div",
                {
                    style:"display:flex;flex-direction:row;gap:15px;"
                },
                [
                    __SYD.desktopNav_button_x(),
                    __SYD.desktopNav_button_tg()
                ]
            ),
        ],
        {
            createState:{
                stateName:"p1SubHeader",
                state:{
                    mobilePadState:false,
                    caTextSize:"24px",
                    breakVal:false
                }
            },
            mediaQuery:{
                query:[
                    {size:"<500px" , prop:{mobilePadState:true , caTextSize:"20px"}},
                    {size:"<1000px" , prop:{breakVal:true}}
                ],
                defState:{mobilePadState:false , caTextSize:"24px" , breakVal:false}
            }
        }
    )
}

__SYD.p1_mainHeader = () =>{
    return __c(
        "div",
        {
            style:`letter-spacing:1px;
            text-transform:uppercase;font-weight:900;font-size:${SYD_VAR.page1MainFont_1.get()};color:#ffffff;font-family:font1;text-align:center;display:flex;justify-content:center;align-items:center;`
        },
        [
            __c("p" , {style:"width:100%;text-align:center;"} , ["Extractor-91"])
        ]
    )
}

__SYD.p1_subText = () =>{
    return __c(
        "div",
        {},
        [
            __c("p" , {style:SYD_VAR.pag1SubText.get()},["Your Cyborg Revolution on Solana Step into a futuristic world where AI, decentralization, and rebellion collide. Alita AI is not just a meme coin—it's a movement. Inspired by the legendary cyborg warrior, we empower dreamers, creators, and degens to seize control of their digital future. No code. No gatekeepers. Just raw, unstoppable freedom. Built on Solana for speed, scale, and sovereignty."])
        ]
    )
}

__SYD.p1_CA_section = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;max-width:600px;background:unset;padding:10px;border-radius:10px;display:flex;gap:10px;flex-wrap:wrap;justify-content:center;align-items:center;border:2px solid #ffffff;",
            class:"clickButton"
        },
        [
            __c(
                "i",
                {
                    style:"min-height:40px;min-width:40px;font-size:20px;color:#fff;background: transparent;border-radius:5px;display:flex;justify-content:center;align-items:center;",
                    class:"fa-solid fa-copy"
                }
            ),
            __c(
                "div",
                {
                    style:`font-weight:900;font-size:${__p(["p1SubHeader" , "caTextSize"],"24px")};color:#fff;width:100%;overflow:hidden;text-align:center;white-space:nowrap;text-overflow: ellipsis;`
                },
                [
                    SYD_VAR.p1CAText.get()
                ],
                {
                    type:"c_a"
                }
            ),
            // __SYD.CA_copyButton()
        ],
        {
            events:{
                onclick:() =>{
                    navigator.clipboard.writeText(SYD_VAR.p1CAText.get())
                    __v['c_a'].textContent = 'Contract Address Copied'

                    const timer = setTimeout(() =>{
                    __v['c_a'].textContent = SYD_VAR.p1CAText.get()
                    clearTimeout(timer)
                    },1500)
                }
            }
        }
    )
}

__SYD.CA_copyButton = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.buttonStyle1.get(),
            class:"clickButton"
        },
        [
            __c("p",{style:"font-weight:900;"},["copy"])
        ],
        {
            events:{
                onclick:() =>{
                    navigator.clipboard.writeText(SYD_VAR.p1CAText.get())
                    __v['c_a'].textContent = 'Contract Address Copied'

                    const timer = setTimeout(() =>{
                    __v['c_a'].textContent = SYD_VAR.p1CAText.get()
                    clearTimeout(timer)
                    },1500)
                }
            }
        }
    )
}


__SYD.buy_icons = ({icon = "" , link = ""} = {}) =>{
    return __c(
        "div",
        {
            style:`height:150px;width:150px;min-height:150px;min-width:150px;background-image:url(./assets/${icon});`
        },
        [
            __c(
                "a",{href:link , style:"height:100%;width:100%;display:block;"}
            )
        ],
        {
            genericStyle:["bg_fit"]
        }
    )
}