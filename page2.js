import { __c, __p, __sC, __SYD, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.p2 = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;min-height:700px;width:100%;display:flex;justify-content:center;background:transparent;margin-top:30px;border-bottom:4px solid #b1a16d;padding:5px;" + __sC['pages']() + "padding:20px;",
            id:"p2"
        },
        [
            __SYD.p2SubHeader()
        ],
        {
            type:"p2"
        }
    )
}

__SYD.p2SubHeader = () =>{
    return __c(
        "div",
        {
            style:`height:100%;width:100%;display:flex;align-items:center;gap:20px;flex-direction:${__p(["p2SubHeader" , "breakVal"],false) ? "row" : "row"}`
        },
        [
            __c(
                "div",
                {
                    style:`height:100%;width:${__p(["p2SubHeader" , "breakVal"],false) ? "100%" : "50%"};display:flex;justify-content:center;align-items:center;`
                },
                [
                    __SYD.p2_tab()
                ]
            ),
            __c(
                "div",
                {
                    style:`height:700px;width:50%;display:flex;flex-direction:column;gap:20px;background-image:url("./assets/about.png")`
                },[],{genericStyle:["bg_cover"]}
            )
        ],
        {
            createState:{
                stateName:"p2SubHeader",
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

__SYD.p2_tab = () =>{
    return __c(
        "div",
        {
            style:"height:100%;width:100%;padding:60px 20px;display:flex;flex-direction:column;gap:30px;border-radius:30px;background:#43764d;",
            class:"p2_tab"
        },
        [
            // __SYD.p2_text1(),
            __SYD.p2_text2(),
            __c(
                "div",
                {
                    style:"height:fit-content;width:100%;display:flex;gap:30px;padding:10px 0px;flex-direction:column;"
                },
                [   
                    __SYD.p2_text3(),
                    __SYD.p2_text4(),
                ]
            )

        ]
    )
}


__SYD.p2_text2 = () =>{
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

__SYD.p2_text3 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text3.get() + "font-weight:900;color:#ffffff;font-size:20px;"
        },
        [
            __c(
                "p",
                {},["Furie’s Book of Memes ($FBOM) is a wild, on-chain tribute to internet culture—combining the raw chaos of meme coins with the legendary artistry of Matt Furie. Inspired by characters like Pepe, Brett, and Boochie, $FBOM turns every holder into a co-author of the ultimate digital meme anthology. Built on Ethereum, it's secure, eternal, and ready to explode across the memeverse."]
            )
        ]
    )
}

__SYD.p2_text4 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text3.get() + "font-weight:900;color:#ffffff;font-size:20px;"
        },
        [
            __c(
                "p",
                {},["This is more than a token—it's a cultural movement. $FBOM thrives on viral community energy, TikTok raids, X threads, and collective creativity. Whether you’re a degen, artist, or meme historian, this is your chance to etch your humor into Ethereum’s ledger and help write the internet’s greatest meme book."]
            )
        ]
    )
}