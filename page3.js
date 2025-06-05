import { __c, __p, __sC, __SYD, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.p3 = () =>{
    return __c(
        "div",
        {
            style:"height:700px;width:100%;display:flex;justify-content:center;background:transparent;margin-top:30px;border-bottom:4px solid #b1a16d;padding:5px;" + __sC['pages']() + "padding:20px;",
            id:"p3"
        },
        [
            __SYD.p3SubHeader()
        ],
        {
            type:"p3"
        }
    )
}

__SYD.p3SubHeader = () =>{
    return __c(
        "div",
        {
            style:`height:100%;width:100%;display:flex;align-items:center;gap:20px;flex-direction:${__p(["p3SubHeader" , "breakVal"],false) ? "row" : "row"}`
        },
        [
            __c(
                "div",
                {
                    style:`height:100%;width:50%;display:flex;flex-direction:column;gap:20px;background-image:url("./assets/about.png")`
                },[],{genericStyle:["bg_fit"]}
            ),
            __c(
                "div",
                {
                    style:`height:100%;width:${__p(["p3SubHeader" , "breakVal"],false) ? "100%" : "50%"};display:flex;justify-content:center;align-items:center;`
                },
                [
                    __SYD.p3_tab()
                ]
            )
        ],
        {
            createState:{
                stateName:"p3SubHeader",
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

__SYD.p3_tab = () =>{
    return __c(
        "div",
        {
            style:"height:100%;width:100%;padding:60px 20px;display:flex;flex-direction:column;gap:30px;border-radius:30px;background:transparent;",
        },
        [
            // __SYD.p3_text1(),
            __SYD.p3_text2(),
            __c(
                "div",
                {
                    style:"height:fit-content;width:100%;display:flex;gap:30px;padding:10px 0px;flex-direction:column;"
                },
                [   
                    __SYD.p3_text3(),
                    __SYD.p3_text4(),
                    __SYD.p3_text5()
                ]
            )

        ]
    )
}


__SYD.p3_text2 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text2.get() + "color:#ffffff;width:100%;text-align:center;"
        },
        [
            __c(
                "p",
                {},["💊 The Origins of E-91"]
            )
        ]
    )
}

__SYD.p3_text3 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text3.get() + "font-weight:900;color:#ffffff;font-size:20px;"
        },
        [
            __c(
                "p",
                {},["Long before charts and chains, before memes and markets, there were whispers. Deep within the cryptographic catacombs of the decentralized realm, hidden beneath abandoned protocols and forgotten forks, a relic pulsed with untapped energy."]
            )
        ]
    )
}

__SYD.p3_text4 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text3.get() + "font-weight:900;color:#ffffff;font-size:20px;"
        },
        [
            __c(
                "p",
                {},["No one knows who built the Vault. Some say it was forged by the first generation of chainwalkers — crypto-mystics who encoded belief into bytecode. Others claim it emerged on its own, an echo of internet consciousness seeking form. But all agree on one thing: E-91 was never launched — it was discovered."]
            )
        ]
    )
}

__SYD.p3_text5 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text3.get() + "font-weight:900;color:#ffffff;font-size:20px;"
        },
        [
            __c(
                "p",
                {},["In silence, the cloaked ones gathered. Not investors. Not developers. Believers. Drawn by the signal.The capsule stood in the center of the ancient digital cathedral, glowing with impossible potential — half data, half divinity."]
            )
        ]
    )
}